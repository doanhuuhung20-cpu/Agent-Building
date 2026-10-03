# SaaS Animation Pipeline

Luồng làm việc (Pipeline) của Team AI chuyên sản xuất SaaS Motion Graphics bằng Remotion. Quy trình được thiết kế để đảm bảo tuyệt đối hai yếu tố: **Nhịp điệu (Pacing)** và **Tính liền mạch (Continuity)**.

## 1. Lên Kịch Bản (Pre-production)
- **Đầu vào:** Yêu cầu từ người dùng (Chủ đề, tính năng cần show).
- **Thực thi (Agent Kịch Bản):** Viết kịch bản theo luồng thao tác (User Flow). Xác định thời gian cho từng hành động và phân bổ các "khoảng lặng" hợp lý để mắt người xem kịp xử lý thông tin.

## 2. Thiết Kế Tĩnh (Design)
- **Thực thi (Agent Giám Đốc Nghệ Thuật):** Quyết định thẩm mỹ tổng thể (màu sắc, phông chữ, ánh sáng, nền).
- **Thực thi (Agent Kỹ Sư Giao Diện):** Dùng code (React/Tailwind) dựng lại các thành phần giao diện sắc nét chuẩn pixel (UI components) thay vì dùng ảnh tĩnh.

## 3. Thổi Hồn & Liền Mạch (Choreography - Trọng tâm)
- **Thực thi (Agent Đạo Diễn Quay Phim):** Thiết lập camera di chuyển "một cú máy" (one-shot), lướt mượt mà theo các điểm nhìn trọng tâm, không cắt cảnh đột ngột.
- **Thực thi (Agent Vật Lý & Nhịp Điệu):** Áp dụng các định luật vật lý (gia tốc, độ nảy - spring) vào các chuyển động. Dùng kỹ thuật biến hình (morphing) để giao diện chuyển đổi mượt mà, liền mạch.

## 4. Hậu Kỳ (Post-production)
- **Thực thi (Agent Âm Thanh):** Đồng bộ âm thanh (tiếng click, tiếng swoosh chuyển cảnh) khớp chính xác với từng khung hình chuyển động ở Bước 3.

## 5. Kiểm Định & Xuất Xưởng (QA & Render)
- **Thực thi (Agent Kiểm Định):** Đánh giá video dựa trên quy tắc "Sự tiết chế" (Restraint). Bắt buộc phải mượt, không rối mắt. Báo lỗi và yêu cầu làm lại nếu vi phạm.
- **Đầu ra:** Render bằng Remotion cho ra file video `.mp4` hoàn chỉnh (60fps).
