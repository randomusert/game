import { MkViruses, Save, Load, Reset , MkMalware} from "./func.js";

var AllowMakingMalware = false;

if (AllowMakingMalware) {
    document.getElementById("MkMalwareBtn").style.display = "none";
} else {
    document.getElementById("MkMalwareBtn").style.display = "block";
}

if (typeof window !== "undefined") {
    window.MkViruses = MkViruses;
    window.Save = Save;
    window.Load = Load;
    window.Reset = Reset;
    window.MkMalware = MkMalware;
}