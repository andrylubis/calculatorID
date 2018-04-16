var CalculatorID = {
  num:
    {
      teks: [
              "nol", "satu", "dua", "tiga", "empat", "lima",
              "enam", "tujuh", "delapan", "sembilan", "sepuluh",
              "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas",
              "enam belas", "tujuh belas", "delapan belas", "sembilan belas", "dua puluh"
            ],
      number:
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    },
};

function Calculator(Num1, Num2, Operand) {
  //convert ke huruf/karakter kecil
  Num1 = Num1.toLowerCase();
  Num2 = Num2.toLowerCase();
  Operand = Operand.toLowerCase();
  
  for(var iterasi = 0; iterasi < jmlArrayteks; iterasi++) {
    var hasil = 0;
    //cek kondisi nilai yang di input apakah sama dengan yang di dalam object, jika iya convert ke number
    if(Num1 === CalculatorID.num.teks[iterasi]) {
      var nilai1 = CalculatorID.num.number[iterasi];
    }
    if(Num2 === CalculatorID.num.teks[iterasi]) {
      var nilai2 = CalculatorID.num.number[iterasi];
    }

    //cek kondisi operand yang di input dan lakukan perhitungan lalu simpan di variabel hasil.
    if(Operand === "kali") {
      hasil = nilai1 * nilai2;
    }
    else if(Operand == "tambah") {
      hasil = nilai1 + nilai2;
    }
    else if(Operand === "kurang") {
      hasil = nilai1 - nilai2;
    }

    //konversi variabel hasil menjadi dalam bentuk teks
    if(hasil === CalculatorID.num.number[iterasi]) {
      var hasilConvert = CalculatorID.num.teks[iterasi];
    }
  }
   return Num1 + ' ' + Operand + ' ' + Num2 + ' adalah ' + hasilConvert;
}

var Num1 = "Lima"; // only karakter teks satu s/d dua puluh
var Operand = "tambah"; // tambah (+), kurang (-), kali (*)
var Num2 = "Delapan"; // only karkater teks satu s/d dua puluh
var jmlArrayteks = CalculatorID.num.teks.length; // menghitung jumlah indeks di dalam object CalculatorID -> num.teks
document.write(Calculator(Num1, Num2, Operand)); //tampilkan hasil dan panggil fungsi Calculator
