import { TAB_INDENT } from "constants/constants";
import Slika from "components/Slika";

const SortingByReversals: React.FC = () => {
  return (
    <>
      <p>
        Preuređivanje genoma se može obavljati na više načina:
        <ol>
          <li>preokretima</li>
          <li>premeštanjem (translokacijom)</li>
          <li>fizijom (cepanjem)</li>
          <li>fuzijom (spajanjem)</li>
        </ol>
        {TAB_INDENT}S obzirom na to da se evolucione promene dešavaju prema
        najkraćem scenariju, tj. sa najmanjim mogućim brojem promena između
        predaka i potomaka, treba pronaći minimalni broj preokreta u skladu sa
        principom tzv. Okamove oštrice. Evolucija se možda neće uvek kretati
        najkraćim putevima, ali čak i kada to ne čini, broj koraka u pravom
        evolucionom scenariju se često približava broju koraka u najštedljivijem
        scenariju. Studije preuređivanja genoma obično zanemaruju dužinu blokova
        sintenije i predstavljaju blokove sintenije označenim permutacijama.
        Svaki blok je označen brojem, kome se dodeljuje pozitivan/negativan
        predznak u zavisnosti od smera bloka. Broj elemenata u permutaciji
        određuje njenu dužinu. Kao što je prikazano na slici 3.2, ljudski i
        mišji X hromozomi mogu biti predstavljeni sledećim označenim
        permutacijama dužine 11:
        <br /> {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}Miš: (+1 -7 +6 -10 +9 -8 +2 -11 -3 +5 +4)
        <br /> {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}
        {TAB_INDENT}Čovek: (+1 +2 +3 +4 +5 +6 +7 +8 +9 +10 +11)
        <br />
        {TAB_INDENT}Bitno je naglasiti da su blokovi sintenije jedinstveni i da
        ponavljanje brojeva, sa ili bez znaka, nije dozvoljeno. Modelovanje
        preokreta se zasniva na obrtanju elemenata, tj. blokova sintenije unutar
        intervala permutacije, nakon čega se menja predznak elementima unutar
        obrnutog intervala. Na primeru razbijanja permutacije između blokova +3
        i +4 kao i između blokova +8 i +9, to izgleda ovako:
        <br />
        {TAB_INDENT}Odseca se deo između vertikalnih segmenata (+1 +2 +3 | +4 +5
        +6 +7 +8 | +9 +10), zatim se inerval okreće i menja se znak elementima
        unutar njega (+1 +2 +3 | -8 -7 -6 -5 -4 | +9 +10) i, na kraju, lepi uz
        segmente koji su ostali nepromenjeni (+1 +2 +3 -8 -7 -6 -5 -4 +9 +10),
        kao što je prikazano na slici 4.1.
      </p>
      <Slika
        path="preokreti"
        altText="Preokreti"
        caption="Slika 4.1: Preokreti sa prekidinim tačkama"
      />
    </>
  );
};

export default SortingByReversals;
