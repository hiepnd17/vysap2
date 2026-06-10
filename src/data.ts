import { Course, Product, BookArticle, IndustryFellow, Cooperative } from "./types";

export const HERO_STORY = {
  narratorName: "Nguyễn Đức Hiệp",
  titleSuffix: "Nâng tầm nông sản bằng lòng thấu cảm",
  bio: "Người sáng lập VYSAP, chuyên gia tư vấn thương mại hóa nông sản bản địa và Chuyển đổi số nông nghiệp. Với xuất phát điểm từ sự đồng cảm sâu sắc trước cảnh 'được mùa mất giá' của người nông dân vùng cao, Nguyễn Đức Hiệp đã kiến tạo VYSAP 2.0 thành một hệ sinh thái kết nối tri thức glocal và giá trị di sản bản địa.",
  videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Sample public video but styled like a cinematic VYSAP trailer
  chapters: [
    {
      year: "2018",
      title: "Trở về nguồn cội",
      description: "Trong những chuyến đi điền dã lên dốc núi Tây Bắc, Hiệp chứng kiến cảnh những cánh rừng chè Shan Tuyết hàng trăm năm tuổi bị chặt hạ làm củi vì không có đầu ra. Lòng thấu cảm trỗi dậy – đây không chỉ là nông sản, mà là di sản sống của đồng bào dân tộc."
    },
    {
      year: "2021",
      title: "VYSAP 1.0 - Hành trình Kết nối",
      description: "Thành lập VYSAP với sứ mệnh ban đầu là một kênh bán hàng trung gian chất lượng cao. Tuy thương mại hóa thành công nhiều tấn nông sản, Hiệp nhận ra: nếu người nông dân không làm chủ được công nghệ và câu chuyện của chính mình, phát triển bền vững chỉ là ảo ảnh."
    },
    {
      year: "2026",
      title: "Khởi tạo VYSAP 2.0 - Hệ sinh thái Tri thức",
      description: "VYSAP chính thức tái cấu trúc từ mô hình thương mại thuần túy thành Hệ sinh thái Tri thức & Sản phẩm Nông nghiệp Bền vững. Glocal Academy cùng Sàn di sản OCOP ra đời nhằm trao truyền tri thức số, kỹ năng kể chuyện và tư duy glocal trực tiếp đến từng xã viên HTX."
    }
  ],
  commitments: [
    {
      title: "Tri thức Glocal",
      desc: "Tích hợp tinh hoa quản trị toàn cầu (Global) áp dụng thuần thục tại địa phương (Local) để mỗi HTX tự đứng vững trên đôi chân của mình."
    },
    {
      title: "Kinh doanh Thanh bạch",
      desc: "Lấy triết lý sống giản dị, chân thành làm thước đo đạo đức kinh doanh. Minh bạch 100% dòng tiền, nguồn gốc và tác động xã hội."
    },
    {
      title: "Bảo tồn Văn hóa",
      desc: "Nông sản không chỉ là thực phẩm. Mỗi bao bì, mỗi câu chuyện là một đại sứ mang theo tâm hồn, lịch sử và tâm huyết của một vùng đất."
    }
  ]
};

