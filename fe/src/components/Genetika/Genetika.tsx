import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const Genetika: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT} Dezoksiribonukleinska kiselina, skraćeno DNK, sastoji se od
        četiri azotne baze (nukleotida). Ove četiri azotne baze (adenin,
        citozin, guanin i timin), obično skraćeno označene kao A, C, G i T,
        vezuju se u parove baza DNK molekula. Svaki molekul DNK sadrži dve
        isprepletene niti DNK. Parovi nukleotida povezuju jednu nit DNK sa
        drugom, nalik na prečke merdevina. Parovi nukleotida između svake niti
        uvek se kombinuju na specifičan način. Na primer, adenin na jednoj niti
        DNK uvek se uparuje sa timinom na suprotnoj niti DNK. Isto tako guanin
        na jednoj niti DNK se uvek uparuje sa citozinom na suprotnoj niti.
        <br />
        {TAB_INDENT}Ribonukleinska kiselina, skraćeno RNK, je biološki važan tip
        molekula koji imaju značajnu ulogu u kodiranju, dekodiranju, regulaciji
        i ekspresiji gena. Kao i DNK, molekuli RNK se sastoje od dugih vezanih
        jedinica - nukleotida, s tim što su RNK molekuli najčešće jednočlani.
        <br />
        {TAB_INDENT}Gen je osnovna fizička i funkcionalna jedinica nasleđa koji
        se sastoji od DNK u vidu linearnog redosleda nukleotida. Ljudi imaju dve
        kopije svakog gena, po jednu nasleđenu od svakog roditelja. Kako se geni
        kroz generacije prenose sa roditeljskih na ćelije potamaka i kako se
        prenose unutar same ćelije, tj. kako se informacija koju nose geni
        prenosi do ribozoma gde će se na onsovu te informacije sintetisati
        protein, objašnjava centralna dogma. Prema ovoj dogmi, geni se kroz
        generacije prenose zahvaljujući procesu replikacije koji omogućava da
        ćelije potomaka dobiju iste gene koje je imala i ćelija od koje su
        nastale.
        <br />
        {TAB_INDENT}Centrala dogma objašnjava sintezu proteina koji su neophodni
        za normalno funkcionisanje ćelije. Proteini su veliki, složeni molekuli
        koji obavljaju većinu posla u ćelijama i potrebni su za strukturu,
        funkciju i regulaciju telesnih tkiva i organa. Oni se sastoje od stotina
        ili hiljada manjih jedinica, aminokiselina, koje su povezane jedna za
        drugu u dugim lancima. Redosled aminokiselina određuje jedinstvenu
        trodimenzionalnu strukturu svakog proteina i njegovu specifičnu
        funkciju, što znači da je priroda proteina strogo utvrđena i određena
        genima. Sinteza proteina odvija se u ribozomima, u citoplazmi ćelije, a
        geni(DNK) se nalaze u jedru ćelije. Usled toga se kao posrednici između
        gena, sa jedne i proteina sa druge strane, umeću molekuli RNK. U procesu
        transkripcije se uputstvo za sintezu proteina, sadržano u genima,
        prepisuje na RNK, a zatim procesom translacije prevodi u redosled
        aminokiselina u proteinu. Na slici je prikazana sinteza proteina, tj.
        centralna dogma. Oko 19900 gena gena daju uputstva za stvaranje proteina
        koji su potrebni za funkcionisanje tela, ali, mnogi geni ne kodiraju
        proteine, već pomažu u kontroli drugih gena.
      </p>
      <Slika
        path="centralnaDogma"
        altText="centralna dogma"
        caption="Slika 2.1: Centralna dogma"
      />
      <p>
        {TAB_INDENT}Ortologi geni ili ortolozi su geni kod različitih vrsta koji
        su evoluirali od zajedničkog pretka. Oni su sačuvali svoje glavne
        funkcije tokom evolucije. <br />
        {TAB_INDENT}Svaki lanac DNK je čvrsto umotan oko proteina koji se zove
        histon. Ova namotana struktura se naziva hromozom. Svaka ljudska ćelija
        obično sadrži 23 para hromozoma, pri čemu po jedan od svakog para daje
        svaki roditelj. Za razliku od ljudi, šimpanze i miševi imaju,
        respektivno 20 i 24 para hromozoma. <br />
        {TAB_INDENT}Genom ili genotip je skup svih gena organizma i on sadrži
        kompletan nasledni materijal jednog organizma. Genom je jedinstven za
        svakog pojedinca. S obzirom na to šta čini genom, izvodi se zaključak da
        se promene na genomu dešavaju promenama rasporeda gena na hromozomima
        tj. preuređivanjem hromozoma.
        <br />
        <Slika
          path="hromozom"
          altText="Hromozom"
          caption="Slika 2.2: Struktura genoma"
        />
      </p>
      <p>
        {TAB_INDENT}Sekvenciranje je metoda pomoću koje se određuje sekvenca
        DNK, odnosno redosled nukeotida koji čine DNK molekul i koristi se za
        određivanje celokupnog genetskog sastava određenog organizma ili tipa
        ćelije.
      </p>
    </>
  );
};

export default Genetika;
