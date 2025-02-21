export type PublicTransportManifest = {
    [cityName: string]: PublicTransportCity;
};

export type PublicTransportCity = {
    lines: PublicTransportLine[];
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

export type LineIcon = LineIconCircular | LineIconLogo;

export type LineIconCircular = {
    type: "circular";
    radius: number;
    text?: string;
    color?: string;
};

export type LineIconLogo = {
    type: "logo";
    data: string;
};

export type PublicTransportStation = {
    id: string;
    lineId: string;
    name: string;
    next: string[];
    prev: string[];
};
