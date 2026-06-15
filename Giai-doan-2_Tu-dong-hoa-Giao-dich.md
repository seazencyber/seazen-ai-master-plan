# 🟡 GIAI ĐOẠN 2: Tự động hóa Giao dịch
**Thời gian:** Tuần 4–5  
**Mục tiêu:** Tự động xuất file Báo giá, Phương án an ninh và Hợp đồng dựa trên Master Data của Giai đoạn 1. Kiểm soát phê duyệt Deal Review/Bid Review theo ma trận.

**Tài liệu tham chiếu:**
- `2. Quy chế Thương mại và gói GPANTH V2` – Chương III, IV, V, VI (Điều 9–21); Phụ lục 01, 05
- `7. Quy chế Vận hành DV V1` – Chương IV (Điều 19); Phụ lục 01 (Mã SZ-SOP-OPS-02)

---

## 📋 PHẦN 1: HỆ THỐNG BIỂU MẪU & TEMPLATE TỰ ĐỘNG

> Hệ thống AI sẽ tự động map (ghép nối) dữ liệu từ Giai đoạn 1 vào các template chuẩn dưới đây. Không tự ý chỉnh sửa form mẫu nếu không có phê duyệt (Deal/Bid Review).

### 1.1 Danh sách Template sinh tự động

| STT | Tên Biểu mẫu / Template | Mã tài liệu / Phụ lục | Dữ liệu đầu vào (Từ GĐ1) | Người chịu trách nhiệm xuất file |
|:---:|---|:---:|---|---|
| 1 | **Template Báo giá Dịch vụ** (4 Gói giải pháp) | Phụ lục 01 – QC TM | Gói dịch vụ, định biên, Master Data KH | Sales / Kinh doanh |
| 2 | **Phương án Bảo vệ Mục tiêu** (PABV) | `SZ-FRM-OPS-02` | Biên bản khảo sát (`SZ-FRM-OPS-01`), Sơ đồ | Khối Vận hành (CHD/QLKV) |
| 3 | **Bản Thỏa thuận mức dịch vụ (SLA)** | Phụ lục 05 – QC TM | Yêu cầu đặc thù KH, Gói dịch vụ | QA / Kinh doanh |
| 4 | **Form Deal Review / Bid Review** | Phụ lục 05 – QC TM | Giá bán < Giá sàn, Thanh toán < Chuẩn | Sales (Tài chính, Vận hành thẩm định) |
| 5 | **Template Hợp đồng Dịch vụ An ninh** | Hợp đồng chuẩn | Master Data KH, Báo giá đã chốt, SLA | Pháp lý / Kinh doanh |

---

### 1.2 Nội dung bắt buộc trong Hồ sơ Báo giá (Điều 18 - QC TM)

> Bất kỳ báo giá nào hệ thống sinh ra cũng phải đủ 5 nhóm thông tin sau:

| Nhóm thông tin | Yêu cầu hiển thị trên Báo giá |
|---|---|
| **1. Thông tin Khách hàng** | Tên, địa chỉ mục tiêu, người liên hệ, yêu cầu đặc biệt. |
| **2. Thông tin Giải pháp** | Tên gói dịch vụ (Standard/Guarding+/Integrated/High-Security), mô hình ca trực (VD: 8h/26 ngày, 12h/30 ngày), định biên, công nghệ, SOC/SRT đi kèm. |
| **3. Thông tin Tài chính** | Đơn giá, tổng giá trị, VAT, phụ phí, điều kiện thanh toán, thời hạn báo giá. |
| **4. Thông tin Rủi ro/Giới hạn** | Các điều kiện loại trừ trách nhiệm, giới hạn đền bù bảo hiểm, rủi ro pháp lý. |
| **5. Phân quyền phê duyệt** | Người lập (Sales), Người thẩm định (Vận hành/Finance), Người phê duyệt (LOA). |

---

### 1.3 Điều kiện kích hoạt Form Deal Review / Bid Review

> Hệ thống AI sẽ tự động **chặn xuất Báo giá/Hợp đồng** và yêu cầu lập `Form Deal Review/Bid Review` nếu phát hiện các ngoại lệ sau:

| Tiêu chí ngoại lệ | Ngưỡng vi phạm kích hoạt chặn | Đơn vị thẩm định bắt buộc |
|---|---|---|
| **Giá bán** | Báo giá < Giá sàn quy định trong Phụ lục 01 | Tài chính - Kế toán |
| **Biên lợi nhuận** | Biên lợi nhuận < Mức tối thiểu quy định | Tài chính - Kế toán |
| **Công nợ / Thanh toán** | Cho phép nợ > 15-30 ngày (vượt chuẩn thanh toán) | Tài chính - Kế toán |
| **SLA / Cam kết phạt** | Khách yêu cầu SLA quá chặt, mức phạt > chuẩn | QA, Khối Vận hành, Pháp lý |
| **Rủi ro vận hành** | Mô hình ca 12h/30 ngày liên tục, thiếu người | HR, Khối Vận hành |

