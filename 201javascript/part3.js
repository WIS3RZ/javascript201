// Part 3: Ketika halaman disegarkan

window.onbeforeunload = function(){
    console.log("Anda akan tinggalkan halaman ini");
    return "Ingin tinggalkan halaman ini?";
}