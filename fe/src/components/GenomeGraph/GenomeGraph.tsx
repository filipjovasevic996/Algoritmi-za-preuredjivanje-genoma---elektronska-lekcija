import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const GenomeGraph: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT} Biološki gledano, genomi sisara su linearne strukture, ali
        za potrebe ove lekcije i lakše analize u daljem tekstu ćemo genome
        predstavljati cirkularno. Svaki blok sintenije je predstavljen crnom
        usmerenom granom. Svaki blok sintentije tj. svaka usmerena crna grana je
        povezana sa drugom usmerenom crnom granom preko neusmerene crvene grane.
        Na slici (ispod) su jasno prikazana dva hromozoma u cirkularnoj
        reprezentaciji.
      </p>
      <Slika path="ciklicniHromozom" altText="Ciklicni hromozom" />
      <p>
        {TAB_INDENT}Cirkularni hromozomi od n blokova sintenije mogu biti
        predstavljeni na 2n različitih načina. Na primer, levi hromozom sa slike
        možemo napisati na sledeće načine: (+a -b -c +d), (-b -c +d +a), (-c +d
        +a -b), (+d +a -b -c), (-a -d +c +b) (-d +c +b -a), (+c +b -a -d) i (+b
        -a -d +c), sve u zavisnosti od toga odakle započnemo ciklus i u kom
        smeru idemo.
        <br />
        {TAB_INDENT}Posvetićemo se analizi transformacije kružnog hromozoma 𝑃 =
        ( + 𝑎 - 𝑏 - 𝑐 + 𝑑 ) u 𝑄 = ( + 𝑎 - 𝑏 - 𝑑 + 𝑐 ). Ova transformacija može
        se vizualizovati na različite načine, zavisno od rasporeda crnih grana.
        Na slici ispod prikazana su dva ekvivalentna prikaza hromozoma 𝑄.
      </p>
      <Slika path="qHromozom" altText="Q hromozom" />
      <p>
        Prvi prikaz hromozoma 𝑄 je prirodniji, ali ćemo koristiti drugi prikaz
        jer crne grane ostaju raspoređene istim redosledom kao u prikazu
        hromozoma 𝑃 = ( + 𝑎 -𝑏 -𝑐 + 𝑑 ). Kao što je prikazano na slici ispod,
        ovakav pristup omogućava nam da lakše vizualizujemo transformaciju. Ona
        podrazumeva brisanje (ili "prekidanje") dve crvene grane u hromozomu 𝑃
        koje povezuju 𝑏 sa 𝑐 i 𝑑 sa 𝑎, i njihovu zamenu sa dve nove crvene grane
        koje povezuju 𝑏 sa 𝑑 i 𝑐 sa 𝑎.
        <br />
      </p>
      <Slika path="brisanjeGrana" altText="Brisanje grana" />
      <p>
        Na slici ispod ilustrovana je fizija hromozoma 𝑃 = ( + 𝑎 - 𝑏 - 𝑐 + 𝑑 ) u
        dva manja hromozoma 𝑄 = ( + 𝑎 - 𝑏 ) i ( - 𝑐 + 𝑑 ). Obrnuti proces ove
        operacije, to jest fuzija dva hromozoma 𝑄 kako bi se ponovno formirao
        hromozom 𝑃, takođe se može predstaviti preko 2-prekida. Operacije fuzije
        i fizije, slično kao i u prethodnoj transformaciji, uključuju brisanje
        dve grane u jednom genomu i njihovu zamenu sa dve nove u drugom.
      </p>
      <Slika
        path="translokacijaCirkularni"
        altText="Translokacija u cirkularnom grafu"
      />

      <p>
        Translokacije koje uključuju dva linearna hromozoma mogu se predstaviti
        i na cirkularnom hromozomu zamenom dve crvene ivice sa dve različite
        crvene ivice, kao što je prikazano na slici ispod.
      </p>
      <Slika
        path="translokacijaMultihromozom"
        altText="Translokacija u cirkularnom grafu"
      />

      <p>
        Možemo zaključiti da se sve pomenute operacije, nad lienarnim
        hromozomima, mogu predstaviti u cirkularnoj reprezentaciji i to kao
        prekidanje dve crvene grane i njihova zamena sa dve nove crvene grane
        nad istim čvorovima. Ovu operaciju na genomskom grafu nazivamo
        2-prekidom. Naš cilj je da utvrdimo najmanji broj 2-prekida koji
        transformiše genom 𝑃 u genom 𝑄. Broj takvih operacija, koje transformišu
        𝑃 u 𝑄, nazivamo 2-prekid rastojanjem između 𝑃 i 𝑄, i označavamo ga sa
        𝑑(𝑃, 𝑄).
      </p>
    </>
  );
};

export default GenomeGraph;
