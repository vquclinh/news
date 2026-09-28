import { Link } from 'react-router-dom'
import Cover from './Cover.jsx'
import ReadMore from './ReadMore.jsx'
import { articleUrl, excerptOf, formatDate } from '../data/articles.js'
import { MINIGAME } from '../data/minigame.js'

// Khung giới thiệu minigame ở Trang chủ và trang USSH Fun Zone.
export default function GamePromo({ game, wide = false }) {
  const url = articleUrl(game)

  return (
    <article className={`game-promo ${wide ? 'game-promo--wide' : ''}`}>
      <div className="game-promo__text">
        <span className="game-promo__tag">
          Minigame · {MINIGAME.questions.length} câu hỏi · Hạn chót {formatDate(MINIGAME.deadline)}
        </span>
        <h3>
          <Link to={url}>{game.title}</Link>
        </h3>
        {excerptOf(game).map((text) => (
          <ReadMore key={text} text={text} to={url} />
        ))}
        <Link to={url} className="btn btn--gold">
          Tham gia ngay ▶
        </Link>
      </div>
      <Link to={url} className="game-promo__art" tabIndex={-1} aria-hidden="true">
        <Cover cover={game.cover} size="lg" />
      </Link>
    </article>
  )
}
