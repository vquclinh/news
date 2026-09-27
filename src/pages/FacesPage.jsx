import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Cover from '../components/Cover.jsx'
import { byCategory, formatDate } from '../data/articles.js'
import { CATEGORIES } from '../data/site.js'

export default function FacesPage() {
  const cat = CATEGORIES['guong-mat']
  const articles = byCategory('guong-mat')

  return (
    <>
      <PageHeader eyebrow="Chuyên mục" title={cat.label} description={cat.description} color={cat.color} />
      <section className="container">
        {articles.map((a) => (
          <article key={a.slug} className="profile">
            <div className="profile__card">
              <div className="profile__avatar">
                <Cover cover={a.cover} size="sm" />
              </div>
              <h2 className="profile__name">{a.profile.name}</h2>
              <p className="profile__role">{a.profile.role}</p>
              <ul className="profile__facts">
                {a.profile.facts.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="profile__story">
              <span className="kicker" style={{ '--kc': cat.color }}>
                Phỏng vấn · {formatDate(a.date)}
              </span>
              <h2 className="profile__title">{a.title}</h2>
              <p className="profile__sapo">{a.sapo}</p>
              {a.content
                .filter((b) => b.type === 'qa')
                .slice(0, 2)
                .map((b) => (
                  <div key={b.q} className="profile__qa">
                    <p className="profile__q">{b.q}</p>
                    <p className="profile__a">{b.a}</p>
                  </div>
                ))}
              <Link to={`/bai-viet/${a.slug}`} className="btn btn--primary">
                Đọc toàn bộ cuộc trò chuyện →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
