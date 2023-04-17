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

/**
 * Bài 2 Tính giá trị trung bình
 * Đầu vào:
 *  - soThu1 = ?
 *  - soThu2 = ?
 *  - soThu3 = ?
 *  - soThu4 = ?
 *  - soThu5 = ?
 *  - trungBinh = 0
 * 
 * Xử lý:
 *  trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5
 * 
 * Đầu ra:
 *  trungBinh = ?
 */
document.getElementById("btnTrungBinh").onclick = function (){
    //dom
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var soThu4 = document.getElementById("soThu4").value * 1;
    var soThu5 = document.getElementById("soThu5").value * 1;
    
    //xử lý
    trungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5)/5;

    //Đầu ra
    var result ="";
    result += "<p>Trung bình là: " + trungBinh + "</p>";

    document.getElementById("footerTinhTrungBinh").innerHTML = result;
};

/**
 * Bài 3: Quy đổi tiền
 * Đầu vào:
 *  - giaUSD = ?
 *  - soTienCanDoi = ?
 *  - tong = 0
 * 
 * Xử lý:
 *  tong = giaUSD * soTienCanDoi
 * 
 * Đầu ra:
 *  tong = ?
 */
document.getElementById("btnQuyDoiTien").onclick = function (){
    //dom
    var giaUSD = document.getElementById("giaUSD").value;
    var soTienCanDoi = document.getElementById("soTienCanDoi").value;

    //format VND
    var currentFormat = new Intl.NumberFormat("vn-VN");

    //xử lý
    var tong = giaUSD * soTienCanDoi

    //Đầu ra
    var result = "";
    result += "<p>Tổng là: " + currentFormat.format(tong) + "VND</p>";

    document.getElementById("footerQuyDoiTien").innerHTML = result;
};

/**
 * Bài 4: Tính chu vi và diện tích hình chữ nhật
 * Đầu vào:
 *  - chieuDai = ?
 *  - chieuRong = ?
 *  - chuVi = 0
 *  - dienTich = 0
 * 
 * Xử lý:
 *  - chuVi = (chieuDai + chieuRong)*2
 *  - dienTich = chieuDai * chieuRong
 * 
 * Đầu ra:
 *      chuVi = ?
 *      dienTich = ?
 */
document.getElementById("btnTinh").onclick = function (){
    //dom
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;

    //xử lý
    var chuVi = (chieuDai + chieuRong)*2;
    var dienTich = chieuDai * chieuRong;

    //Đầu ra
    var result = "";
    result += "<p>Chu vi hình chữ nhật là: " + chuVi + "</p>";
    result += "<p>Diện tích hình chữ nhật là: " + dienTich + "</p>";

    document.getElementById("footerTinh").innerHTML = result;
}