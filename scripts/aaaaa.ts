import { writeFileSync } from "node:fs";
import { PublicTransportCity, PublicTransportLine, PublicTransportManifest, PublicTransportStation } from "../src/types";

const datist = {"lines":[{"lineName":"F1","lineColor":"#7c7358"},{"lineName":"F4","lineColor":"#7c7358"},{"lineName":"M1A","lineColor":"#ee3124"},{"lineName":"M1B","lineColor":"#ee3124"},{"lineName":"M2","lineColor":"#009944"},{"lineName":"M3","lineColor":"#00a8e1"},{"lineName":"M4","lineColor":"#e91e76"},{"lineName":"M5","lineColor":"#683064"},{"lineName":"M6","lineColor":"#caa977"},{"lineName":"M7","lineColor":"#f89aba"},{"lineName":"M8","lineColor":"#447abe"},{"lineName":"M9","lineColor":"#f0e514"},{"lineName":"T1","lineColor":"#004f7d"},{"lineName":"T3","lineColor":"#a86528"},{"lineName":"T4","lineColor":"#f47e46"},{"lineName":"T5","lineColor":"#7c72b3"},{"lineName":"TF1","lineColor":"#68bcb0"},{"lineName":"TF2","lineColor":"#68bcb0"},{"lineName":"B1","lineColor":"#63666b"},{"lineName":"T6","lineColor":"#e57b7b"},{"lineName":"34","lineColor":""}],"stationGroups":[["M2:Yenikapı","M1A:Yenikapı","M1B:Yenikapı","B1:Yenikapı","T6:Yenikapı"],["M4:Ayrılık Çeşmesi","B1:Ayrılık Çeşmesi"],["M1A:Yenibosna","M9:Yenibosna","34:Yenibosna"],["M5:Üsküdar","B1:Üsküdar"],["34:Söğütlüçeşme","B1:Söğütlüçeşme"],["T1:Sirkeci","B1:Sirkeci","T6:Sirkeci"],["34:Küçükçekmece","B1:Küçükçekmece"],["B1:Kazlıçeşme","T6:Kazlıçeşme"],["M4:Ünalan","34:Uzunçayır"],["M4:Pegasus-Kozyatağı","M8:Kozyatağı"],["M3:Özgürlük Meydanı","B1:Bakırköy"],["M9:Ataköy","B1:Ataköy"],["M7:Kağıthane"],["M7:Alibeyköy","T5:Alibeyköy Metro"],["M2:Şişli-Mecidiyeköy","M7:Mecidiyeköy","34:Mecidiyeköy"],["T4:Vatan","M1A:Topkapı-Ulubatlı","M1B:Topkapı-Ulubatlı"],["T1:Zeytinburnu","M1A:Zeytinburnu","34:Zeytinburnu"],["M1A:Merter","34:Merter"],["M1A:Bahçelievler","34:Bahçelievler"],["M1A:Bakırköy-İncirli","M3:İncirli","34:İncirli"],["T1:Topkapı","T4:Topkapı"],["M3:Mahmutbey","M7:Mahmutbey"],["M3:İkitelli Sanayi","M9:İkitelli Sanayi"],["M2:Seyrantepe"],["M5:Altunizade","34:Altunizade"],["M4:Bostancı","M8:Bostancı","B1:Bostancı"],["M5:Dudullu","M8:Dudullu"],["M2:Gayrettepe","34:Zincirlikuyu"],["M3:Kirazlı-Bağcılar","M1B:Kirazlı-Bağcılar"],["T1:Cevizlibağ-AÖY"],["M1A:Ataköy-Şirinevler","34:Şirinevler"],["T4:Kiptaş-Venezia","M7:Karadeniz Mahallesi"],["M1A:Otogar","M1B:Otogar"],["M1A:Kocatepe","M1B:Kocatepe"],["T4:Sağmalcılar","M1A:Sağmalcılar","M1B:Sağmalcılar"],["M1A:Bayrampaşa-Maltepe","M1B:Bayrampaşa-Maltepe"],["M1A:Emniyet-Fatih","M1B:Emniyet-Fatih"],["T1:Yusufpaşa","M1A:Aksaray","M1B:Aksaray"],["M2:Vezneciler-İstanbul Ü.","T1:Laleli-İstanbul Ü."],["T1:Eminönü","T5:Eminönü"],["M2:Haliç","T5:Küçükpazar"],["T5:Eyüpsultan Teleferik","TF2:Eyüp"],["M2:Levent","M6:Levent"],["M6:Boğaziçi Ü./Hisarüstü","F4:Boğaziçi Ü./Hisarüstü"],["M2:Taksim","F1:Taksim"],["T1:Kabataş","F1:Kabataş"],["M4:Kadıköy"],["M4:Acıbadem"],["M4:Göztepe"],["M4:Yenisahra"],["M4:Küçükyalı"],["M4:Maltepe"],["M4:Huzurevi"],["M4:Gülsuyu"],["M4:Esenkent"],["M4:Hastane-Adliye"],["M4:Soğanlık"],["M4:Kartal"],["M4:Yakacık-Adnan Kahveci"],["M4:Pendik"],["M4:Tavşantepe"],["M2:Şişhane"],["M2:Osmanbey"],["M2:4.Levent"],["M2:Sanayi Mahallesi"],["M2:İTÜ-Ayazağa"],["M2:Atatürk Oto Sanayi"],["M2:Darüşşafaka"],["M2:Hacıosman"],["M3:Başakşehir-Metrokent"],["M3:Başak Konutları"],["M3:Siteler"],["M3:Turgut Özal"],["M3:İSTOÇ"],["M3:Yenimahalle"],["M1B:Bağcılar Meydan"],["M1B:Üçyüzlü"],["M1B:Menderes"],["M1B:Esenler"],["T1:Bağcılar"],["T1:Güneştepe"],["T1:Yavuzselim"],["T1:Soğanlı"],["T1:Akıncılar"],["T1:Güngören"],["T1:Merter Tekstil Merkezi"],["T1:Mehmet Akif"],["T1:Mithatpaşa"],["T1:Seyitnizam-Akşemsettin"],["T1:Merkezefendi"],["T1:Pazartekke"],["T1:Çapa-Şehremini"],["T1:Fındıkzade"],["T1:Haseki"],["T1:Aksaray"],["T1:Beyazıt-Kapalıçarşı"],["T1:Çemberlitaş"],["T1:Sultanahmet"],["T1:Gülhane"],["T1:Karaköy"],["T1:Tophane"],["T1:Fındıklı-Mimar Sinan Ü."],["T4:Mescid-i Selam"],["T4:Cebeci"],["T4:Sultançiftliği"],["T4:Yenimahalle"],["T4:Hacı Şükrü"],["T4:50.Yıl-Baştabya"],["T4:Cumhuriyet Mahallesi"],["T4:Karadeniz"],["T4:Taşköprü"],["T4:Ali Fuat Başgil"],["T4:Bosna Çukurçeşme"],["T4:Uluyol Bereç"],["T4:Rami"],["T4:Topçular"],["T4:Demirkapı"],["T4:Şehitlik"],["T4:Edirnekapı"],["T4:Fetihkapı"],["M1A:Atatürk Havalimanı"],["M1A:DTM-İstanbul Fuar Merkezi"],["M1A:Davutpaşa-YTÜ"],["M1A:Terazidere"],["M5:Fıstıkağacı"],["M5:Bağlarbaşı"],["M5:Kısıklı"],["M5:Bulgurlu"],["M5:Ümraniye"],["M5:Çarşı"],["M5:Yamanevler"],["M5:Çakmak"],["M5:Ihlamurkuyu"],["M5:Altınşehir"],["M5:İmam Hatip Lisesi"],["M5:Necip Fazıl"],["M5:Çekmeköy"],["M6:Nispetiye"],["M6:Etiler"],["M7:Yıldız"],["M7:Fulya"],["M7:Çağlayan"],["M7:Nurtepe"],["M7:Çırçır"],["M7:Veysel Karani-Akşemsettin"],["M7:Yeşilpınar"],["M7:Kazım Karabekir"],["M7:Yenimahalle"],["M7:Tekstilkent-Giyimkent"],["M7:Oruç Reis"],["M7:Göztepe Mahallesi"],["M8:Emin Ali Paşa"],["M8:Ayşekadın"],["M8:Küçükbakkalköy"],["M8:İçerenköy"],["M8:Kayışdağı"],["M8:Mevlana"],["M8:İmes"],["M8:Modoko-Keyap"],["M8:Huzur"],["T5:Cibali"],["T5:Fener"],["T5:Balat"],["T5:Ayvansaray"],["T5:Feshane"],["T5:Eyüpsultan Devlet Hastanesi"],["T5:Silahtarağa Mahallesi"],["T5:Üniversite"],["T5:Alibeyköy Merkez"],["T5:Alibeyköy Cep Otogarı"],["T3:İskele Cami"],["T3:Çarşı"],["T3:Altıyol"],["T3:Bahariye"],["T3:Kilise"],["T3:Moda İlkokulu"],["T3:Moda Caddesi"],["T3:Mühürdar"],["T3:Damga Sokak"],["T3:Kadıköy İDO"],["TF1:Maçka"],["TF1:Taşkışla"],["TF2:Piyer Loti"],["M9:Olimpiyat"],["M9:Ziya Gökalp Mahallesi"],["M9:Masko"],["M9:Bahariye"],["T3:Rızapaşa"],["M4:Fevzi Çakmak-Hastane"],["M4:Yayalar-Şeyhli"],["M4:Kurtköy"],["M4:Sabiha Gökçen Havalimanı"],["F4:Aşiyan"],["M8:Parseller"],["M9:Atatürk Mahallesi"],["M9:Halkalı Caddesi"],["M9:15 Temmuz"],["M9:Mimar Sinan"],["M9:Doğu Sanayi"],["M9:29 Ekim - Cumhuriyet"],["M9:Çobançeşme"],["M3:Onurkent"],["M3:Şehir Hastanesi"],["M3:Toplu Konutlar"],["M3:Kayaşehir Merkez"],["M5:Meclis"],["M5:Sarıgazi"],["M5:Sancaktepe"],["M5:Samandıra Merkez"],["M3:Molla Gürani"],["M3:İlkyuva"],["M3:Haznedar"],["M3:Bakırköy Sahil"],["34:Fikirtepe"],["34:Acıbadem"],["34:Burhaniye"],["34:15 Temmuz Şehitler Köprüsü"],["34:Çağlayan"],["34:Okmeydanı Hastane"],["34:Darülaceze-Perpa"],["34:Okmeydanı"],["34:Halıcıoğlu"],["34:Ayvansaray-Eyüpsultan"],["34:Edirnekapı"],["34:Bayrampaşa-Maltepe/Koç Üniviversitesi Hastanesi"],["34:Topkapı-Şehit Mustafa Cambaz"],["34:Cevizlibağ"],["34:Sefaköy"],["34:Beşyol"],["34:Florya"],["34:Cennet Mahallesi"],["34:İBB Sosyal Tesisleri"],["34:Şükrübey"],["34:Avcılar Merkez-Üniversite Kampüsü"],["34:Cihangir-Üniversite Mahallesi"],["34:Mustafa Kemal Paşa"],["34:Saadetdere Mahallesi"],["34:Haramidere Sanayi"],["34:Haramidere"],["34:Güzelyurt"],["34:Beylikdüzü"],["34:Beylikdüzü Belediye"],["34:Cumhuriyet Mahallesi"],["34:Beykent"],["34:Beylikdüzü Sondurak"],["B1:Halkalı"],["B1:Mustafa Kemal"],["B1:Florya"],["B1:Florya Akvaryum"],["B1:Yeşilköy"],["B1:Yeşilyurt"],["B1:Yenimahalle"],["B1:Zeytinburnu - Fişekhane"],["B1:Feneryolu"],["B1:Göztepe"],["B1:Erenköy"],["B1:Suadiye"],["B1:Küçükyalı"],["B1:İdealtepe"],["B1:Süreyya Plajı"],["B1:Maltepe"],["B1:Cevizli"],["B1:Atalar"],["B1:Başak"],["B1:Kartal"],["B1:Yunus"],["B1:Pendik"],["B1:Kaynarca"],["B1:Tersane"],["B1:Güzelyalı"],["B1:Aydıntepe"],["B1:İçmeler"],["B1:Tuzla"],["B1:Çayırova"],["B1:GTÜ - Fatih"],["B1:Osmangazi"],["B1:Darıca"],["B1:Gebze"],["T6:Cankurtaran"],["T6:Kumkapı"],["T6:Cerrahpaşa"],["T6:Kocamustafapaşa"],["T6:Yedikule"]]} as const;


let stations: PublicTransportStation[] = [];
let transfers: string[][] = [];

let lines: PublicTransportLine[] = datist.lines.map((line) => ({
    color: line.lineColor,
    id: "istanbul_"+line.lineName.toLowerCase(),
    code: line.lineName,
    provider: (line.lineName == "34" ? "İETT" : ((line.lineName == "T6" || line.lineName == "B1") ? "TCDD" : "Metro İstanbul")),
    icons: [
        line.lineName == "34" ? {
            type: "logo",
            data: "",
        } : {
            type: "circular",
            radius: 50,
        }
    ],
}));

for(let g of datist.stationGroups) {
    let group = g.map((s: string) => {
        const [lineCode, stationName] = s.split(":");

        const id = Math.random().toString(36).slice(2);
        stations.push({
            id,
            lineId: lines.find(x => x.code == lineCode)?.id || "",
            name: stationName,
            next: [],
            prev: [],
        });
        return id;
    });

    transfers.push(group);
}


let city: PublicTransportCity = {
    lines,
    stations,
    transfers,
};

let manifest: PublicTransportManifest = {
    "İstanbul": city
};

writeFileSync("./data/manifest.json", JSON.stringify(manifest));