export const GLOCAL_COURSES: Course[] = [
  {
    id: "marketing-mix-4-0",
    title: "Chiến lược Marketing Mix 4.0 cho OCOP",
    subtitle: "Xây dựng vị thế nông sản bản địa trên nền tảng số",
    description: "Khóa học thực chiến giúp nông dân và ban quản trị HTX làm chủ mô hình 4P hiện đại, kết hợp phương thức tiếp cận đa kênh và tối ưu hóa giá trị gia tăng.",
    longDescription: "Sản phẩm OCOP thường sở hữu chất lượng tuyệt hảo nhưng lại yếu thế trong định vị phân khúc và tiếp cận khách hàng đô thị. Khóa học này phá vỡ rào cản đó thông qua việc tái cấu trúc sản phẩm (Product), linh hoạt hóa giá bán theo giá trị tinh thần (Price), mở rộng kênh phân phối số (Place) và thiết lập chiến dịch truyền thông tích hợp (Promotion) mà không tốn nhiều ngân sách.",
    duration: "4 tuần (8 bài học)",
    difficulty: "Trung cấp",
    lecturer: "Nguyễn Đức Hiệp & Cộng sự",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    tags: ["Marketing 4.0", "Định giá thương hiệu", "OCOP 5-sao"],
    lessons: [
      {
        id: "m4-1",
        title: "Tái định nghĩa chữ P đầu tiên: Nông sản di sản",
        duration: "30 phút",
        summary: "Chuyển từ bán 'nông sản thô' sang bán 'sản phẩm trải nghiệm di sản văn hóa'.",
        content: "Bài học này hướng dẫn các HTX chuyển từ tư duy 'bán số lượng' sang tư duy 'bán câu chuyện trải nghiệm'. Chúng ta học cách phân tích tính độc bản (USP) của sâm dây, mật ong bạc hà hoặc trà cổ thụ. Bạn sẽ học được công thức đóng gói sản phẩm tích hợp mã QR truy xuất và tài liệu truyền thông đính kèm nhằm tạo ấn tượng cao cấp ngay từ cái chạm mặt đầu tiên.",
        quiz: {
          question: "Yếu tố cốt lõi nào giúp định vị nông sản OCOP vượt thoát khỏi cuộc chiến cạnh tranh về giá thô thông thường?",
          options: [
            "Tập trung giảm giá tối đa để bán số lượng lớn",
            "Tích hợp câu chuyện di sản, bản sắc văn hóa bản địa vào trải nghiệm sản phẩm",
            "Thay đổi bao bì sang chất liệu nhựa bóng để nhìn lấp lánh hơn",
            "Mượn tên thương hiệu nước ngoài để dán lên nhãn mác"
          ],
          correctAnswer: 1,
          explanation: "Nối kết văn hóa bản địa vào sản phẩm (Nông sản di sản) chính là giá trị độc bản không thể sao chép, giúp nâng cao giá trị thặng dư mà không cần phải sa vào cuộc chiến hạ giá thô."
        }
      },
      {
        id: "m4-2",
        title: "Định giá dựa trên cảm xúc và giá trị gia tăng",
        duration: "40 phút",
        summary: "Phương pháp thoát ly định giá nông sản theo cân nặng và thị trường thương lái.",
        content: "Nông dân hay bị thương lái ép giá vì định giá phụ thuộc thiên tai, mùa vụ. Bài học này dạy phương pháp định giá dựa trên giá trị nhận thức (Perceived Value Pricing). Chúng ta định giá sản phẩm bằng cách đo lường chi phí xã hội giải quyết, công sức bảo tồn đa dạng sinh học và giá trị cảm xúc của khách hàng mục tiêu để tạo ra các gói sản phẩm biên lợi nhuận tốt.",
        quiz: {
          question: "Phương pháp định giá Perceived Value Pricing dựa trên cơ sở nào sau đây?",
          options: [
            "Cộng dồn chi phí sản xuất rồi nhân đôi lên",
            "Lấy giá của đối thủ lớn nhất trừ đi 20%",
            "Đo lường giá trị văn hóa, sự kỳ công và lợi ích sức khỏe mà khách hàng cảm nhận được",
            "Hoàn toàn phụ thuộc vào mức giá do thương lái tại chợ đầu mối đưa ra"
          ],
          correctAnswer: 2,
          explanation: "Perceived Value Pricing định giá dựa trên tổng thể giá trị trải nghiệm, sự nâng niu, tính độc bản và lợi ích sức khỏe mà khách hàng thấu cảm được từ sản phẩm của bạn."
        }
      }
    ]
  },
  {
    id: "storytelling-nong-dan",
    title: "Kỹ năng kể chuyện thương hiệu cho nông dân",
    subtitle: "Hô biến nông sản thành đại sứ văn hóa",
    description: "Lớp học thực hành cầm tay chỉ việc giúp bà con xã viên chắt lọc chất liệu mộc mạc từ đời sống ruộng đồng để dệt nên câu chuyện lay động trái tim người tiêu dùng.",
    longDescription: "Ai là người hiểu nông sản nhất? Chính là người làm ra nó. Nhưng họ thường thiếu ngôn ngữ truyền thông hiện đại. Khóa học này không biến nông dân thành nhà văn chuyên nghiệp, mà giúp họ tìm thấy vẻ đẹp chân thật, mộc mạc trong quá trình lao động hằng ngày, biến cỏ cây, bùn đất và s sương sớm thành những chất liệu tiếp thị cảm xúc quyền năng nhất.",
    duration: "3 tuần (6 bài học)",
    difficulty: "Cơ bản",
    lecturer: "Nguyễn Đức Hiệp",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=600",
    tags: ["Storytelling", "Nông dân số", "Thấu cảm"],
    lessons: [
      {
        id: "st-1",
        title: "Tìm kiếm 'Hạt ngọc' trong bùn đất đời thường",
        duration: "25 phút",
        summary: "Nhận diện những chi tiết đặc sắc trong quy trình nuôi trồng để xây dựng cốt truyện.",
        content: "Bài học hướng dẫn nông dân ghi chép nhật ký nông tác bằng hình ảnh đơn giản. Những giọt mồ hôi trên nương trà lúc 5 giờ sáng, vết chai sần của đôi bàn tay người già Dao đỏ, hay phương thức 'bắt sâu bằng tay' bảo vệ nguồn nước. Đây là những chất liệu chân thực nhất giúp xóa bỏ khoảng cách giữa người phố thị và người bản địa.",
        quiz: {
          question: "Chất liệu câu chuyện chân thật nhất của nông sản mộc mạc thu hút khách hàng đến từ đâu?",
          options: [
            "Thuê diễn viên chuyên nghiệp quay clip giả cảnh làm nông",
            "Những chi tiết sinh hoạt, bảo vệ đất đai, chăm sóc cây trái tự nhiên hàng ngày của nông dân",
            "Vẽ ra câu chuyện lịch sử không có thật để gây giật gân",
            "Sao chép y hệt kịch bản kể chuyện của các thương hiệu châu Âu"
          ],
          correctAnswer: 1,
          explanation: "Sự chân thật từ đời sống lao động thực tế, sự chăm chút tỉ mẩn đối với cây trồng vật nuôi là sợi dây kết nối lòng thấu cảm mạnh mẽ nhất với khách hàng."
        }
      },
      {
        id: "st-2",
        title: "Công thức viết câu chuyện OCOP trên một mặt giấy",
        duration: "35 phút",
        summary: "Kỹ thuật viết ngắn gọn 300 từ tích hợp trên bao bì sản phẩm nông sản.",
        content: "Một câu chuyện bao bì hoàn hảo cần: (1) Bối cảnh địa phương độc đáo, (2) Thử thách của bà con nông dân, (3) Giải pháp canh tác tử tế và (4) Lời cam kết tương lai. Học viên thực hành điền vào form mẫu đơn giản để sở hữu ngay bản phác thảo câu chuyện thương hiệu của chính dòng sản phẩm mình làm ra.",
        quiz: {
          question: "Một câu chuyện đính kèm trên bao bì OCOP nên đạt tiêu chí nào?",
          options: [
            "Dài 5 trang giấy, viết nhiều từ chuyên ngành kỹ thuật sinh hóa",
            "Ngắn gọn, khơi gợi cảm xúc bản địa chân thật, có thông điệp cam kết tử tế rõ ràng",
            "Chỉ cần liệt kê bảng phân tích dinh dưỡng hóa học là đủ",
            "Tập trung khen ngợi các ban ngành địa phương liên tục"
          ],
          correctAnswer: 1,
          explanation: "Không gian bao bì có giới hạn. Một câu chuyện súc tích, chạm lòng thấu cảm, nhấn mạnh tính cam kết tử tế và bản sắc xứ sở luôn mang lại hiệu quả truyền thông cao nhất."
        }
      }
    ]
  },
  {
    id: "ai-digital-htx",
    title: "Ứng dụng AI và Công nghệ số trong quản lý HTX",
    subtitle: "Số hóa hợp tác xã không khoảng cách",
    description: "Giải mã Trí tuệ nhân vật (AI) và các nền tảng đám mây tinh gọn thành công cụ hỗ trợ người nông dân kiểm soát dòng tiền, lập kế hoạch mùa vụ và bảo vệ thương hiệu.",
    longDescription: "Nhiều chủ nhiệm HTX cảm thấy công nghệ số là thứ gì đó ngoài tầm với. Khóa học này thiết kế riêng để tối giản hóa AI. Bạn sẽ được hướng dẫn dùng các trợ lý AI thông dụng nhất để soạn thảo báo cáo, thiết kế nhanh ảnh nông sản đăng mạng xã hội, quản lý lượng phân bón bằng bảng tính đơn giản và tối ưu hóa vận tải kết nối kho bãi glocal.",
    duration: "4 tuần (8 bài học)",
    difficulty: "Chuyên sâu",
    lecturer: "Nguyễn Đức Hiệp & Chuyên gia Chuyển đổi số",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600",
    tags: ["Trí tuệ nhân tạo", "Quản trị HTX", "Nông nghiệp 4.0"],
    lessons: [
      {
        id: "ai-1",
        title: "Sử dụng AI thiết kế nội dung quảng bá nông sản",
        duration: "35 phút",
        summary: "Cách viết câu nhắc (prompt) đơn giản để AI phác thảo email chào hàng và bài đăng Facebook về OCOP.",
        content: "Không cần thuê phòng Marketing đắt đỏ. Bạn chỉ cần học cấu trúc câu lệnh vàng: 'Tôi là chủ nhiệm HTX chè Shan Tuyết Hà Giang. Hãy viết một bức thư gửi cho chủ hệ thống quà tặng hữu cơ Hà Nội để giới thiệu sản phẩm mới...'. Bài học sẽ dẫn dắt từng bước thực hành tương tác trực quan.",
        quiz: {
          question: "Ứng dụng AI gần gũi và hiệu quả tức thì nhất cho ban quản trị HTX ít nhân lực là gì?",
          options: [
            "Thay thế hoàn toàn nông dân ngoài ruộng bằng robot tự hành",
            "Soạn thảo kịch bản truyền thông, tự động hoá lịch bài đăng mạng xã hội và dịch thuật câu chuyện ra tiếng Anh để xuất khẩu",
            "Viết thuật toán blockchain tự đào tiền ảo",
            "Xây dựng máy bay phản lực phun tưới thông minh siêu trường"
          ],
          correctAnswer: 1,
          explanation: "AI giúp tối ưu hoá năng lực sáng tạo nội dung, dịch thuật và truyền thông – gỡ bỏ rào cản nhân lực và ngân sách cho các HTX nông nghiệp vừa và nhỏ."
        }
      },
      {
        id: "ai-2",
        title: "Nhật ký canh tác số hoá qua Cloud",
        duration: "30 phút",
        summary: "Sử dụng các biểu mẫu trực tuyến để lưu trữ chứng nhận và dữ liệu tăng trưởng cây trồng.",
        content: "Học cách thiết lập hệ cơ sở dữ liệu lưu giữ trên đám mây hoạt động offline-online để ghi nhận chuẩn thực hành nông nghiệp tốt (VietGAP, hữu cơ). Việc này giúp HTX sẵn sàng cung cấp mã QR minh bạch thông tin bất cứ khi nào bên mua yêu cầu xuất khẩu kiểm tra.",
        quiz: {
          question: "Việc số hoá nhật ký nông tác trên các biểu mẫu thông minh đám mây mang lại lợi ích trực tiếp nào đối với việc bán hàng?",
          options: [
            "Giúp rau quả tự nhiên chín nhanh gấp đôi",
            "Không có lợi ích gì, chỉ tốn thời gian nhập liệu phức tạp",
            "Chứng minh sự minh bạch quy trình, tạo lòng tin tuyệt đối để dễ dàng truy xuất nguồn gốc xuất xứ khi xuất khẩu",
            "Để lách luật sở hữu trí tuệ của các quốc gia khác"
          ],
          correctAnswer: 2,
          explanation: "Nhật ký nông tác số hóa lưu trữ vững chắc trên đám mây là minh chứng trực quan nhất khẳng định sự tử tế trong canh tác, giúp sản phẩm vượt qua các hàng rào kiểm định khắt khe."
        }
      }
    ]
  }
];

