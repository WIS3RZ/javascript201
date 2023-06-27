// Part 13: Menghapus properti dalam objek itu sendiri.

const objSaya = {
    prop1: 'nilai1',
    prop2: 'nilai2',
    prop3: 'nilai3',
};

console.log(objSaya);

delete objSaya.prop3;

objSaya.prop3 = 'nilaiBaru3';
console.log(objSaya);