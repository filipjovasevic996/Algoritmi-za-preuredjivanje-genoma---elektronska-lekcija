import { TAB_INDENT } from "constants/constants";
import SablonAlgoritma from "../SablonAlgoritma";
import Slika from "components/Slika";
import CenterText from "components/CenterText";

const TackePrekida: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Pomoću slike 4.3, može se analizirati kako se sa svakom
        sledećom permutacijom početna približava identičkoj permutaciji. U prvom
        preokretu sekcije (-12 -8 -7 -6 +1 +2 +10 +9 -11), na desnoj krajnjoj
        tački umesto prvobitna dva uzastopna elementa (-11 +13), dobijaju se
        poželjni elementi (+12 +13). U četvrtom preokretu (+11 -9) dobijaju se
        uzastopni elementi (-11 -10) koji prostim obrtanjem formiraju interval
        sa poželjnim uzastopnim elementima (+10 +11).
      </p>
      <Slika
        path="tackePrekida"
        altText="Tacke prekida"
        caption="Slika 4.3: Sortiranje po preokretima"
      />
      <p>
        {TAB_INDENT}Naslućuje se da je formiranje sekcija sa uzastopnim
        elementima kao što su (+12 +13) ili (-11 -10) poželjno. Za navedene
        parove je zajedničko to što je drugi za 1 veći od prvog, pa se za
        uzastopne elemente (<i>p</i>
        <sub>i</sub> <i>p</i>
        <sub>i+1</sub>) u permutaciji P = (<i>p</i>
        <sub>1</sub> ... <i>p</i>
        <sub>
          <i>n</i>
        </sub>
        ) kaže da formiraju susednost ako važi da je <i>p</i>
        <sub>i+1</sub> - <i>p</i>
        <sub>i</sub> = 1. Po definiciji, za bilo koji pozitivan ceo broj{" "}
        <i>k</i> &lt; <i>n</i>, susedi su (<i>k</i> &nbsp;&nbsp;<i>k</i> + 1),
        isto kao i (-(<i>k</i> + 1)&nbsp;&nbsp; <i>k</i> ). Ako <i>p</i>
        <sub>i+1</sub> - <i>p</i>
        <sub>i</sub> nije jednako 1, onda je (<i>p</i>
        <sub>i</sub> <i>p</i>
        <sub>i+1</sub>) prekidna tačka.
        <br />
        {TAB_INDENT}Jednostavnije rečeno, tačka prekida nastaje između parova
        uzastopnih elemenata koji su „van reda“ u poređenju sa identičkom
        permutacijom (+1 +2 ... +<i>n</i>). Na primer, parovi (+5 -12), (-12
        -8), (-6 +1), (+2 +10), (+9 -11) i (-11 +13) su očigledno prekidne tačke
        jer nisu susedi. Ali, i par (+10 +9) je takođe prekidna tačka, uprkos
        tome što sadrži uzastopne brojeve. Razlog je to što su njegovi predznaci
        van reda u poređenju sa identičkom permutacijom i jer je <i>p</i>
        <sub>i+1</sub> - <i>p</i>
        <sub>i</sub> = -1. Dodavanjem elemenata na početak (nula) i kraj
        permutacije (<i>n</i>+1), dobija se permutacija (0 <i>p</i>
        <sub>1</sub> ... <i>p</i>
        <sub>
          <i>n</i>
        </sub>{" "}
        (<i>n</i>+1)), koja ima <i>n</i> + 1 parova uzastopnih elemenata: (0{" "}
        <i>p</i>
        <sub>1</sub>), (<i>p</i>
        <sub>1</sub> <i>p</i>
        <sub>2</sub>), (<i>p</i>
        <sub>2</sub> <i>p</i>
        <sub>3</sub>) ... (<i>p</i>
        <sub>
          <i>n</i>-1
        </sub>{" "}
        <i>p</i>
        <sub>
          <i>n</i>
        </sub>
        ), (<i>p</i>
        <sub>
          <i>n</i>
        </sub>{" "}
        (<i>n</i>+1)).
      </p>
      <p>
        {TAB_INDENT}Pošto je objašnjeno da svaki par uzastopnih elemenata
        formira ili prekidnu tačku ili susede, za svaku permutaciju P , dužine
        n, važi:
        <br />
        <CenterText>
          Susedi (P) + Prekidi (P) = <i>n</i> + 1
        </CenterText>
        Jedina permutacija kod koje su svi uzastopni elementi ujedno i susedni,
        je indentička permutacija.
        <br />
        {TAB_INDENT}Sortiranjem po preokretima se, u stvari, eliminišu prekidne
        tačke. Na slici 4.3 se broj tačaka prekida smanjuje sa 8 na 0, jer
        permutacija posle svakog preokreta postaje uređenija i bliža identičkoj
        permutaciji, pa je samim tim, potreban broj prekidnih tačaka sve manji.
        Preokretanjem intervala, tačke prekida unutar intervala uvek ostaju
        tačke prekida, dok se tačke prekida na granicama intervala mogu
        eliminisati, smanjujući ukupni broj tačaka prekida. Na primer, postoji
        pet tačaka prekida unutar raspona sledećeg preokreta permutacije:
        <CenterText>
          (0 +3 +4 +5 −12 −8 −7 −6 +1 +2 +10 +9 −11 +13 +14 15)
        </CenterText>
        i to su:
        <CenterText>(−12 −8), (−6 +1), (+2 +10), (+10 +9), (+9 −11)</CenterText>
        Nakon preokreta ovog intervala, navedene tačke prekida postaju nove
        tačke prekida:
        <CenterText>(+11 −9), (−9 −10), (−10 −2), (−1 +6), (+8 +12)</CenterText>
        {TAB_INDENT}Dakle, jedine tačke prekida koje se mogu eliminisati
        preokretom su dve tačke prekida koje se nalaze na granicama obrnutog
        intervala. To znači da jednim obrtanjem možemo eliminisati maksimalno
        dve tačke prekida. Ovaj zaključak nas dovodi do Teoreme o prekidnoj
        tački.
      </p>
      <b>Teorema o prekidnoj tački:</b>
      <CenterText>BrojObrtanja(P) ≥ BrojTacakaPrekida(P)/2</CenterText>
      <p>
        {TAB_INDENT}Sa druge strane, maksimalan broj obrtanja koje dovodi do
        jedinične permutacije je n + 1 i to u slučaju obrnute permutacije:
        <CenterText>
          (<i>+n</i> <i>+(n - 1)</i> ... <i>+1</i>)
        </CenterText>
        {TAB_INDENT}Najmanji broj promena potrebnih za transformaciju u
        jediničnu permutaciju predstavlja rastojanje permutacije.
        <br />
        {TAB_INDENT}U nastavku je prikazan algoritam za određivanje broja
        prekidnih tačaka:
      </p>
      <SablonAlgoritma
        title="Određivanje broja prekidnih tačaka"
        endpoint="number-of-breakpoints"
        buttonText="Izračunaj broj prekidnih tačaka"
        resultText="Broj prekidnih tačaka je"
        listingOrder={4.3}
      />
    </>
  );
};

export default TackePrekida;
