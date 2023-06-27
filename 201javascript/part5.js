// Part 5 : Javascript closures.

// let person1 = "I Gusti Bagus Ariguna Wicaksana";
// function greeting(){
//     console.log(`Hello, ${person1}`)
//     var person2 = "I Komang Agus Trisna";
// }
// greeting();
// console.log(person2, "merupakan orang kedua.")

function dariluar(){
    const var_luar = 'berasal dari function luar';

    function daridalam(){
        console.log(var_luar);
    }

    return daridalam;
}

const daridalam1 = dariluar();
daridalam1();