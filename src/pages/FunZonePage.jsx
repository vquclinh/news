import PageHeader from '../components/PageHeader.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import GamePromo from '../components/GamePromo.jsx'
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
        <GamePromo game={game} wide />

        <div className="grid grid--2">
          {posts.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </>
  )
}
