import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import ReadMore from './ReadMore.jsx'
import { articleUrl, excerptOf, formatDate } from '../data/articles.js'
import { MINIGAME } from '../data/minigame.js'

const LOOK = {
  game: {
    tone: 'teal',
    tag: `Minigame · ${MINIGAME.questions.length} câu hỏi · Hạn chót ${formatDate(MINIGAME.deadline)}`,
    cta: 'Tham gia ngay ▶',
  },
  funny: { tone: 'ember', tag: 'Chuyện vui Nhân văn', cta: 'Đọc ngay →' },
}

// Khung giới thiệu bài của USSH Fun Zone (minigame, bài vui) ở Trang chủ và trang chuyên mục.
// wide: ảnh và chữ nằm cạnh nhau; reverse: đưa ảnh sang phải.
export default function FunPromo({ article, wide = false, reverse = false }) {
  const url = articleUrl(article)
  const look = LOOK[article.type] ?? LOOK.funny
  const classes = ['fun-promo', `fun-promo--${look.tone}`, wide && 'fun-promo--wide', reverse && 'fun-promo--reverse']

  return (
    <article className={classes.filter(Boolean).join(' ')}>
      <Link to={url} className="fun-promo__art" tabIndex={-1} aria-hidden="true">
        <Cover cover={article.cover} />
      </Link>
      <div className="fun-promo__text">
        <span className="fun-promo__tag">{look.tag}</span>
        <h3>
          <Link to={url}>{article.title}</Link>
        </h3>
        {excerptOf(article).map((text) => (
          <ReadMore key={text} text={text} to={url} />
        ))}
        {article.readMore && <ReadMore text={article.readMore} to={url} />}
        <Link to={url} className="btn btn--gold fun-promo__cta">
          {look.cta}
        </Link>
      </div>
    </article>
  )
}
