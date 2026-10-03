# Chỉ Đạo Nghệ Thuật & Timeline: Profile Đoàn Hữu Hùng
**Tác giả:** Agent 2 (Giám Đốc Nghệ Thuật / Art Director)
**Quy tắc áp dụng:** Tỉ lệ 1 giây = 20-70 chữ mô tả. Yêu cầu chi tiết tuyệt đối về màu sắc, thông số vật lý, tài nguyên (assets) và sự liền mạch. Tổng thời lượng 60s.

---

## I. HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM)
- **Bảng màu (Color Palette):**
  - **Background (Nền):** #F8FAFC (Xám nhạt tối giản, tạo cảm giác không gian vô cực).
  - **Text Primary (Chữ chính):** #0F172A (Xanh đen đậm, sang trọng và dễ đọc).
  - **Text Secondary (Chữ phụ):** #64748B (Xám nhạt).
  - **Accent Primary (Điểm nhấn):** #2563EB (Xanh dương công nghệ, dành cho tag và highlight).
  - **Accent Success (Hoàn thành/Tiền bạc):** #10B981 (Xanh lá).
  - **Accent Warning (Cảnh báo stress):** #F59E0B (Cam nhạt êm ái).
- **Phông chữ (Typography):**
  - Sử dụng phông chữ **Inter** hoặc **SF Pro Display** làm phông chữ duy nhất.
  - Heading (Tiêu đề): Weight 700 (Bold), Tracking -0.02em.
  - Body (Nội dung): Weight 400 (Regular), Line-height 1.5.
- **Vật lý Chuyển động (Motion Easing):**
  - Cấm tuyệt đối tốc độ đều (linear).
  - Hiệu ứng nảy (Pop/Scale): Sử dụng `spring(mass: 1, stiffness: 120, damping: 14)`.
  - Hiệu ứng trượt (Pan/Slide): Sử dụng `cubic-bezier(0.16, 1, 0.3, 1)` để tạo độ mượt mà khi bắt đầu và thắng lại rất êm ở điểm cuối.
- **Tài nguyên (Assets):**
  - 01 Ảnh Avatar của Đoàn Hữu Hùng (cắt tròn hoàn hảo).
  - 07 SVG Logos: Ps, Ai, Pr, Ae, Figma, Blender, Canva (thiết kế dạng flat, đồng nhất về kích thước 48x48px).
  - 01 SVG Cursor (Mô phỏng con trỏ chuột macOS màu đen viền trắng).

---

## II. TIMELINE CHI TIẾT (FRAME-BY-FRAME CHOREOGRAPHY)