---

## 📦 PHẦN 2: OUTPUT CỦA GIAI ĐOẠN 2

> Đây là các chứng từ mang tính "pháp lý" để chốt thỏa thuận với Khách hàng, chuẩn bị đưa quân vào thực địa.

### 2.1 Danh sách Output bắt buộc

| STT | Tên Output | Tính chất | Ai phê duyệt (RACI) | Bàn giao cho |
|:---:|---|:---:|---|---|
| 1 | **Phương án Bảo vệ (PABV) Final** | ✅ Bắt buộc | GĐ Vận hành + Khách hàng ký | Vận hành (để lên ca trực GĐ3) |
| 2 | **Hồ sơ Báo giá Final** | ✅ Bắt buộc | GĐ Kinh doanh / LOA | Khách hàng |
| 3 | **Hợp đồng dịch vụ** (đã ký kết) | ✅ Bắt buộc | TGĐ / Người ủy quyền + KH | Admin / Finance / Vận hành |
| 4 | **Biên bản Deal Review/Bid Review** | 🔶 Khuyến nghị | Các Khối liên quan | Lưu trữ kiểm toán hệ thống |
| 5 | **Phụ lục SLA (Nếu có)** | 🔶 Khuyến nghị | QA + Khách hàng ký | QA (để đo lường GĐ5) |

---

## 🔁 PHẦN 3: ĐIỀU KIỆN CHUYỂN TIẾP → GIAI ĐOẠN 3

> **Giai đoạn 3 (Vận hành & Phân ca) CHỈ được kích hoạt khi hợp đồng và phương án đã chốt cứng.**  
> *(Tham chiếu: Phụ lục 02 QC Vận hành - Checklist bàn giao hợp đồng sang vận hành)*

### 3.1 Checklist điều kiện bàn giao (Gate Condition)

| # | Điều kiện | Người xác nhận | Trạng thái |
|:---:|---|---|:---:|
| 1 | Hợp đồng / Phụ lục hợp đồng đã ký kết chính thức (hoặc Email confirm đồng ý báo giá) | Admin / Kinh doanh | ☐ |
| 2 | Phương án bảo vệ (`SZ-FRM-OPS-02`) đã được phê duyệt nội bộ và KH đồng ý | Khối Vận hành | ☐ |
| 3 | Có bản chốt SLA, phạm vi dịch vụ, giới hạn đền bù | QA / Pháp lý | ☐ |
| 4 | Chốt định biên nhân sự, mô hình ca trực và lương mục tiêu (Dữ liệu đầu vào cho C&B) | Vận hành / HR / Tài chính | ☐ |
| 5 | Đã bàn giao kế hoạch triển khai (ngày giờ đưa quân, setup hệ thống) | Kinh doanh → Vận hành | ☐ |

### 3.2 Luồng bàn giao sang Giai đoạn 3 (Vận hành)

```
[GĐ2: HỢP ĐỒNG ĐÃ KÝ]
        │
        ▼
Đẩy Data Hợp đồng (Ngày bắt đầu, Số lượng quân, Mô hình ca, SLA)
        │
        ▼
[HỆ THỐNG TỰ ĐỘNG KÍCH HOẠT GĐ3]
→ Tạo Master Roster (Lịch trực tổng) cho mục tiêu
→ Gửi request tuyển dụng / điều động cho HR
→ Kích hoạt Checklist chuẩn bị công cụ, đồng phục, App tuần tra
→ Sinh bản draft Post Order (SZ-PO-OPS) theo loại mục tiêu
```

---

## 📌 GHI CHÚ & LƯU Ý TRIỂN KHAI

| Mục | Nội dung |
|---|---|
| **Luồng sinh Báo giá** | Không được dùng Excel ngoài. AI phải lock (khóa) các công thức tính giá theo "Ma trận yếu tố ảnh hưởng giá" (Điều 13 QC TM). |
| **Tính toàn vẹn Dữ liệu** | Phương án bảo vệ phải khớp 100% với Định biên trên Báo giá. Nếu khác (do KH cắt giảm), AI phải hiện cảnh báo cho Vận hành & QA. |
| **Khóa (Lock) Hệ thống** | Nếu không có Phê duyệt Deal Review, AI sẽ vô hiệu hóa nút [Xuất Hợp Đồng]. |

---

*Tài liệu này là bộ phận của Kế hoạch triển khai AI SeaZen – 15/06/2026*  
*Phiên bản: Draft v1.0 | Người soạn: AI Department | Ngày: 15/06/2026*  
*Trạng thái: Đang review nội bộ – Chưa ban hành chính thức*
