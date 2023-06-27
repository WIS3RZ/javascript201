// Part 12 : Destrukturisasi array dan obyek.
const months = ['January', 'February', 'March'];
const [jan, feb] = months;
console.log(jan, feb);

const orang1 = {
    'nama': 'Giustina Weigandt',
    'socialhandle' : 'giustinaweigandt',
    'kebangsaan' : 'Italia'
}
const {nama, socialhandle, kebangsaan} = orang1;

console.log(orang1['nama']);
console.log(orang1['socialhandle']);