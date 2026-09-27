// Dòng thông tin nhỏ: tác giả · ngày · thời gian đọc
export default function Meta({ items }) {
  return (
    <div className="meta">
      {items.map((m, i) => (
        <span key={m} className="meta__item">
          {i > 0 && <span className="meta__dot" />}
          {m}
        </span>
      ))}
    </div>
  )
}
