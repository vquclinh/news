# Nhân Văn Times

Website bản tin của sinh viên Báo chí – USSH (Vite + React).

## Chạy

```bash
npm install
npm run dev
```

Mở http://localhost:5173

## Cấu trúc

| Mục | Đường dẫn | Nội dung |
| --- | --- | --- |
| Trang chủ | `/` | Tổng hợp 5 bài |
| Điểm tin nhân văn | `/diem-tin-nhan-van` | 2 bài tin |
| Gương mặt nhân văn | `/guong-mat-nhan-van` | Bài phỏng vấn cô |
| USSH Fun Zone | `/ussh-fun-zone` | Minigame + bài viết vui |
| Góc góp ý | `/goc-gop-y` | Form gửi thư góp ý qua email |

## Sửa nội dung

- **Bài viết**: `src/data/articles.js` (hướng dẫn định dạng ở đầu file)
- **Câu hỏi minigame**: `src/data/quiz.js`
- **Tên trang, menu, chuyên mục, email nhận góp ý**: `src/data/site.js`
- **Ảnh**: bỏ vào `public/images/`, rồi dùng đường dẫn `/images/ten-anh.jpg` trong bài.

## Deploy

Web tĩnh, không cần database. Trên Vercel chỉ cần import repo (Framework Preset: Vite).
`vercel.json` giúp mở link trực tiếp / F5 ở trang con không bị 404.
