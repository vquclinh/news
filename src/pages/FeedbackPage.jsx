import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const TOPICS = ['Nội dung bài viết', 'Giao diện website', 'Ý tưởng bài mới', 'Minigame', 'Khác']
const EMPTY = { name: '', email: '', topic: TOPICS[0], rating: 0, message: '' }
const MAX_LEN = 3000

export default function FeedbackPage() {
  const [form, setForm] = useState(EMPTY)
  const [anonymous, setAnonymous] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    if (form.message.trim().length < 10) {
      setError('Bạn viết thêm chút nữa nhé – nội dung góp ý cần ít nhất 10 ký tự.')
      setStatus('error')
      return
    }
    setStatus('sending')
    setError('')
    try {
      const payload = anonymous ? { ...form, name: '', email: '' } : form
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Không gửi được thư, vui lòng thử lại.')
      setStatus('sent')
    } catch (err) {
      setError(err.message || 'Không kết nối được máy chủ.')
      setStatus('error')
    }
  }

  function reset() {
    setForm(EMPTY)
    setAnonymous(false)
    setStatus('idle')
  }

  return (
    <>
      <PageHeader
        eyebrow="Hòm thư"
        title="Góc góp ý"
        description="Mỗi lá thư là một lời nhắn quý giá giúp Nhân Văn Times hoàn thiện hơn. Thầy cô và các bạn cứ thoải mái chia sẻ nhé!"
        color="#4a3f35"
      />

      <section className="container feedback">
        <div className="feedback__intro">
          <div className="letter">
            <p className="letter__greeting">Kính gửi thầy cô và các bạn,</p>
            <p>
              Website này là sản phẩm thực hành đầu tay của nhóm sinh viên Báo chí. Chúng mình biết còn nhiều thiếu sót
              – và đó chính là lý do góc nhỏ này tồn tại.
            </p>
            <p>Mọi nhận xét về nội dung, cách viết, giao diện hay ý tưởng cho số tiếp theo đều được đọc kỹ.</p>
            <p className="letter__sign">
              Thân mến,
              <br />
              <strong>Ban biên tập</strong>
            </p>
          </div>
          <ul className="feedback__perks">
            <li>
              <span>🕊️</span> Có thể gửi ẩn danh
            </li>
            <li>
              <span>📬</span> Thư được lưu lại để Ban biên tập đọc
            </li>
            <li>
              <span>💡</span> Ý tưởng hay có thể thành bài viết số sau
            </li>
          </ul>
        </div>

        <div className="feedback__form-wrap">
          {status === 'sent' ? (
            <div className="sent">
              <div className="sent__envelope">✉️</div>
              <h2>Thư đã được gửi!</h2>
              <p>Cảm ơn bạn đã dành thời gian góp ý. Ban biên tập sẽ đọc kỹ từng dòng.</p>
              <div className="sent__actions">
                <button className="btn btn--primary" onClick={reset}>
                  Viết thư khác
                </button>
                <Link to="/" className="btn btn--ghost">
                  Về Trang chủ
                </Link>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <h2 className="form__title">Viết thư góp ý</h2>

              <label className="toggle">
                <input type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                <span className="toggle__track" />
                Gửi ẩn danh
              </label>

              {!anonymous && (
                <div className="form__row">
                  <label className="field">
                    <span>Họ tên</span>
                    <input value={form.name} onChange={update('name')} placeholder="VD: Nguyễn Văn A" maxLength={80} />
                  </label>
                  <label className="field">
                    <span>Email (không bắt buộc)</span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="ban@email.com"
                      maxLength={120}
                    />
                  </label>
                </div>
              )}

              <div className="field">
                <span>Chủ đề</span>
                <div className="chips">
                  {TOPICS.map((t) => (
                    <button
                      type="button"
                      key={t}
                      className={`chip ${form.topic === t ? 'is-active' : ''}`}
                      onClick={() => setForm({ ...form, topic: t })}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <span>Bạn đánh giá website thế nào?</span>
                <div className="stars" role="radiogroup" aria-label="Đánh giá">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      type="button"
                      key={n}
                      role="radio"
                      aria-checked={form.rating === n}
                      aria-label={`${n} sao`}
                      className={`star ${n <= form.rating ? 'is-on' : ''}`}
                      onClick={() => setForm({ ...form, rating: form.rating === n ? 0 : n })}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <label className="field">
                <span>Nội dung góp ý *</span>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Mình muốn góp ý rằng…"
                  maxLength={MAX_LEN}
                  required
                />
                <small className="field__count">
                  {form.message.length}/{MAX_LEN}
                </small>
              </label>

              {status === 'error' && <p className="form__error">{error}</p>}

              <button type="submit" className="btn btn--primary btn--lg btn--block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Đang gửi…' : 'Gửi thư góp ý ✉️'}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
