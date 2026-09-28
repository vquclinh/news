// Nội dung minigame "Soi dữ kiện: Đoán ai là khách mời".
// Chữ đặt trong **...** sẽ được in đậm.
// Đáp án KHÔNG lưu ở đây – sẽ công bố trong số bản tin tiếp theo.

export const DAYS = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6']

export const MINIGAME = {
  title: 'Soi dữ kiện: Đoán ai là khách mời',
  banner: '/images/minigame-bia.png',
  intro:
    'Trong **Tuần lễ đón Tân sinh viên tại cơ sở Linh Xuân**, từ thứ Hai đến thứ Sáu, nhà trường tổ chức **mỗi ngày một talkshow**.',

  // days: chỉ số trong DAYS mà khách mời có mặt tại cơ sở Linh Xuân
  guests: [
    { honorific: 'Cô', name: 'Phương Lan', unit: 'Ban Giám hiệu', days: [0, 1] },
    { honorific: 'Thầy', name: 'Văn Quang', unit: 'Khoa Tâm lý học', days: [0, 3, 4] },
    { honorific: 'Thầy', name: 'Minh Quang', unit: 'Khoa Đông phương học', days: [2, 3] },
    { honorific: 'Thầy', name: 'Phúc Duy', unit: 'Khoa Báo chí và Truyền thông', days: [1, 2, 4] },
    { honorific: 'Cô', name: 'Bích Ngọc', unit: 'Khoa Địa lý', days: [3] },
  ],

  facts: [
    'Khách mời của talkshow vào thứ Hai là người thuộc Ban Giám hiệu.',
    'Mỗi khách mời **chỉ tham gia một talkshow** và mỗi ngày **chỉ có một khách mời**.',
    'Khách mời chỉ có thể tham gia vào ngày người đó **có mặt tại cơ sở Linh Xuân**.',
  ],

  questions: [
    {
      q: 'Khách mời nào sau đây **chắc chắn** tham gia talkshow vào thứ Tư?',
      options: ['Cô Phương Lan', 'Thầy Văn Quang', 'Thầy Minh Quang', 'Thầy Phúc Duy'],
    },
    {
      q: 'Nếu khách mời của talkshow thứ Hai thuộc Ban Giám hiệu, điều nào sau đây **phải đúng**?',
      options: [
        'Thầy Văn Quang là khách mời thứ Sáu.',
        'Thầy Phúc Duy là khách mời thứ Sáu.',
        'Cô Bích Ngọc là khách mời thứ Tư.',
        'Thầy Minh Quang là khách mời thứ Năm.',
      ],
    },
    {
      q: 'Nếu thầy Văn Quang là khách mời vào thứ Hai, vậy thầy Phúc Duy có thể là khách mời vào thứ mấy?',
      options: ['Thứ 4', 'Thứ 6', 'Cả thứ 4 và 6', 'Thứ 3'],
    },
  ],

  prizes: [
    { rank: 'Nhất', value: '2.000.000' },
    { rank: 'Nhì', value: '1.500.000' },
    { rank: 'Ba', value: '1.000.000' },
  ],

  // Hết ngày này thì đóng nhận đáp án ('YYYY-MM-DD', giờ Việt Nam)
  deadline: '2026-10-10',
  example: 'Nguyễn Văn A - Khoa Báo chí và Truyền thông - 1A 2B 3C',
}
