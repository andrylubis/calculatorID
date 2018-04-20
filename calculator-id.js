var CalculatorID = {
 num:
   {
     teks: [
            //mengisi indeks dengan teks nol s/d lima puluh
             "nol", "satu", "dua", "tiga", "empat", "lima",
             "enam", "tujuh", "delapan", "sembilan", "sepuluh",
             "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas",
             "enam belas", "tujuh belas", "delapan belas", "sembilan belas", "dua puluh",
             "dua puluh satu", "dua puluh dua", "dua puluh tiga", "dua puluh empat", "dua puluh lima",
             "dua puluh enam", "dua puluh tujuh", "dua puluh delapan", "dua puluh sembilan", "tiga puluh",
             "tiga puluh satu", "tiga puluh dua", "tiga puluh tiga", "tiga puluh empat", "tiga puluh lima",
             "tiga puluh enam", "tiga puluh tujuh", "tiga puluh delapan", "tiga puluh sembilan", "empat puluh",
             "empat puluh satu", "empat puluh dua", "empat puluh tiga", "empat puluh empat", "empat puluh lima",
             "empat puluh enam", "empat puluh tujuh", "empat puluh dekapan", "empat puluh sembilan", "lima puluh"
           ],
     number:[
              //mengisi indeks dengan number 0 s/d 50
              0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
              21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
              35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50
            ]
   },
};