export const CURATED_OCOP_PRODUCTS: Product[] = [
  {
    id: "tra-shan-tuyet",
    name: "Trà Shan Tuyết Cổ Thụ Tây Côn Lĩnh",
    category: "Thức uống Di sản",
    origin: "HTX Chè Cây cao Hà Giang - Đồng bào Dao đỏ",
    price: 380000,
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=600",
    story: "Nằm mờ ảo trong những dải sương mù phủ kín đỉnh Tây Côn Lĩnh ở độ cao trên 1800m, những cây chè Shan Tuyết cổ thụ đại thụ từ 200 đến 400 năm tuổi lặng lẽ cắm rễ sâu vào sườn đá khô cằn. Mỗi búp trà ngậm trọn sương sớm se lạnh và ánh mặt trời lấp lánh vùng biên, phủ lên mình lớp lông tơ trắng mịn màng như tuyết. Đồng bào dân tộc Dao đỏ đã gìn giữ nương trà này qua bao đời như báu vật thiêng liêng từ trời đất. Trà có hương thơm tựa như mật ong rừng, hậu vị ngọt sâu lắng sâu thẳm nơi cổ họng kéo dài bất tận.",
    process: [
      "Thu hái thủ công buổi sớm mai: tuyển lựa tiêu chuẩn 'một tôm một lá' khi sương còn chưa tan.",
      "Làm héo tự nhiên: trải đều trên nong tre lót lá râm mát để giữ nguyên tinh chất diệp lục bản địa.",
      "Sào tay truyền thống: nghệ nhân Dao đỏ trực tiếp đảo trà trên chảo gang nóng rực bằng tay trần để cảm nhận nhiệt độ.",
      "Vò tay định hình tạo cánh: vò nhẹ sương tạo sóng giữ nguyên lớp tuyết tơ mộc mạc."
    ],
    culturalValue: "Chè Shan Tuyết là linh hồn đời sống tinh thần của người Dao đỏ Tây Côn Lĩnh. Cây chè gắn với lễ cấp sắc, với lời ca hát giao duyên và là chiếc cầu nối gắn kết cộng đồng bảo tồn rừng đầu nguồn biên viễn.",
    specs: {
      "Xuất xứ": "Vị Xuyên, Hà Giang",
      "Độ tuổi cây": "250 - 400 năm tuổi",
      "Tiêu chuẩn": "OCOP 5 Sao, Canh tác Hữu cơ tự nhiên 100%",
      "Trọng lượng": "Hộp thiếc 100g bảo tồn hương vị tốt"
    }
  },
  {
    id: "mat-ong-bac-ha",
    name: "Mật Ong Bạc Hà Cao Nguyên Đá Đồng Văn",
    category: "Thực phẩm Dinh dưỡng",
    origin: "HTX Ong vàng Mèo Vạc - Hà Giang",
    price: 450000,
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600",
    story: "Cứ mỗi độ đông về, khi những cơn gió bấc thổi sương buốt lạnh thấu xương lùa qua các kẽ đá tai mèo đen thẫm, hoa bạc hà dại màu tím phớt lại bùng lên nở rộ khắp dải thung lũng của cao nguyên đá Đồng Văn. Những chú ong nội cần mẫn, chịu lạnh phi thường bay lượn hút nhụy hoa bạc hà hoang dã để kết tinh nên loại mật ong có sắc vàng chanh óng ánh ngả xanh lá cây vô cùng kỳ ảo. Mật ong có hương thơm mát lạnh sảng khoái dịu nhẹ tựa tinh chất bạc hà, vị ngọt thanh mát thanh nhã không khé cổ.",
    process: [
      "Chăn thả ong bán hoang dã dọc sườn núi đá tai mèo cao su.",
      "Khai thác mật bằng máy quay ly tâm thủ công khi mật đã chín vít nắp hoàn toàn.",
      "Lọc sáp ong mộc bằng màng vải bông truyền thống, không gia nhiệt công nghiệp gây mẻ mất enzyme quý tự nhiên.",
      "Đóng chai thủy tinh đóng niêm phong nút gỗ bảo vệ môi trường."
    ],
    culturalValue: "Mật ong bạc hà đại diện cho sức sống kiên cường vượt lên nghịch cảnh của hoa lá và con người vùng cao nguyên đá Đồng Văn - nơi 'Sống trên đá khát, chết vùi trong đá', biến cái lạnh giá khắc nghiệt thành mật ngọt tinh hoa.",
    specs: {
      "Xuất xứ": "Mèo Vạc, Hà Giang",
      "Thực vật hút mật": "Hoa bạc hà dại (Elsholtzia cristata)",
      "Tiêu chuẩn": "OCOP 4 Sao, Chỉ dẫn địa lý bảo hộ",
      "Thể tích": "Chai thủy tinh 500ml"
    }
  },
  {
    id: "nep-tu-le",
    name: "Gạo Nếp Tú Lệ Tinh Hoa Thung Lũng",
    category: "Lương thực Đặc sản",
    origin: "HTX Nông nghiệp sạch Tú Lệ - Đồng bào Thái, Yên Bái",
    price: 95000,
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=600",
    story: "Nằm dưới chân đèo Khau Phạ hùng vĩ, thung lũng Tú Lệ được trời phú cho dòng nước suối mát lạnh chảy từ lòng núi đá vôi cùng biên độ nhiệt ngày đêm chênh lệch cực lớn. Nếp Tú Lệ (hay còn gọi là nếp 'Khẩu Tan Đón') nức tiếng xa gần bởi hạt gạo to tròn, trắng trong như sương mai. Khi đồ thành xôi, hạt cơm nếp bóng bẩy quyện chặt lấy nhau dẻo quánh, dẻo thơm ngào ngạt bay vang khắp bản làng, dẫu để nguội vẫn giữ nguyên độ mềm thơm độc đáo mà không hề bị khô cứng cứng đầu.",
    process: [
      "Canh tác truyền thống: chỉ trồng 1 vụ duy nhất mỗi năm bằng nước suối tự nhiên.",
      "Sử dụng phân bón hữu cơ ủ hoai bản địa, không có dư lượng bảo vệ thực vật hóa học.",
      "Thu hoạch gặt tay, phơi khô trực tiếp trên sân đất nhà sàn lót cót mộc.",
      "Xát mộc giữ nguyên lớp cám lỏng giàu dinh dưỡng lý tưởng."
    ],
    culturalValue: "Nếp Tú Lệ là vật phẩm cúng tế tổ tiên không thể thiếu trong Lễ mừng cơm mới của người Thái trắng Yên Bái. Nó biểu trưng cho sự ấm no, gắn kết gia đình và lịch sử định cư dài lâu bên những thửa ruộng bậc thang tuyệt mỹ.",
    specs: {
      "Xuất xứ": "Thung lũng Tú Lệ, Văn Chấn, Yên Bái",
      "Giống lúa": "Khẩu Tan Đón cổ truyền",
      "Tiêu chuẩn": "OCOP 4 Sao thương hiệu xứ sở",
      "Trọng lượng": "Túi giấy kraft thân thiện 1kg"
    }
  },
  {
    id: "tinh-dau-sa-vysap",
    name: "Tinh Dầu Sả Chanh VYSAP Eco-Pure",
    category: "Chăm sóc Sức khỏe",
    origin: "Xưởng sản xuất xanh VYSAP & HTX Dược liệu Hòa Bình",
    price: 120000,
    imageUrl: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
    story: "Được chưng cất trực tiếp từ giống sả chanh bản địa trồng trên những vùng đồi đất sỏi bạt ngàn tại Hòa Bình, Tinh dầu sả chanh VYSAP mang theo sứ mệnh gia tăng chuỗi giá trị cho vùng đồi trọc nghèo nàn. Sản phẩm bảo vệ sức khỏe gia đình cực tốt, lọc sạch không khí, chống muỗi và đem lại cảm giác yên lành tĩnh mịch tựa như đang dạo bước giữa cánh đồng quê buổi hoàng hôn.",
    process: [
      "Tận thu nông sản phụ phẩm từ mùa vụ thu hoạch sả tươi của bà con trồng đồi dốc.",
      "Chưng cất lôi cuốn hơi nước áp suất thấp trong thiết bị inox 304 khép kín hoàn toàn.",
      "Tách nước ly tâm ba cấp độ giữ nguyên lượng citral tự nhiên cao hơn 75%.",
      "Không pha cồn công nghiệp hay hương liệu nhân tạo."
    ],
    culturalValue: "Sản phẩm là mô hình kinh tế tuần hoàn mẫu mực, tận dụng nguồn nông sản dồi dào giải quyết sinh kế nông nhàn cho phụ nữ dân tộc Mường nghèo khó tại vùng cao Hòa Bình.",
    specs: {
      "Xuất xứ": "Lạc Sơn, Hoà Bình",
      "Thành phần": "Tự nhiên tinh khiết 100% chiết xuất sả chanh",
      "Tiêu chuẩn": "Sản phẩm thế mạnh hỗ trợ nông dân VYSAP",
      "Dung tích": "Chai nhỏ giọt 20ml bảo quản tối ưu"
    }
  }
];

