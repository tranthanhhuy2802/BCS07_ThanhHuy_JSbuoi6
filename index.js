// Đề 1 tìm số nguyên  dương nhỏ nhất 1+2+3+..+n >1000;
function soNguyenDuongNhoNhat() {
  var s = 0;
  var n = 0;
  while (s < 10000) {
    n++;
    s = s + n;
  }
  document.getElementById("hienKQ1").innerHTML =
    "Số nguyên dương nhỏ nhất : " + n;
}

// Đề 2
function tinhTong() {
  var x = document.getElementById("soX").value * 1;
  var n = document.getElementById("soN").value * 1;

  var kq = 0;
  for (var i = 1; i <= n; i++) {
    kq += x * i;
    debugger;
  }
  document.getElementById("hienKQ2").innerHTML = "Tổng S(n) : " + kq;
}
// Đề 3 Tính Giai Thừa
function tinhGiaiThua() {
  var n = document.getElementById("soN1").value * 1;
  var kq = 1;
  for (var i = 1; i <= n; i++) {
    kq = kq * i;
  }
  document.getElementById("hienKQ3").innerHTML = "Giai Thừa Số n : " + kq;
}
//Đề 4 in 10div, chẵn đỏ, lẻ xanh

function in10Div() {
  var inDiv = "";
  var divXanh = '<div class="bg-success mb-3 p-3"></div>';
  var divDo = '<div class="bg-danger m-3 p-3"></div>';
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      inDiv += divXanh;
    } else inDiv += divDo;
  }
  console.log(inDiv);
  document.getElementById("hienKQ4").innerHTML = inDiv;
}

// ĐỀ 5 in ra số nguyên tố
function inRaSoNguyenTo() {
  var kq = "";
  var n = document.getElementById("soN5").value * 1;
  for (var j = 2; j <= n; j++) {
    var sNT = ktSNT(j);
    if (sNT) {
      kq += j + " ";
    }
    document.getElementById("hienKQ5").innerHTML = "Những số nguyên tố : " + kq;
  }
}

function ktSNT(n) {
  var sNT = true;
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      sNT = false;
      break;
    }
  }
  return sNT;
}
