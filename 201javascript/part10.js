// Part 10 : While loops

let num = 1;
while(num <= 10){
    console.log(num);
    num++;
}

while(true){
    let name = prompt("Siapa nama anda?");
    if(name === "Gunahar"){
        break;
    }
    else{
        console.log("Salah nama!");
        break;
    }
    
}