export const SITE = {
  name: 'Trạm Tin Nhân Văn',
  motto: 'Lắng nghe · Ghi chép · Lan tỏa',
  // Email nhận thư từ Góc góp ý (điền vào để form hoạt động)
  feedbackEmail: '',
}

export const NAV = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/diem-tin-nhan-van', label: 'Điểm tin nhân văn' },
  { to: '/guong-mat-nhan-van', label: 'Gương mặt nhân văn' },
  { to: '/ussh-fun-zone', label: 'USSH Fun Zone' },
  { to: '/goc-gop-y', label: 'Góc góp ý' },
]

export const CATEGORIES = {
  'diem-tin': {
    label: 'Điểm tin nhân văn',
    path: '/diem-tin-nhan-van',
    color: '#9f1d2c',
    description: 'Những chuyển động mới nhất trong đời sống học đường – ngắn gọn, chính xác, đúng chất nhà báo.',
  },
  'guong-mat': {
    label: 'Gương mặt nhân văn',
    path: '/guong-mat-nhan-van',
    color: '#b7791f',
    description: 'Chân dung những con người làm nên tinh thần nhân văn – qua những cuộc trò chuyện thật gần.',
  },
  'fun-zone': {
    label: 'USSH Fun Zone',
    path: '/ussh-fun-zone',
    color: '#2f6f73',
    description: 'Góc thư giãn sau giờ học: minigame thử tài và những bài viết khiến bạn bật cười.',
  },
}
