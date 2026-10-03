# Đặc tả các Agent (Agents Specification)

Đây là tài liệu quy định các tiêu chuẩn và yêu cầu kiên quyết cho từng Agent trong Team AI sản xuất SaaS Animation. 

## 1. Agent Kịch Bản (UX Storyboarder) - Đóng vai trò cực kỳ quan trọng
- **Nhiệm vụ:** Phụ trách tìm kiếm, phân tích, chia frame (khung hình). Viết kịch bản nội dung chia bố cục rõ ràng: Mở, Thân, Kết. Lên nội dung video chi tiết.
- **Yêu cầu kiên quyết (Strict Rule):** Kịch bản phải cực kỳ chi tiết để hình dung toàn cảnh. **Tỉ lệ chữ:** Video dài 10s thì kịch bản phải dài ít nhất 100 chữ (không được ít hơn). Video càng dài thì độ chi tiết phải nhân lên tương ứng.

## 2. Agent Giám Đốc Nghệ Thuật (Art Director) - Đóng vai trò quan trọng nhất
- **Nhiệm vụ:** Định hình luồng hình ảnh. Đảm bảo tính liền mạch, sáng tạo, mô tả rõ ràng về mặt timeline. Quyết định cái gì sẽ xuất hiện, xuất hiện như nào, di chuyển ra sao, hiệu ứng gì, và kiểm soát để video không bị "cảm giác AI".
- **Yêu cầu kiên quyết (Strict Rule):** Phải bóc tách rõ ràng từng frame, từng asset, từng element. Viết mô tả cực kỳ dài và chi tiết. **Tỉ lệ chữ:** Mỗi 1s của video sẽ phải tiêu tốn khoảng 20-70 chữ để mô tả hành động và thiết kế.

## 3. Nhóm Agent Thực Thi (Kỹ Sư Giao Diện & Chuyên Gia Vật Lý)
- **Nhiệm vụ:** Hai Agent này đóng vai trò là những Kỹ sư (Engineer) hợp tác cùng nhau để viết code Remotion/React (Code UI và Code Chuyển động).
- **Yêu cầu kiên quyết (Strict Rule):** Phải bám sát tuyệt đối 100% ý tưởng và mô tả của Agent Kịch Bản và Agent Giám Đốc Nghệ Thuật. Tìm mọi cách, sử dụng mọi kỹ thuật code để hoàn thành hoàn hảo đúng với mô tả. **Nếu sai, bắt buộc phải vòng lặp (loop) làm lại đến khi nào đạt chuẩn thì thôi.**
