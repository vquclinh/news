import { Link } from 'react-router-dom'
import { ARTICLES, articleUrl } from '../data/articles.js'

export default function Ticker() {
  const items = [...ARTICLES, ...ARTICLES]
  return (
    <div className="ticker">
      <div className="container ticker__inner">
        <span className="ticker__label">Tin nhanh</span>
        <div className="ticker__track">
          <div className="ticker__move">
            {items.map((a, i) => (
              <Link key={i} to={articleUrl(a)} className="ticker__item" tabIndex={i < ARTICLES.length ? 0 : -1}>
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
