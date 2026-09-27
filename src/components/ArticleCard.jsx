import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import { CATEGORIES } from '../data/site.js'
import { articleUrl, formatDate, readingTime } from '../data/articles.js'

const COVER_SIZE = { feature: 'lg', compact: 'sm', default: 'md' }

export default function ArticleCard({ article, variant = 'default' }) {
  const cat = CATEGORIES[article.category]
  const isGame = article.type === 'game'
  const minutes = readingTime(article)
  const meta = [formatDate(article.date), isGame ? 'Chơi ngay →' : minutes && `${minutes} phút đọc`].filter(Boolean)

  return (
    <Link to={articleUrl(article)} className={`card card--${variant}`}>
      <div className="card__media">
        <Cover cover={article.cover} size={COVER_SIZE[variant]} />
      </div>
      <div className="card__body">
        <span className="kicker" style={{ '--kc': cat.color }}>
          {isGame ? 'Minigame' : cat.label}
        </span>
        <h3 className="card__title">{article.title}</h3>
        {variant !== 'compact' && <p className="card__sapo">{article.excerpt ?? article.sapo}</p>}
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
    </Link>
  )
}
