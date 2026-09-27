import { useEffect, useMemo, useState } from 'react'
import { QUESTIONS, RANKS } from '../data/quiz.js'

const TIME_PER_QUESTION = 20
const BEST_KEY = 'nvt-quiz-best'
const LETTERS = ['A', 'B', 'C', 'D']

const shuffle = (list) => [...list].sort(() => Math.random() - 0.5)

function loadBest() {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0
  } catch {
    return 0
  }
}

function saveBest(score) {
  try {
    localStorage.setItem(BEST_KEY, String(score))
  } catch {
    /* trình duyệt chặn lưu trữ – bỏ qua */
  }
}

export default function QuizGame() {
  const [phase, setPhase] = useState('intro') // intro | playing | result
  const [questions, setQuestions] = useState(QUESTIONS)
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null) // số thứ tự đáp án, -1 = hết giờ
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const [score, setScore] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [streak, setStreak] = useState(0)
  const [best, setBest] = useState(loadBest)

  const current = questions[index]
  const answered = selected !== null

  useEffect(() => {
    if (phase !== 'playing' || answered) return
    if (timeLeft <= 0) {
      setSelected(-1)
      setStreak(0)
      return
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [phase, answered, timeLeft])

  function start() {
    setQuestions(shuffle(QUESTIONS))
    setIndex(0)
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    setScore(0)
    setCorrect(0)
    setStreak(0)
    setPhase('playing')
  }

  function choose(i) {
    if (answered) return
    setSelected(i)
    if (i === current.answer) {
      const newStreak = streak + 1
      setStreak(newStreak)
      setCorrect((c) => c + 1)
      setScore((s) => s + 100 + timeLeft * 5 + (newStreak >= 3 ? 50 : 0))
    } else {
      setStreak(0)
    }
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex(index + 1)
      setSelected(null)
      setTimeLeft(TIME_PER_QUESTION)
      return
    }
    if (score > best) {
      setBest(score)
      saveBest(score)
    }
    setPhase('result')
  }

  if (phase === 'intro') {
    return (
      <div className="quiz quiz--intro">
        <div className="quiz__badge">🎤</div>
        <h2 className="quiz__heading">Bạn có phải “phóng viên chính hiệu”?</h2>
        <p className="quiz__lead">
          {QUESTIONS.length} câu hỏi về nghề báo · {TIME_PER_QUESTION} giây mỗi câu · trả lời nhanh được cộng điểm,
          đúng liên tiếp 3 câu được thưởng combo!
        </p>
        <ul className="quiz__rules">
          <li><strong>+100</strong> mỗi câu đúng</li>
          <li><strong>+5</strong> cho mỗi giây còn lại</li>
          <li><strong>+50</strong> combo từ câu đúng thứ 3 liên tiếp</li>
        </ul>
        <button className="btn btn--primary btn--lg" onClick={start}>
          Bắt đầu thử thách
        </button>
        {best > 0 && <p className="quiz__best">Kỷ lục của bạn: {best} điểm</p>}
      </div>
    )
  }

  if (phase === 'result') {
    return <Result correct={correct} total={questions.length} score={score} best={best} onReplay={start} />
  }

  const timePct = (timeLeft / TIME_PER_QUESTION) * 100

  return (
    <div className="quiz">
      <div className="quiz__top">
        <span className="quiz__progress">
          Câu <strong>{index + 1}</strong>/{questions.length}
        </span>
        {streak >= 2 && <span className="quiz__streak">🔥 {streak} câu liên tiếp</span>}
        <span className="quiz__score">{score} điểm</span>
      </div>

      <div className="quiz__timer">
        <div
          className={`quiz__timer-bar ${timeLeft <= 5 ? 'is-low' : ''}`}
          style={{ width: `${timePct}%` }}
        />
        <span className="quiz__timer-num">{timeLeft}s</span>
      </div>

      <h2 className="quiz__question" key={index}>
        {current.q}
      </h2>

      <div className="quiz__options">
        {current.options.map((opt, i) => {
          let state = ''
          if (answered) {
            if (i === current.answer) state = 'is-correct'
            else if (i === selected) state = 'is-wrong'
            else state = 'is-dim'
          }
          return (
            <button key={i} className={`quiz__option ${state}`} onClick={() => choose(i)} disabled={answered}>
              <span className="quiz__letter">{LETTERS[i]}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      {answered && (
        <div className={`quiz__feedback ${selected === current.answer ? 'is-good' : 'is-bad'}`}>
          <p className="quiz__verdict">
            {selected === current.answer ? '✅ Chính xác!' : selected === -1 ? '⏰ Hết giờ rồi!' : '❌ Chưa đúng rồi!'}
          </p>
          <p className="quiz__explain">{current.explain}</p>
          <button className="btn btn--primary" onClick={next} autoFocus>
            {index + 1 < questions.length ? 'Câu tiếp theo →' : 'Xem kết quả'}
          </button>
        </div>
      )}
    </div>
  )
}

function Result({ correct, total, score, best, onReplay }) {
  const rank = RANKS.find((r) => correct >= r.min)
  const isRecord = score > 0 && score >= best
  const [copied, setCopied] = useState(false)

  const confetti = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 1.5,
        duration: 2.5 + Math.random() * 2,
        color: ['#9f1d2c', '#c8963e', '#2f6f73', '#1f4e79', '#e76f51'][i % 5],
        rotate: Math.random() * 360,
      })),
    [],
  )

  async function share() {
    const text = `Mình đạt danh hiệu "${rank.title}" với ${correct}/${total} câu đúng (${score} điểm) ở minigame Trạm Tin Nhân Văn! Thử sức tại: ${window.location.href}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard không khả dụng */
    }
  }

  return (
    <div className="quiz quiz--result">
      {correct >= 7 && (
        <div className="confetti" aria-hidden="true">
          {confetti.map((c, i) => (
            <span
              key={i}
              style={{
                left: `${c.left}%`,
                background: c.color,
                animationDelay: `${c.delay}s`,
                animationDuration: `${c.duration}s`,
                transform: `rotate(${c.rotate}deg)`,
              }}
            />
          ))}
        </div>
      )}
      <div className="quiz__badge quiz__badge--big">{rank.emoji}</div>
      <p className="quiz__eyebrow">Danh hiệu của bạn</p>
      <h2 className="quiz__heading">{rank.title}</h2>
      <p className="quiz__lead">{rank.note}</p>

      <div className="quiz__stats">
        <div>
          <strong>
            {correct}/{total}
          </strong>
          <span>câu đúng</span>
        </div>
        <div>
          <strong>{score}</strong>
          <span>điểm</span>
        </div>
        <div>
          <strong>{best}</strong>
          <span>kỷ lục</span>
        </div>
      </div>
      {isRecord && <p className="quiz__record">🎉 Kỷ lục mới!</p>}

      <div className="quiz__actions">
        <button className="btn btn--primary btn--lg" onClick={onReplay}>
          Chơi lại
        </button>
        <button className="btn btn--ghost btn--lg" onClick={share}>
          {copied ? 'Đã sao chép ✓' : 'Khoe kết quả'}
        </button>
      </div>
    </div>
  )
}
