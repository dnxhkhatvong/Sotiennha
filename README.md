# Sổ Tiền Nhà

Ứng dụng web theo dõi tiền thuê nhà: còn phải thu và đã thu của từng người thuê, bảng đóng tiền theo tháng, số dư tài khoản ngân hàng và lịch chuyển tiền chủ nhà (3 tháng/lần).

## Dùng
- Mở `index.html` bằng trình duyệt, hoặc bật **GitHub Pages** (Settings → Pages → Branch `main`, thư mục `/root`) để có đường link dùng trên điện thoại.
- Lần đầu mở app sẽ hiện dữ liệu mẫu. Bấm **Xóa dữ liệu mẫu**, rồi vào **Cài đặt** để nhập số dư tài khoản đầu kỳ và tiền thuê từng tầng.
- **+ Ghi thu tiền**: nhập mỗi lần người thuê chuyển tiền (đóng thiếu, đóng nhiều lần hay trả nợ cũ đều được). Tiền đóng được trừ vào tháng nợ cũ nhất trước.
- **Chuyển chủ nhà**: ghi lại mỗi lần chuyển tiền cho chủ nhà.

## Dữ liệu
Dữ liệu chỉ nằm trong trình duyệt của máy đang dùng, **không** lưu lên GitHub. Vào **Sao lưu** để tải file Excel, tải file sao lưu `.json`, hoặc khôi phục dữ liệu khi đổi máy.
