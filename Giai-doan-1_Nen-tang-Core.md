# 🟡 GIAI ĐOẠN 1: Nền tảng Core & Đầu vào
**Thời gian:** Tuần 1–3  
**Mục tiêu:** Số hóa Form khảo sát mục tiêu thực địa. Thiết lập cấu trúc dữ liệu dự án chuẩn (Master Data) làm gốc cho toàn bộ luồng.

**Tài liệu tham chiếu:**
- `1. Quy chế Tổ chức & Hoạt động V1-05.2026`
- `2. Quy chế Thương mại và gói GPANTH V2` – Điều 15, 16, 17, 18
- `7. Quy chế Vận hành DV V1` – Điều 17, 18; Phụ lục 01, 02

---

## 📋 PHẦN 1: FORM KHẢO SÁT MỤC TIÊU THỰC ĐỊA

> Mỗi loại hình bảo vệ sử dụng **form khảo sát riêng** dựa trên Post Order mẫu tương ứng.  
> Form gốc chung áp dụng cho tất cả: **`SZ-FRM-OPS-01 – Biên bản khảo sát mục tiêu mới`**

### 1.1 Danh sách Form theo Loại hình Mục tiêu

| STT | Loại hình mục tiêu | Tên Form khảo sát | Mã tài liệu | Gói dịch vụ áp dụng | Người thực hiện |
|:---:|---|---|:---:|---|---|
| 1 | **Tất cả mục tiêu mới** | Biên bản khảo sát mục tiêu mới | `SZ-FRM-OPS-01` | Tất cả các gói | QLKV / Sales phối hợp |
| 2 | Nhà máy / Kho logistics | Form Khảo sát Nhà máy – Kho vận | Dựa trên `SZ-PO-OPS-01` | Guarding+ / Integrated Security | QLKV + Vận hành |
| 3 | Bệnh viện / Cơ sở y tế | Form Khảo sát Bệnh viện – Y tế | Dựa trên `SZ-PO-OPS-02` | Guarding+ / Integrated Security | QLKV + Vận hành |
| 4 | Tòa nhà văn phòng / Chung cư | Form Khảo sát Tòa nhà – Văn phòng | Dựa trên `SZ-PO-OPS-03` | Standard Guarding / Guarding+ | QLKV + Sales |
| 5 | Trường học / Đại học quốc tế | Form Khảo sát Trường học – Giáo dục | Dựa trên `SZ-PO-OPS-04` | Guarding+ | QLKV + Sales |
| 6 | VVIP / Sự kiện / Áp tải | Risk Assessment Form chuyên sâu | Phụ lục 04 – Quy chế Thương mại | High-Security Solution | Security Consultant + QA |
| 7 | FDI / Khu phức hợp / Nhà máy lớn | Form Khảo sát Tích hợp (Integrated + Tech) | Phối hợp `SZ-PO-OPS-01` + Tech | Integrated Security Solution | QLKV + QA + SeaZen Tech |

---

### 1.2 Nội dung bắt buộc trong mỗi Form Khảo sát

> Căn cứ: Điều 16 – Quy chế Thương mại | Điều 18 – Quy chế Vận hành

| Nhóm thông tin | Nội dung cần thu thập | Bắt buộc |
|---|---|:---:|
| **1. Thực địa & Mặt bằng** | Loại hình mục tiêu, diện tích, số cổng, hàng rào, tầng/khu vực | ✅ |
| **2. Luồng di chuyển** | Luồng người / xe / hàng hóa, nhà thầu, giờ cao điểm, thời gian vận hành trong ngày | ✅ |
| **3. Khu vực trọng yếu** | Vị trí PCCC, kho bãi, server room, khu VIP, điểm đặt chốt bảo vệ dự kiến | ✅ |
| **4. Đánh giá rủi ro** | Mất cắp, xâm nhập trái phép, gian lận nội bộ, đình công, PCCC, tai nạn LĐ, rủi ro dữ liệu, pháp lý, hình ảnh | ✅ |
| **5. Công nghệ hiện có** | Camera/CCTV hiện tại, access control, hệ thống báo động, app quản lý KH đang dùng | ✅ |
| **6. Yêu cầu đặc thù KH** | SLA kỳ vọng, tiêu chuẩn nhân sự (ngoại ngữ, võ thuật...), đồng phục, giờ giấc đặc biệt | ✅ |
| **7. Ảnh & Bằng chứng** | Ảnh hiện trường có GPS / timestamp (tối thiểu 10 ảnh, phủ toàn bộ mặt bằng) | ✅ |
| **8. Sơ đồ mục tiêu** | Layout mặt bằng (vẽ tay hoặc file) có đánh dấu vị trí chốt dự kiến | ✅ |

