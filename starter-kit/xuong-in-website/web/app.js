const danhSachBangGia = [
  { ma: "DN-100", ten: "Danh thiep 100 cai", gia: 90000 },
  { ma: "TR-A5", ten: "To roi A5 100 to", gia: 150000 },
  { ma: "PO-A3", ten: "Poster A3", gia: 45000 },
  { ma: "BR-A4", ten: "Brochure A4 50 cuon", gia: 450000 },
];

function hienThiSanPhamIn() {
  const bang = document.getElementById("bang-gia");
  for (const muc of danhSachBangGia) {
    const dong = bang.insertRow();
    dong.insertCell().textContent = muc.ma;
    dong.insertCell().textContent = muc.ten;
    dong.insertCell().textContent = muc.gia.toLocaleString("vi-VN");
  }
}

hienThiSanPhamIn();
