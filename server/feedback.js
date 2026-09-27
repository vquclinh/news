// Kiểm tra và chuẩn hóa thư góp ý — dùng chung cho dev server và Vercel function.

const clean = (value, max) => String(value ?? '').trim().slice(0, max)

export function buildEntry(input) {
  input = input || {}
  const message = clean(input.message, 3000)
  if (message.length < 10) return { error: 'Nội dung góp ý cần ít nhất 10 ký tự.' }

  const rating = Number(input.rating)
  return {
    entry: {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: clean(input.name, 80) || 'Ẩn danh',
      email: clean(input.email, 120),
      topic: clean(input.topic, 60) || 'Khác',
      rating: rating >= 1 && rating <= 5 ? Math.round(rating) : null,
      message,
      createdAt: new Date().toISOString(),
    },
  }
}
