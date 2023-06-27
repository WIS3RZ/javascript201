// Part 17: Tangani error

// try{
//     throw "Error yang sudah modif!";
// } catch(error){
//     console.warn(`ERROR LOG: ${error}`);
// }

// console.log("Lihat saya!!!");

const angka = 10;

try{
    angka.toUpperCase()
}
catch(error){
    console.warn("ERROR LOG: ", error);
}
finally{
    console.log("Angka terakhir adalah : ", angka);
}