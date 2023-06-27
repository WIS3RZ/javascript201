let angka = prompt("Masukkan angka anda disini...");
const angkabenar = Math.ceil(Math.random()*20);

while(true){
    if(angka == angkabenar){
        alert("Anda menang!");
        break;
    }
    else{
        console.log(`Angka yang anda masukkan adalah ${angka}, tetapi yang sebenarnya adalah ${angkabenar}`);
        break;
    }
}