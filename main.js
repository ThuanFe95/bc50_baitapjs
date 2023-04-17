/**
 * Bài 1: Tính tổng lương
 */
document.getElementById("btnTongLuong").onclick = function(){
    //dom
    var tienLuong = document.getElementById("tienLuong").value;
    var soNgayLam = document.getElementById("soNgayLam").value;

    // xử lý
    var tongTien = tienLuong * soNgayLam;

    // xuất kết quả

    var result = "";
    result += "<p>Tổng lương là: " + tongTien + "</p>";

    document.getElementById("footerLuong").innerHTML = result;
};