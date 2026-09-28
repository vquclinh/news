// Toàn bộ nội dung 5 bài viết nằm ở đây.
//
// Mỗi bài gồm:
//   title, author, date ('YYYY-MM-DD'; để trống thì không hiện ngày)
//   authorLabel  : (tuỳ chọn) chữ đứng trước tên tác giả, ví dụ 'Thực hiện' → "Thực hiện: Bảo Ngọc".
//   sapo         : (tuỳ chọn) đoạn mở đầu ngay dưới tiêu đề trong trang bài. Bỏ trống thì không hiện.
//   excerpt      : (tuỳ chọn) phần giới thiệu hiện ngoài trang chủ / chuyên mục — một đoạn (chuỗi)
//                  hoặc nhiều đoạn (mảng chuỗi). Bỏ trống thì dùng sapo.
//   readMore     : (tuỳ chọn) câu mời đọc ở trang chủ; phần đặt trong [ ] thành link vào bài,
//                  ví dụ 'Xin mời quý thầy cô xem thêm [tại đây].'
//   cover.image  : đường dẫn ảnh đinh, ví dụ '/images/ten-anh.jpg' (ảnh đặt trong public/images/)
//                  Để trống thì hiển thị nền màu placeholder.
//   cover.caption: (tuỳ chọn) chú thích ảnh đinh.
//   cover.alt    : (tuỳ chọn) mô tả ảnh cho trình đọc màn hình khi không có chú thích.
//   cover.fit    : (tuỳ chọn) 'contain' để không cắt ảnh (ảnh bìa có chữ).
//   profile      : (bài phỏng vấn) { name, role, image, facts } cho trang Gương mặt nhân văn.
//   content      : danh sách các đoạn. Các loại block:
//                  { type: 'p', text }                 đoạn văn
//                  { type: 'h2', text }                tiêu đề phụ
//                  { type: 'image', src, caption, alt } ảnh trong bài
//                  { type: 'quote', text, cite }       trích dẫn
//                  { type: 'qa', q, a }                hỏi – đáp (bài phỏng vấn)
//                  { type: 'list', ordered, items: [{ title, text }] }
//                  { type: 'box', title, text }        khung thông tin
//                  { type: 'skills', title, items: [{ icon, label }] }   ô kỹ năng/điểm nổi bật

