import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const BlokoviSintenije: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Regioni hromozoma koji dele iste sekvence gena poteklih od
        zajedničkog pretka, poređanih na hromozomu po određenom redosledu
        identičnom u genomima drugih vrsta, nazivaju se blokovima sintenije.
        Preuređivanje blokova sintenije predstavljaju srž evolutivnih promena i
        cilj njihovog proučavanja je da se dođe do odgovora na pitanje kako se
        genom seče i lepi tokom evolucije.
        <br />
        {TAB_INDENT} U toku evolucije, nisu svi hromozomski regioni sačuvali
        prvobitan raspored gena. Regioni hromozoma čiji se raspored i sadržaj
        gena ne podudara sa regionima kod drugih vrsta, nalaze se između blokova
        sintenije i nazivaju se prekidne tačke.
      </p>
      <Slika path="blokoviSintenije" altText="Blokovi Sintenije" />
      <p>
        {TAB_INDENT}Na slici 1.2 su prikazani blokovi sintenije i prekidne
        tačke. Geni koji se nalaze na hromozomima dve različite vrste su
        označeni slovima i brojevima koji predstavljaju vrstu kojoj pripadaju
        (vrsta 1 ili 2). Ortologi geni su povezani isprekidanim linijama, a geni
        koji iskaču iz šablona se tretiraju kao praznine u sintenskim
        programima.
        <br />
        {TAB_INDENT} Na primeru tri bloka sintenije, uočava se da blok sintenije
        može biti zapis istog redosleda (blok a), zapis sa obrnutimim redosledom
        (blok b) ili zapis koji dozvoljava neke praznine (blok c). Nasuprot
        tome, slučajevi izazivanja prekida sintenije mogu biti nedostatak
        parnjaka (prekid a), poremećen red gena (prekid b) ili praznine (prekid
        c).
      </p>
    </>
  );
};

export default BlokoviSintenije;
