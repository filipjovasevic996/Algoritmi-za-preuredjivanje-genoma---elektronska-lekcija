import SablonAlgoritma from "components/SablonAlgoritma";
import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const PohlepnaHeuristika: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Pohlepna heuristika za sortiranje po preokretima se zasniva
        na pronalaženju najkraćeg niza preokreta koji pretvara jednu permutaciju
        u drugu. Ona donosi optimalne izbore u svakom koraku, nadajući se da će
        na taj način postići i globalno optimalno rešenje.
        <br />
        {TAB_INDENT} Pohlepno sortiranje je prikazano na primeru u kojem se
        blokovi ređaju na prave pozicije u konačnoj permutaciji. Preuređivanje
        se vrši iteracijskim pomeranjem elemenata na njihove ispravne pozicije,
        prema konačnom redosledu u identičkoj permutaciji. Obrnuti interval
        svakog preokreta je na slici 3.2 prikazan crvenom bojom, a elementi koji
        su postavljeni u ispravan položaj su prikazani plavom bojom. Vidimo da
        se blok sintenije 1 od starta nalazi na pravom mestu, pa je označen
        plavom bojom. Blok sintenije 2 dolazi na svoje mestu u drugoj iteraciji
        dok blok sintenije 3 u trećoj i tako redom.
      </p>
      <Slika path="greedySorting" altText="PohlepnoSortiranje" />
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
        <i>k</i> -sortiranje se samo okreće <i>k</i> -ti element (primer bloka
        11 u poslednjem koraku).
        <br />
        {TAB_INDENT}U slučaju preuređivanja mišjeg <i>X</i> hromozoma, na ovaj
        način se do permutacije identiteta dolazi u 11 koraka, što ne
        predstavlja optimalnu dužinu, jer je sortiranjem po preokretima
        preuređivanje kraće za čak 4 koraka. Tako je na ovom primeru dokazano da
        pohlepno sortiranje ne rezultira najkraćom dužinom preokreta.
      </p>
      <p>
        {TAB_INDENT}U algoritmu koji sledi, izračunava se broj preokreta, tj.
        dužina preokreta za permutaciju dužine <i>n</i>, od unete permutacije do
        permutacije identiteta:
      </p>
      <SablonAlgoritma
        endpoint="greedy-sorting-by-reversals"
        buttonText="Izracunaj rastojanje"
        resultText="Rastojanje je"
      />
    </>
  );
};

export default PohlepnaHeuristika;
