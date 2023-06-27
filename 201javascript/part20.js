// Part 20 : Cara membuat kelas

class namaKelasSaya{
    masukNama(nama){
        this.nama = nama;
    }
    ucap(){
        if(this.nama === undefined){
            this.nama = "tanpa nama";
        }
        console.log(`"Woof woof!" ucap seekor anjing yang bernama ${this.nama}.`);
    }
}
const benda = new namaKelasSaya();
benda.masukNama();
benda.ucap();