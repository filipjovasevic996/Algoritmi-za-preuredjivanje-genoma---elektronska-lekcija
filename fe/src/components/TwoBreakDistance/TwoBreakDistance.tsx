import CenterText from "components/CenterText";
import SablonAlgoritma from "components/SablonAlgoritma";
import TwoBreakDistanceAlgorithm from "components/TwoBreakDistanceAlgorithm";
import { TAB_INDENT } from "constants/constants";

const TwoBreakDistance: React.FC = () => {
  return (
    <>
      <b>Definicija:</b>
      <br />
      <p>
        {TAB_INDENT}Rastojanje 2-prekida <i>d(P, Q)</i> je minimalan broj
        dvostrukih prekida potrebnih da se genom <i>P</i> transformiše u genom{" "}
        <i>Q</i>.
      </p>
      <b>Ciklusna teroma:</b>
      <p>
        {TAB_INDENT}Za svake genome <i>P</i> i <i>Q</i>, primena 2-prekid
        rastojanja nad hromozomom <i>P</i> povećava broj ciklusa za najviše 1.
      </p>
      <b>Dokaz:</b>
      <p>
        {TAB_INDENT}Pošto se 2-prekid sastoji od dodavanja dve nove crvene
        grane, samim tim i dodaje najviše 2 nova ciklusa, i brisanja dve crvene
        grane, što znači i brisanje najmanje jednog ciklusa, može se zaključiti
        da je najveći broj ciklusa koji možemo dobiti prilikom primenjivanja
        2-prekida jeste jednak 1. □
        <br />
        {TAB_INDENT}Teorema jasno ukazuje na to da svaki 2-prekid može povećati
        broj ciklusa za najviše 1. Idealan scenario bi bio kada bi se sa svakim
        2-prekidom povećavao broj ciklusa za jedan. Sledeća teorema govori da
        uvek postoji bar jedan 2-prekid koji će dovesti do povećanja broja
        ciklusa.
      </p>
      <b>Teorema o rastojanju 2-prekida:</b>
      <p>
        {TAB_INDENT}Rastojanje 2-prekida između genoma <i>P</i> i <i>Q</i> je
        jednako <i>blocks(P, Q) - cycles(P, Q)</i>
      </p>
      <b>Dokaz:</b>
      <p>
        {TAB_INDENT}Prethodno je navedeno da se broj ciklusa prilikom korišćenja
        2-prekida uvećao i da na kraju transformacije on iznosi{" "}
        <i>cycles(Q, Q) − cycles(P, Q)</i>. Pošto je <i>cycles(Q, Q)</i> jednak
        broju blokova sintenije u oba genoma, to jest <i>blocks(P, Q)</i>, zbog
        toga što trivijalni graf sadržu samo trivijalne cikluse, formula za
        povećanje broja ciklusa se može napisati i na sledeći način:{" "}
        <i>blocks(P, Q) − cycles(P, Q)</i>. Što znači da je za transformaciju
        genoma <i>P</i> u genom <i>Q</i>, neophodno je povećati broj ciklusa od
        <i>cycles(P, Q)</i> do <i>blocks(P, Q)</i>. Svaki 2-prekid može povećati
        broj ciklusa za najviše 1. Dakle, najmanji broj ovih prekida potreban za
        transormaciju je: <i>d(P, Q) ≥ blocks(P, Q) − cycles(P, Q)</i>. Pošto su
        <i>P</i> i <i>Q</i> dva različita genoma, znači da u grafu postoji barem
        jedan netrivijalni ciklus (sadrži više od 2 grane). Razbijanje takvog
        ciklusa korišćenjem 2-prekida, dobijaju se 2 ciklusa, što znači da broj
        ciklusa biva povećan za 1, što dalje implicira:
        <CenterText>
          <i>d(P, Q) = blocks(P, Q) − cycles(P, Q)</i> □
        </CenterText>
        Način na koji se izračunava minimalan broj dvostrukih prekida potrebnih
        da se genom P transformiše u genom Q prikazan je u algoritmu:
      </p>
      <TwoBreakDistanceAlgorithm
        title="2-prekid rastojanje"
        buttonText="Izračunaj rastojanje"
        resultText="Rastojanje je"
        listingOrder={4.4}
      />
      <p>
        Sledeći algoritam izračunava najkraći scenario, tj. minimalan broj
        koraka u procesu transformacije genoma <i>P</i> u genom <i>Q</i>, uz
        prikaz svih permutacija u procesu. <br />
        Treba uneti samo permutaciju P, jer se za Q uzima jedinična permutacija.
      </p>
      <SablonAlgoritma
        title="Najkraći scenario transfromacije P u Q"
        buttonText="Prikaži permutacije i rastojanje"
        endpoint="shortest-rearrangement-scenario"
        resultText="2-prekid rastojanje je"
        listingOrder={4.5}
        shortestRearrangement={true}
      />
    </>
  );
};

export default TwoBreakDistance;
