import { Link } from 'react-router-dom'
import ArticleCard from '../components/ArticleCard.jsx'
import GamePromo from '../components/GamePromo.jsx'
import NewsBrief from '../components/NewsBrief.jsx'
import Spotlight from '../components/Spotlight.jsx'
import { ARTICLES, byCategory, getArticle } from '../data/articles.js'
import { CATEGORIES } from '../data/site.js'

export default function Home() {
  const interview = byCategory('guong-mat')[0]
  const news = byCategory('diem-tin')
  const game = getArticle('minigame')
  const funny = byCategory('fun-zone').find((a) => a.type === 'funny')
  const pullQuote = interview.content.find((b) => b.type === 'quote')

  return (
    <>
      {/* Tiêu điểm */}
      <section className="container home-lead">
        <SectionTitle label="Tiêu điểm" />
        <Spotlight article={interview} />
      </section>

      {/* Điểm tin: dàn đầy đủ phần giới thiệu của từng bản tin */}
      <section className="container home-news">
        <SectionTitle label={CATEGORIES['diem-tin'].label} to={CATEGORIES['diem-tin'].path} />
        <div className="home-news__list">
          {news.map((a, i) => (
            <NewsBrief key={a.slug} article={a} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Trích dẫn nổi bật */}
      {pullQuote && (
        <section className="pull-quote">
          <div className="container pull-quote__inner">
            <span className="pull-quote__mark">“</span>
            <blockquote>{pullQuote.text}</blockquote>
            <Link to={`/bai-viet/${interview.slug}`} className="pull-quote__cite">
              — {pullQuote.cite} · Đọc bài phỏng vấn →
            </Link>
          </div>
        </section>
      )}

      {/* Fun Zone */}
      <section className="fun-band">
        <div className="container">
          <SectionTitle label={CATEGORIES['fun-zone'].label} to={CATEGORIES['fun-zone'].path} light />
          <div className="fun-band__grid">
            <GamePromo game={game} />
            <ArticleCard article={funny} />
          </div>
        </div>
      </section>

      {/* Tổng quan chuyên mục */}
      <section className="container overview">
        <SectionTitle label="Chuyên mục" />
        <div className="overview__grid">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <Link key={key} to={cat.path} className="overview__item" style={{ '--kc': cat.color }}>
              <span className="overview__count">{ARTICLES.filter((a) => a.category === key).length}</span>
              <h3>{cat.label}</h3>
              <p>{cat.description}</p>
              <span className="overview__more">Xem chuyên mục →</span>
            </Link>
          ))}
          <Link to="/goc-gop-y" className="overview__item overview__item--letter" style={{ '--kc': '#4a3f35' }}>
            <span className="overview__count">✉</span>
            <h3>Góc góp ý</h3>
            <p>Thầy cô và các bạn có nhận xét, ý tưởng hay lời nhắn? Gửi thư cho Ban biên tập ngay.</p>
            <span className="overview__more">Viết thư →</span>
          </Link>
        </div>
      </section>
    </>
  )
}

function SectionTitle({ label, to, light }) {
  return (
    <div className={`section-title ${light ? 'section-title--light' : ''}`}>
      <h2>{label}</h2>
      <span className="section-title__line" />
      {to && (
        <Link to={to} className="section-title__more">
          Xem tất cả
        </Link>
      )}
    </div>
  )
}
