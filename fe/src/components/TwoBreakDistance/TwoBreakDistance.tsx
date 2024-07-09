import SablonAlgoritma from "components/SablonAlgoritma";
import TwoBreakDistanceAlgorithm from "components/TwoBreakDistanceAlgorithm";
import { TAB_INDENT } from "constants/constants";

const TwoBreakDistance: React.FC = () => {
  return (
    <>
      <p>
        <b>Definicija:</b>
        <br />
        Rastojanje 2-prekida d(P, Q) je minimalan broj dvostrukih prekida
        potrebnih da se genom P transformiše u genom Q.
      </p>
      <p>
        <b>Ciklus teroma:</b>
        <br />
        {TAB_INDENT}Za svake genome P i Q, primena 2-prekid rastojanja nad
        hromozomom P povećava broj ciklusa za najviše 1.
      </p>
      <b>Dokaz:</b>
      <br />
      <p>
        {TAB_INDENT}Pošto se 2-prekid sastoji od dodavanja dve nove crvene
        grane, samim tim i dodaje najviše 2 nova ciklusa, i brisanja dve crvene
        grane, što znači i brisanje najmanje jednog ciklusa, može se zaključiti
        da je najveći broj ciklusa koji možemo dobiti prilikom primenjivanja
        2-prekida jeste jednak 1. <br />
        {TAB_INDENT}Teorema jasno ukazuje na to da svaki 2-prekid može povećati
        broj ciklusa za najviše 1. Idealan scenario bi bio kada bi se sa svakim
        2-prekidom povećavao broj ciklusa za jedan. Sledeća teorema govori da
        uvek postoji bar jedan 2-prekid koji će dovesti do povećanja broja
        ciklusa.
      </p>
      <p>
        <b>Teorema o 2-prekid rastojanju:</b>
        <br />
        {TAB_INDENT}2-prekid rastojanje između genoma P i Q je jednako Blocks(P,
        Q) - Cycles(P, Q)
      </p>
      <b>Dokaz:</b>
      <br />
      <p>
        {TAB_INDENT}Prethodno je navedeno da se broj ciklusa prilikom korišćenja
        2-prekida uvećao i da na kraju transformacije on iznosi cycles(Q, Q) −
        cycles(P, Q). Pošto je cycles(Q, Q) jednak broju blokova sintenije u oba
        genoma, to jest blocks(P, Q) , zbog toga što trivijalni graf sadržu samo
        trivijalne cikluse, formula za povećanje broja ciklusa se može napisati
        i na sledeći način: blocks(P, Q) − cycles(P, Q). Što znači da je za
        transformaciju genoma P u genom Q, neophodno je povećati broj ciklusa od
        cycles(P, Q) do blocks(P, Q) . Svaki 2-prekid može povećati broj ciklusa
        za najviše 1. Dakle, najmanji broj ovih prekida potreban za
        transormaciju je: d(P, Q) ≥ blocks(P, Q) − cycles(P, Q). Pošto su P i Q
        dva različita genoma, znači da u grafu postoji barem jedan netrivijalni
        ciklus (sadrži više od 2 grane). Razbijanje takvog ciklusa korišćenjem
        2-prekida, dobijaju se 2 ciklusa, što znači da broj ciklusa biva povećan
        za 1, što dalje implicira: d(P, Q) = blocks(P, Q) − cycles(P, Q).
      </p>
      <p>
        Način na koji se izračunava minimalan broj dvostrukih prekida potrebnih
        da se genom P transformiše u genom Q prikazan je kroz sledeći algoritam.
      </p>
      <h4>Algoritam</h4>
      <TwoBreakDistanceAlgorithm
        buttonText="Izračunaj rastojanje"
        resultText="Rastojanje je"
      />
      <p>
        Sledeći algoritam izračunava najkraći scenario to jest minimalan broj
        koraka u procesu transformacije genoma P u genom Q, uz prikaz svih
        permutacija u procesu <br />
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
