// CARA UNTUK MEMBUAT OBJECT DALAM JAVA SCRIPT

// 1. Object Literal
// KEKURANGAN: Tidak efektif untuk object yang banyak

// let mahasiswa1 = {
//   nama: 'Chaedir',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Halo ${this.nama}, selamat makan ^^`);
//   },
// };

// 2. Function Declaration & object literal
// KEKURANGAN: masih harus diperhatikan ketika ada data yang dihapus di object literalnya maka data/codingan yg udah dideklarasikan di function declarationnya pun harus dihapus, ini akan jadi sebuah masalah jika codingan kita sudah sangat kompleks karena harus mengingatnya satu persatu

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan yah`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain ^^v`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur coy`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.main = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa('Dino', 30);
// let mahasiswa2 = Mahasiswa('Alamak', 90);

// 3. OBJECT.CREATE()

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan yah`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat bermain ^^v`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat tidur coy`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa); //dengan ada model ini maka kt tak perlu deklarasi di 2 tempat, ckup panggil saja 1x dan boom bisa jalan
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa('Dino', 30);
// let mahasiswa2 = Mahasiswa('Alamak', 90);

// 4. PROTOTYPE
// pada dasarnya ini constructor namun dengan memanfaatkan prototype kita dapat membuat method tanpa perlu mendefinisikannya di awal (kek lebih ribet yah, mending di definisikan aj dari awal?)

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return console.log(`Hi ${this.nama}, Selamat makan`);
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return console.log(`Yo ${this.nama}, have fun bruh`);
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return console.log(`Selamat tidur ${this.nama}, semoga mimpi indah ^^`);
// };

// let Student = new Mahasiswa('Chaedir', 100);

// VERSI CLASS
// versi ini sebenarnya kalo di belakang layar juga menjalankan PROTOTYPE, class ini hanya dijadikan sebagai pembungkusnya (karena class ini baru dimasukkan ke JS keknya dan cmn utk memudahkan mreka yg udah terbiasa denga OOP)

class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Hi ${this.nama}, Selamat makan`;
  }

  main(jam) {
    this.energi -= jam;
    return `Yo ${this.nama}, have fun bruh`;
  }

  tidur(jam) {
    this.energi += jam * 2;
    return `Selamat tidur ${this.nama}, semoga mimpi indah ^^`;
  }
}

let Doddy = new Mahasiswa('Doddy', 40);