export const THANH_BACH_BOOKS: BookArticle[] = [
  {
    id: "loi-song-gian-di",
    title: "Triết lý 'Thanh bạch' và Sứ mệnh Nông nghiệp Tận tâm",
    subtitle: "Học tập lối sống giản dị của Chủ tịch Hồ Chí Minh trong kinh doanh thời đại số",
    summary: "Tại sao sự thanh bạch, tối giản và lòng chân thành tuyệt đối chính là chìa khóa mở đường bền vững nhất cho thương hiệu nông nghiệp bản địa hôm nay.",
    content: "Chữ 'Thanh bạch' mang nghĩa trong lòng thuần khiết, sáng sủa, không vẩn đục tư lợi cá nhân. Học tập tấm gương của Bác Hồ vĩ đại từ phong thái làm việc giản dị tới lòng thấu cảm vô bờ đối với người nông dân gieo trồng lúa nước, VYSAP 2.0 đặt đạo đức 'Lấy chân thành làm gốc' vào mọi hoạt động phát triển của mình.\n\nTrong thời đại bão hòa thông tin và kỹ thuật tiếp thị xảo trá phổ biến, người tiêu dùng ngày càng mệt mỏi với những lời thổi phồng, phóng đại. Sự quay về với giá trị mộc mạc, minh bạch nguồn gốc dòng tiền, tôn vinh công sức thật của người nông sản và bán đúng giá trị trải nghiệm chính là một phong cách Thanh Bạch kiểu mới của doanh thương tiến bộ.\n\nMột doanh nghiệp nông nghiệp Thanh bạch không tìm mọi cách ép chặt giá thu mua của nông dân xuống đáy để tăng tối đa biên lợi nhuận của mình. Ngược lại, họ đồng hành xây dựng năng lực tự chủ cho người nông dân, chia sẻ bình đẳng thặng dư giá trị và luôn giữ nếp sống khiêm nhường, gần gũi nhất với làng quê.\n\nĐó mới chính là dòng chảy bền bỉ, tạo nên sự dẻo dai giúp nông sản Việt kiêu hãnh vươn tầm Glocal.",
    category: "Học tập Bác Hồ",
    author: "Nguyễn Đức Hiệp",
    date: "15/05/2026",
    readingTime: "4 phút đọc",
    quote: "Sự vĩ đại của con người không đo bằng tiền bạc vật chất chất đống, mà đo bằng chiều sâu lòng thấu cảm đối với đồng bào và sự thanh khiết trong từng hành động bình thường."
  },
  {
    id: "triet-ly-kinh-doanh-xanh",
    title: "Nông nghiệp thấu cảm: Đã đến lúc ngưng đối xử với Đất đai như mỏ khai thác",
    subtitle: "Tìm về triết lý cộng sinh bền vững và lối canh tác tôn trọng tự nhiên",
    summary: "Áp lực năng lượng hóa chất đang làm cạn kiệt tầng đất mẹ. Triết lý nông nghiệp thấu cảm hướng chúng ta đối xử với đất đai, nguồn nước như những tế bào sống cần yêu thương nâng niu bảo bọc.",
    content: "Nông nghiệp thấu cảm (Empathetic Agriculture) bắt đầu bằng việc nhìn thấy nỗi đau của đất đai bị thoái hóa, xói mòn do lạm dụng phân bón vô cơ và thuốc trừ sâu hóa học trong mưu cầu tăng năng suất ngắn hạn. Chúng ta cần thay đổi tư duy từ 'nhận lấy tối đa' sang 'cộng sinh hồi dưỡng'.\n\nTại các vùng canh tác trà Shan Tuyết Hà Giang hay gạo Nếp Tú Lệ Yên Bái, VYSAP khuyến khích bà con tôn trọng tuyệt đối tự nhiên bản địa. Chè cổ thụ tự sinh tự dưỡng dắt rễ sâu qua đá ong, tuyệt đối không bón phân hóa học. Lúa nếp Tú Lệ chỉ làm một vụ để có thời gian bồi hoàn phù sa mát lành cho vụ mùa sau.\n\nKhi chúng ta thấu cảm lòng đất mẹ bao dung, đất mẹ sẽ hồi đáp lại bằng những hạt gạo trắng ngần dẻo thơm dịu ngọt nhất, những búp chè ngậm tuyết đậm đà sinh lực tinh khiết tốt lành nhất cho sức khỏe con người.",
    category: "Triết lý kinh doanh",
    author: "Lâm Uyên - Đồng sáng lập VYSAP",
    date: "28/05/2026",
    readingTime: "5 phút đọc",
    quote: "Đất đai là người mẹ hiền thầm lặng nuôi nấng muôn loài. Hãy gieo trồng bằng lòng thấu cảm thấu kính, ta sẽ gặt hái trái ngọt hạnh phúc dồi dào viên mãn."
  },
  {
    id: "giat-ao-ve-que",
    title: "Lối sống tối giản: Hướng đi chữa lành cho tâm hồn hiện đại",
    subtitle: "Học cách trân quý hạnh phúc từ những điều mộc mạc xung quanh ta",
    summary: "Trải nghiệm rũ bỏ gánh nặng đô thị chật chội để đắm mình vào hương sương đồng nội, tìm lại sự an yên thanh tịnh và nâng đỡ nông thôn kết nối tử tế.",
    content: "Lối sống giản đơn (Mindful Simplicity) không có nghĩa là khắc khổ, nghèo nàn, mà là sự lựa chọn thông thái biết thế nào là đủ. Khi giảm bớt những nhu cầu vật chất xa hoa nhân tạo, con người có thêm không gian rộng lớn để dung chứa vẻ đẹp trong trẻo của khoảnh khắc đời thường.\n\nMong mỏi lớn nhất của VYSAP không chỉ dừng ở việc bán những hộp chè, hũ mật tốt mà quan trọng là tạo động lực hướng người đô thị sẻ chia lối sống điềm tĩnh thanh bạch. Mỗi hớp trà Shan Tuyết pha chậm lúc rảnh rỗi, mỗi thìa mật ong chanh buổi sớm chính là khoảnh khắc nhỏ giải tỏa căng thẳng nhịp sống guồng máy bận rộn hằng ngày.\n\nTrân quý nông sản cũng chính là trân quý sự kỳ công của tự nhiên và sức lao động chân chất chân thành của con người nông thôn Việt.",
    category: "Lối sống giản dị",
    author: "Nguyễn Đức Hiệp",
    date: "02/06/2026",
    readingTime: "3 phút đọc",
    quote: "Bớt một chút ham muốn vật chất phù phiếm bên ngoài, là ta thêm một phần tự do tự sinh thực sự vững chãi trong tâm hồn."
  }
];

