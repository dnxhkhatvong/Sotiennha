// ============================================================
//  CẤU HÌNH SỔ TIỀN NHÀ
//  Sửa file này trên GitHub (bấm biểu tượng ✏), rồi Commit.
// ============================================================
window.SO_TIEN_NHA_CONFIG = {
  // Link ứng dụng web Apps Script của Google Sheet (kết thúc bằng /exec).
  // Để trống '' thì app chỉ lưu dữ liệu trên trình duyệt đang dùng.
  sheetUrl: 'https://script.google.com/macros/s/AKfycbxpUaxg3GrjZSBcP34NIvFKxySGahZoFGJcYpJycql0CNPsEAbLkEi_LbMNH_R-UXhjTQ/exec',

  // (Không bắt buộc) Link mở Google Sheet, hiện cho quản trị viên.
  sheetViewUrl: '',

  // Tự tải lại số liệu mới mỗi bao nhiêu giây khi đang mở app (0 = tắt).
  tuCapNhatGiay: 120,
};
// Lưu ý: file này công khai. Không ghi mã PIN vào đây,
// mã PIN chỉ đặt trong Google Sheet (menu Sổ Tiền Nhà → Đặt / đổi mã PIN quản trị).