function Calculator(str) {
  //convert ke huruf/karakter kecil
  str = str.toLowerCase();

  //menampilkan isi dari variabel str / nilai teks yang ingin di hitung
  document.write('Variabel yang di input adalah "' + str + ' "<br>')
  document.write('Hasilnya adalah "'+ str + ' adalah <b>');

  //melakukan split setelah karakter spasi dan memisahkan teks ke dalam bentuk array
  str = str.split(' ');

  var hasil = 0; nilai1 = 0; nilai2 = 0;

  // seleksi kondisi bila jumlah split str berjumlah 3 atau array indeks [0,1,2]
  if(str.length === 3) {
    //konversi array index0 dan index 2 dalam bentuk number
    for(var iterasi = 0; iterasi < jmlArrayteks; iterasi++) {
      if(str[0] === CalculatorID.num.teks[iterasi]) {
        nilai1 = CalculatorID.num.number[iterasi];
      }
      if(str[2] === CalculatorID.num.teks[iterasi]) {
        nilai2 = CalculatorID.num.number[iterasi];
      }
    }
    // perhitungan untuk 3 indeks [0,1,2] //example: dua tambah dua, dua kurang satu
    if(str[1] === "tambah") {
      hasil = nilai1 + nilai2;
    }
    else if(str[1] === "kurang") {
      hasil = nilai1 - nilai2;
    }
    else if(str[1] === "kali") {
      hasil = nilai1 * nilai2;
    }
  }
  // seleksi kondisi bila  jumlah str split berjumlah 4 atau array indeks [0,1,2,3]
  else if(str.length === 4) {
    for(var iterasi = 0; iterasi < jmlArrayteks; iterasi++) {
      if(str[1] === "tambah" || str[2] === "kurang" || str[2] === "kali") {
        if(str[0] === CalculatorID.num.teks[iterasi]) {
          nilai1 = CalculatorID.num.number[iterasi];
        }
        if(str[2] + " " + str[3] === CalculatorID.num.teks[iterasi]) {
          nilai2 = CalculatorID.num.number[iterasi];
        }

        // perhitungan untuk 4 indeks [0,1,2,3] //example: dua tambah dua belas, dua kali dua belas
        if(str[1] === "tambah") {
          hasil = nilai1 + nilai2;
        }
        else if(str[1] === "kurang") {
          hasil = nilai1 - nilai2;
        }
        else if(str[1] === "kali") {
          hasil = nilai1 * nilai2;
        }
      }

      if(str[2] === "tambah" || str[2] === "kurang" || str[2] === "kali") {
        if(str[0] + " " + str[1] === CalculatorID.num.teks[iterasi]) {
          nilai1 = CalculatorID.num.number[iterasi];
        }
        if(str[3] === CalculatorID.num.teks[iterasi]) {
          nilai2 = CalculatorID.num.number[iterasi];
        }

        // perhitungan untuk 4 indeks [0,1,2,3] //example: dua belas tambah dua, dua belas kurang dua
        if(str[2] == "tambah") {
          hasil = nilai1 + nilai2;
        }
        else if(str[2] == "kurang") {
          hasil = (nilai1 - nilai2);
        }
        else if(str[2] == "kali") {
          hasil = nilai1 * nilai2;
        }
      }
    }
  }
  else if(str.length === 5) {
    for(var iterasi = 0; iterasi < jmlArrayteks; iterasi++) {
      if(str[1] === "tambah" || str[1] === "kurang" || str[1] === "kali") {
        if(str[0] === CalculatorID.num.teks[iterasi]) {
          nilai1 = CalculatorID.num.number[iterasi];
        }
        if(str[2] + " " + str[3] + " " + str[4] === CalculatorID.num.teks[iterasi]) {
          nilai2 = CalculatorID.num.number[iterasi];
        }

        // perhitungan untuk 5 indeks [0,1,2,3,4] //example: dua belas tambah dua belas, tiga belas kurang dua belas
        if(str[1] === "tambah") {
          hasil = nilai1 + nilai2;
        }
        else if(str[1] === "kurang") {
          hasil = nilai1 - nilai2;
        }
        else if(str[1] === "kali") {
          hasil = nilai1 * nilai2;
        }
      }
      if(str[2] === "tambah" || str[2] === "kurang" || str[2] === "kali") {
        if(str[0] + " " + str[1] === CalculatorID.num.teks[iterasi]) {
          nilai1 = CalculatorID.num.number[iterasi];
        }
        if(str[3] + " " + str[4] === CalculatorID.num.teks[iterasi]) {
          nilai2 = CalculatorID.num.number[iterasi];
        }

        // perhitungan untuk 5 indeks [0,1,2,3,4] //example: dua belas tambah dua belas, tiga belas kurang dua belas
        if(str[2] === "tambah") {
          hasil = nilai1 + nilai2;
        }
        else if(str[2] === "kurang") {
          hasil = nilai1 - nilai2;
        }
        else if(str[2] === "kali") {
          hasil = nilai1 * nilai2;
        }
      }
      if(str[3] === "tambah" || str[3] === "kurang" || str[3] === "kali") {
        if(str[0] + " " + str[1] + " " + str[2] === CalculatorID.num.teks[iterasi]) {
          nilai1 = CalculatorID.num.number[iterasi];
        }
        if(str[4] === CalculatorID.num.teks[iterasi]) {
          nilai2 = CalculatorID.num.number[iterasi];
        }

        // perhitungan untuk 5 indeks [0,1,2,3,4] //example: dua belas tambah dua belas, tiga belas kurang dua belas
        if(str[3] === "tambah") {
          hasil = nilai1 + nilai2;
        }
        else if(str[3] === "kurang") {
          hasil = nilai1 - nilai2;
        }
        else if(str[3] === "kali") {
          hasil = nilai1 * nilai2;
        }
      }

    }


  }

  //konversi variabel hasil menjadi dalam bentuk teks
  for(var iterasi=0; iterasi < jmlArrayteks; iterasi++) {
    if(hasil === CalculatorID.num.number[iterasi]) {
      var hasilTeks = CalculatorID.num.teks[iterasi];
    }
  }
   document.write('<span style="color: green;">' + hasilTeks + '</span></b> "'); // range hasil adalah nol s/d lima puluh
}

// range input adalah nol sampai dengan lima puluh
var str = "dua puluh tambah tujuh";

// menghitung jumlah indeks di dalam object CalculatorID -> num.teks
var jmlArrayteks = CalculatorID.num.teks.length;

Calculator(str);
