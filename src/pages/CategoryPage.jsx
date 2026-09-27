import ArticleCard from '../components/ArticleCard.jsx'
import PageHeader from '../components/PageHeader.jsx'
import { byCategory } from '../data/articles.js'
import { CATEGORIES } from '../data/site.js'

export default function CategoryPage({ category }) {
  const cat = CATEGORIES[category]
  const articles = byCategory(category)

  return (
    <>
      <PageHeader eyebrow="Chuyên mục" title={cat.label} description={cat.description} color={cat.color} />
      <section className="container grid grid--2">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </section>
    </>
  )
}
