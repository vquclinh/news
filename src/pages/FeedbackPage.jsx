import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { SITE } from '../data/site.js'

const TOPICS = ['Nội dung bài viết', 'Giao diện website', 'Ý tưởng bài mới', 'Minigame', 'Khác']
const EMPTY = { name: '', topic: TOPICS[0], rating: 0, message: '' }
const MAX_LEN = 3000

// Không cần server: bấm gửi sẽ mở ứng dụng email với thư đã soạn sẵn gửi tới SITE.feedbackEmail.
function buildMailto(form) {
  const subject = `[Góp ý ${SITE.name}] ${form.topic}`
  const body = [
    `Người gửi: ${form.name.trim() || 'Ẩn danh'}`,
    `Chủ đề: ${form.topic}`,
    form.rating ? `Đánh giá: ${'★'.repeat(form.rating)}${'☆'.repeat(5 - form.rating)}` : null,
    '',
    form.message.trim(),
  ]
    .filter((line) => line !== null)
    .join('\n')
  return `mailto:${SITE.feedbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function FeedbackPage() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sent | error
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  function submit(e) {
    e.preventDefault()
    if (!SITE.feedbackEmail) {
      setError('Ban biên tập chưa cập nhật email nhận thư. Bạn quay lại sau nhé!')
      setStatus('error')
      return
    }
    if (form.message.trim().length < 10) {
      setError('Bạn viết thêm chút nữa nhé – nội dung góp ý cần ít nhất 10 ký tự.')
      setStatus('error')
      return
    }
    window.location.href = buildMailto(form)
    setStatus('sent')
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.feedbackEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard không khả dụng */
    }
  }

  function reset() {
    setForm(EMPTY)
    setStatus('idle')
  }

  return (
    <>
      <PageHeader
        eyebrow="Hòm thư"
        title="Góc góp ý"
        description="Mỗi lá thư là một lời nhắn quý giá giúp Trạm Tin Nhân Văn hoàn thiện hơn. Thầy cô và các bạn cứ thoải mái chia sẻ nhé!"
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
              <span>📬</span> Thư gửi thẳng tới hộp mail Ban biên tập
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
              <h2>Thư đã được soạn sẵn!</h2>
              <p>
                Ứng dụng email của bạn vừa được mở. Chỉ cần bấm <strong>Gửi</strong> trong email là hoàn tất.
              </p>
              <p className="sent__hint">
                Không thấy ứng dụng email mở? Gửi trực tiếp tới <strong>{SITE.feedbackEmail}</strong>{' '}
                <button className="link-btn" onClick={copyEmail}>
                  {copied ? '(đã sao chép ✓)' : '(sao chép)'}
                </button>
              </p>
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

              <label className="field">
                <span>Họ tên (để trống nếu muốn ẩn danh)</span>
                <input value={form.name} onChange={update('name')} placeholder="VD: Nguyễn Văn A" maxLength={80} />
              </label>

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

              <button type="submit" className="btn btn--primary btn--lg btn--block">
                Gửi thư góp ý ✉️
              </button>
              <p className="form__note">Bấm gửi sẽ mở ứng dụng email trên máy của bạn với thư đã soạn sẵn.</p>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
