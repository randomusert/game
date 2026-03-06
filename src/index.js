//variables
var UnlockMalware = false
var Viruses = 0
var Malware = 0
var VirusCreator = 0
var Speard = 5
let elapsedTime = 0
var totalSeconds= 3600


//load save
window.onload = function() {
    load()
}

//auto save
setInterval(function() {
    Save()
},30000)

//makemalware button is hidden until malware is unlocked
/*if(UnlockMalware) {
    document.getElementById("MakeMalware").style.visibility = "visible"
}
if(UnlockMalware == false)
{
    document.getElementById("MakeMalware").style.visibility = "hidden"
}
*/
if(UnlockMalware) {
    document.getElementById("MakeMalware").style.visibility = "visible"
}
if (UnlockMalware == false) {
    document.getElementById("MakeMalware").style.visibility = "hidden"
}
//if statement for cheking for if you have enough viruses made to unlock malware
if (Viruses > 10000) {
    UnlockMalware = true
    alert("You have unlocked malware")
}



function FormatTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) /60)
    const secs = seconds % 60

    return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2, '0')}${String(secs).padStart(2, '0')}`
}
//TODO: fix the function
function timer() {
    const timerElement = document.getElementById("timer")

    const CountdownTimer = setInterval(() => {
        timerElement.textContent = FormatTime(totalSeconds)
        totalSeconds--
        if(totalSeconds == 0) {
            clearInterval(CountdownTimer)
            alert("FBI has been investigating and got you. you are arrested. Game over!");
        }
    })

}

function MakeViruses() {
    

    Viruses = Viruses + Speard;
    document.getElementById("Virus").innerHTML = Viruses;
}

//TODO:check for issues
function Save() {
    var gamesave = {
        Viruses:Viruses,
        Malware:Malware,
        UnlockMalware:UnlockMalware,
        VirusCreator:VirusCreator,
        Speard:Speard,
        totalSeconds:totalSeconds 
    }
    localStorage.setItem("gamesave", JSON.stringify(gamesave))
}


function load() {
    var SavedGame = JSON.parse(localStorage.getItem("gamesave"))

    if (typeof SavedGame.Viruses !== "undefined") Viruses = SavedGame.Viruses
    if (typeof SavedGame.Malware !== "undefined") Malware = SavedGame.Malware
    if (typeof SavedGame.UnlockMalware !== "undefined") UnlockMalware = SavedGame.UnlockMalware
    if (typeof SavedGame.VirusCreator !== "undefined") VirusCreator = SavedGame.VirusCreator
    if(typeof SavedGame.Speard !== "undefined") Speard = SavedGame.Speard
    if (typeof SavedGame.totalSeconds !== "undefined") totalSeconds = SavedGame.totalSeconds 
}