---

### 1.3 Tiêu chí phân loại Gói dịch vụ từ kết quả Khảo sát

> Sau khi hoàn thành form, người khảo sát phải xác định gói dịch vụ phù hợp dựa trên ma trận dưới đây.

| Tiêu chí đánh giá | Standard Guarding | Guarding+ | Integrated Security | High-Security |
|---|:---:|:---:|:---:|:---:|
| Rủi ro an ninh | Thấp | Trung bình | Cao | Rất cao |
| Yêu cầu công nghệ | Không / ít | App + Dashboard | SOC + AI CCTV | SOC + SRT + chuyên gia |
| Nhân sự đặc thù | Tiêu chuẩn cơ bản | Kỹ năng dịch vụ | Kinh nghiệm cao | Ngoại ngữ, võ thuật, lý lịch đặc biệt |
| SLA | Cơ bản | Báo cáo định kỳ | SLA chặt + CAPA | Phản ứng nhanh, phạt cao |
| Loại mục tiêu điển hình | Văn phòng nhỏ | Nhà máy, bệnh viện, trường học | FDI, logistics, khu phức hợp | VVIP, sự kiện, áp tải |

---

## 📦 PHẦN 2: OUTPUT CỦA GIAI ĐOẠN 1

> Đây là **toàn bộ đầu ra bắt buộc** phải có trước khi chuyển sang Giai đoạn 2.  
> Căn cứ: Phụ lục 02 – Quy chế Vận hành (Bảng Nguyên tắc tiếp nhận & Checklist bàn giao)

### 2.1 Danh sách Output bắt buộc

| STT | Tên Output | Mã / Form | Ai tạo ra | Trạng thái bắt buộc | Bàn giao cho |
|:---:|---|:---:|---|:---:|---|
| 1 | **Biên bản khảo sát mục tiêu** (đã điền đủ + ký xác nhận) | `SZ-FRM-OPS-01` | QLKV / Sales | ✅ Bắt buộc | Khối Vận hành + Kinh doanh |
| 2 | **Ảnh hiện trường** (có GPS/timestamp, tối thiểu 10 ảnh) | — | QLKV | ✅ Bắt buộc | Đính kèm biên bản khảo sát |
| 3 | **Risk Checklist – Danh sách rủi ro đã nhận diện** | Risk Checklist PPRT | Vận hành / QA | ✅ Bắt buộc | Kinh doanh + QA |
| 4 | **Sơ đồ mục tiêu** (layout + vị trí chốt bảo vệ dự kiến) | — | QLKV + Khách hàng | ✅ Bắt buộc | Khối Vận hành |
| 5 | **Master Data Khách hàng** (thông tin KH, người quyết định, ngân sách, SLA kỳ vọng) | CRM / Hệ thống | Sales / Kinh doanh | ✅ Bắt buộc | Hệ thống (làm nền tảng tự động hóa GĐ2) |
| 6 | **Đề xuất Gói dịch vụ phù hợp** đã được xác nhận | — | Sales + Vận hành | ✅ Bắt buộc | Kinh doanh → kích hoạt template GĐ2 |
| 7 | **Thông tin nhân sự sơ bộ** (định biên dự kiến, yêu cầu tiêu chuẩn) | — | Vận hành / HR | 🔶 Khuyến nghị | HR → chuẩn bị tuyển dụng |
| 8 | **Yêu cầu công nghệ sơ bộ** (App, SOC, Dashboard cần thiết không) | — | SeaZen Tech | 🔶 Khuyến nghị | Tech → setup hạ tầng GĐ3 |

---

### 2.2 Cấu trúc Master Data (thiết lập lần đầu trong Giai đoạn 1)

> Master Data là **xương sống dữ liệu** cho toàn bộ 5 giai đoạn.

