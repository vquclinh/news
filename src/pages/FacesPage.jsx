import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import Cover from '../components/Cover.jsx'
import Meta from '../components/Meta.jsx'
import ReadMore from '../components/ReadMore.jsx'
import { articleUrl, authorLine, byCategory, excerptOf, formatDate, readingTime } from '../data/articles.js'
import { CATEGORIES } from '../data/site.js'

export default function FacesPage() {
  const cat = CATEGORIES['guong-mat']
  const articles = byCategory('guong-mat')

  return (
    <>
      <PageHeader eyebrow="Chuyên mục" title={cat.label} description={cat.description} color={cat.color} />
      <section className="container">
        {articles.map((a) => {
          const url = articleUrl(a)
          const minutes = readingTime(a)
          const meta = [authorLine(a), formatDate(a.date), minutes && `${minutes} phút đọc`].filter(Boolean)
          const funFact = a.content.find((b) => b.type === 'box')
          const [lead, ...rest] = excerptOf(a)

          return (
            <article key={a.slug} className="profile" style={{ '--kc': cat.color }}>
              <div className="profile__card">
                <Link to={url} className="profile__photo" tabIndex={-1}>
                  {a.profile.image ? (
                    <img src={a.profile.image} alt={a.profile.name} />
                  ) : (
                    <Cover cover={a.cover} />
                  )}
                </Link>
                <h2 className="profile__name">{a.profile.name}</h2>
                <p className="profile__role">{a.profile.role}</p>
                {a.profile.facts.length > 0 && (
                  <ul className="profile__facts">
                    {a.profile.facts.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
                {funFact && (
                  <aside className="profile__fun">
                    <strong>{funFact.title}</strong>
                    <p>{funFact.text}</p>
                  </aside>
                )}
              </div>

              <div className="profile__story">
                <span className="kicker">{cat.label}</span>
                <h2 className="profile__title">
                  <Link to={url}>{a.title}</Link>
                </h2>
                {lead && <p className="profile__lead">{lead}</p>}
                {rest.map((text) => (
                  <p key={text} className="profile__text">
                    {text}
                  </p>
                ))}
                {a.content
                  .filter((b) => b.type === 'qa')
                  .slice(0, 2)
                  .map((b) => (
                    <div key={b.q} className="profile__qa">
                      <p className="profile__q">{b.q}</p>
                      <p className="profile__a">{b.a}</p>
                    </div>
                  ))}
                {a.readMore && <ReadMore text={a.readMore} to={url} className="profile__more" />}
                {meta.length > 0 && <Meta items={meta} />}
                <Link to={url} className="btn btn--primary">
                  Đọc toàn bài →
                </Link>
              </div>
            </article>
          )
        })}
      </section>
    </>
  )
}
