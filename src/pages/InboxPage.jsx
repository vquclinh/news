import { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader.jsx'

const formatTime = (iso) =>
  new Date(iso).toLocaleString('vi-VN', { hour: '2-digit', minute: '2-digit', day: '2-digit', month: '2-digit', year: 'numeric' })

export default function InboxPage() {
  const [letters, setLetters] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/feedback')
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setLetters)
      .catch(() => setError('Không tải được hộp thư.'))
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Dành cho Ban biên tập"
        title="Hộp thư góp ý"
        description={letters ? `Đã nhận ${letters.length} lá thư.` : 'Đang mở hộp thư…'}
        color="#4a3f35"
      />
      <section className="container container--narrow inbox">
        {error && <p className="form__error">{error}</p>}
        {letters?.length === 0 && <p className="inbox__empty">Chưa có lá thư nào. 📭</p>}
        {letters?.map((l) => (
          <article key={l.id} className="inbox__item">
            <header>
              <strong>{l.name}</strong>
              {l.email && <span className="inbox__email">{l.email}</span>}
              <span className="inbox__time">{formatTime(l.createdAt)}</span>
            </header>
            <div className="inbox__tags">
              <span className="chip is-active">{l.topic}</span>
              {l.rating && <span className="inbox__rating">{'★'.repeat(l.rating)}{'☆'.repeat(5 - l.rating)}</span>}
            </div>
            <p>{l.message}</p>
          </article>
        ))}
      </section>
    </>
  )
}
