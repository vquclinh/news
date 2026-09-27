import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import { CATEGORIES } from '../data/site.js'
import { articleUrl, formatDate, readingTime } from '../data/articles.js'

// Bản tin dàn đầy đủ ở trang chủ: ảnh + chú thích một bên, tiêu đề + đoạn giới thiệu bên kia.
export default function NewsBrief({ article, reverse = false }) {
  const cat = CATEGORIES[article.category]
  const url = articleUrl(article)
  const minutes = readingTime(article)
  const meta = [article.author, formatDate(article.date), minutes && `${minutes} phút đọc`].filter(Boolean)

  return (
    <article className={`brief ${reverse ? 'brief--reverse' : ''}`} style={{ '--kc': cat.color }}>
      <figure className="brief__media">
        <Link to={url} className="brief__img" tabIndex={-1}>
          <Cover cover={article.cover} />
        </Link>
        {article.cover.caption && <figcaption>{article.cover.caption}</figcaption>}
      </figure>

      <div className="brief__body">
        <h3 className="brief__title">
          <Link to={url}>{article.title}</Link>
        </h3>
        <p className="brief__text">{article.excerpt ?? article.sapo}</p>
        {article.readMore ? (
          <p className="brief__more">
            {article.readMore}{' '}
            <span className="nowrap">
              <Link to={url}>tại đây</Link>.
            </span>
          </p>
        ) : (
          <Link to={url} className="brief__cta">
            Đọc tiếp →
          </Link>
        )}
        {meta.length > 0 && (
          <div className="meta">
            {meta.map((m, i) => (
              <span key={m} className="meta__item">
                {i > 0 && <span className="meta__dot" />}
                {m}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
