import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Cover from '../components/Cover.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import NotFound from './NotFound.jsx'
import { ARTICLES, authorLine, formatDate, getArticle, readingTime } from '../data/articles.js'
import { CATEGORIES } from '../data/site.js'

export default function ArticlePage() {
  const { slug } = useParams()
  const article = getArticle(slug)
  const progress = useReadingProgress()
  const [copied, setCopied] = useState(false)

  if (!article) return <NotFound />
  if (article.type === 'game') return <Navigate to="/ussh-fun-zone/minigame" replace />

  const cat = CATEGORIES[article.category]
  const minutes = readingTime(article)
  const byline = [formatDate(article.date), minutes && `${minutes} phút đọc`].filter(Boolean).join(' · ')
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard không khả dụng */
    }
  }

  // Ảnh đinh dọc của bài phỏng vấn: dàn ảnh cạnh tiêu đề thay vì đặt ảnh ngang phía dưới.
  const portraitHero = article.type === 'interview' && article.cover.image
  const author = authorLine(article)

  const head = (
    <>
      <nav className="breadcrumb">
        <Link to="/">Trang chủ</Link>
        <span>/</span>
        <Link to={cat.path}>{cat.label}</Link>
      </nav>
      <span className="kicker" style={{ '--kc': cat.color }}>
        {cat.label}
      </span>
      <h1 className="article__title">{article.title}</h1>
      {article.sapo && <p className="article__sapo">{article.sapo}</p>}
      <div className="article__meta">
        <div className="article__author">
          {article.author && <span className="article__avatar">{article.author.charAt(0)}</span>}
          <div>
            {author && <strong>{author}</strong>}
            {byline && <span>{byline}</span>}
          </div>
        </div>
        <button className="btn btn--ghost btn--sm" onClick={copyLink}>
          {copied ? 'Đã sao chép ✓' : 'Chia sẻ 🔗'}
        </button>
      </div>
    </>
  )

  return (
    <>
      <div className="progress" style={{ transform: `scaleX(${progress})` }} />
      <article className="article">
        {portraitHero ? (
          <header className="portrait-hero" style={{ '--kc': cat.color }}>
            <div className="container portrait-hero__inner">
              <figure className="portrait-hero__photo">
                <div className="portrait-hero__frame">
                  <img src={article.cover.image} alt={article.profile?.name ?? article.title} />
                </div>
                {article.cover.caption && <figcaption>{article.cover.caption}</figcaption>}
              </figure>
              <div className="article__head portrait-hero__text">{head}</div>
            </div>
          </header>
        ) : (
          <>
            <header className="container container--narrow article__head">{head}</header>
            {article.cover.image ? (
              <div className="container article__cover article__cover--photo">
                <img src={article.cover.image} alt={article.cover.alt ?? article.title} />
              </div>
            ) : (
              <div className="container article__cover">
                <Cover cover={article.cover} size="xl" />
              </div>
            )}
          </>
        )}

        <div className="container container--narrow article__body">
          {article.content.length > 0 ? (
            <>
              {article.content.map((block, i) => (
                <Block key={i} block={block} color={cat.color} />
              ))}
              <div className="article__end">■</div>
            </>
          ) : (
            <div className="placeholder">
              <span>✍️</span>
              <p>Nội dung bài viết đang được cập nhật.</p>
            </div>
          )}
        </div>
      </article>

      <section className="container related">
        <div className="section-title">
          <h2>Đọc thêm</h2>
          <span className="section-title__line" />
        </div>
        <div className="grid grid--3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  )
}

function Block({ block, color }) {
  switch (block.type) {
    case 'h2':
      return <h2>{block.text}</h2>
    case 'image':
      return (
        <figure className="figure">
          <img src={block.src} alt={block.alt ?? block.caption ?? ''} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'quote':
      return (
        <blockquote className="quote" style={{ '--kc': color }}>
          <p>{block.text}</p>
          {block.cite && <cite>— {block.cite}</cite>}
        </blockquote>
      )
    case 'qa':
      return (
        <div className="qa" style={{ '--kc': color }}>
          <p className="qa__q">
            <span>Hỏi</span>
            {block.q}
          </p>
          <p className="qa__a">
            <span>Đáp</span>
            {block.a}
          </p>
        </div>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className={`fancy-list ${block.ordered ? 'fancy-list--ordered' : ''}`} style={{ '--kc': color }}>
          {block.items.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong> {item.text}
            </li>
          ))}
        </Tag>
      )
    }
    case 'skills':
      return (
        <aside className="skills" style={{ '--kc': color }}>
          <strong className="skills__title">{block.title}</strong>
          <ul>
            {block.items.map((item) => (
              <li key={item.label}>
                <span className="skills__icon" aria-hidden="true">
                  {item.icon}
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </aside>
      )
    case 'box':
      return (
        <aside className="info-box" style={{ '--kc': color }}>
          <strong>{block.title}</strong>
          <p>{block.text}</p>
        </aside>
      )
    default:
      return <p>{block.text}</p>
  }
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}
