import { readFileSync, writeFileSync } from "fs";
import { ManifestStationsJSON, PublicTransportStation } from "../src/types";

import GetStations from "../GetStations.json";

let manifest: ManifestStationsJSON = JSON.parse(readFileSync("./data/cities/istanbul/stations.json").toString());

const getStationNameFormatted = (n: string) => {
    if (n == "Boğaziçi Ü.-Hisarüstü") return "Boğaziçi Ü./Hisarüstü";
    if (n == "İMES") return "İmes";
    if (n == "MODOKO-KEYAP") return "Modoko-Keyap";
    if (n == "MASKO") return "Masko";
    if (n == "29 Ekim Cumhuriyet") return "29 Ekim - Cumhuriyet";
    return n;
}

const lines = new Set(GetStations.Data.map(x => x.LineName));

let seen: string[] = []
let dupe: any[] = []

for (let line of lines) {
    const stations = GetStations.Data.filter(x => x.LineName == line);

    console.log(`${line} has ${stations.length} stations:`)

    let prev: PublicTransportStation | undefined;
    for (let station of stations) {
        let fixedName = getStationNameFormatted(station.Description);
        let mStation = manifest.stations.find(x => (
            x.name == fixedName
            && x.lineId.split("_")[1] == station.LineName.toLowerCase()
        ));
        if (!mStation) {
            console.log(station)
            throw new Error("fuck")
        }
        // if (seen.includes(mStation.id)) {
        //     dupe.push(mStation.name);
        // };
        // seen.push(mStation.id)
        console.log(" - " + fixedName)

        mStation.coords = {
            lat: Number(station.DetailInfo.Latitude),
            lng: Number(station.DetailInfo.Longitude),
        }

        if(prev) {
            if(!prev.neighbours.includes(mStation.id))
                prev.neighbours.push(mStation.id);
            if(!mStation.neighbours.includes(prev.id))
                mStation.neighbours.push(prev.id);
        }

        prev = mStation;
    }

    // let stats = GetStations.Data
    //     .filter(x => x.LineName == code)
    //     .sort((a, b) => a.Order - b.Order);


}

console.log(manifest)

writeFileSync("./data/cities/istanbul/stations2.json", JSON.stringify(manifest, null, 2))
