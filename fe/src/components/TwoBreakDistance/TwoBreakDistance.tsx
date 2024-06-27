import SablonAlgoritma from "components/SablonAlgoritma";
import TwoBreakDistanceAlgorithm from "components/TwoBreakDistanceAlgorithm";

const TwoBreakDistance: React.FC = () => {
  return (
    <>
      <p>
        <b>Ciklus teroma:</b>
        <br />
        Za svake genome P i Q, primena 2-prekid rastojanja nad hromozomom P
        povećava broj ciklusa za najviše 1.
      </p>
      <b>Dokaz:</b>
      <br />
      <p>
        Pošto se 2-prekid sastoji od dodavanja dve nove crvene grane, samim tim
        i dodaje najviše 2 nova ciklusa, i brisanja dve crvene grane, što znači
        i brisanje najmanje jednog ciklusa može se zaključiti da je najveći broj
        ciklusa koji možemo dobiti prilikom primenjivanja 2-prekida jeste jednak
        1.
      </p>
      <p>
        U teoremi je jasno rečeno da svaki 2-prekid može povećati broj ciklusa
        za najviše 1. Idealan scenario bi bio kada bismo svakim 2-prekidom
        povećavali broj ciklusa za jedan. Sledeća teorema govori da uvek postoji
        bar jedan 2-prekid koji će dovesti do povećanja broja ciklusa.
      </p>
      <p>
        <b>Teorema o 2-prekid rastojanju:</b>
        <br />
        2-prekid rastojanje između genoma P i Q je jednako Blocks(P, Q) -
        Cycles(P, Q)
      </p>
      <b>Dokaz:</b>
      <br />
      <p>
        Ranije smo naveli da se broj ciklusa prilikom korišćenja 2-prekida
        uvećao i da na kraju transformacije on iznosi CYCLES(Q,Q) − CYCLES(P,Q).
        Pošto je Cycles(Q, Q) jednak broju blokova sintenije u oba genoma, to
        jest Blocks(P, Q), zbog toga što u trivijalnom grafu imamo samo
        trivijalne cikluse, formulu za povećanje broja ciklusa možemo napisati i
        na sledeći način: BLOCKS(P,Q) − CYCLES(P,Q). Što znači, da bismo
        transformisali P u Q, mi moramo povećati broj ciklusa od CYCLES(P,Q) do
        BLOCKS(P,Q). Svaki 2-prekid može povećati broj ciklusa za najviše 1.
        Dakle, najmanji broj ovih prekida potreban za transormaciju je:
        <br />
        d(P,Q) ≥ BLOCKS(P,Q) − CYCLES(P,Q).
        <br />
        Pošto su P i Q dva različita genoma, znači da u našem grafu postoji
        barem jedan netrivijalni ciklus(sadrži više od 2 grane). Razbijanje
        takvog ciklusa korišćenjem 2-prekida, dobijamo 2 ciklusa, što znači da
        broj ciklusa biva povećan za 1, što dalje implicira:
        <br />
        d(P,Q) = BLOCKS(P,Q) − CYCLES(P,Q).
      </p>
      <h4>Algoritam</h4>
      <TwoBreakDistanceAlgorithm
        buttonText="Izračunaj rastojanje"
        resultText="Rastojanje je"
      />
      <p>
        Ispod se nalazi algoritam koji prikazuje najkraći scenario
        transformacija jednog genoma u drugi korišćenjem 2-prekida. <br />
        Treba uneti samo permutaciju P, jer se za Q uzima jedinična permutacija.
      </p>

      <SablonAlgoritma
        buttonText="Prikaži permutacije i rastojanje"
        endpoint="shortest-rearrangement-scenario"
        resultText="2-prekid rastojanje je"
        shortestRearrangement={true}
      />
    </>
  );
};

export default TwoBreakDistance;
