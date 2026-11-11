# Scrip: tong_hop.ps1
# Tac gia: Tô Mạnh Hào
# Ngay tao: 11/11/2026
Write-Host "Dang tao bao cao..."
"===BAO CAO SU CO WEBSITE ===" > logs\tong_hop.txt
get-content logs\order.log | select-string "status=404" >> logs\tong_hop.txt
get-content logs\order.log | select-string "status=500" | measure-object >> logs\tong_hop.txt
Write-Host "Hoan thanh"