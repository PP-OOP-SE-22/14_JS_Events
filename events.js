/********  Variablen **********/
const btn = document.getElementById("trigBtn");
let appStatus =true;

/********  Event-Listener **********/

// Webseite geladen --> auf (Anfangs)-Zustand umschalten
window.addEventListener("load",toggleAppStatus);

// Klick auf Btn  --> Zustand umschalten
btn.addEventListener("click",toggleAppStatus);

/********  Business-Logic | Toggle **********/

// Wechselschalter:  true = !false | false = !true
function toggleAppStatus() {
    appStatus = !appStatus; 
    updateView();
}

/********  View-Schicht **********/

// Modul: Update der View-Schicht | Test:
// .. View folgt status
function updateView() {
    if (appStatus) {
        switchClassName("night");
        switchBtnTxt("day");
    } else {
        switchClassName("day");
        switchBtnTxt("night");
    }
}

// Modul: Umschaltung Klassenamen | Test:
// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr) {  

     // Kritik: wenig robust, da starre Indexierung
    document.body.className = modeStr; 
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;

}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
 }

/* Tools */
function output(outputData) {
    console.log(outputData);
}