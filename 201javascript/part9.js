// Part 9 : Merupakan lanjutan dari bagian ke-8.

let count = 0;
const interval = setInterval(function(){
    console.log("cek sesuatu...");
    count++;

    if(count === 3){
        clearInterval(interval);
        console.log("Ini yang terakhir, thx");
    }
}, 1000)