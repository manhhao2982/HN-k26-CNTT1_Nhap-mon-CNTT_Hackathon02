# BÀI LÀM – HACKATHON 02

- **Mã đề:** 06
- **Họ tên:**Tô Mạnh Hào
- **Lớp:**CNTT1
- **Link repository:**
- **Hệ điều hành (Windows/macOS):**Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
get-childitem -recurse -force
mv .\yeu_cau_khach_hang.txt .\docs\
mkdir backup
cp .\data\don_in_thang_6.xlsx .\backup\
rm .\temp_606.tmp
cd .\logs\
get-childitem
cd ..
get-childitem -recurse -force

```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   7:43 AM                backup
d-----        11/11/2026   7:39 AM                data
d-----        11/11/2026   7:42 AM                docs
d-----        11/11/2026   7:37 AM                evidence
d-----        11/11/2026   7:39 AM                logs
d-----        11/11/2026   7:35 AM                web
-a----         11/3/2026   7:07 AM             76 .env
-a----         11/3/2026   7:07 AM           2407 bai_lam.md


    Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6137 don_in_thang_6.xlsx


    Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           6137 don_in_thang_6.xlsx


    Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            153 yeu_cau_khach_hang.txt


    Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM            981 order.log


    Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/11/2026   7:35 AM                images
-a----         11/3/2026   7:07 AM            594 app.js
-a----         11/3/2026   7:07 AM            516 index.html
-a----         11/3/2026   7:07 AM            460 style.css


    Directory: C:\Users\Manh Hao\Downloads\starter-kit (1)\starter-kit\xuong-in-website\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----         11/3/2026   7:07 AM           3092 logo-printnow.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
select-string "status=500" .\logs\order.log > .\logs\loi_500.txt

```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
logs\order.log:5:2026-06-28 08:15:01 POST /api/thanh-toan status=500
logs\order.log:11:2026-06-28 08:34:07 POST /api/tai-file status=500


```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
 select-string "status=404" .\logs\order.log | measure-object

```

```text
Count    : 4

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
.\tong_hop.ps1

```

### Nội dung file logs/tong_hop.txt

```text
===BAO CAO SU CO WEBSITE ===

2026-06-28 08:08:39 GET /mau-tet-cu status=404
2026-06-28 08:19:12 GET /images/poster-2.jpg status=404
2026-06-28 08:23:23 GET /images/poster-2.jpg status=404
2026-06-28 08:54:24 GET /tin-tuc status=404




Count    : 6
Average  : 
Sum      : 
Maximum  : 
Minimum  : 
Property : 



```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [x] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [x] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [x] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 | Network | logo.jpg |images/logo-printnow.png |
| 2 | Console | app.js:18 | hienThiSanPhamIn |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** Mình đang chạy thử website PrintNow - Xưởng in ấn trên hệ điều hành win 11
- **Expected:** Mình muốn hiển thị một trang web đầy đủ nội dung của bảng giá sản phẩm in
- **Actual:** nội dung của bảng giá sản phẩm in không hiển thị ra màn hình
- **Log:** Uncaught ReferenceError: hienThiSanPham is not app.js:18 defined

### Câu tìm kiếm Google

```text
"Uncaught ReferenceError: hienThiSanPham is not app.js:18 defined" site:stackoverflow.com

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/don_in_thang_6.xlsx`, không cần ghi vào đây.
