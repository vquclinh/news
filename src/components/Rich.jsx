// In đậm phần chữ đặt trong **...**, ví dụ 'mỗi ngày **một talkshow**'.
export default function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}
