import { readFileSync } from "fs";
import { PublicTransportManifest } from "./types";

import GetStations from "./GetStations.json";

let manifest: PublicTransportManifest = JSON.parse(readFileSync("./data/manifest.json").toString());

let ist = manifest["İstanbul"];

for(let { code } of ist.lines) {
    let stats = GetStations.Data
        .filter(x => x.LineName == code)
        .sort((a, b) => a.Order - b.Order);

    const getStationNameFormatted = (n: string) => {
        if(n == "Boğaziçi Ü.-Hisarüstü") return "Boğaziçi Ü./Hisarüstü";
        if(n == "İMES") return "İmes";
        if(n == "MODOKO-KEYAP") return "Modoko-Keyap";
        if(n == "MASKO") return "Masko";
        if(n == "29 Ekim Cumhuriyet") return "29 Ekim - Cumhuriyet";
        return n;
    }

    // console.log(stats.filter(x => !ist.stations.find(s => s.name == getStationNameFormatted(x.Description))))

    

    console.log();
}
