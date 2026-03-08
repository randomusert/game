//variables
var VirusAmount = 0;


//functions
export function MkViruses() {
    VirusAmount++;
    let Virus = document.getElementById("Virus");
    Virus.innerHTML = VirusAmount;
}

