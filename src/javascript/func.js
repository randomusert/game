//variables
var VirusAmount = 0;
var MalwareAmount = 0;


//functions
export function MkViruses() {
    VirusAmount++;
    let Virus = document.getElementById("Virus");
    Virus.innerHTML = VirusAmount;
}

//save the game. UNUSED!! Only can be used in the console.
export function Save() {
    localStorage.setItem("VirusAmount", VirusAmount);
}
//loads the game. UNUSED!! Only can be used in the console.
export function Load() {
    let SaveVirusAmount = localStorage.getItem("VirusAmount");
    if (SaveVirusAmount !== null) {
        VirusAmount = parseInt(SaveVirusAmount);
        let Virus = document.getElementById("Virus");
        Virus.innerHTML = VirusAmount;
    }
}
//resets the game. UNUSED!! Only can be used in the console.
export function Reset() {
    localStorage.removeItem("VirusAmount");
    VirusAmount = 0;
    let Virus = document.getElementById("Virus");
    Virus.innerHTML = VirusAmount;
}

export function MkMalware() {
    MalwareAmount++;
    let Malware = document.getElementById("Malware");
    Malware.innerHTML = MalwareAmount;
}