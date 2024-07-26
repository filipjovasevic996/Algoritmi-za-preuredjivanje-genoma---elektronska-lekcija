import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const IteracijskoPreuredjivanje: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Kada bi bilo moguće napraviti porodično stablo miša i
        čoveka, unazad skoro 80 miliona godina, na vrhu stabla bi bio isti
        predak. Do tog zaključka je dovelo poređenje genoma miša i čoveka i
        činjenica da više od 90% mišjih gena, postoji u sličnom obliku u
        ljudskom genomu. Ljudi i miševi, prema navodima Lawrence Livermore
        National Laboratory, imaju približno isti broj gena i to oko 140000, od
        kojih je proučavano oko 4000. Skoro svaki gen koji je do sada pronađen u
        jednoj vrsti pronađen je u bliskom obliku u drugoj. Od približno 4000
        gena koji su proučavani, manje od 10 se nalazi u jednoj vrsti, ali ne i
        u drugoj. Znači da je tok evolucije i mešanje DNK unutar hromozoma, kao
        i između njih, opredilio da neki organizam od pre više desetina miliona
        godina, postane čovek ili, naizgled drastično različit sisar, miš.
        Najslikovitije prikazano, to bi izgledalo kao slaganje 280 kockica, tj.
        blokova sintenije, u slučaju čoveka u 23 para hromozoma, a u slučaju
        slaganja genoma miša, u 20 parova hromozoma. Znači da se evolutivni
        procesi zasnivaju na postepenom preuređevanju genoma, koje, u dovoljno
        dugom vremenskom periodu, dovodi do funkcionalno i vizuelno drastičnih
        razlika kod potomaka, u odnosu na zajedničkog pretka. Dostupnost genoma
        čoveka i miša utrla je put za razvoj algoritama za mapiranje sintenije
        velikih razmera i bolje razumevanje evolutivnih procesa.
        <br />
        {TAB_INDENT}Poređenje mišjeg i ljudskog hromozoma je rađeno na jednom od
        dva hromozoma koji određuju pol, hromozomu X, jer je kroz evoluciju
        sačuvao skoro sve gene. Na slici 3.1, prikazana je istorija hromozoma X.
      </p>
      <Slika
        path="odMisaDoCoveka"
        altText="Od misa do coveka"
        caption="Slika 3.1: Evolucija X hromozoma"
      />
      <p>
        {TAB_INDENT}Jedna od mogućih transformacija mišjeg X hromozoma u ljudski
        X hromozom u sedam iteracija, prikazana je na slici 3.2. Svaki blok
        sintenije je označen bojom, celim brojem od 1 do 11 i smerom koji je
        predznak svakog celog broja (+ na desno, - na levo). Promena znaka
        ukazuje na to da su se nukleotidi u tom segmentu DNK obrnuli, pa, na
        primer, AAGTAG nakon obrtanja postaje GATGAA. Dva kratka vertikalna
        segmenta označavaju krajnje tačke preuređenog intervala u svakoj
        iteraciji i ovaj oblik preuređenja se naziva preokret. Redosled blokova
        sintenije između tako označenih tačaka preuređivanja se okreće u svakoj
        iteraciji, dok se obrtanje vrši pojedinačno unutar svakog bloka
        sintenije.
        <br />
        {TAB_INDENT}Kada bi pretpostavljeno preuređenje u sedam iteracija bilo
        ispravno, genetski materijal zajedničkog pretka bi se nalazio u nekom od
        središnjih preuređenja, do kojeg bi se miš vraćao unazad kroz evolucioni
        proces, sve do pretka koji je zajednički njemu i čoveku i od kojeg
        sledeće transformacije predstavljaju evolutivni proces u pravom smeru,
        ali ka hromozomu čoveka. Naravno, prikazani primer je samo jedan od 1070
        mogućih scenarija od sedam iteracija kroz koji je se X hromozom miša
        može trasformisti u ljudski X hromozom.
      </p>
      <Slika
        path="poredjenje"
        altText="Poredjenje"
        caption="Slika 3.2: Iteracije u jednom od mogućih scenarija transformacije mišjeg
u ljudski X hromozom"
      />
      <p>
        {TAB_INDENT}Permutacija u kojoj su blokovi sintenije poređani po
        rastućem redosledu i svi imaju pozitivan predznak, naziva se identičkom
        permutacijom. Ona je u ovom radu dodeljena kao model ljudskom X
        hromozomu, ali to nije pravilo. Moglo je biti i obrnuto, i samo je stvar
        izbora onoga ko modeluje kojoj će permutaciji dodeliti identičku
        permutaciju.
      </p>
    </>
  );
};

export default IteracijskoPreuredjivanje;
