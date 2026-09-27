// Toàn bộ nội dung 5 bài viết nằm ở đây — hiện đang là placeholder, chờ cập nhật.
//
// Mỗi bài gồm:
//   title, sapo, author, date ('YYYY-MM-DD')
//   sapo         : (tuỳ chọn) đoạn in đậm dưới tiêu đề trong trang bài. Bỏ trống thì không hiện.
//   excerpt      : (tuỳ chọn) đoạn giới thiệu hiện ở thẻ bài ngoài trang chủ / chuyên mục.
//                  Bỏ trống thì thẻ bài dùng sapo.
//   readMore     : (tuỳ chọn, bài tin) câu mời đọc ở trang chủ; " tại đây." được nối thêm thành link vào bài.
//   cover.image  : đường dẫn ảnh bìa, ví dụ '/images/ten-anh.jpg' (ảnh đặt trong public/images/)
//                  Để trống thì hiển thị nền màu placeholder.
//   cover.caption: (tuỳ chọn) chú thích ảnh bìa, hiện dưới ảnh ở trang chủ.
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
    title: 'Các USSH-er sẽ có thêm cơ hội trải nghiệm tại “xứ sở hoa anh đào”',
    excerpt:
      'Sáng ngày 24/9, Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM ký kết Biên bản ghi nhớ hợp tác với Công ty TNHH DYM Việt Nam tại cơ sở Sài Gòn. Hai bên sẽ phối hợp trong việc đào tạo, tổ chức các hoạt động trải nghiệm thực tế và thực tập, phát triển nguồn nhân lực. Đặc biệt, Nhà trường và Công ty tăng cường hợp tác trong lĩnh vực Nhật Bản học và chuyển đổi số. Sinh viên sẽ có thêm cơ hội tham quan doanh nghiệp, tham gia các chương trình đào tạo và thực tập, đồng thời bổ sung kiến thức công nghệ, kỹ năng nghề nghiệp bên cạnh năng lực tiếng Nhật.',
    readMore: 'Xin mời quý thầy cô xem thêm thông tin chi tiết về buổi ký kết',
    author: 'Quốc Toàn - Mỹ Hường',
    date: '2026-09-24',
    cover: {
      image: '/images/tin-1-ky-ket.jpg',
      caption:
        'Biên bản ghi nhớ là cơ sở để hai bên tiếp tục cụ thể hóa các nội dung hợp tác trong thời gian tới. Ảnh: QUỐC TOÀN',
      from: '#9f1d2c',
      to: '#3b0a12',
      emoji: '📰',
      word: 'Điểm tin',
    },
    content: [
      {
        type: 'p',
        text: 'Sáng ngày 24/9, Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM có buổi ký kết Biên bản ghi nhớ hợp tác với Công ty TNHH DYM Việt Nam tại cơ sở Sài Gòn. Đây là một trong những hoạt động tạo thêm sự kết nối giữa Nhà trường và doanh nghiệp, đặc biệt ở lĩnh vực Nhật Bản học và chuyển đổi số.',
      },
      {
        type: 'p',
        text: 'Theo nội dung trao đổi, hai bên sẽ phối hợp trong đào tạo, trải nghiệm thực tế, thực tập và phát triển nguồn nhân lực. Với sinh viên, điều này đồng nghĩa với việc có thêm cơ hội tham quan doanh nghiệp, tham gia các chương trình đào tạo và tiếp cận môi trường làm việc thực tế ngay trong quá trình học.',
      },
      {
        type: 'p',
        text: 'Một điểm được hai bên quan tâm là việc kết hợp năng lực tiếng Nhật với kiến thức và kỹ năng công nghệ. DYM Việt Nam cũng mong muốn phối hợp đào tạo, bổ sung kỹ năng chuyên môn và công nghệ cho sinh viên, nhất là những bạn có nền tảng tiếng Nhật tốt.',
      },
      {
        type: 'image',
        src: '/images/tin-1-luu-van-quyet.jpg',
        caption:
          'PGS.TS Lưu Văn Quyết kỳ vọng hai bên tận dụng thế mạnh của nhau để triển khai những chương trình hợp tác thiết thực. Ảnh: QUỐC TOÀN',
      },
      {
        type: 'p',
        text: 'Tại buổi làm việc, TS. Nguyễn Thanh Tuấn, Trưởng ngành Đông Phương học, cũng đề xuất tổ chức các buổi chia sẻ về văn hóa doanh nghiệp Nhật Bản trong bối cảnh chuyển đổi số, cùng hoạt động tham quan và thực tập tại doanh nghiệp cho sinh viên.',
      },
      {
        type: 'image',
        src: '/images/tin-1-nguyen-thanh-tuan.jpg',
        caption: 'TS. Nguyễn Thanh Tuấn trao đổi về định hướng hợp tác của Khoa Đông Phương học. Ảnh: QUỐC TOÀN',
      },
      {
        type: 'p',
        text: 'Như vậy, thời gian tới, các USSH-er có thể có thêm nhiều trải nghiệm thực tế bên ngoài giảng đường. Khi đó, tiếng Nhật không chỉ dừng lại ở một môn học mà còn có thể trở thành nền tảng để các bạn tiếp tục trau dồi kỹ năng và mở rộng cơ hội nghề nghiệp.',
      },
      {
        type: 'image',
        src: '/images/tin-1-ky-ket.jpg',
        caption:
          'Biên bản ghi nhớ là cơ sở để hai bên tiếp tục cụ thể hóa các nội dung hợp tác trong thời gian tới. Ảnh: QUỐC TOÀN',
      },
    ],
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
