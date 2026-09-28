import { useState } from 'react'
import Rich from './Rich.jsx'
import { DAYS, MINIGAME } from '../data/minigame.js'
import { formatDate } from '../data/articles.js'
import { SITE } from '../data/site.js'

const LETTERS = ['A', 'B', 'C', 'D']
const deadlineText = formatDate(MINIGAME.deadline)
const isClosed = () => new Date() > new Date(`${MINIGAME.deadline}T23:59:59+07:00`)

// Không cần server: bấm gửi sẽ mở ứng dụng email với đáp án đã soạn sẵn theo đúng cú pháp.
// Trang không chấm đúng/sai – đáp án được công bố trong số bản tin tiếp theo.
export default function Puzzle() {
  const [answers, setAnswers] = useState(() => MINIGAME.questions.map(() => null))
  const [name, setName] = useState('')
  const [unit, setUnit] = useState('')
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')
  const closed = isClosed()

  const answerCode = answers.map((a, i) => `${i + 1}${a === null ? '_' : LETTERS[a]}`).join(' ')
  const line = [name.trim() || 'Họ và tên', unit.trim() || 'Bộ phận/bộ môn', answerCode].join(' - ')

  function pick(qi, oi) {
    setAnswers(answers.map((a, i) => (i === qi ? oi : a)))
    setError('')
  }

  function validate() {
    const missing = answers.findIndex((a) => a === null)
    if (missing !== -1) return `Quý thầy cô chưa chọn đáp án cho Câu ${missing + 1}.`
    if (!name.trim() || !unit.trim()) return 'Quý thầy cô vui lòng điền họ tên và bộ phận/bộ môn công tác.'
    return ''
  }

  function send() {
    const problem = validate() || (!SITE.minigameEmail && 'Ban biên tập chưa cập nhật email nhận đáp án. Quý thầy cô quay lại sau nhé!')
    setError(problem)
    if (problem) return
    const subject = `[Minigame ${SITE.name}] ${MINIGAME.title}`
    window.location.href = `mailto:${SITE.minigameEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(line)}`
    setNotice('Ứng dụng email vừa được mở với đáp án soạn sẵn – chỉ cần bấm Gửi là hoàn tất.')
  }

  async function copy() {
    const problem = validate()
    setError(problem)
    if (problem) return
    try {
      await navigator.clipboard.writeText(line)
      setNotice('Đã sao chép đáp án ✓')
    } catch {
      setNotice('Không sao chép được – quý thầy cô vui lòng chép tay dòng đáp án ở trên.')
    }
  }

  return (
    <article className="puzzle">
      <header className="puzzle__head">
        <span className="puzzle__badge" aria-hidden="true">🔎</span>
        <p className="puzzle__eyebrow">Minigame</p>
        <h1 className="puzzle__title">{MINIGAME.title}</h1>
        <p className="puzzle__lead">
          <Rich text={MINIGAME.intro} />
        </p>
        <ul className="prizes">
          {MINIGAME.prizes.map((p) => (
            <li key={p.rank} className="prize">
              <span className="prize__rank">Giải {p.rank}</span>
              <strong className="prize__value">{p.value}đ</strong>
              <span className="prize__note">Voucher Fahasa</span>
            </li>
          ))}
        </ul>
        <p className="puzzle__deadline">
          Hạn gửi đáp án: <strong>hết ngày {deadlineText}</strong>
        </p>
      </header>

      <section className="puzzle__section">
        <h2 className="puzzle__h2">Danh sách 5 khách mời</h2>
        <ol className="guests">
          {MINIGAME.guests.map((g) => (
            <li key={g.name}>
              {g.honorific} <strong>{g.name}</strong> <span className="guests__unit">– {g.unit}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="puzzle__section">
        <h2 className="puzzle__h2">Biết</h2>
        <ul className="facts">
          {MINIGAME.facts.map((f) => (
            <li key={f}>
              <Rich text={f} />
            </li>
          ))}
          <li>Lịch có mặt của các khách mời như sau:</li>
        </ul>
        <div className="schedule-wrap">
          <table className="schedule">
            <thead>
              <tr>
                <th scope="col">Khách mời</th>
                {DAYS.map((d) => (
                  <th key={d} scope="col">
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {MINIGAME.guests.map((g) => (
                <tr key={g.name}>
                  <th scope="row">{g.name}</th>
                  {DAYS.map((d, di) => (
                    <td key={d}>
                      {g.days.includes(di) ? (
                        <span className="schedule__check" aria-label="Có mặt">✓</span>
                      ) : (
                        <span className="sr-only">Vắng</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {MINIGAME.questions.map((item, qi) => (
        <section key={qi} className="puzzle__section">
          <h2 className="puzzle__question">
            <span className="puzzle__qnum">Câu {qi + 1}</span>
            <Rich text={item.q} />
          </h2>
          <div className="puzzle__options" role="radiogroup" aria-label={`Câu ${qi + 1}`}>
            {item.options.map((opt, oi) => (
              <button
                key={oi}
                type="button"
                role="radio"
                aria-checked={answers[qi] === oi}
                className={`puzzle__option ${answers[qi] === oi ? 'is-picked' : ''}`}
                onClick={() => pick(qi, oi)}
                disabled={closed}
              >
                <span className="puzzle__letter">{LETTERS[oi]}</span>
                <span>{opt}</span>
              </button>
            ))}
          </div>
        </section>
      ))}

      <section className="puzzle__section submit">
        <h2 className="puzzle__h2">Gửi đáp án</h2>
        {closed ? (
          <p className="submit__closed">
            Minigame đã hết hạn nhận đáp án ({deadlineText}). Đáp án và người thắng cuộc sẽ được công bố trong số
            bản tin nội bộ tiếp theo.
          </p>
        ) : (
          <>
            <div className="form__row">
              <label className="field">
                <span>Họ và tên</span>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="VD: Nguyễn Văn A" maxLength={80} />
              </label>
              <label className="field">
                <span>Bộ phận/bộ môn công tác</span>
                <input
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="VD: Khoa Báo chí và Truyền thông"
                  maxLength={120}
                />
              </label>
            </div>

            <div className="submit__preview">
              <span>Đáp án sẽ gửi đi</span>
              <code>{line}</code>
            </div>

            {error && <p className="form__error">{error}</p>}
            {notice && !error && <p className="submit__notice">{notice}</p>}

            <div className="submit__actions">
              <button type="button" className="btn btn--primary btn--lg" onClick={send}>
                Gửi qua email ✉️
              </button>
              <button type="button" className="btn btn--ghost btn--lg" onClick={copy}>
                Sao chép đáp án
              </button>
            </div>
          </>
        )}
      </section>

      <section className="puzzle__section rules">
        <h2 className="puzzle__h2">Thể lệ</h2>
        <dl>
          <dt>1. Đối tượng tham gia</dt>
          <dd>Tất cả giảng viên, cán bộ công nhân viên của Nhân Văn.</dd>

          <dt>2. Cách tham gia</dt>
          <dd>Người tham gia đọc kỹ dữ kiện và trả lời 3 câu hỏi trắc nghiệm.</dd>
          <dd>
            Gửi đáp án qua email chính thức của bản tin nội bộ
            {SITE.minigameEmail && (
              <>
                {' '}
                (<a href={`mailto:${SITE.minigameEmail}`}>{SITE.minigameEmail}</a>)
              </>
            )}
            , trong đó vui lòng ghi theo cú pháp:{' '}
            <strong>họ và tên - bộ phận/ bộ môn công tác - đáp án</strong>.
          </dd>
          <dd className="rules__example">Ví dụ: {MINIGAME.example}.</dd>

          <dt>3. Tiêu chí chọn người chiến thắng</dt>
          <dd>03 người có đáp án chính xác và gửi đi trong thời gian sớm nhất.</dd>

          <dt>4. Phần thưởng</dt>
          {MINIGAME.prizes.map((p) => (
            <dd key={p.rank}>
              01 giải {p.rank}: voucher mua sắm tại nhà sách Fahasa trị giá {p.value} đồng
            </dd>
          ))}

          <dt>5. Thời hạn gửi đáp án</dt>
          <dd>Từ thời điểm công bố minigame đến hết ngày {deadlineText}.</dd>
          <dd>Đáp án và người thắng cuộc sẽ được công bố trong số bản tin nội bộ tiếp theo.</dd>
        </dl>
      </section>
    </article>
  )
}
