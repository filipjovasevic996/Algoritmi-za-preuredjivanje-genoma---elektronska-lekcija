import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const GenomeGraph: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT} Biološki gledano, genomi su linearne strukture, ali su
        zarad lakše analize, u nastavku predstavljeni kao cirkularne. Svaki blok
        sintenije je predstavljen crnom usmerenom granom. Svaki blok sintentije
        tj. svaka usmerena crna grana je povezana sa drugom usmerenom crnom
        granom preko neusmerene crvene grane, kao što je prikazano na slici 3.6.
      </p>
      <Slika path="ciklicniHromozom" altText="Ciklicni hromozom" />
      <p>
        {TAB_INDENT}Cirkularni hromozomi od n blokova sintenije mogu biti
        predstavljeni na 2n različitih načina. Na primer, levi hromozom sa slike
        se može napisati na sledeće načine: (+a -b -c +d), (-b -c +d +a), (-c +d
        +a -b), (+d +a -b -c), (-a -d +c +b) (-d +c +b -a), (+c +b -a -d), i (+b
        -a -d +c), sve u zavisnosti od toga odakle se započne ciklus i u kom
        smeru se ide.
        <br />
        {TAB_INDENT}Na slici 3.7 prikazana su dva ekvivalentna prikaza istog
        hromozoma, tj hromozoma $Q = (+a−b−d+c)$, nastalog transformacijom
        kružnog hromozoma $P = (+a − b − c + d)$. <br />
      </p>
      <Slika path="qHromozom" altText="Q hromozom" />
      <p>
        {TAB_INDENT}Hromozom Q se može vizualizovati na različite načine, u
        zavisnosti od rasporeda crnih grana. Iako je prvi prikaz prirodniji,
        analiziraće se drugi prikaz, zato što su crne grane raspoređene istim
        redosledom kao u prikazu hromozoma $P = (+a − b − c + d)$. Kao što je
        prikazano na slici 3.8, ovakav pristup omogućava lakše vizualizaciju
        transformacije. Ona podrazumeva brisanje (ili prekidanje) dve crvene
        grane u hromozomu P koje povezuju b sa d i c sa a.
        <br />
      </p>
      <Slika path="brisanjeGrana" altText="Brisanje grana" />
      <p>
        {TAB_INDENT}Na slici 3.9 je ilustrovana fizija hromozoma $P = (+a − b −
        c + d)$ u dva manja hromozoma $Q = (+a − b)(−c + d)$. Obrnuti proces ove
        operacije, to jest fuzija dva hromozoma Q kako bi se ponovno formirao
        hromozom P, takođe se može predstaviti preko koncepta dvostukog prekida.
        Operacije fuzije i fizije, slično kao i u prethodnoj transformaciji,
        uključuju brisanje dve grane u jednom genomu i njihovu zamenu sa dve
        nove u drugom.
      </p>
      <Slika
        path="translokacijaCirkularni"
        altText="Translokacija u cirkularnom grafu"
      />

      <p>
        {TAB_INDENT}Translokacije koje uključuju dva linearna hromozoma mogu se
        predstaviti i na cirkularnom hromozomu zamenom dve crvene ivice sa dve
        različite crvene ivice, kao što je prikazano na slici 3.10.
      </p>
      <Slika
        path="translokacijaMultihromozom"
        altText="Translokacija u cirkularnom grafu"
      />

      <p>
        {TAB_INDENT}Na osnovu prikazanog primera, može se zaključiti da se sve
        pomenute operacije nad linearnim hromozomima mogu predstaviti u
        cirkularnoj formi i to kao prekidanje dve crvene grane i njihova zamena
        sa dve nove crvene grane nad istim čvorovima. Ova operacija na genomskom
        grafu se naziva 2-prekid (dvostruki prekid). Broj dvostrukih prekida
        kojim se izvršava transformacija genoma P u Q, naziva se rastojanje
        2-prekida između P i Q i označava se sa $d(P,Q)$. U skladu sa
        tendencijom da se uvek optimizuje proces, potrebno je naći najmanje
        rastojanje 2-prekida, tj. najmanje rastojanje između dva dvostruka
        prekida.
      </p>
    </>
  );
};

export default GenomeGraph;
