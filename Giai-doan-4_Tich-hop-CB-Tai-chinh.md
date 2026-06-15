# 🟡 GIAI ĐOẠN 4: Tích hợp C&B & Tài chính
**Thời gian:** Tuần 10–11  
**Mục tiêu:** Đối soát công–lương tự động, kiểm soát chi phí vận hành (P&L hợp đồng) và tự động xuất hóa đơn dựa trên nghiệm thu ca thực tế từ GĐ3.

**Tài liệu tham chiếu:**
- `7. Quy chế Vận hành DV V1` – Chương V (Điều 24), Chương X (Điều 48-52).
- `2. Quy chế Thương mại` – Điều 25-27, Điều 40, Điều 42.
- `1. Quy chế Tổ chức` – Điều 23, Điều 54.

---

## 📋 PHẦN 1: HỆ THỐNG BIỂU MẪU & CƠ CHẾ ĐỐI SOÁT

> Thay vì kế toán làm thủ công bằng Excel, AI sẽ thực hiện "Đối soát chéo" (Cross-check) giữa Dữ liệu Hợp đồng (GĐ2) và Dữ liệu Chấm công (GĐ3).

### 1.1 Danh sách Template / Báo cáo tự động sinh

| STT | Tên Biểu mẫu / Template | Nguồn Dữ liệu (Input) | Bộ phận tiếp nhận |
|:---:|---|---|---|
| 1 | **Bảng Chấm Công - Lương (C&B)** | Dữ liệu Master Roster (GĐ3) + Quy định lương | HR / C&B |
| 2 | **Bảng Đề nghị Xuất Hóa Đơn** | Giờ công chốt (GĐ3) + Đơn giá Hợp đồng (GĐ2) | Kế toán Doanh thu |
| 3 | **Báo Cáo P&L Mục tiêu (Lỗ/Lãi)** | Doanh thu (GĐ2) - Chi phí nhân sự/vận hành (GĐ4) | Giám đốc Tài chính |
| 4 | **Báo Cáo Cảnh báo Công nợ** | Hợp đồng (Điều kiện thanh toán) + Dữ liệu thu tiền | Kế toán Công nợ / Sales |

### 1.2 Cơ chế Đối soát Tự động (AI Matching)
- **Matching Khối lượng:** So khớp tự động: `Giờ công thực tế từ App` **VS** `Định biên ký kết trong Hợp đồng`.
- **Quản trị Tăng ca (OT):** Nếu phát sinh Tăng ca, bắt buộc phải có `Change Request` hoặc xác nhận bù quân được duyệt trên hệ thống bởi GĐ Vận hành.
- **Trừ chế tài (SLA Penalties):** Tự động hạch toán giảm trừ chi phí/doanh thu nếu trong tháng GĐ3 ghi nhận vi phạm SLA (có biên bản phạt).

---

## 📦 PHẦN 2: OUTPUT CỦA GIAI ĐOẠN 4

> Đầu ra của giai đoạn này là dòng tiền thực tế và sự minh bạch về hiệu quả tài chính của từng hợp đồng.

### 2.1 Danh sách Output bắt buộc

| STT | Tên Output | Mục đích | Bàn giao cho |
|:---:|---|---|---|
| 1 | **Bảng Lương Final đã duyệt** | Trả lương chính xác, đúng hạn cho NVBV | Ngân hàng / Kế toán |
| 2 | **Hóa Đơn Điện Tử (E-Invoice)** | Phát hành để thu tiền khách hàng | Khách hàng |
| 3 | **Cảnh báo Lỗ hợp đồng / Biên lợi nhuận thấp** | Cảnh báo chi phí vượt định mức (Tăng ca, Phạt SLA) | BGĐ / Vận hành |
| 4 | **Danh sách KH Quá hạn Công nợ** | Khách chưa thanh toán theo Điều 27 QC TM (>15 ngày, >30 ngày) | CSKH / Sales |

---

## 🔁 PHẦN 3: ĐIỀU KIỆN CHUYỂN TIẾP → GIAI ĐOẠN 5

> Dữ liệu tài chính sẽ được kết hợp với dữ liệu vận hành để đẩy lên Dashboard quản trị tổng thể ở Giai đoạn 5.

### 3.1 Checklist điều kiện bàn giao (Gate Condition)

| # | Điều kiện | Người xác nhận | Trạng thái |
|:---:|---|---|:---:|
| 1 | Bảng lương và bảng kê hóa đơn đã được đối soát không lệch số (Zero Discrepancy) | Kế toán / C&B | ☐ |
| 2 | Chỉ số P&L của từng mục tiêu trong tháng đã tính toán hoàn tất | Kế toán Quản trị | ☐ |
| 3 | Trạng thái thanh toán của Khách hàng đã được đồng bộ về CRM | Admin | ☐ |

### 3.2 Luồng bàn giao sang Giai đoạn 5 (Dashboard & Phân tích)

```
[DỮ LIỆU TÀI CHÍNH & VẬN HÀNH GĐ4]
        │
        ▼
Đóng sổ kế toán kỳ (Month-end closing)
        │
        ▼
[HỆ THỐNG DATA WAREHOUSE GĐ5]
→ Cập nhật số liệu Doanh thu / Chi phí / Lợi nhuận lên Dashboard 360°
→ Kích hoạt AI phân tích rủi ro tài chính của Khách hàng
```

---

*Tài liệu này là bộ phận của Kế hoạch triển khai AI SeaZen – 15/06/2026*  
*Phiên bản: Draft v1.0 | Người soạn: AI Department | Ngày: 15/06/2026*  
*Trạng thái: Đang review nội bộ – Chưa ban hành chính thức*
