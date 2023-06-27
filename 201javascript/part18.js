// Part 18: Menggunakan kata kunci 'this' dalam JS

const orang5 = {
    'nama': 'Ari',
    'ucap': function(){
        console.log(`Nama saya ${this.nama}`);
    }  
}

orang5.ucap();