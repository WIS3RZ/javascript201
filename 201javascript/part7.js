// Part 7 : Menggunakan `strict` dalam JavaScript.


/* Strict mode (mode ketat) adalah fitur dalam JavaScript yang memungkinkan Anda mengaktifkan mode ketat dalam eksekusi kode JavaScript, dengan mengaktifkan "use strict" pada awal file JavaScript atau pada awal fungsi. 

Dalam strict mode, beberapa perilaku tidak aman atau tidak dianjurkan dalam JavaScript akan menghasilkan kesalahan, sehingga membantu Anda menghindari kesalahan dan memperbaiki kode Anda. 

Strict mode sangat berguna untuk memperbaiki kode JavaScript yang rentan terhadap kesalahan dan mencegah perilaku yang ambigu atau tidak dianjurkan. Namun, perlu diingat bahwa strict mode hanya berlaku untuk file atau fungsi yang diaktifkannya, sehingga jika Anda ingin menggunakannya secara konsisten, pastikan untuk mengaktifkan strict mode di seluruh proyek Anda.

Setelah strict mode diaktifkan, beberapa perubahan perilaku dalam JavaScript akan diterapkan, antara lain:

- Variabel harus dideklarasikan sebelum digunakan, menggunakan `var`, `let`, atau `const`. Menggunakan variabel tanpa deklarasi akan menghasilkan kesalahan.

- Penggunaan kata kunci reservasi seperti `eval`, `arguments`, dan `delete` sebagai nama variabel akan menghasilkan kesalahan.

- Tidak diizinkan untuk menghapus variabel atau fungsi yang dideklarasikan dengan `var`.

- Fungsi tidak dapat dideklarasikan di dalam blok (misalnya, dalam blok `if`), kecuali sebagai bagian dari sintaks deklarasi blok `if`.

~ ChatGPT
*/

// Kode :

"use strict";

let x = "sesuatu disini";
console.log(x = "sesuatu");