export const ARTICLES = [
  {
    slug: 'phong-van',
    category: 'guong-mat',
    type: 'interview',
    title: 'Cô Hoàng Tố Nguyên và lớp học “không khoảng cách”',
    excerpt: [
      '“Mình xem trường Nhân văn như ngôi nhà thứ hai, xem các bạn sinh viên, học viên như con cháu trong gia đình” - cô Hoàng Tố Nguyên, giảng viên khoa Ngữ văn Trung Quốc, chia sẻ về 14 năm gắn bó với nghề giáo.',
      'Cô Tố Nguyên có nội quy lớp học độc lạ. Cô cho phép sinh viên mang đồ ăn, thức uống vào lớp, được phép ngắt lời cô khi có thắc mắc về bài học. Cô xưng hô “mình - bạn” với học trò để rút ngắn khoảng cách, giúp các bạn thoải mái khi học tập và trò chuyện với cô hơn.',
      'Không chỉ hỗ trợ kiến thức, cô Tố Nguyên còn lắng nghe những chia sẻ về áp lực học tập, cuộc sống và sức khỏe tinh thần của học trò. Trong thời gian tới, cô mong muốn tổ chức thêm nhiều hoạt động thực tế, để các bạn có cơ hội giao lưu, trải nghiệm và kết nối với bạn bè quốc tế.',
    ],
    readMore: 'Mời quý thầy cô [vào đây] để hiểu hơn về lớp học thú vị của cô Hoàng Tố Nguyên nhé!',
    sapo: '“Mình xem trường Nhân văn như ngôi nhà thứ hai, xem các bạn sinh viên, học viên như con cháu trong gia đình”. Đó là lời tâm sự của cô Hoàng Tố Nguyên (43 tuổi, giảng viên khoa Ngữ văn Trung Quốc). Suốt hành trình 14 năm “đưa đò”, cô Tố Nguyên luôn ghi lại những đoạn video ngắn trong các tiết học để lưu giữ kỷ niệm đáng nhớ cùng học trò.',
    author: 'Bảo Ngọc, Thanh Tuyền',
    authorLabel: 'Thực hiện',
    date: '',
    cover: {
      image: '/images/phong-van-chan-dung.jpg',
      caption:
        'Chân dung cô Hoàng Tố Nguyên, giảng viên khoa Ngữ văn Trung Quốc với 14 năm miệt mài "đưa đò" - Ảnh: NVCC',
      from: '#b7791f',
      to: '#7c2d12',
      emoji: '🎙️',
      word: 'Phỏng vấn',
    },
    profile: {
      name: 'Hoàng Tố Nguyên',
      role: 'Giảng viên khoa Ngữ văn Trung Quốc',
      image: '/images/phong-van-chan-dung.jpg',
      facts: [],
    },
    content: [
      {
        type: 'p',
        text: 'Quay phim, chụp hình là sở thích của cô Tố Nguyên. Cô thường quay những khoảnh khắc vui nhộn của lớp học, quay học trò ngồi nghe giảng, làm bài tập và tham gia các hoạt động ở lớp. Khi có sự đồng ý của học trò, cô đăng tải các video đó lên mạng xã hội. Cô Tố Nguyên chia sẻ: “Khi các bạn chăm chú lắng nghe bài giảng rồi ghi chép lại, hình ảnh đó rất dễ thương. Mình muốn ghi lại các khoảnh khắc đó để lan tỏa tinh thần học đến các bạn khác. Rồi khi về già, mình quay lại xem những thước phim này, chắc sẽ cảm thấy ấm lòng và hoài niệm”.',
      },
      {
        type: 'image',
        src: '/images/phong-van-selfie.jpg',
        caption:
          'Những bức ảnh selfie gần gũi cùng học trò là cách cô Tố Nguyên lưu giữ kỷ niệm thanh xuân trên giảng đường - Ảnh: NVCC',
      },
      {
        type: 'p',
        text: 'Đặc biệt, cô Tố Nguyên có nội quy lớp học độc lạ. Cô cho phép học trò mang đồ ăn thức uống vào lớp. Trong quá trình học, nếu có gì thắc mắc, các bạn được phép ngắt lời của cô và đặt ra câu hỏi. Vì cô sợ khi học trò nghe giảng xong rồi, các bạn sẽ quên mất vấn đề định hỏi. Khi có bạn gặp vấn đề sức khỏe, như mỏi người khi ngồi lâu, cô cho phép bạn có thể vừa nghe giảng, vừa đi qua lại trong lớp để cơ thể thư giãn hơn. Thoải mái như thế, nhưng “chưa có bạn nào dám làm”, cô cười.',
      },
      {
        type: 'p',
        text: 'Cô thường xưng hô với học trò là “mình” với “bạn”. Cô cho biết, vì đối tượng học bao gồm cả sinh viên lẫn học viên. Có những người ngang tuổi cô, thậm chí lớn hơn. Vì thế, cô xưng “mình” sẽ tạo cảm giác thân thiết, rút ngắn khoảng cách giữa giảng viên và học trò, các bạn cũng thoải mái trao đổi với cô hơn. Học trò hay nhắn tin riêng, nhờ cô giải đáp phần kiến thức. Có những lúc các bạn thắc mắc những lĩnh vực “ngoài tầm với” của cô, cô sẵn sàng giới thiệu những thầy cô phụ trách lĩnh vực đó để tiện giải đáp chính xác những băn khoăn của học trò.',
      },
      {
        type: 'p',
        text: 'Không chỉ trao đổi kiến thức học thuật, các bạn còn tìm đến cô để tâm sự, chia sẻ các vấn đề trong cuộc sống, những áp lực học tập hay vấn đề sức khỏe tinh thần. “Mình cảm thấy xúc động khi học trò tin tưởng và sẵn sàng chia sẻ câu chuyện riêng tư với mình. Mình trò chuyện và động viên các bạn vì nghĩ rằng các bạn cũng chỉ mới ‘chân ướt chân ráo’ học tiếng Trung và bước vào đời, cần sự hỗ trợ giúp sức từ mình. Đó là nhiệm vụ mình phải làm, là niềm vui của mình”.',
      },
      {
        type: 'p',
        text: 'Để buổi học trở nên thú vị, cô thường tổ chức các hoạt động giao lưu giữa các bạn sinh viên Việt Nam với các bạn lưu học sinh Trung Quốc. Sinh viên hai nước sẽ có những buổi trò chuyện với nhau. Các bạn giới thiệu bản thân, quảng bá quê hương, kể lại khó khăn trong quá trình học và trao đổi những bí quyết giúp học giỏi tiếng Trung và tiếng Việt. Các buổi học này sẽ giúp các bạn tiếp thu kiến thức nhanh hơn, có cơ hội giao tiếp với người ngoại quốc để tăng kỹ năng ngôn ngữ và phản xạ.',
      },
      {
        type: 'p',
        text: 'Trong những năm tới, cô Tố Nguyên đặt mục tiêu tổ chức nhiều hoạt động giao lưu hơn nữa để sinh viên và học viên có cơ hội thực chiến, kết nối với bạn bè ngoại quốc, mở rộng mối quan hệ để tiện cho tương lai sau này.',
      },
      {
        type: 'box',
        title: 'Điều thú vị về cô Hoàng Tố Nguyên',
        text: 'Cô Tố Nguyên là cựu sinh viên Trường Đại học Khoa học Xã hội và Nhân văn, học ngành Ngữ văn Trung Quốc niên khóa 2001-2005. Cô hay nói vui: “Thời gian mình gặp sinh viên và đồng nghiệp còn nhiều hơn thời gian mình gặp người nhà của mình”.',
      },
    ],
  },
  {
    slug: 'tin-1',
    category: 'diem-tin',
    type: 'news',
    title: 'Các USSH-er sẽ có thêm cơ hội trải nghiệm tại “xứ sở hoa anh đào”',
    excerpt:
      'Sáng ngày 24/9, Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM ký kết Biên bản ghi nhớ hợp tác với Công ty TNHH DYM Việt Nam tại cơ sở Sài Gòn. Hai bên sẽ phối hợp trong việc đào tạo, tổ chức các hoạt động trải nghiệm thực tế và thực tập, phát triển nguồn nhân lực. Đặc biệt, Nhà trường và Công ty tăng cường hợp tác trong lĩnh vực Nhật Bản học và chuyển đổi số. Sinh viên sẽ có thêm cơ hội tham quan doanh nghiệp, tham gia các chương trình đào tạo và thực tập, đồng thời bổ sung kiến thức công nghệ, kỹ năng nghề nghiệp bên cạnh năng lực tiếng Nhật.',
    readMore: 'Xin mời quý thầy cô xem thêm thông tin chi tiết về buổi ký kết [tại đây].',
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
          'PGS.TS Lưu Văn Quyết kỳ vọng hai bên tận dụng thế mạnh của nhau để triển khai những chương trình hợp tác thiết thực - Ảnh: QUỐC TOÀN',
      },
      {
        type: 'p',
        text: 'Tại buổi làm việc, TS. Nguyễn Thanh Tuấn, Trưởng ngành Đông Phương học, cũng đề xuất tổ chức các buổi chia sẻ về văn hóa doanh nghiệp Nhật Bản trong bối cảnh chuyển đổi số, cùng hoạt động tham quan và thực tập tại doanh nghiệp cho sinh viên.',
      },
      {
        type: 'image',
        src: '/images/tin-1-nguyen-thanh-tuan.jpg',
        caption: 'TS. Nguyễn Thanh Tuấn trao đổi về định hướng hợp tác của Khoa Đông Phương học. - Ảnh: QUỐC TOÀN',
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
    title: 'Chăm sóc sức khỏe viên chức và người lao động từ những xét nghiệm định kỳ',
    excerpt:
      'Trong hai buổi sáng 10.9 và 11.9, Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM tiến hành chương trình khám sức khỏe định kỳ đợt 1 năm 2026 cho toàn thể viên chức và người lao động. Hoạt động bao gồm khâu lấy máu xét nghiệm tại trường và khám chuyên sâu tại Bệnh viện Đại học Y Dược TP.HCM - Cơ sở 2. Thông qua đó, Nhà trường tiếp tục khẳng định cam kết chăm lo đời sống, bảo vệ quyền lợi y tế chính đáng của người lao động. Đây là cơ sở quan trọng để duy trì một môi trường làm việc an toàn, lý tưởng, giúp toàn thể nhân sự an tâm gắn bó và cống hiến lâu dài.',
    readMore: 'Xin mời quý thầy cô xem thêm thông tin chi tiết về buổi xét nghiệm [tại đây].',
    author: 'Quốc Toàn - Mỹ Ngân',
    date: '2026-09-11',
    cover: {
      image: '/images/tin-2-anh-dinh.jpg',
      from: '#1f4e79',
      to: '#0b1f33',
      emoji: '🗞️',
      word: 'Điểm tin',
    },
    content: [
      {
        type: 'p',
        text: 'Trong hai buổi sáng 10.9 và 11.9, Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQG-HCM tiến hành chương trình khám sức khỏe định kỳ đợt 1 năm 2026 cho toàn thể viên chức và người lao động. Hoạt động bao gồm khâu lấy máu xét nghiệm tại trường và khám chuyên sâu tại Bệnh viện Đại học Y Dược TP.HCM - Cơ sở 2, nhằm đánh giá toàn diện sức khỏe của đội ngũ nhân sự.',
      },
      {
        type: 'p',
        text: 'Để tiết kiệm thời gian và đảm bảo quy chuẩn y tế, khâu lấy mẫu xét nghiệm ban đầu được Nhà trường triển khai linh hoạt ngay tại hai cơ sở. Cụ thể, sáng 10/9, công tác lấy máu diễn ra tại cơ sở Linh Xuân và tiếp tục thực hiện vào sáng 11.9 tại cơ sở Sài Gòn.',
      },
      {
        type: 'p',
        text: 'Gói xét nghiệm máu năm nay hỗ trợ đánh giá thể trạng tổng quát với nhiều hạng mục chi tiết, bao gồm: tổng phân tích tế bào máu, định lượng Glucose, chức năng thận, men gan, mỡ máu, Acid Uric và xét nghiệm vi khuẩn H.Pylori.',
      },
      {
        type: 'image',
        src: '/images/tin-2-ngo-thi-phuong-lan.jpg',
        caption:
          'GS.TS Ngô Thị Phương Lan, Hiệu trưởng Nhà trường, thực hiện lấy máu xét nghiệm khám sức khỏe định kỳ - Ảnh: QUỐC TOÀN',
      },
      {
        type: 'p',
        text: 'Sau bước xét nghiệm này, viên chức và người lao động sẽ trực tiếp đến Bệnh viện Đại học Y Dược TP.HCM - Cơ sở 2 để khám chuyên sâu và chẩn đoán hình ảnh. Lịch khám được phân bổ khoa học thành hai đợt: từ ngày 14/9 đến 17/9/2026 và từ ngày 21/9 đến 22/9/2026.',
      },
      {
        type: 'image',
        src: '/images/tin-2-lay-mau.jpg',
        caption: 'Lấy máu xét nghiệm là bước tầm soát lâm sàng quan trọng giúp đánh giá thể trạng tổng quát - Ảnh: QUỐC TOÀN',
      },
      {
        type: 'p',
        text: 'Hoạt động y tế thường niên này được tổ chức nhằm thực hiện nghiêm túc quy định của Luật An toàn, vệ sinh lao động (2015), trong đó yêu cầu người sử dụng lao động có trách nhiệm khám sức khỏe cho nhân sự ít nhất một lần/năm.',
      },
      {
        type: 'p',
        text: 'Thông qua đó, Nhà trường tiếp tục khẳng định cam kết chăm lo đời sống, bảo vệ quyền lợi y tế chính đáng của người lao động. Đây là cơ sở quan trọng để duy trì một môi trường làm việc an toàn, lý tưởng, giúp toàn thể nhân sự an tâm gắn bó và cống hiến lâu dài.',
      },
    ],
  },
  {
    slug: 'minigame',
    category: 'fun-zone',
    type: 'game',
    title: 'Soi dữ kiện: Đoán ai là khách mời',
    // Câu hỏi, thể lệ, giải thưởng: src/data/minigame.js
    excerpt: [
      'Trong Tuần lễ đón Tân sinh viên tại cơ sở Linh Xuân, 5 khách mời sẽ lần lượt góp mặt trong các talkshow từ thứ Hai đến thứ Sáu. Nhưng ai sẽ xuất hiện vào ngày nào? Câu trả lời được giấu trong những dữ kiện về lịch trình của từng khách mời.',
      'Quý thầy cô hãy thử soi dữ kiện, xâu chuỗi thông tin và tìm ra đáp án cho 3 câu hỏi của minigame [tại đây].',
      '3 phần thưởng là voucher Fahasa với tổng giá trị lên đến 4.500.000 đồng đang đợi 3 người có đáp án chính xác và nhanh nhất!',
    ],
    author: '',
    date: '',
    cover: {
      image: '/images/minigame-bia.png',
      fit: 'contain', // ảnh bìa có chữ – không cắt; from/to = màu mép trên/dưới của ảnh để tô phần dư
      from: '#fffffd',
      to: '#fd9763',
      emoji: '🔎',
      word: 'Minigame',
    },
  },
  {
    slug: 'soc-nhan-van',
    category: 'fun-zone',
    type: 'funny',
    title: 'Điều gì Nhân văn có mà trường khác không có?',
    excerpt: 'Đó chính là 2 chú Sóc biết đi, biết tương tác và còn có thể giải đáp thông tin!',
    readMore:
      'Nếu thấy Sóc đang “vi vu” trong Trường, quý thầy cô đừng ngại chào Sóc một tiếng và thử trò chuyện. Vì sao ư? Quý thầy cô hãy [vào đây] để hiểu Sóc lợi hại như thế nào nhé!',
    sapo: 'Đó chính là chú Sóc biết đi, biết tương tác và còn có thể giải đáp thông tin cho sinh viên!',
    author: '',
    date: '',
    cover: {
      image: '/images/funny-soc-nhan-van.jpg',
      alt: 'Robot Sóc Nhân văn đứng giữa hai linh vật Sóc mặc áo USSH',
      from: '#c2410c',
      to: '#7c2d12',
      emoji: '🐿️',
      word: 'Giải trí',
    },
    content: [
      {
        type: 'p',
        text: 'Nếu gần đây quý thầy cô bắt gặp chú Sóc nhỏ đang di chuyển trong khuôn viên trường, thì không phải nhìn nhầm đâu. Sóc Nhân văn đã chính thức “chào sân” tại Ngày hội Chào đón Tân sinh viên Khóa 2026.',
      },
      {
        type: 'image',
        src: '/images/funny-chao-san.jpg',
        alt: 'Robot Sóc Nhân văn chụp ảnh lưu niệm cùng thầy cô và khách mời',
      },
      {
        type: 'p',
        text: 'Ngoài sự đáng yêu, Sóc Nhân văn còn là robot tự động có khả năng di chuyển, nhận diện, tương tác và hỗ trợ cung cấp, giải đáp thông tin cho sinh viên. Nói cách khác, các USSH-er nay đã có thêm một “trợ lý” có thể chủ động đi lại trong khuôn viên Trường thay vì… đứng yên chờ được hỏi.',
      },
      {
        type: 'skills',
        title: 'Sóc Nhân văn biết làm gì?',
        items: [
          { icon: '🚶', label: 'Di chuyển' },
          { icon: '👀', label: 'Nhận diện' },
          { icon: '💬', label: 'Tương tác' },
          { icon: '💡', label: 'Giải đáp thông tin' },
        ],
      },
      {
        type: 'p',
        text: 'Đặc biệt, với các tân sinh viên, Sóc Nhân văn có thể trở thành một người bạn đồng hành trong những ngày đầu làm quen với môi trường mới.',
      },
      {
        type: 'p',
        text: 'Vậy nên, lần tới nếu thấy Sóc đang “vi vu” trong Trường, quý thầy cô và các bạn đừng ngại chào Sóc một tiếng và thử trò chuyện. Biết đâu, người bạn này lại giúp quý thầy cô tìm được thông tin mình đang cần!',
      },
    ],
  },
]

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug)
export const byCategory = (category) => ARTICLES.filter((a) => a.category === category)
export const articleUrl = (article) =>
  article.type === 'game' ? '/ussh-fun-zone/minigame' : `/bai-viet/${article.slug}`

// Phần giới thiệu ngoài trang chủ, luôn trả về mảng các đoạn.
export const excerptOf = (article) => [].concat(article.excerpt ?? article.sapo ?? [])

export const authorLine = (article) =>
  article.author ? [article.authorLabel, article.author].filter(Boolean).join(': ') : ''

export const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }) : ''

// Ước tính thời gian đọc (~200 chữ/phút); trả về null khi bài chưa có nội dung.
export function readingTime(article) {
  if (!article.content?.length) return null
  const blocks = article.content.map((b) =>
    [b.text, b.q, b.a, ...(b.items ?? []).map((i) => `${i.title} ${i.text}`)].join(' '),
  )
  const words = [article.sapo, ...blocks].join(' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}
