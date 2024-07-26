import CenterText from "components/CenterText";
import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const BreakPointGraph: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Da bi se izračunalo rastojanje 2-prekida, potrebno je
        uporediti dva genoma. Unihromozomalni genomi <i>P = (+a − b − c + d)</i>{" "}
        i <i>Q = (+a + b − d + c)</i> su prikazani na slici 4.11, na kojoj se
        uočava da su neusmerene grane obojene različito u genomima: u genomu{" "}
        <i>P</i>
        su crvene, a u genomu <i>Q</i> su plave. Genom <i>Q</i> je prikazan u
        izvornom obliku i u obliku u kojem su crne ivice preuređene tako da budu
        raspoređen tačno kao u <i>P</i>.
      </p>
      <Slika
        path="PiQ"
        altText="P i Q"
        caption="Slika 4.11: Prikaz genoma P i Q"
      />
      <p>
        {TAB_INDENT}Ukoliko bi se prikazani grafovi preklopili u jedan, dobio bi
        se prekidni graf ili <i>BreakPointGraph(P, Q)</i>, kao na slici 4.12.
      </p>
      <Slika
        path="breakPointGraph"
        altText="Break point graf"
        caption="Slika 4.12: Prekidni graf"
      />
      <p>
        {TAB_INDENT}U novoformiranom grafu, crvene i plave grane formiraju
        alternirajuće crveno-plave cikluse. Broj ovih ciklusa u prekidnom grafu
        se označava sa <i>cycles(P, Q)</i>. Na slici se uočava da je broj
        ciklusa u ovom slučaju jednak 2.
        <br />
        {TAB_INDENT}Osim kod jednohromozomalnih genoma, prekidni graf se može
        konstru- isati i u slučaju multihromozomalnih genoma i to na potpuno
        isti način. Na slici 4.13 je prikazan prekidni graf za unihromozomalni
        genom <i>P = (+a +b +c +d +e +f)</i> i multihtromozomalni genom{" "}
        <i>Q = (+a −c −f −e)(+b −d)</i>.
      </p>
      <Slika
        path="breakPointMulti"
        altText="Break point graf kod multihromozomalnih genoma"
        caption="Slika 4.13: Prekidni graf kod multihromozomalnih genoma"
      />
      <p>
        {TAB_INDENT}Ukoliko <i>P</i> i <i>Q</i> hromozomi sadrže isti broj
        blokova sintenije, onda njihov broj označavamo sa <i>blocks(P, Q)</i>.
        Svaki ciklus dužine 2 nazivamo trivijalnim ciklusom. Takvi ciklusi mogu
        nastati spajanjem raznih hromozoma, ali ukoliko vršimo spajanje 2 ista
        hromozoma, kao rezultat dobijamo n trivijalnih ciklusa, gde važi da je{" "}
        <i>n = blocks(P, Q)</i>. Takav graf nazivamo trivijalnim prekidnim
        grafom.
        <br />
        {TAB_INDENT}Transformisanje hromozoma <i>P</i> u hromozom <i>P′</i> uz
        pomoć dvostrukog prekida možemo predstaviti i preko prekidnog grafa, kao
        transformaciju iz <i>BreakPointGraph(P, Q)</i> u{" "}
        <i>BreakPointGraph(P′, Q)</i>. Samim tim transformaciju hromozoma{" "}
        <i>P</i> u hromozom <i>Q</i> možemo predstaviti i kao transformaciju{" "}
        <i>BreakPointGraph(P, Q)</i> u <i>BreakPointGraph(Q, Q)</i>. Kao
        rezultat dobijamo trivijalni graf.
      </p>
      <Slika
        path="breakPointTransformacije2"
        altText="Break Point graf transformacije"
        caption="Slika 4.14: Transformacija u trivijalni prekidni graf"
      />
      <p>
        {TAB_INDENT}Sa slike 4.14 se jasno vidi da se prilikom transformacije
        hromozoma korišćenjem 2-prekida povećava broj ciklusa, pa se može
        definisati i formula povećanja broja ciklusa u novonastalom grafu kao:
        <CenterText>
          <i>cycles(Q, Q) − cycles(P, Q)</i>
        </CenterText>
      </p>
    </>
  );
};

export default BreakPointGraph;
