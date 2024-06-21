import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const MultihromozomalniGenomi: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Do sada smo se fokusirali na preuređivanje genoma unutar
        jednog hromozoma. Ali osim već pomenutog obrtanja, u slučaju
        multihromozomalnih genoma postoje i drugi načini za preuređivanje
        genoma: translokacija, fuzija i fizija.
        <br />
        {TAB_INDENT} <b>Translokacija</b> predstavlja razmenjivanje segmenata
        različitih hromozoma. Na primer, genom (+1 +2 +3 +4 +5 +6)(+7 +8 +9 +10
        +11) sastoji se od dva hromozoma (+1 +2 +3 +4 +5 +6) i (+7 +8 +9 +10
        +11). Translokacijom, ova dva hromozoma (+1 +2 +3 +4 +5 +6) (+7 +8 +9
        +10 +11) možemo dobiti dva nova hromozoma (+1 +2 +3 +4 +9 +10 +11) i (+7
        +8 +5 +6).
        <br />
        <br />
      </p>
      <Slika path="translokacija" altText="Translokacija" />
      <p>
        {TAB_INDENT}Pored translokacije preuređivanje genoma može se izvršiti{" "}
        <b>fuzijom</b> i <b>fizijom</b>. Pa tako dva hromozoma (+1 +2 +3 +4 +5
        +6) i (+7 +8 +9 +10 +11) možemo spojiti(fuzionisati) u jedan (+1 +2 +3
        +4 +5 +6 +7 +8 +9 +10 +11) a onda i naknadno izvršiti
        razdvajanje(fiziju) u dva potpuno nova hromozoma (+1 +2 +3 +4) i (+5 +6
        +7 +8 +9 +10 +11).
      </p>
      <Slika path="fissionFusion" altText="Fuzija i Fizija" />
    </>
  );
};

export default MultihromozomalniGenomi;
