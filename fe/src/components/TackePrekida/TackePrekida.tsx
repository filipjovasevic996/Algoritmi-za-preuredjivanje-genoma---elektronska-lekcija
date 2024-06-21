import { TAB_INDENT } from "constants/constants";
import SablonAlgoritma from "../SablonAlgoritma";
import Slika from "components/Slika";

const TackePrekida: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Na slici ispod može se analizirati kako se sa svakom
        sledećom permutacijom početna približava permutacijij identiteta. U
        prvom preokretu sekcije (-12 -8 -7 -6 +1 +2 +10 +9 -11), na desnoj
        krajnjoj tački umesto provbitna dva uzastopna elementa (-11 +13),
        dobijaju se poželjni elementi (+12 +13). U četvrtom preokretu (+11 -9)
        dobijaju se uzastopni elementi (-11 -10) koji prostim obrtanjem stvara
        interval sa poželjnim uzastopnim elementima (+10 +11).
      </p>
      <Slika path="tackePrekida" altText="Tacke prekida" />
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
        <i>k</i> &lt; <i>n</i>, susednosti su (<i>k</i> &nbsp;&nbsp;<i>k</i> +
        1), isto kao i (-(<i>k</i> + 1)&nbsp;&nbsp; <i>k</i> ). Ako <i>p</i>
        <sub>i+1</sub> - <i>p</i>
        <sub>i</sub> nije jednako 1, onda je (<i>p</i>
        <sub>i</sub> <i>p</i>
        <sub>i+1</sub>) tačka prekida. Jednostavnije rečeno, tačka prekida
        nastaje između parova uzastopnih elemenata koji su „van reda“ u
        poređenju sa permutacijom identiteta (+1 +2 ... +<i>n</i>). Na primer,
        parovi (+5 -12), (-12 -8), (-6 +1), (+2 +10), (+9 -11) i (-11 +13) su
        očigledno tačke prekida jer nisu susedni. Ali, i par (+10 +9) je takođe
        tačka prekida, uprkos tome što sadrži uzastopne brojeve. Razlog je to
        što su njegovi predznaci van reda u poređenju sa permutacijom identiteta
        i jer je <i>p</i>
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
      <h4>Brojanje tačaka prekida</h4>
      <p>
        {TAB_INDENT}Pošto je objašnjeno da svaki par uzastopnih elemenata
        formira ili tačku prekida ili susednost, za svaku permutaciju P, dužine
        <i>n</i>, važi: Susedi (P) + Prekidi (P) = <i>n</i> + 1. Jedina
        permutacija kod koje su svi uzastopni elementi ujedno i susedni, je
        permutacija identiteta.
      </p>
      <h4>Algoritam za određivanje broja tačaka prekida</h4>
      <SablonAlgoritma
        endpoint="number-of-breakpoints"
        buttonText="Izracunaj broj tacaka prekida"
        resultText="Broj tacaka prekida je"
      />
      <p>
        {TAB_INDENT}Sortiranjem po preokretima se, u stvari, eliminišu tačke
        prekida. Na slici (link) se broj tačaka prekida smanjuje sa 8 na 0, jer
        permutacija posle svakog preokreta postaje uređenija i bliža permutaciji
        identiteta, pa je potreban broj tačaka preloma sve manji. Preokretanjem
        intervala, tačke prekida unutar intervala uvek ostaju tačke prekida, dok
        se tačke prekida na granicama intervala mogu eliminisati, smanjujući
        ukupni broj tačaka prekida. <br />
        Na primer, postoji pet tačaka prekida unutar raspona sledećeg preokreta
        permutacije:
        <br /> (0 +3 +4 +5{" "}
        <span style={{ color: "red" }}>-12 -8 -7 -6 +1 +2 +10 +9 -11</span> +13
        +14 15)
        <br /> (-12 -8), (-6 +1), (+2 +10), (+10 +9), (+9 -11)
        <br />
        Nakon preokreta, ove tačke prekida postaju sledećih pet tačaka prekida:
        <br />
        (+11 -9), (-9 -10), (-10 -2), (-1 +6), (+8 +12)
        <br />
        Dakle, jedine tačke prekida koje se mogu eliminisati preokretom su dve
        tačke prekida koje se nalaze na granicama obrnutog intervala. To znači
        da jednim obrtanjem možemo eliminisati maksimalno dve tačke prekida.
        Ovaj zaključak nas dovodi do <b> Teoreme o prekidnoj tački</b> koja
        glasi: <br />
        <div
          style={{
            backgroundColor: "lightgray",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          BrojObrtanja(P) &ge; BrojTacakaPrekida(P)/2
        </div>
        Sa druge strane, maksimalan broj obrtanja koje dovodi do jedinične
        permutacije je <i>n</i> + 1 i to u slučaju obrnute permutacije:
        <br /> (+<i>n</i> &nbsp;+(<i>n</i> - 1) ... +1).
        <br /> Najmanji broj promena potrebnih za transformaciju u jedniničnu
        permutaciju predstavlja <b>rastojanje permutacije</b>.
      </p>
    </>
  );
};

export default TackePrekida;
