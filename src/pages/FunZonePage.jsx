import PageHeader from '../components/PageHeader.jsx'
import FunPromo from '../components/FunPromo.jsx'
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
        <FunPromo article={game} wide />
        {posts.map((a) => (
          <FunPromo key={a.slug} article={a} wide reverse />
        ))}
      </section>
    </>
  )
}
