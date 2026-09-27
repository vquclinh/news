// Toàn bộ nội dung 5 bài viết nằm ở đây — hiện đang là placeholder, chờ cập nhật.
//
// Mỗi bài gồm:
//   title, sapo, author, date ('YYYY-MM-DD')
//   cover.image  : đường dẫn ảnh bìa, ví dụ '/images/ten-anh.jpg' (ảnh đặt trong public/images/)
//                  Để trống thì hiển thị nền màu placeholder.
//   content      : danh sách các đoạn. Các loại block:
//                  { type: 'p', text }                 đoạn văn
//                  { type: 'h2', text }                tiêu đề phụ
//                  { type: 'image', src, caption }     ảnh trong bài
//                  { type: 'quote', text, cite }       trích dẫn
//                  { type: 'qa', q, a }                hỏi – đáp (bài phỏng vấn)
//                  { type: 'list', ordered, items: [{ title, text }] }
//                  { type: 'box', title, text }        khung thông tin

export const ARTICLES = [
  {
    slug: 'phong-van',
    category: 'guong-mat',
    type: 'interview',
    title: 'Tiêu đề bài phỏng vấn',
    sapo: 'Sapo bài phỏng vấn sẽ được cập nhật.',
    author: '',
    date: '',
    cover: { image: '', from: '#b7791f', to: '#7c2d12', emoji: '🎙️', word: 'Phỏng vấn' },
    profile: {
      name: 'Tên giảng viên',
      role: 'Chức danh / đơn vị công tác',
      image: '',
      facts: [],
    },
    content: [],
  },
  {
    slug: 'tin-1',
    category: 'diem-tin',
    type: 'news',
    title: 'Tiêu đề bài tin số 1',
    sapo: 'Sapo bài tin sẽ được cập nhật.',
    author: '',
    date: '',
    cover: { image: '', from: '#9f1d2c', to: '#3b0a12', emoji: '📰', word: 'Điểm tin' },
    content: [],
  },
  {
    slug: 'tin-2',
    category: 'diem-tin',
    type: 'news',
    title: 'Tiêu đề bài tin số 2',
    sapo: 'Sapo bài tin sẽ được cập nhật.',
    author: '',
    date: '',
    cover: { image: '', from: '#1f4e79', to: '#0b1f33', emoji: '🗞️', word: 'Điểm tin' },
    content: [],
  },
  {
    slug: 'minigame',
    category: 'fun-zone',
    type: 'game',
    title: 'Minigame: Bạn có phải “phóng viên chính hiệu”?',
    sapo: '10 câu hỏi, mỗi câu 20 giây. Trả lời càng nhanh điểm càng cao!',
    author: '',
    date: '',
    cover: { image: '', from: '#2f6f73', to: '#0f2e30', emoji: '🎮', word: 'Minigame' },
  },
  {
    slug: 'bai-vui',
    category: 'fun-zone',
    type: 'funny',
    title: 'Tiêu đề bài viết vui',
    sapo: 'Sapo bài viết sẽ được cập nhật.',
    author: '',
    date: '',
    cover: { image: '', from: '#c2410c', to: '#7c2d12', emoji: '😂', word: 'Giải trí' },
    content: [],
  },
]

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug)
export const byCategory = (category) => ARTICLES.filter((a) => a.category === category)
export const articleUrl = (article) =>
  article.type === 'game' ? '/ussh-fun-zone/minigame' : `/bai-viet/${article.slug}`

export const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }) : ''

// Ước tính thời gian đọc (~200 chữ/phút); trả về null khi bài chưa có nội dung.
export function readingTime(article) {
  const text = (article.content ?? [])
    .map((b) => [b.text, b.q, b.a, ...(b.items ?? []).map((i) => `${i.title} ${i.text}`)].join(' '))
    .join(' ')
  const words = text.split(/\s+/).filter(Boolean).length
  return words ? Math.max(1, Math.round(words / 200)) : null
}
