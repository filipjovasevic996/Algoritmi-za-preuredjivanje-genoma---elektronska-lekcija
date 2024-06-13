import { TAB_INDENT } from "constants/constants";
import SablonAlgoritma from "components/SablonAlgoritma";
import Slika from "components/Slika";

const SortingByReversals: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}S obzirom na to da priroda obično koristi najkraće puteve,
        probajmo da nađemo minimalni broj preokreta u skladu sa principom tzv.
        Okamove oštrice. Evolucija se možda neće uvek kretati najkraćim
        putevima, ali čak i kada to ne čini, broj koraka u pravom evolucionom
        scenariju se često približava broju koraka u najštedljivijem scenariju.
        Zato se treba orjenitsati ka najjednostavnijoj hipotezi koja podržava
        ono što je već poznato.
        <br />
        {TAB_INDENT}Studije preuređivanja genoma obično zanemaruju dužinu
        blokova sintenije i predstavljaju hromozome potpisanim permutacijama.
        Svaki blok je označen brojem, kome se dodeljuje pozitivan/negativan
        predznak u zavisnosti od smera bloka. Broj elemenata u permutaciji
        određuje njenu dužinu. Kao što je prikazano na slici 6.2 (link na sliku
        i klik za nazad), ljudski i mišji <i>X</i> hromozomi mogu biti
        predstavljeni sledećim potpisanim permutacijama dužine 11:
        <br />
        <ul>
          Miš: (+1 -7 +6 -10 +9 -8 +2 -11 -3 +5 +4)
          <br />
          Čovek: (+1 +2 +3 +4 +5 +6 +7 +8 +9 +10 +11)
        </ul>
        {TAB_INDENT}Bitno je naglasiti da su blokovi sintenije jedinstveni i da
        ponavljanje brojeva, sa ili bez znaka, nije dozvoljeno. Modelovanje
        preokreta se zasniva na obrtanju elemenata, tj. blokova sintenije unutar
        intervala permutacije, nakon čega se menja predznak elementima unutar
        obrnutog intervala. Na primeru razbijanja permutacije između blokova +3
        i +4 kao i između blokova +8 i +9, to izgleda ovako:
        <br />
        „Odseca“ se deo između vertikalnih segmenata (+1 +2 +3 | +4 +5 +6 +7 +8
        | +9 +10), zatim se inerval okreće i menja se znak elementima unutar
        njega (+1 +2 +3 | -8 -7 -6 -5 -4 | +9 +10) i, na kraju, „lepi“ uz
        segmente koji su ostali nepromenjeni (+1 +2 +3 -8 -7 -6 -5 -4 +9 +10),
        kako je prikazano na slici ispod.
      </p>
      <Slika path="preokreti" altText="Preokreti" />
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

export default SortingByReversals;
