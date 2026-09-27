import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import Meta from './Meta.jsx'
import ReadMore from './ReadMore.jsx'
import { CATEGORIES } from '../data/site.js'
import { articleUrl, authorLine, excerptOf, formatDate, readingTime } from '../data/articles.js'

// Tiêu điểm trang chủ: ảnh chân dung dọc + phần giới thiệu đầy đủ của bài phỏng vấn.
export default function Spotlight({ article }) {
  const cat = CATEGORIES[article.category]
  const url = articleUrl(article)
  const minutes = readingTime(article)
  const meta = [authorLine(article), formatDate(article.date), minutes && `${minutes} phút đọc`].filter(Boolean)
  const [lead, ...rest] = excerptOf(article)

  return (
    <article className="spotlight" style={{ '--kc': cat.color }}>
      <Link to={url} className="spotlight__photo" tabIndex={-1}>
        {article.cover.image ? (
          <img src={article.cover.image} alt={article.profile?.name ?? ''} />
        ) : (
          <Cover cover={article.cover} />
        )}
      </Link>

      <div className="spotlight__body">
        <span className="kicker">{cat.label}</span>
        <h3 className="spotlight__title">
          <Link to={url}>{article.title}</Link>
        </h3>
        {lead && <p className="spotlight__lead">{lead}</p>}
        {rest.map((text) => (
          <p key={text} className="spotlight__text">
            {text}
          </p>
        ))}
        {article.readMore ? (
          <ReadMore text={article.readMore} to={url} className="spotlight__more" />
        ) : (
          <Link to={url} className="spotlight__cta">
            Đọc bài →
          </Link>
        )}
        {meta.length > 0 && <Meta items={meta} />}
      </div>
    </article>
  )
}
