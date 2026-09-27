import { Link } from 'react-router-dom'

// Câu mời đọc: phần đặt trong [ ] thành link, dấu câu ngay sau link được giữ cùng dòng.
// Ví dụ: 'Xin mời quý thầy cô xem thêm [tại đây].'
export default function ReadMore({ text, to, className }) {
  const parts = text.split(/\[([^\]]+)\]([.,!?…]*)/)

  return (
    <p className={className}>
      {parts.map((part, i) => {
        if (i % 3 === 0) return part
        if (i % 3 === 2) return null
        return (
          <span key={i} className="nowrap">
            <Link to={to}>{part}</Link>
            {parts[i + 1]}
          </span>
        )
      })}
    </p>
  )
}
