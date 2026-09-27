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
| Góc góp ý | `/goc-gop-y` | Form gửi thư góp ý |
| Hộp thư (ẩn) | `/goc-gop-y/hop-thu` | Xem các thư đã nhận |

## Sửa nội dung

- **Bài viết**: `src/data/articles.js`
- **Câu hỏi minigame**: `src/data/quiz.js`
- **Tên trang, menu, chuyên mục**: `src/data/site.js`
- **Ảnh thật**: bỏ ảnh vào `public/images/`, rồi thêm `image: '/images/ten-anh.jpg'` vào `cover` của bài.

Thư góp ý được lưu vào `data/feedback.json` (đã có trong `.gitignore`).