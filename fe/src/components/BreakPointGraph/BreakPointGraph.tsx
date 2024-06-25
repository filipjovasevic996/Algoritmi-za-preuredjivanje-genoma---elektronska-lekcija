import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const BreakPointGraph: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Da bismo mogli da izračunamo 2-prekid rastojanje, trebalo bi
        da uporedimo 2 genoma. Uradićemo to u grafovskoj reprezentaciji.
        <br />
        Ukoliko bismo sledeća dva hromozoma(grafa):{" "}
        <span style={{ color: "red" }}>𝑃</span> = (+𝑎 -𝑏 -𝑐 +𝑑) i{" "}
        <span style={{ color: "blue" }}>𝑄</span> = ( +𝑎 +𝑐 + 𝑏 -𝑑 ) preklopili u
        jedan, dobili bismo <b>Break Point graf</b>.
      </p>
      <Slika path="breakPointGraph" altText="Break point graf" />
      <p>
        U novoformiranom grafu, crvene i plave grane sada formiraju
        alternirajuće cikluse. Broj ovih ciklusa u Break Point grafu se označava
        sa Cycles(P, Q). Na slici možemo videti da je broj ciklusa u našem
        slučaju jednak 2.
        <br />
        Osim kod jednohromozomalnih genoma Break Point graf možemo konstruisati
        i u slučaju multihromozomalnih genoma na potpuno isti način.
      </p>
      <Slika
        path="breakPointMulti"
        altText="Break point graf kod multihromozomalnih genoma"
      />
      <p>
        Ukoliko P i Q hromozomi sadrže isti broj blokova sintenije, onda njihov
        broj označavamo sa Blocks(P, Q).
        <br />
        <b>Trivijalni ciklus</b> nazivamo svaki ciklus dužine 2. Takvi ciklusi
        mogu nastati spajanjem raznih hromozoma, ali ukoliko vršimo spajanje 2
        ista hromozoma, kao rezultat dobijamo n trivijalnih ciklusa, gde važi da
        je n = Blocks(P, Q). Takav BreakPoint graf nazivamo{" "}
        <b>trivijalnim break point grafom</b>.
      </p>
      <Slika path="trivijalniGraf" altText="Trivijalni Break Point graf" />

      <p>
        Transformisanje hromozoma P u hromozom P' uz pomoć 2-prekida možemo
        predstaviti i preko BreakPoint grafa kao transformaciju iz
        BreakPointGraph(P, Q) u BreakPointGraph(P', Q).
      </p>

      <Slika
        path="breakPointTransformacije"
        altText="Break Point graf transformacije"
      />
      <br />
      <p>
        Samim tim transformaciju hromozoma P u hromozom Q možemo takođe
        predstaviti Break Point grafom (BreakPointGraph(P, Q) u
        BreakPointGraph(Q, Q)). Kao rezultat dobijamo trivijalni graf.
      </p>
      <Slika
        path="breakPointTransformacije2"
        altText="Break Point graf transformacije"
      />
      <p>
        Sa slike se jasno vidi da se prilikom transformacije hromozoma
        korišćenjem 2-prekida povećava broj ciklusa, pa možemo definisati i
        formulu povećanja broja ciklusa u novonastalom grafu kao: Cycles(Q, Q) -
        Cycles(P, Q).
      </p>
    </>
  );
};

export default BreakPointGraph;
