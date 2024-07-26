import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const GenomeGraph: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Biološki gledano, genomi su linearne strukture, ali su zarad
        lakše analize, u nastavku predstavljeni kao cirkularne. Svaki blok
        sintenije je predstavljen crnom usmerenom granom. Svaki blok sintenije
        tj. svaka usmerena crna grana je povezana sa drugom usmerenom crnom
        granom preko neusmerene crvene grane, kao što je prikazano na slici 4.6.
      </p>
      <Slika
        path="ciklicniHromozom"
        altText="Ciklicni hromozom"
        caption="Slika 4.6: Kružni hromozomi"
      />
      <p>
        {TAB_INDENT}Cirkularni hromozomi od n blokova sintenije mogu biti
        predstavljeni na 2n različitih načina. Na primer, levi hromozom
        multihromozonalnog genoma sa slike, može se napisati na sledeće načine:
        <i>
          (+a -b -c +d), (-b -c +d +a), (-c +d +a -b), (+d +a -b -c), (-a -d +c
          +b) (-d +c +b -a), (+c +b -a -d), i (+b -a -d +c)
        </i>
        , sve u zavisnosti od toga odakle se započne ciklus i u kom smeru se
        ide.
        <br />
        {TAB_INDENT}Na slici 4.7 prikazana su dva ekvivalentna prikaza istog
        hromozoma, tj hromozoma <i>Q = (+a −b −d +c)</i>, nastalog
        transformacijom kružnog hromozoma <i>P = (+a −b −c +d)</i>. <br />
      </p>
      <Slika
        path="qHromozom"
        altText="Q hromozom"
        caption="Slika 4.7: Transformacija kružnih hromozoma "
      />
      <p>
        {TAB_INDENT}Hromozom Q se može vizualizovati na različite načine, u
        zavisnosti od rasporeda crnih grana. Iako je prvi prikaz prirodniji,
        analiziraće se drugi prikaz, zato što su crne grane raspoređene istim
        redosledom kao u prikazu hromozoma <i>P = (+a − b − c + d)</i>. Kao što
        je prikazano na slici 4.8, ovakav pristup omogućava lakše vizualizaciju
        transformacije. Ona podrazumeva brisanje (ili prekidanje) dve crvene
        grane u hromozomu <i>P</i> koje povezuju <i>b</i> sa <i>d</i> i <i>c</i>{" "}
        sa <i>a</i>.
        <br />
      </p>
      <Slika
        path="brisanjeGrana"
        altText="Brisanje grana"
        caption="Slika 4.8: Preokret"
      />
      <p>
        {TAB_INDENT}Na slici 4.9 je ilustrovana fizija hromozoma{" "}
        <i>P = (+a − b − c + d)</i> u dva manja hromozoma{" "}
        <i>Q = (+a − b)(−c + d)</i>. Obrnuti proces ove operacije, to jest
        fuzija dva hromozoma <i>Q</i> kako bi se ponovno formirao hromozom{" "}
        <i>P</i> , takođe se može predstaviti preko koncepta dvostukog prekida.
        Operacije fuzije i fizije, slično kao i u prethodnoj transformaciji,
        uključuju brisanje dve grane u jednom genomu i njihovu zamenu sa dve
        nove u drugom.
      </p>
      <Slika
        path="translokacijaCirkularni"
        altText="Translokacija u cirkularnom grafu"
        caption="Slika 4.9: Fizija i fuzija dva hromozoma"
      />

      <p>
        {TAB_INDENT}Translokacije koje uključuju dva linearna hromozoma mogu se
        predstaviti i na cirkularnom hromozomu zamenom dve crvene ivice sa dve
        različite crvene ivice, kao što je prikazano na slici 4.10.
      </p>
      <Slika
        path="translokacijaMultihromozom"
        altText="Translokacija u cirkularnom grafu"
        caption="Slika 4.10: Cirkularna translokacija linearnog hromozoma"
      />

      <p>
        {TAB_INDENT}Na osnovu prikazanog primera, može se zaključiti da se sve
        pomenute operacije nad linearnim hromozomima mogu predstaviti u
        cirkularnoj formi i to kao prekidanje dve crvene grane i njihova zamena
        sa dve nove crvene grane nad istim čvorovima. Ova operacija na genomskom
        grafu se naziva 2-prekid (dvostruki prekid). Broj dvostrukih prekida
        kojim se izvršava transformacija genoma <i>P</i> u <i>Q</i>, naziva se
        rastojanje 2-prekida između <i>P</i> i <i>Q</i> i označava se sa{" "}
        <i>d(P, Q)</i>. U skladu sa tendencijom da se uvek optimizuje proces,
        potrebno je naći najmanje rastojanje 2-prekida, tj. najmanje rastojanje
        između dva dvostruka prekida.
      </p>
    </>
  );
};

export default GenomeGraph;
