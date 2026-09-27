export const QUESTIONS = [
  {
    q: 'Công thức “5W1H” khi viết tin gồm những câu hỏi nào?',
    options: [
      'Who, What, When, Where, Why, How',
      'Who, What, Which, Where, Why, How',
      'What, When, Where, Why, Whom, How',
      'Who, What, When, Where, Whose, How',
    ],
    answer: 0,
    explain: 'Ai? Cái gì? Khi nào? Ở đâu? Tại sao? Như thế nào? – bộ khung của mọi bản tin.',
  },
  {
    q: 'Ngày Báo chí Cách mạng Việt Nam là ngày nào?',
    options: ['19/5', '21/6', '2/9', '20/11'],
    answer: 1,
    explain: 'Ngày 21/6/1925, số đầu tiên của báo Thanh Niên ra đời.',
  },
  {
    q: 'Tờ báo cách mạng đầu tiên do Nguyễn Ái Quốc sáng lập năm 1925 là?',
    options: ['Báo Nhân Dân', 'Báo Cứu Quốc', 'Báo Thanh Niên', 'Báo Lao Động'],
    answer: 2,
    explain: 'Báo Thanh Niên – cơ quan ngôn luận của Hội Việt Nam Cách mạng Thanh niên.',
  },
  {
    q: 'Mô hình “kim tự tháp ngược” trong viết tin nghĩa là gì?',
    options: [
      'Kết luận quan trọng đặt ở cuối bài',
      'Thông tin quan trọng nhất đặt ở đầu bài',
      'Bài viết theo trình tự thời gian',
      'Mỗi đoạn dài hơn đoạn trước',
    ],
    answer: 1,
    explain: 'Độc giả có thể dừng đọc bất cứ lúc nào mà vẫn nắm được ý chính.',
  },
  {
    q: '“Sapo” trong một bài báo là gì?',
    options: [
      'Chú thích dưới ảnh',
      'Tên tác giả cuối bài',
      'Đoạn mở đầu tóm tắt, nằm ngay dưới tít',
      'Phần quảng cáo xen giữa bài',
    ],
    answer: 2,
    explain: 'Sapo thường được in đậm, giúp “câu” người đọc đi tiếp vào bài.',
  },
  {
    q: 'Giải thưởng báo chí danh giá của Mỹ mang tên ai?',
    options: ['Nobel', 'Pulitzer', 'Oscar', 'Grammy'],
    answer: 1,
    explain: 'Giải Pulitzer được trao lần đầu năm 1917, mang tên nhà báo Joseph Pulitzer.',
  },
  {
    q: 'Thể loại báo chí nào thường trình bày theo dạng hỏi – đáp?',
    options: ['Tin vắn', 'Phóng sự', 'Phỏng vấn', 'Xã luận'],
    answer: 2,
    explain: 'Giống bài “Gương mặt nhân văn” trên chính trang này đó!',
  },
  {
    q: 'Khi nguồn tin nói “off the record”, phóng viên nên hiểu là gì?',
    options: [
      'Được đăng nguyên văn kèm tên',
      'Thông tin không được công bố hoặc trích dẫn',
      'Chỉ được đăng trên mạng xã hội',
      'Nguồn tin đang tắt máy ghi âm cho vui',
    ],
    answer: 1,
    explain: 'Tôn trọng thỏa thuận với nguồn tin là nguyên tắc đạo đức nghề nghiệp cơ bản.',
  },
  {
    q: 'Thể loại nào nổi bật với việc tái hiện hiện trường sinh động, giàu chi tiết quan sát?',
    options: ['Phóng sự', 'Tin ngắn', 'Thông cáo báo chí', 'Bình luận'],
    answer: 0,
    explain: 'Phóng sự là thể loại của “đôi chân” – phải đến tận nơi, nhìn tận mắt.',
  },
  {
    q: 'Trong tòa soạn, “tít” là cách gọi của…',
    options: ['Hình minh họa', 'Tiêu đề bài báo', 'Số trang', 'Người biên tập'],
    answer: 1,
    explain: 'Một cái tít hay quyết định phần lớn việc độc giả có bấm vào đọc hay không.',
  },
]

export const RANKS = [
  { min: 9, title: 'Tổng biên tập tương lai', emoji: '🏆', note: 'Kiến thức vững như bàn thạch. Tòa soạn nào cũng muốn có bạn!' },
  { min: 7, title: 'Phóng viên chính hiệu', emoji: '🎖️', note: 'Nhanh nhạy, chính xác – bạn sinh ra để làm nghề này.' },
  { min: 5, title: 'Cộng tác viên triển vọng', emoji: '✍️', note: 'Nền tảng tốt rồi, thêm chút “đôi chân” là thành phóng viên xịn.' },
  { min: 3, title: 'Thực tập sinh chăm chỉ', emoji: '📚', note: 'Đọc thêm vài trang giáo trình rồi quay lại phục thù nhé!' },
  { min: 0, title: 'Độc giả trung thành', emoji: '☕', note: 'Không sao cả – ai cũng bắt đầu từ việc… đọc báo.' },
]
