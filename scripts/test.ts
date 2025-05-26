import { readFileSync } from "fs";
import { ManifestLinesJSON, ManifestStationsJSON, PublicTransportStation } from "../src/types";

let linesManifest: ManifestLinesJSON = JSON.parse(readFileSync("./data/cities/istanbul/lines.json").toString());
let stationsManifest: ManifestStationsJSON = JSON.parse(readFileSync("./data/cities/istanbul/stations2.json").toString());

for (let line of linesManifest.lines) {
    const stations = stationsManifest.stations.filter(x => x.lineId == line.id);

    console.log(`${line.code} has ${stations.length} stations:`)

    for (let station of stations) {
        console.log("  - " + station.name + " / " + station.neighbours.map(id => stationsManifest.stations.find(x => x.id == id)?.name).join(","))
    }
}
