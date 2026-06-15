# 🟡 GIAI ĐOẠN 5: CSKH & Phân tích 360°
**Thời gian:** Tuần 12+ (Giai đoạn duy trì và tối ưu)  
**Mục tiêu:** Quản trị rủi ro toàn diện, Auto nhắc gia hạn hợp đồng, giám sát SLA, quản lý sự cố xuyên suốt và cung cấp Dashboard 360° cho Ban Giám đốc.

**Tài liệu tham chiếu:**
- `7. Quy chế Vận hành DV V1` – Chương VII, VIII, IX; Phụ lục 04, 05.
- `2. Quy chế Thương mại` – Chương X (Điều 31-33), Điều 38.
- `1. Quy chế Tổ chức` – Chương VI, VII; Phụ lục 04, 05.

---

## 📋 PHẦN 1: HỆ THỐNG BIỂU MẪU & CẢNH BÁO AI

> Ở giai đoạn này, AI đóng vai trò như một "Radar" cảnh báo sớm (Predict) và minh bạch hóa dữ liệu (Transparent) theo mô hình PPRT.

### 1.1 Danh sách Form & Template Quản lý Sự cố & SLA

| STT | Tên Biểu mẫu / Báo cáo | Mã tài liệu | Người thực hiện |
|:---:|---|:---:|---|
| 1 | **Báo cáo Sự cố An ninh (Incident Report)** | `SZ-FRM-INC-01` | CHD / QLKV / SOC |
| 2 | **Biên bản Xử lý Sự cố** | `SZ-FRM-INC-02` | Khối Vận hành / QA |
| 3 | **Phiếu CAPA (Khắc phục/Phòng ngừa)** | `SZ-FRM-QA-02` | QA |
| 4 | **Báo cáo SLA/KPI Vận hành định kỳ** | `SZ-FRM-QA-03` | QA / Khối Vận hành |
| 5 | **Phiếu Đánh giá Hài lòng KH (CSAT)** | `SZ-FRM-CS-01` | Kinh doanh / QA |

### 1.2 Cơ chế Cảnh báo Tự động (AI Triggers)

| Loại Cảnh báo | Điều kiện kích hoạt AI | Hành động của Hệ thống |
|---|---|---|
| **Sự cố Khẩn cấp (L3/L4)** | Có Báo cáo `SZ-FRM-INC-01` phân loại mức độ High Risk/Critical | Gửi SMS/App Noti ngay cho Ban Giám Đốc, tự động kích hoạt đội SRT. |
| **Nhắc Gia hạn Hợp đồng** | 45 ngày trước khi HĐ hết hạn (Dữ liệu từ GĐ2) | Tạo Task trên CRM cho Sales, gửi mail nhắc nhở QLKV. |
| **Cảnh báo Churn (Mất KH)** | Điểm CSAT thấp HOẶC phát sinh > 3 Sự cố/Tháng | Auto đưa KH vào danh sách "High-Risk Account" cần họp xử lý ngay. |
| **Audit Fail / Lỗi SLA** | Checklist Audit `SZ-FRM-QA-01` đạt < 80% | Tự động sinh Phiếu CAPA (`SZ-FRM-QA-02`) giao chỉ tiêu khắc phục cho Vận hành. |

---

## 📦 PHẦN 2: OUTPUT CỦA GIAI ĐOẠN 5

> Đầu ra là các báo cáo quản trị cấp cao và các hành động cải tiến chất lượng.

### 2.1 Danh sách Output bắt buộc

| STT | Tên Output | Mục đích | Bàn giao cho |
|:---:|---|---|---|
| 1 | **Dashboard 360° Ban Giám Đốc** | Theo dõi 6 nhóm chỉ số bắt buộc: Doanh thu, P&L, Quân số, SLA, Sự cố, CSKH. | TGĐ / BOD |
| 2 | **Hồ sơ QBR (Quarterly Business Review)** | Báo cáo chuyên sâu đánh giá quý cho KH Strategic/Key Account. | Sales / Khách hàng |
| 3 | **Báo Cáo Phân Tích RCA/CAPA** | Xử lý triệt để nguyên nhân gốc rễ sự cố, đóng vòng lặp chất lượng. | QA / Khách hàng |

---

## 🔁 PHẦN 3: VÒNG LẶP CẢI TIẾN LIÊN TỤC (FEEDBACK LOOP)

> Giai đoạn 5 không có điểm kết thúc. Hệ thống AI sẽ liên tục "học" từ dữ liệu và feed ngược lại Giai đoạn 1 để tối ưu hóa quy trình tổng thể.

### 3.1 Luồng Tối ưu hóa ngược

```
[DASHBOARD GĐ5 NHẬN DIỆN RỦI RO / CHURN RATE]
        │
        ▼
[CẢI TIẾN GĐ1 & GĐ2]
→ Cập nhật Form Khảo sát (SZ-FRM-OPS-01) thêm rủi ro mới nhận diện để khảo sát chặt chẽ hơn.
→ Điều chỉnh "Ma trận Giá" (QC TM) để tăng giá nếu mục tiêu có rủi ro P&L cao.
→ Update Post Order (SZ-PO-OPS) ở GĐ3 để bít lỗ hổng an ninh đã xảy ra.
```

---

## 📌 GHI CHÚ CHUNG CHO HỆ THỐNG AI
1. **Phân quyền Dữ liệu (RACI):** Dashboard GĐ5 tuân thủ nguyên tắc Transparent nhưng phải bảo mật. Từng cấp (QLKV, Trưởng khối, TGĐ) chỉ xem được dữ liệu trong quyền hạn của mình.
2. **Central Source of Truth:** Hệ thống AI phải liên kết chặt chẽ bằng một **Mã Hợp Đồng (Contract ID)** duy nhất xuyên suốt từ GĐ1 đến GĐ5 để đảm bảo khả năng truy xuất dữ liệu một chạm (One-click tracing).

---

*Tài liệu này là bộ phận của Kế hoạch triển khai AI SeaZen – 15/06/2026*  
*Phiên bản: Draft v1.0 | Người soạn: AI Department | Ngày: 15/06/2026*  
*Trạng thái: Đang review nội bộ – Chưa ban hành chính thức*
