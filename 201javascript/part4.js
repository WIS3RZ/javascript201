// Part 4 : Bagaimana hoisting bekerja di javascript


/* Deklarasi variabel dengan `var` akan dinaikkan ke atas lingkup fungsi atau ke atas lingkup global, 
bahkan sebelum eksekusi kode dimulai. Namun, inisialisasi (penetapan nilai awal) variabel akan 
tetap berada di tempat aslinya. Contoh: */
var x;
console.log(x);
var x = 34;
console.log(x);