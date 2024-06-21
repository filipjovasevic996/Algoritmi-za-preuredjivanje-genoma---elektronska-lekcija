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
        +a -b), (+d +a -b -c), (-a -d +c +b) (-d +c +b -a), (+c +b -a -d), and
        (+b -a -d +c), sve u zavisnosti od toga odakle započnemo ciklus i u kom
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
    </>
  );
};

export default GenomeGraph;
