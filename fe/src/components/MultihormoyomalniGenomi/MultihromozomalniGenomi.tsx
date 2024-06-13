import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const MultihromozomalniGenomi: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT} Translokacija predstavlja razmenjivanje segmenata
        različitih hromozoma. Na primer, genom (+1 +2 +3 +4 +5 +6)(+7 +8 +9 +10
        +11) sastoji se od dva hromozoma (+1 +2 +3 +4 +5 +6) i (+7 +8 +9 +10
        +11). Translokacijom, ova dva hromozoma (+1 +2 +3 +4 +5 +6) (+7 +8 +9
        +10 +11) možemo dobiti dva nova hromozoma (+1 +2 +3 +4 +9 +10 +11) i (+7
        +8 +5 +6).
        <br />
        <br />
        <Slika path="translokacija" altText="Translokacija" />
      </p>
    </>
  );
};

export default MultihromozomalniGenomi;
