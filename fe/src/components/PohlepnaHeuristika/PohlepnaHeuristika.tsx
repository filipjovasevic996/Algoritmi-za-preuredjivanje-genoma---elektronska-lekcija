import SablonAlgoritma from "components/SablonAlgoritma";
import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const PohlepnaHeuristika: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Pohlepna heuristika za sortiranje po preokretima predstavlja
        jedan od načina za pronalaženje najkraćeg niza preokreta koji pretvara
        jednu permutaciju u drugu. Ona donosi optimalne izbore u svakom koraku,
        nadajući se da će na taj način postići i globalno optimalno rešenje.
        <br />
        {TAB_INDENT}Pohlepno sortiranje je prikazano na slici 4.2. Preuređivanje
        se vrši postavljanjem svakog elementa redom na njihove ispravne
        pozicije. Interval koji će biti preokrenut je prikazan crvenom bojom, a
        elementi koji su postavljeni u ispravan položaj su prikazani plavom
        bojom. Vidi se da je blok sintenije 1 od starta na pravom mestu pa je
        označen plavom bojom. Blok sintenije 2 dolazi na svoje mesto u trećoj
        iteraciji, blok sintenije 3 u četvrtoj i tako redom.
      </p>
      <Slika
        path="greedySorting"
        altText="PohlepnoSortiranje"
        caption="Slika 4.2: Primer pohlepnog algoritma"
      />
      <p>
        {TAB_INDENT}Matematički izraženo, element <i>k</i> u permutaciji{" "}
        <i>
          P = (<i>p</i>
          <sub>1</sub> ... <i>p</i>
          <sub>
            <i>n</i>
          </sub>
          )
        </i>
        je sortiran ako je <i>p</i>
        <sub>
          <i>k</i>{" "}
        </sub>{" "}
        = +<i>k</i> , u protivnom je nesortiran. Permutacija P je
        <i>k</i> -sortirana ako je njenih prvih <i>k</i> -1 elemenata sortirano
        i ako je element
        <i>k</i> nesortiran. Za svaku (<i>k</i> -1)-sortiranu permutaciju P,
        postoji jedan preokret, nazvan <i>k</i> -sortirajući preokret, koji
        fiksira prvih <i>k</i> -1 elemenata permutacije i pomera element{" "}
        <i>k</i> na ispravnu, <i>k</i> -tu poziciju. U slučaju kada je <i>k</i>{" "}
        već na <i>k</i> -toj poziciji permutacije P, ali nije dobro orjentisan,{" "}
        <i>k</i> -sortiranjem se samo okreće <i>k</i> -ti element (primer bloka
        11 u poslednjem koraku).
        <br />
        {TAB_INDENT}U slučaju preuređivanja mišjeg <i>X</i> hromozoma, na ovaj
        način se do identičke permutacije dolazi u 11 koraka, što ne predstavlja
        optimalnu dužinu, jer je sortiranjem po preokretima preuređivanje kraće
        za čak 4 koraka, što se vidi sa slike 3.2. Tako je na ovom primeru
        dokazano da pohlepno sortiranje ne rezultira najkraćom dužinom
        preokreta.
        <br />
        {TAB_INDENT}Algoritam napisan na programskom jeziku <i>Typescript</i>{" "}
        kojim se izračunava najkraći niz preokreta između dve permutacije iste
        dužine, prikazan je u Listing 4.1.
      </p>
      <SablonAlgoritma
        endpoint="greedy-sorting-by-reversals"
        title="Pohlepna heuristika"
        buttonText="Izracunaj rastojanje"
        resultText="Rastojanje je"
        listingOrder={4.1}
      />
    </>
  );
};

export default PohlepnaHeuristika;
