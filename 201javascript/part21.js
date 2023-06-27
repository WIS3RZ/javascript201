// Part 21 : Menggunakan konstruktor

class Orang{
    constructor(nama){
        this.nama = nama;
    }
    sapa(nama){
        console.log(`Halo dari ${this.nama}`);
    }
    masukNama(nama){
        this.nama = nama;
    }
}

const ariguna = new Orang("Ariguna");
ariguna.sapa();
ariguna.masukNama("Michael");
ariguna.sapa();