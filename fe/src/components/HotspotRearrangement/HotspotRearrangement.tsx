import { TAB_INDENT } from "constants/constants";

const HotspotRearrangement: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}U poglavlju <i>Mesta preuređivanja</i> je postavljena
        pretpostavka da u ljudskom genomu ne postoji obrazac za mesta prekidnih
        tačaka, nazvana modelom slučajnih prekida. Ako se pođe od pretpostavke
        da je model slučajnog prekida tačan, n preokreta na linearnom hromozomu
        će proizvesti približno 2 · n + 1 blokova sintenije, pošto je
        verovatnoća da će se dve susedne lokacije u genomu koristiti kao tačke
        dvostrukih prekida veoma mala. Slično tome, n slučajnih dvostrukih
        prekida primenjenih na kružni hromozom, proizvešće 2n blokova sintenije.
        S obzirom na to da i kod čoveka i kod miša postoji 280 blokova
        sintenije, izvodi se zaključak da na evolucionom putu koji deli miša i
        čoveka, dvostrukih prekida ima približno 280/2 = 140. Sa druge strane,
        grafikon tačke prekida konstruisan na 280 blokova sintenije čoveka i
        miša sadrži 35 naizmeničnih ciklusa, tako da je, na osnovu teoreme o
        rastojanje 2-prekida, to rastojanje između ovih genoma minimum 280 − 35
        = 245. Dobijen broj prekida je značajno veći od broja do kojeg dovodi
        model slučajnog prekida. To, dalje, iako nema čvrstog matematičkog
        dokaza, model slučajnog prekida proglašava netačnim. <br />
        {TAB_INDENT}Prethodno navedena kontradikcija modela slučajnog prekida sa
        teorijom dvostrukih prekida, dovela je do alternativnog modela, tzv.
        modela krhkog prekida. Po ovom modelu, svaki genom sisara je sastavljen
        od dugih čvrstih regiona na koje retko utiče preuređivanje i kratkih i
        krhkih regiona koji služe kao mesta preuređivanja. Kod ljudi i miševa,
        krhki regioni čine oko 3% genoma. Ali, kao i veliki broj bioloških
        teorija i modela koji su u suprotnosti sa matematičkim postulatima i
        ovaj model nije matematički dokazan.
      </p>
    </>
  );
};

export default HotspotRearrangement;