| Nhóm dữ liệu | Trường thông tin cần nhập | Dùng trong Giai đoạn |
|---|---|---|
| **Khách hàng** | Tên, địa chỉ, người quyết định, hotline, email, lịch sử quan hệ | GĐ 2, 4, 5 |
| **Mục tiêu** | Loại hình, địa chỉ, diện tích, số vị trí trực, giờ vận hành | GĐ 2, 3 |
| **Gói dịch vụ** | Tên gói đã chọn, mô hình ca trực, định biên dự kiến | GĐ 2, 3, 4 |
| **Rủi ro** | Cấp độ rủi ro (thấp/tb/cao/rất cao), nhóm rủi ro chính | GĐ 2, 5 |
| **SLA kỳ vọng** | Chỉ số KH mong muốn, thời gian phản hồi, yêu cầu báo cáo | GĐ 2, 3, 5 |
| **Thông tin tài chính** | Ngân sách KH, điều kiện thanh toán, mức phạt nếu có | GĐ 2, 4 |
| **Cơ cấu tổ chức nội bộ** | QLKV phụ trách, CHD, Sales owner, tuyến báo cáo | GĐ 3, 4, 5 |

---

## 🔁 PHẦN 3: ĐIỀU KIỆN CHUYỂN TIẾP → GIAI ĐOẠN 2

> **Giai đoạn 2 chỉ được kích hoạt khi TẤT CẢ các điều kiện sau đã được xác nhận.**

### 3.1 Checklist điều kiện bàn giao (Gate Condition)

| # | Điều kiện | Người xác nhận | Trạng thái |
|:---:|---|---|:---:|
| 1 | `SZ-FRM-OPS-01` đã điền đầy đủ, có chữ ký QLKV và Sales | Trưởng Khối Vận hành | ☐ |
| 2 | Risk Checklist đã xác định rõ cấp độ rủi ro và nhóm rủi ro | QA / Vận hành | ☐ |
| 3 | Ảnh hiện trường đủ (tối thiểu 10 ảnh, có GPS/timestamp) | QLKV | ☐ |
| 4 | Sơ đồ mục tiêu đã có (file/ảnh có đánh dấu vị trí chốt) | QLKV | ☐ |
| 5 | Master Data khách hàng đã nhập đầy đủ vào hệ thống | Sales / Kinh doanh | ☐ |
| 6 | Gói dịch vụ phù hợp đã được xác nhận (Standard/Guarding+/Integrated/High-Security) | Sales + Vận hành | ☐ |

### 3.2 Luồng bàn giao sang Giai đoạn 2

```
[GĐ1 HOÀN THÀNH]
        │
        ▼
Master Data KH + Gói dịch vụ đã chọn
        │
        ▼
Biên bản khảo sát (SZ-FRM-OPS-01) + Risk Checklist + Sơ đồ mục tiêu
        │
        ▼
[HỆ THỐNG TỰ ĐỘNG KÍCH HOẠT GĐ2]
→ Sinh Báo giá draft (dựa trên gói + định biên)
→ Sinh Phương án bảo vệ draft (dựa trên sơ đồ + rủi ro)
→ Sinh Hợp đồng draft (dựa trên Master Data KH + SLA)
→ Gửi thông báo mở mục tiêu mới cho HR + Tech
```

---

## 📌 GHI CHÚ & LƯU Ý TRIỂN KHAI

| Mục | Nội dung |
|---|---|
| **Thời gian khảo sát** | Tối thiểu 1–2 buổi thực địa / mục tiêu. Mục tiêu rủi ro cao hoặc FDI cần 2–3 buổi có QA tham gia |
| **Người thực hiện** | Sales khởi tạo, QLKV + Vận hành thực hiện khảo sát chính, QA/Tech tham gia nếu Gói 3–4 |
| **Công cụ số hóa** | Ưu tiên nhập trực tiếp trên App/hệ thống. Nếu dùng giấy, phải scan và upload trong 24h |
| **Trường hợp khẩn cấp** | Nếu KH cần triển khai gấp (< 20 ngày), phải có phê duyệt ngoại lệ của Giám đốc Vận hành và kế hoạch bù dữ liệu trong 72h đầu |
| **Không được chuyển GĐ2 nếu** | Thiếu biên bản khảo sát có chữ ký, chưa xác định gói dịch vụ, chưa có sơ đồ mục tiêu |

---

*Tài liệu này là bộ phận của Kế hoạch triển khai AI SeaZen – 15/06/2026*  
*Phiên bản: Draft v1.0 | Người soạn: AI Department | Ngày: 15/06/2026*  
*Trạng thái: Đang review nội bộ – Chưa ban hành chính thức*
