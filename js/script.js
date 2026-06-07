function hienChiTiet(ten, gia, mota){

    document.getElementById("tensp").innerHTML = ten;

    document.getElementById("giasp").innerHTML =
        "<b>Giá:</b> " + gia;

    document.getElementById("motasp").innerHTML = mota;

    document.getElementById("popup").style.display = "flex";
}

function dongChiTiet(){

    document.getElementById("popup").style.display = "none";
}