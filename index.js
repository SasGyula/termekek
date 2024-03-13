import { GYUMOLCSOK } from "./adatok.js";


const vasarolt = [];

// 1. feladat
function letrehozTablazat(lista) {
    let txt = "";
    txt += `<table>`
    for(let i = 0; i < lista.length; i++){
        txt += `<tr>`
        txt += `<td class="gyumolcsok">${lista[i].nev}</td>`
        txt += `<td>${lista[i].tomeg}</td>`
        txt += `<td>${lista[i].ar}</td>`
        txt += `</tr>`
    }
    txt += `</table>`
    return txt
}
const TABLAZAT = document.querySelectorAll("#feladat_1")[0] 
TABLAZAT.innerHTML = letrehozTablazat(GYUMOLCSOK)
const OSSZEG = document.getElementById("feladat_2")
OSSZEG.innerHTML = osszesit(GYUMOLCSOK)
const GYUMOLCSELEM = document.querySelectorAll(".gyumolcsok")
const VASAROLTELEM = document.getElementById("feladat_3")

for(let i = 0; i<GYUMOLCSOK.length; i++){
    GYUMOLCSELEM[i].addEventListener("click", kattintas)
}
function kattintas(event){
    if(vasarolt.indexOf(event.target.innerHTML) < 0){
        vasarolt.push(event.target.innerHTML)
        VASAROLTELEM.innerHTML = vasarolt
    }
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
    txt += `<p>A gyümölcsök ára összesen: ${arOsszeg} ft</p>`
    return txt
}


const TORLESELEM = document.getElementById("feladat_4")
TORLESELEM.innerHTML = "<button class='gomb'>Törlés</button>"
const GOMBELEM = document.querySelector("#feladat_4 button")
GOMBELEM.addEventListener("click", katt)


function katt(){
    const TORLES = document.querySelector("#torles")
    TORLES.classList.remove("hide")
    vasarolt = []
}
// 3. feladat
function vasarol(zoldseg) {


}

// 4. feladat
function torolEsemeny() {

}