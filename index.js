import { GYUMOLCSOK } from "./adatok.js";


const vasarolt = [];

// 1. feladat
function letrehozTablazat(lista) {
    let txt = "";
    txt += `<table>`
    for(let i = 0; i < lista.length; i++){
        txt += `<tr>`
        txt += `<td>${lista[i].nev}</td>`
        txt += `<td>${lista[i].tomeg}</td>`
        txt += `<td>${lista[i].ar}</td>`
        txt += `</tr>`
    }
    txt += `</table>`
    return txt
}
console.log(letrehozTablazat(GYUMOLCSOK))
const TABLAZAT = document.querySelectorAll("#feladat_1")[0] 
TABLAZAT.innerHTML = letrehozTablazat(GYUMOLCSOK)
const OSSZEG = document.getElementById("feladat_2")
OSSZEG.innerHTML = osszesit(GYUMOLCSOK)

for(let i = 0; i<GYUMOLCSOK.length; i++){
    GYUMOLCSELEM[i].addEventListener("click",kattintas)
}
function kattintas(){
    console.log("Rakattintva")
}
// 2. feladat
function osszesit(lista) {
    let osszeg = 0;
    let arOsszeg = 0;
    for(let i = 0; i < lista.length; i++){
        osszeg += lista[i].tomeg
        arOsszeg += lista[i].ar
    }
    let txt = `<p>A gyümölcsök súlya összesen: ${osszeg} g</p>`
    txt += `<p>A gyümölcsök ára összesen: ${osszeg} ft</p>`
    return txt
}

// 3. feladat
function vasarol(zoldseg) {


}

// 4. feladat
function torolEsemeny() {

}