export const INDUSTRY_FELLOWS: IndustryFellow[] = [
  {
    id: "fellow-1",
    name: "ThS. Trịnh Thu Hà",
    role: "Chuyên gia Thiết kế Bao bì & Định hình Thương hiệu Nông sản",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    bio: "Hơn 12 năm tư vấn kết nối đổi mới nhận diện bao bì vật liệu sinh học tự hủy thân thiện môi trường cho các chuỗi nông sản đặc sản vùng cao miền Bắc.",
    specialties: ["Eco-Branding", "Bao bì sợi chuối", "Truyền thông thị giác"],
    connectionType: "Tư vấn thiết kế"
  },
  {
    id: "fellow-2",
    name: "TS. Hoàng Minh Trí",
    role: "Giám đốc Trung tâm Nghiên cứu Công nghệ Thực phẩm Hữu cơ",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
    bio: "Chuyên khảo sát và hỗ trợ chuyển giao công nghiệp sấy lạnh, tách nước chân không bảo tồn nguyên vẹn dược tính tự nhiên cho nông sản sấy thô.",
    specialties: ["Sấy lạnh bảo tồn", "Mô hình kinh tế tuần hoàn", "Chuẩn VietGAP"],
    connectionType: "Công nghệ thực phẩm"
  },
  {
    id: "fellow-3",
    name: "Kỹ sư Lê Quốc Khánh",
    role: "Chuyên gia Chuyển đổi số & Tự động hoá nông sản HTX",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    bio: "Người thiết kế hệ thống báo cáo sản lượng, truy xuất truy nguồn tự động QR code tiết kiệm nguồn lực dành riêng cho bà con dân tộc thiểu số dễ dàng thấu hiểu.",
    specialties: ["Hệ thống QR truy xuất", "E-marketing HTX", "Google Cloud Sheets"],
    connectionType: "Chuyển đổi số"
  }
];

