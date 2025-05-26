export type ManifestLinesJSON = {
    lines: PublicTransportLine[];
};

export type ManifestStationsJSON = {
    stations: PublicTransportStation[];
    transfers: string[][];
};

export type PublicTransportLine = {
    id: string;
    icons: LineIcon[];
    code?: string;
    name?: string;
    qualifiedName?: string;
    provider?: string;
    color?: string;
};

export type LineIcon = {
    type: "svg";
} | { file: string };

export type PublicTransportStation = {
    id: string;
    lineId: string;
    name: string;
    neighbours: string[];
    coords?: { lat: number; lng: number };
};
