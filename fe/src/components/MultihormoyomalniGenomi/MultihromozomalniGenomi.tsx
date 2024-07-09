import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const MultihromozomalniGenomi: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Preuređivanje genoma unutar jednog hromozoma preokretima i
        premeštanjima skupova gena, nisu jedini načini. Kod multihromozomalnih
        genoma preuređivanje se može desiti i na sledeće načine: translokacijom,
        fuzijom i fizijom.
        <br />
        {TAB_INDENT} Translokacija predstavlja razmenjivanje segmenata
        različitih hromozoma. Na primer, genom (+1 +2 +3 +4 +5 +6)(+7 +8 +9 +10
        +11) se sastoji od dva hromozoma (+1 +2 +3 +4 +5 +6) i (+7 +8 +9 +10
        +11). Translokacijom segmenata ova dva hromozoma, mogu se dobiti dva
        nova hromozoma (+1 +2 +3 +4 +9 +10 +11) i (+7 +8 +5 +6), na primer.
        Znači da je translokacija genetska promena u kojoj se deo jednog
        hromozoma odvaja i vezuje za drugi hromozom.
        <br />
        <br />
      </p>
      <Slika path="translokacija" altText="Translokacija" />
      <p>
        {TAB_INDENT}Osim translokacijom, preuređivanje genoma može se izvršiti
        fuzijom i fizijom. Već spomenuta dva hromozoma (+1 +2 +3 +4 +5 +6) i (+7
        +8 +9 +10 +11), mogu se daljim procesima spojiti (fuzija) u jedan
        hromozom (+1 +2 +3 +4 +5 +6 +7 +8 +9 +10 +11), koji bi se onda razdvojio
        (fizija) u dva potpuno nova hromozoma u odnosu na početne: (+1 +2 +3 +4)
        i (+5 +6 +7 +8 +9).
      </p>
      <Slika path="fissionFusion" altText="Fuzija i Fizija" />
    </>
  );
};

export default MultihromozomalniGenomi;