export const GLOCAL_MAP_COOPERATIVES: Cooperative[] = [
  {
    id: "htx-ha-giang",
    name: "HTX Chè cổ thụ Tây Côn Lĩnh",
    latitude: 22.8,   // Mapping points correctly for schematic map or SVG
    longitude: 104.9,
    province: "Hà Giang",
    representative: "Bác Sùng Thào Mìn (Người Dao Đỏ)",
    mainProduct: "Trà Shan Tuyết Cổ Thụ (OCOP 5 Sao)",
    story: "Nơi gìn giữ hơn 30ha rừng trà cổ thụ linh thiêng tuổi đời hàng trăm năm, đồng hành xóa đói giảm nghèo bền vững cho 45 hộ dân thiểu số Dao đỏ dốc đá.",
    established: "2019",
    memberCount: 45,
    phone: "0982.345.xxx"
  },
  {
    id: "htx-meo-vac",
    name: "HTX nuôi nuôi ong mật bạc hà Mèo Vạc",
    latitude: 23.1,
    longitude: 105.4,
    province: "Hà Giang",
    representative: "Chị Thào Thị Mai",
    mainProduct: "Mật ong bạc hà đá tai mèo cổ truyền (OCOP 4 Sao)",
    story: "Bảo tồn đàn ong nội dã dại kiên cường, kiến tạo sinh kế xanh tại các bản làng Mông khô cằn sỏi đá cheo leo đỉnh Mã Pí Lèng hùng tráng.",
    established: "2021",
    memberCount: 32,
    phone: "0915.228.xxx"
  },
  {
    id: "htx-tu-le",
    name: "HTX nông nghiệp sạch thung lũng Tú Lệ",
    latitude: 21.8,
    longitude: 104.3,
    province: "Yên Bái",
    representative: "Nghệ nhân Hoàng Thị Văn (Người Thái)",
    mainProduct: "Gạo Nếp Tú Lệ - Khẩu Tan Đón cổ truyền (OCOP 4 Sao)",
    story: "Canh tác truyền thống trân quý nước suối đèo Khau Phạ, cam kết bảo tồn hương vị gạo dẻo nức tiếng lưu giữ tâm hồn xứ sở Mường Lò.",
    established: "2020",
    memberCount: 60,
    phone: "0976.885.xxx"
  },
  {
    id: "htx-hoa-binh",
    name: "HTX Dược liệu sả chanh Lạc Sơn",
    latitude: 20.6,
    longitude: 105.4,
    province: "Hoà Bình",
    representative: "Chị Quách Thị Út (Người Mường)",
    mainProduct: "Tinh dầu sả chanh Eco-Pure tuần hoàn",
    story: "Ứng dụng công nghệ ép nấu tinh dầu sả sạch giải quyết việc làm ổn định ngoài mùa vụ trồng trọt cho 25 phụ nữ đơn thân nghèo tại địa phương bản xứ.",
    established: "2022",
    memberCount: 25,
    phone: "0934.112.xxx"
  }
];
