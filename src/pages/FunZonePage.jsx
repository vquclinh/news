import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import Cover from '../components/Cover.jsx'
import { byCategory, getArticle } from '../data/articles.js'
import { CATEGORIES } from '../data/site.js'

export default function FunZonePage() {
  const cat = CATEGORIES['fun-zone']
  const game = getArticle('minigame')
  const posts = byCategory('fun-zone').filter((a) => a.type !== 'game')

  return (
    <>
      <PageHeader eyebrow="Chuyên mục" title={cat.label} description={cat.description} color={cat.color} />
      <section className="container fun-page">
        <Link to="/ussh-fun-zone/minigame" className="game-promo game-promo--wide">
          <div className="game-promo__text">
            <span className="game-promo__tag">Minigame · 10 câu hỏi · 20 giây/câu</span>
            <h3>{game.title}</h3>
            <p>{game.sapo}</p>
            <span className="btn btn--gold">Chơi ngay ▶</span>
          </div>
          <div className="game-promo__art">
            <Cover cover={game.cover} size="lg" />
          </div>
        </Link>

        <div className="grid grid--2">
          {posts.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  )
}