### Phân Cảnh 1: Định Dạng Danh Tính (Giây 00 - 10)
- **Giây 00 - 01:** Khung hình mở ra với tỷ lệ 16:9, độ phân giải 4K. Nền màn hình mang mã màu #F8FAFC. Không gian tĩnh lặng hoàn toàn. Có một lớp nhiễu hạt (noise) cực kỳ mỏng với opacity 2% phủ lên toàn bộ video để giảm cảm giác đồ họa máy tính, tạo chiều sâu như phim điện ảnh.
- **Giây 01 - 02:** Từ giữa màn hình, một thanh tìm kiếm (Search Bar) màu trắng (#FFFFFF) từ từ hiện ra. Viền bo góc (border-radius) là 100px. Đổ bóng nhẹ (box-shadow: 0 4px 12px rgba(0,0,0,0.05)). Bên trái thanh tìm kiếm là icon kính lúp màu #64748B.
- **Giây 02 - 03:** Dấu nháy chuột màu xanh (#2563EB) xuất hiện và nhấp nháy 3 lần với chu kỳ 0.5s/lần. Cùng lúc đó, con trỏ chuột ảo (SimulatedCursor) bắt đầu bay từ góc 5h ngoài màn hình tiến về phía thanh tìm kiếm theo một đường cong Bezier mềm mại, từ từ giảm tốc độ.
- **Giây 03 - 04:** Con trỏ chuột chạm vào thanh tìm kiếm. Một vòng tròn ripple nhỏ màu xám nhạt tỏa ra biểu thị thao tác click. Chữ placeholder "Tìm kiếm hồ sơ..." mờ đi (opacity từ 1 xuống 0).
- **Giây 04 - 06:** Chuỗi ký tự "Đoàn Hữu Hùng" bắt đầu được gõ vào. Tốc độ gõ không đều đặn mà mô phỏng tốc độ tay người thật (mỗi chữ cái chênh lệch nhau từ 0.05s đến 0.1s). Font chữ nhập vào là Inter Regular, kích thước 24px.
- **Giây 06 - 07:** Phím Enter được kích hoạt. Ngay lập tức, thanh tìm kiếm không biến mất (tuân thủ luật liền mạch) mà nó phình to ra theo cả 2 chiều ngang và dọc (Morphing Transition), mở rộng viền bo góc từ 100px xuống 24px, biến thành một khối Card màu trắng khổng lồ chiếm 80% diện tích màn hình.
- **Giây 07 - 08:** Khối Card mở ra hoàn toàn. Góc trên cùng bên trái của khối Card, một bức ảnh Avatar tròn (kích thước 120x120px) nảy lên từ opacity 0 và scale 0 với hiệu ứng spring (bật nhẹ qua kích thước thật rồi thu lại). Xung quanh avatar có một viền gradient siêu mỏng (1px).
- **Giây 08 - 09:** Dòng chữ "Đoàn Hữu Hùng" (Inter Bold, 40px, màu #0F172A) trượt từ dưới lên (translateY: 20px -> 0) ngay cạnh Avatar. Nửa giây sau, thẻ Tag "September" (nền #DBEAFE, chữ #1E40AF) trượt theo lên và chốt vị trí ngay bên dưới tên chính.
- **Giây 09 - 10:** Hai dòng text nhỏ "Sinh năm: 2004" và "Location: Hà Nội, Việt Nam" (Inter Regular, 16px, màu #64748B) fade-in nhẹ nhàng. Camera của khung hình nhích tới trước (scale toàn màn hình lên 1.05) tạo sự chú ý. **[Khoảng lặng 1 giây]** Mọi thứ đứng im để người xem thưởng thức thiết kế sắc nét.

### Phân Cảnh 2: Sự nghiệp và Kỹ năng (Giây 10 - 25)
- **Giây 10 - 12:** Camera tổng bắt đầu trượt dọc xuống dưới (translateY âm) để lộ ra phần diện tích bên dưới của khối Card. Giao diện mượt mà hé lộ khu vực "Career & Education". Một đường line phân cách mờ ngang màn hình (màu #E2E8F0, độ dày 1px) từ từ vạch ra từ giữa sang 2 bên.
- **Giây 12 - 14:** Hai thẻ hình chữ nhật nhỏ hiện ra song song. Thẻ trái ghi "HUST - Ngôn ngữ Anh khoa học kỹ thuật". Con trỏ chuột ảo từ phía trên lướt nhanh xuống thẻ trái này. Khi chuột chạm vào, thẻ này ngay lập tức nổi lên một chút (scale 1.02) và đổ bóng shadow lan rộng ra (hover state). Chữ bên trong nháy sáng (brightness 1.2).
- **Giây 14 - 15:** **[Khoảng lặng 1 giây]** Thẻ HUST giữ nguyên trạng thái nổi lên. Con trỏ chuột nằm im.
- **Giây 15 - 17:** Con trỏ chuột lướt cong sang thẻ bên phải mang tên "Nha Khoa Răng Hà Nội". Quỹ đạo di chuyển tạo thành hình chữ S ngược cực êm. Chuột click vào thẻ. Vòng ripple xám tỏa ra. 
- **Giây 17 - 19:** Ngay khi click, thẻ "Nha Khoa Răng Hà Nội" biến hình (morph) phóng to ra thành một cửa sổ Modal chồng lên trên mọi thứ. Nền đằng sau bị làm mờ nhẹ (backdrop-filter: blur(8px)) theo phong cách kính (glassmorphism). Modal này có nền trắng tinh. Chữ "Graphic Design & Video Editor" hiện lên to, rõ ràng ở giữa modal.
- **Giây 19 - 22:** Ở nửa dưới của modal, 7 icon phần mềm (Ps, Ai, Pr, Ae, Figma, Blender, Canva) bắt đầu hiện ra (staggering animation). Icon Ps hiện trước, 0.1s sau đến Ai, 0.1s sau đến Pr... Mỗi icon đều trượt từ dưới lên (translateY: 30px -> 0) và nảy lên theo hàm spring cực dẻo. Bóng đổ dưới mỗi icon cũng sắc nét dần.
- **Giây 22 - 25:** Một thanh ngang dài (Progress bar) xuất hiện dưới dàn icon. Dòng chữ "GPA 9+" nằm trên thanh. Thanh màu xanh (width 0%) bắt đầu trượt nhanh lên mức 95% trong vòng 1.5 giây, sử dụng easing cubic-bezier chạy nhanh lúc đầu và lết rất chậm khi chạm tới mốc 95%.

### Phân Cảnh 3: Tính cách và Cuộc sống (Giây 25 - 40)
- **Giây 25 - 27:** Camera lập tức zoom out (thu nhỏ giao diện Modal về lại thành thẻ) và pan sang phải. Background xám trôi qua nhanh tạo cảm giác lướt màn hình trên iPad. Khu vực "Lifestyle & Traits" xuất hiện với bố cục lưới (grid layout) 3 ô.
- **Giây 27 - 31:** Ô lưới đầu tiên hiển thị một Slider từ "Introvert" đến "Extrovert". Điểm neo tròn (thumb) đang ở vị trí Introvert lập tức bị con trỏ chuột giữ lấy và kéo trượt mượt mà sang chính giữa. Chữ "Ambivert" màu #2563EB sáng bừng lên khi điểm neo tới đích.
- **Giây 31 - 35:** Ô lưới thứ hai hiển thị một biểu đồ tròn (Pie chart). Biểu đồ bắt đầu vẽ vòng tròn xoay từ 0 độ đến 360 độ. Các phần lát cắt (slices) phình ra với màu sắc êm ái: Xanh dương (Làm việc), Xanh nhạt (Xem phim Hàn), Nâu nhạt (Uống Americano). Các đường kẻ chỉ dẫn (leader lines) vươn ra từ biểu đồ, chữ text từ từ fade-in.
- **Giây 35 - 38:** Ô lưới thứ ba có icon nhịp tim. Khi chuột lướt ngang qua, một cảnh báo "Mức độ Stress: 8/10" nhảy vọt ra. Khối cảnh báo này sử dụng màu #FEF3C7 (nền cam siêu nhạt) và chữ #D97706 (cam đất) để không gây cảm giác tiêu cực. Dòng text phụ "Giấc ngủ kém do thất thường" trôi nhẹ từ phải sang trái như một ticker.
- **Giây 38 - 40:** **[Khoảng lặng 2 giây]** Camera cố định góc nhìn bao quát cả 3 ô lưới. Để người xem cảm nhận sự cân bằng giữa sở thích và áp lực. Không có bất kỳ vật thể nào di chuyển trong 2 giây này ngoại trừ tiếng nhạc nền (Agent 6 sẽ xử lý).

### Phân Cảnh 4: Khát vọng và Động lực (Giây 40 - 55)
- **Giây 40 - 43:** Luồng chuyển cảnh đột phá: Toàn bộ 3 ô lưới ở cảnh trước bị ép lại (squeeze) và đẩy văng lên trên. Nhường chỗ cho không gian "Goals & Motivations". Ngay giữa màn hình trắng muốt, một dãy số màu đen 000.000.000 xuất hiện. 
- **Giây 43 - 46:** Dãy số bắt đầu đếm nhảy điên cuồng (counter animation). Các con số cuộn từ dưới lên như khe cắm máy đánh bạc. Cuối cùng thắng lại mạnh mẽ ở mốc "100.000.000 VNĐ / Tháng". Mỗi khi con số chạm mốc trăm triệu, một vệt viền vàng (gold border) vụt sáng chạy quanh viền số. Cạnh đó, một icon đồng xu (SVG) xoay vòng 360 độ trục Y.
- **Giây 46 - 49:** Con trỏ chuột tiến đến một icon tài liệu tên "Tốt nghiệp Giỏi". Nó nhấp chuột giữ (drag) và kéo tệp này thả (drop) vào trong một icon Thư mục (Folder) có nhãn "Du Học". Khi file được thả vào, thư mục phình to ra (scale 1.2) và nảy lên một cái đắc ý, đồng thời viền thư mục đổi sang màu xanh lá #10B981.
- **Giây 49 - 52:** Một danh sách (List) các mục tiêu phụ xuất hiện bên dưới: "Tự chủ tài chính", "Học AI", "Quản lý chuyên môn cao". Chúng không hiện lên bình thường mà rơi từ trên xuống, đập vào nhau thành một hàng dọc (spring physics with collisions).
- **Giây 52 - 55:** Hai dòng text in đậm: "Hạnh phúc: Tiền 💰" và "Tin tưởng: Sự trung thành". Một luồng sáng vàng (highlighter effect) quét qua hai dòng chữ này từ trái sang phải, giống hệt thao tác dùng bút dạ quang bôi đậm trên giấy. Tốc độ quét là 1.5 giây.

### Phân Cảnh 5: Kết thúc mượt mà (Giây 55 - 60)
- **Giây 55 - 57:** Tính liền mạch đạt đỉnh điểm: Thay vì chuyển cảnh đen, mọi thành phần trên màn hình (chữ, icon, biểu đồ) bắt đầu bị hút ngược (suck-in) vào tâm màn hình. Chúng thu nhỏ lại (scale từ 1 xuống 0) nhanh chóng.
- **Giây 57 - 58:** Ở chính giữa tâm, một nút bấm hình viên thuốc (pill button) màu xanh dương #2563EB xuất hiện. Dòng chữ trắng bên trong: "September's Profile". Con trỏ chuột di chuyển tới giữa và click vào nút.
- **Giây 58 - 59:** Nút bấm vừa bị click lập tức co lại thành một hình tròn hoàn hảo, màu xanh dương chuyển sang màu xanh lá cây #10B981. Một dấu Tick (✔) màu trắng được vẽ ra ở giữa tâm hình tròn bằng hiệu ứng draw-stroke. Một vòng tròn sóng lan tỏa (ripple out) mờ dần.
- **Giây 59 - 60:** Khung cảnh mờ dần về lại màn hình xám nhạt đầu tiên (fade out). Tại góc phải dưới màn hình, dòng chữ "Hermes Agent" cực nhỏ (12px, opacity 0.5) lướt lên, đóng lại một trải nghiệm hoạt hình SaaS 60 giây xuất sắc, sang trọng, đẳng cấp và tuyệt đối không có "mùi AI".
