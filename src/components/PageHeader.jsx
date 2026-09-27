export default function PageHeader({ eyebrow, title, description, color }) {
  return (
    <section className="page-header" style={{ '--kc': color }}>
      <div className="container">
        {eyebrow && <span className="page-header__eyebrow">{eyebrow}</span>}
        <h1 className="page-header__title">{title}</h1>
        {description && <p className="page-header__desc">{description}</p>}
      </div>
    </section>
  )
}
