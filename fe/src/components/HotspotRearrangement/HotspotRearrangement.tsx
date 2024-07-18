import { TAB_INDENT } from "constants/constants";

const HotspotRearrangement: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}U poglavlju <i>Mesta preuređivanja</i> je na osnovu
        izvedenih računarskih simulacija postavljena pretpostavka da u ljudskom
        genomu postoje mesta preuređenja. Ako se pođe od pretpostavke da je
        model slučajnog prekida tačan, <i>n</i> preokreta na linearnom hromozomu
        će proizvesti približno 2 * n + 1 blokova sintenije, pošto je
        verovatnoća da će se dve susedne lokacije u genomu koristiti kao tačke
        dvostrukih prekida veoma mala. Slično tome, <i>n</i> slučajnih
        dvostrukih prekida primenjenih na kružni hromozom, proizvešće 2<i>n</i>{" "}
        blokova sintenije. S obzirom na to da i kod čoveka i kod miša postoji
        280 blokova sintenije, izvodi se zaključak da na evolucionom putu koji
        deli miša i čoveka, dvostrukih prekida ima približno 280/2 = 140. Sa
        druge strane, grafikon tačke prekida konstruisan na 280 blokova
        sintenije čoveka i miša sadrži 35 naizmeničnih ciklusa, tako da je
        rastojanje 2-prekida između ovih genoma minimum 280-35=245, što je
        značajno više od broja do kojeg nas dovodi pretpostavka slučajnog loma.
        To, dalje, iako nema čvrstog matematičkog dokaza, pretpostavku slučajnog
        loma proglašava netačnom. <br />
        {TAB_INDENT}Kao argument u prilog modela slučajnog prekida, naveden je
        eksperiment kojim se došlo do zaključka da histogram dužine blokova
        sintenije prati eksponencijalnu raspodelu, što ukazuje na to da su
        prekidi slučajni. Ali, takođe je napisano i to da izvedeni eksperimenti
        nisu dovoljni dokaz da je to tačno. Gorenavedena kontradikcija modela
        slučajnog prekida sa teorijom dvostrukih prekida, dovela je do
        alternativnog modela, tzv. modela krhkog prekida. Po ovom modelu, svaki
        genom sisara je sastavljen od dugih čvrstih regiona na koje retko utiče
        preuređivanje, dok kratki i krhki regioni služe kao mesta preuređivanja.
        Kod ljudi i miševa, krhki regioni čine oko 3% genoma. Ali, kao i veliki
        broj bioloških teorija i modela koji su u suprotnosti sa matematičkim
        postulatima i ovaj model nije matematički dokazan.
      </p>
    </>
  );
};

export default HotspotRearrangement;
