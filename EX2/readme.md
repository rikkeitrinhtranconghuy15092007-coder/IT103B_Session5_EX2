# Báo cáo phân tích lỗi - Bài 2: Sửa lỗi Phân tách Chuỗi CSV do Khoảng trắng Thừa

## 1. Phân tích nguyên nhân kỹ thuật gây lỗi
- **Nguyên lý tính bất biến của chuỗi (String Immutability):** Trong JavaScript, chuỗi là kiểu dữ liệu nguyên thủy (primitive) và có tính bất biến. Các phương thức như `.trim()`, `.toUpperCase()` không làm thay đổi biến chuỗi gốc mà tạo ra và trả về một chuỗi mới hoàn toàn. 
- **Lỗi logic trong mã cũ:** Đoạn mã gọi `rawTicketCode.trim();` và `rawTicketCode.toUpperCase();` nhưng "bỏ rơi" kết quả trả về (không gán vào biến nào). Hệ quả là hệ thống tiếp tục thao tác trên biến `rawTicketCode` vẫn còn nguyên khoảng trắng thừa và chữ in thường. Khi gọi `startsWith("MED-")`, kết quả sai (`false`); đồng thời việc dùng `slice(4, 7)` cứng nhắc cũng sẽ cắt sai vị trí vì vướng các dấu cách ở đầu.

## 2. Bảng kiểm thử (Test Cases)

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế (Mã cũ) | Kết quả đúng mong đợi |
| :--- | :--- | :--- | :--- |
| **1. Mã hợp lệ, có ưu tiên** | `"   med-card-0428-ut   "` | Hợp lệ: False<br>Khoa điều trị: Sai vị trí (chứa khoảng trắng)<br>Chuỗi in: "   med | card... " | Hợp lệ: True<br>Khoa điều trị: CARD<br>Chuỗi in: MED | CARD | 0428 | UT |
| **2. Mã hợp lệ, không ưu tiên** | `" med-nhi-1024 "` | Hợp lệ: False<br>Khoa điều trị: Sai vị trí | Hợp lệ: True<br>Khoa điều trị: NHI<br>Chuỗi in: MED | NHI | 1024 |