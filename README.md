# Sổ Tiền Nhà

Ứng dụng web theo dõi tiền thuê nhà. Dữ liệu lưu trên **Google Sheet**. App có các phần:
- tiền còn phải thu và đã thu của từng người thuê;
- bảng đóng tiền theo tháng;
- số dư tài khoản ngân hàng;
- lịch chuyển tiền chủ nhà, 3 tháng một lần;
- các khoản nạp thêm / rút ra.

**Quyền truy cập:**
- **Ai có link app đều xem được** số liệu.
- **Chỉ quản trị viên** nhập đúng **mã PIN** mới ghi thu tiền, sửa hay xóa được. Mã PIN được kiểm tra trên Google, không nằm trong code này.

## 1. Tạo Google Sheet và cầu nối (làm 1 lần)
1. Vào https://sheets.new để tạo Sheet mới, đặt tên, ví dụ "Sổ tiền nhà".
2. Chọn **Tiện ích mở rộng → Apps Script**, xóa code có sẵn, dán toàn bộ file `google-apps-script/Code.gs`, rồi bấm 💾 Lưu.
3. Chọn hàm **setup** và bấm **Chạy**. Google sẽ hỏi quyền: chọn tài khoản → *Nâng cao* → *Đi tới dự án* → **Cho phép**.
4. **Đặt mã PIN:** quay lại tab Google Sheet và tải lại trang (F5). Trên thanh menu sẽ có thêm **Sổ Tiền Nhà**. Chọn **Đặt / đổi mã PIN quản trị** và nhập mã, tối thiểu 6 ký tự.
5. Chọn **Triển khai → Tùy chọn triển khai mới → ⚙ → Ứng dụng web**, với:
   - *Thực thi với tư cách*: **Tôi**
   - *Người có quyền truy cập*: **Bất kỳ ai**

   Bấm **Triển khai** và sao chép **URL ứng dụng web** (kết thúc bằng `/exec`).

## 2. Điền link vào `config.js`
Trên GitHub, mở file `config.js`, bấm ✏ để sửa, dán URL vào `sheetUrl`, rồi **Commit changes**:
```js
sheetUrl: 'https://script.google.com/macros/s/XXXXXXXX/exec',
```
Bạn có thể điền thêm `sheetViewUrl` (link mở Google Sheet) để hiện nút "Mở Google Sheet" cho quản trị viên.

## 3. Bật GitHub Pages
Vào **Settings → Pages → Branch `main` / root → Save**. Sau 1–2 phút, link app có dạng `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

## Sử dụng
- **Người xem:** mở link là thấy số liệu, app tự cập nhật mỗi 2 phút. Người xem không thấy nút sửa nào.
- **Quản trị viên:** bấm **🔒 Quản trị** và nhập mã PIN. Các nút *Ghi thu tiền, Chuyển chủ nhà, Nạp/Rút, Cài đặt, Xóa* sẽ hiện ra, mọi thay đổi tự lưu lên Sheet.
  - Tick **Ghi nhớ trên máy này** chỉ khi dùng máy riêng.
  - Bấm **Thoát quản trị** khi dùng xong.
- **Nhập sai PIN 5 lần** thì việc sửa bị khóa 15 phút.
- Nếu sửa trực tiếp trên Google Sheet, app sẽ thấy thay đổi ở lần tải tiếp theo. Nếu đúng lúc đó quản trị viên đang lưu từ app, app sẽ báo và tải bản mới nhất để không ghi đè lên nhau.

## Cập nhật sau này
- **Đổi mã PIN:** trong Google Sheet, chọn menu **Sổ Tiền Nhà → Đặt / đổi mã PIN quản trị**.
- **Sửa `Code.gs`:** vào **Triển khai → Quản lý các lần triển khai → ✏ → Phiên bản: Mới**. Cách này giữ nguyên URL.

## Lưu ý bảo mật
- Số liệu (tên người thuê, số tiền) **công khai với bất kỳ ai có link app** hoặc link `/exec`.
- Repo GitHub chỉ chứa code. **Không bao giờ ghi mã PIN vào `config.js` hay bất kỳ file nào trên GitHub.**
