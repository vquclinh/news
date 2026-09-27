import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import Meta from './Meta.jsx'
import ReadMore from './ReadMore.jsx'
import { CATEGORIES } from '../data/site.js'
import { articleUrl, authorLine, excerptOf, formatDate, readingTime } from '../data/articles.js'

// Bản tin dàn đầy đủ ở trang chủ: ảnh + chú thích một bên, tiêu đề + đoạn giới thiệu bên kia.
export default function NewsBrief({ article, reverse = false }) {
  const cat = CATEGORIES[article.category]
  const url = articleUrl(article)
  const minutes = readingTime(article)
  const meta = [authorLine(article), formatDate(article.date), minutes && `${minutes} phút đọc`].filter(Boolean)

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
        {excerptOf(article).map((text) => (
          <p key={text} className="brief__text">
            {text}
          </p>
        ))}
        {article.readMore ? (
          <ReadMore text={article.readMore} to={url} className="brief__more" />
        ) : (
          <Link to={url} className="brief__cta">
            Đọc tiếp →
          </Link>
        )}
        {meta.length > 0 && <Meta items={meta} />}
      </div>
    </article>
  )
}
