# 🟡 GIAI ĐOẠN 3: Vận hành & Phân ca
**Thời gian:** Tuần 6–9  
**Mục tiêu:** Tự động lên lịch, phân bổ định biên nhân sự theo đúng hợp đồng đã chốt. Quản lý ca trực, Post Order, Zero-Gap và kiểm soát vận hành hiện trường.

**Tài liệu tham chiếu:**
- `7. Quy chế Vận hành DV V1` – Chương III, V, VI; Phụ lục 01, 03.
- `2. Quy chế Thương mại` – Điều 39.

---

## 📋 PHẦN 1: CÁC BIỂU MẪU & CÔNG CỤ VẬN HÀNH

> Giai đoạn này tập trung vào số hóa việc điều quân và kiểm soát chất lượng tại mục tiêu. Mọi tương tác nên được thực hiện trên nền tảng số (App/Web) thay vì giấy tờ truyền thống.

### 1.1 Danh sách Form & Template áp dụng

| STT | Tên Biểu mẫu / Template | Mã tài liệu | Người thực hiện |
|:---:|---|:---:|---|
| 1 | **Post Order theo loại hình** (Nhà máy, Bệnh viện, Tòa nhà...) | `SZ-PO-OPS-01` đến `04` | QLKV / CHD lập, KH duyệt |
| 2 | **SOP Quản lý Quân số & Zero-Gap** | `SZ-SOP-OPS-04` | Khối Vận hành / HR |
| 3 | **Nhật ký ca trực và BB bàn giao ca** | `SZ-FRM-OPS-03` | CHD / Ca trưởng |
| 4 | **Nhật ký tuần tra và kiểm tra** | `SZ-FRM-OPS-04` | NVBV / CHD |
| 5 | **Bảng Roster Phân ca (Master Roster)** | Trên Hệ thống AI/App | QLKV / HR |
| 6 | **Checklist Audit Mục tiêu** | `SZ-FRM-QA-01` | Bộ phận QA |

### 1.2 Nguyên tắc Lên lịch tự động (Master Roster)
- Master Roster phải **khớp 100% với định biên** trong Phương án Bảo vệ (`SZ-FRM-OPS-02`) và Hợp đồng từ GĐ2.
- **AI Alert:** Tự động cảnh báo `Zero-Gap` (Thiếu quân/Thủng ca) nếu số lượng nhân sự được xếp lịch < Định biên quy định.
- Hỗ trợ cơ chế **4 cấp dự phòng nhân sự** (đội mục tiêu, đội lưu động, hỗ trợ chéo, SRT) theo Phụ lục 03 QC Vận hành.

---

## 📦 PHẦN 2: OUTPUT CỦA GIAI ĐOẠN 3

> Dữ liệu được sinh ra từ GĐ3 chính là nguồn để tính lương, thu tiền và đo lường SLA.

### 2.1 Danh sách Output bắt buộc

| STT | Tên Output | Mục đích | Bàn giao cho |
|:---:|---|---|---|
| 1 | **Master Roster đã duyệt** | Lịch trực thực tế, khóa số lượng chống thiếu quân | NVBV (hiển thị trên App) |
| 2 | **Dữ liệu Chấm công thực tế** | Dựa trên Log của `SZ-FRM-OPS-03`, chốt công ca trực | GĐ4 (C&B / Tài chính) |
| 3 | **Báo cáo Tuần tra số** | Log tuần tra định vị GPS từ `SZ-FRM-OPS-04` | GĐ5 (Dashboard SOC) |
| 4 | **Báo cáo Giao/Nhận ca** | Ghi nhận tài sản, diễn biến tại mục tiêu theo thời gian thực | QLKV / SOC |

---

## 🔁 PHẦN 3: ĐIỀU KIỆN CHUYỂN TIẾP → GIAI ĐOẠN 4

> Dữ liệu chấm công từ Giai đoạn 3 là căn cứ DUY NHẤT để tính lương và xuất hóa đơn ở GĐ4.

### 3.1 Checklist điều kiện bàn giao (Gate Condition)

| # | Điều kiện | Người xác nhận | Trạng thái |
|:---:|---|---|:---:|
| 1 | Bảng công thực tế (Master Roster Data) cuối tháng đã được chốt khóa (Lock) | QLKV / CHD | ☐ |
| 2 | Đã xác nhận các khoản tăng ca, ca đêm, phụ cấp (nếu có) từ hiện trường với KH | Khối Vận hành | ☐ |
| 3 | Nhật ký ca trực không có sự cố mở (Open Incidents) chưa được ghi nhận | SOC / QA | ☐ |

### 3.2 Luồng bàn giao sang Giai đoạn 4 (Tài chính & C&B)

```
[DỮ LIỆU CHẤM CÔNG / VẬN HÀNH GĐ3] 
        │
        ▼
Hệ thống chốt dữ liệu vào lúc 00:00 ngày cuối kỳ tính lương
        │
        ▼
[HỆ THỐNG TỰ ĐỘNG ĐẨY SANG GĐ4]
→ Sinh Bảng lương thô (Cho C&B xử lý)
→ Sinh Bảng tổng hợp công để xuất Hóa đơn (Cho Kế toán xử lý)
```

---

*Tài liệu này là bộ phận của Kế hoạch triển khai AI SeaZen – 15/06/2026*  
*Phiên bản: Draft v1.0 | Người soạn: AI Department | Ngày: 15/06/2026*  
*Trạng thái: Đang review nội bộ – Chưa ban hành chính thức*
