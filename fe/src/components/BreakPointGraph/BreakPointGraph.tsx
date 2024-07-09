import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const BreakPointGraph: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Da bi se izračunalo rastojanje 2-prekida, potrebno je
        uporediti dva genoma. Unihromozomalni genomi $P = (+a − b − c + d)$ i $Q
        = (+a + b − d + c)$ su prikazani na slici 3.11, na kojoj se uočava da su
        neusmerene grane obojene različito u genomima: u genomu P su crvene, a u
        genomu Q su plave. Genom Q je prikazan u izvornom obliku i u obliku u
        kojem su crne ivice preuređene tako da budu raspoređen tačno kao u P.
      </p>
      {/* <Slika path="breakPointGraph" altText="Break point graf" /> */}
      <p>
        {TAB_INDENT}Ukoliko bi se prikazani grafovi preklopili u jedan, dobio bi
        se prekidni graf ili $BreakPointGraph(P, Q) $, kao na slici 3.12.
      </p>
      <Slika path="breakPointGraph" altText="Break point graf" />
      <p>
        {TAB_INDENT}U novoformiranom grafu, crvene i plave grane formiraju
        alternirajuće crveno-plave cikluse. Broj ovih ciklusa u prekidnom grafu
        se označava sa cycles(P, Q). Na slici se uočava da je broj ciklusa u
        ovom slučaju jednak 2.
        <br />
        {TAB_INDENT}Osim kod jednohromozomalnih genoma, prekidni graf se može
        konstruisati i u slučaju multihromozomalnih genoma i to na potpuno isti
        način. Na slici 3.13 je prikazan prekidni graf za unihromozomalni genom
        P = (+a +b +c +d +e +f) i multihtromozomalni genom Q = (+a −c −f −e)(+b
        −d).
      </p>
      <Slika
        path="breakPointMulti"
        altText="Break point graf kod multihromozomalnih genoma"
      />
      <p>
        {TAB_INDENT}Ukoliko P i Q hromozomi sadrže isti broj blokova sintenije,
        onda njihov broj označavamo sa blocks(P, Q). Trivijalni ciklus je svaki
        ciklus dužine 2. Takvi ciklusi mogu nastati spajanjem raznih hromozoma,
        ali ukoliko vršimo spajanje 2 ista hromozoma, kao rezultat dobijamo n
        trivijalnih ciklusa, gde važi da je n = blocks(P, Q). Takav graf
        nazivamo trivijalnim prekidnim grafom.
      </p>
      <Slika path="trivijalniGraf" altText="Trivijalni Break Point graf" />

      <p>
        {TAB_INDENT}Transformisanje hromozoma P u hromozom P' uz pomoć 2-prekida
        možemo predstaviti i preko prekidnog grafa, kao transformaciju iz
        BreakPointGraph(P, Q) u BreakPointGraph(P' , Q).
      </p>

      <Slika
        path="breakPointTransformacije"
        altText="Break Point graf transformacije"
      />
      <br />
      <p>
        {TAB_INDENT}Samim tim transformaciju hromozoma P u hromozom Q možemo
        takođe predstaviti BreakPointGraph(P, Q) u BreakPointGraph(Q, Q). Kao
        rezultat dobijamo trivijalni graf.
      </p>
      <Slika
        path="breakPointTransformacije2"
        altText="Break Point graf transformacije"
      />
      <p>
        {TAB_INDENT}Sa slike 3.14 se jasno vidi da se prilikom transformacije
        hromozoma korišćenjem 2-prekida povećava broj ciklusa, pa se može
        definisati i formula povećanja broja ciklusa u novonastalom grafu kao:
        cycles(Q, Q) − cycles(P, Q).
      </p>
    </>
  );
};

export default BreakPointGraph;
