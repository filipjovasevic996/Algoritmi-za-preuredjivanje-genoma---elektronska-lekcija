import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const Genetika: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT} DNK je skraćenica za dezoksiribonukleinsku kiselinu koja se
        sastoji od četiri hemijska gradivna bloka (nukleotida) koja su nosioci
        informacija. Ove četiri hemijske baze (adenin, citozin, guanin i timin),
        obično skraćeno označene kao A, C, G i T, vezuju se u parove baza DNK
        molekula [9]. Svaki molekul DNK sadrži dve uvrnute niti DNK. Parovi
        hemijskih baza povezuju jednu nit DNK sa drugom, nalik na prečke
        merdevina. Parovi hemijskih baza između svake niti, uvek se kombinuju na
        specifičan način. Na primer, adenin na jednoj niti DNK uvek se uparuje
        sa timinom na suprotnoj niti DNK [1].
        <br />
        {TAB_INDENT}Gen je osnovna fizička i funkcionalna jedinica nasleđa koji
        se sastoji od DNK, ili, drugačije gledano, gen predstavlja segment DNK.
        Ljudi imaju dve kopije svakog gena, po jednu nasleđenu od svakog
        roditelja. Oko 19900 gena gena daju uputstva za stvaranje proteina koji
        su potrebni za funkcionisanje tela, ali, mnogi geni ne kodiraju
        proteine, već pomažu u kontroli drugih gena [13]. Ortologi geni ili
        ortolozi su geni kod različitih vrsta koji su evoluirali od zajedničkog
        pretka. Oni su sačuvali svoje glavne funkcije tokom evolucije [2].{" "}
        <br />
        {TAB_INDENT}Svaki lanac DNK je čvrsto umotan oko proteina koji se zove
        histon. Ova namotana struktura se naziva hromozom. Svaka ljudska ćelija
        obično sadrži 23 para hromozoma, pri čemu po jedan od svakog para daje
        svaki roditelj [1]. Za razliku od ljudi, šimpanze i miševi imaju,
        respektivno 20 i 24 para hromozoma. <br />
        {TAB_INDENT}Genom ili genotip je skup svih gena organizma i on sadrži
        kompletan nasledni materijal jednog organizma. To znači da se evolucija
        genoma zasniva na preuređivanju hromozoma, tj. promeni rasporeda gena na
        hromozomima. Genom je jedinstven za svakog pojedinca.
        <br />
        {TAB_INDENT}Pomoću sekvenciranja određuje se sekvenca DNK, odnosno
        redosled nukeotida koji čine DNK molekul[14].
      </p>
      <Slika path="hromozom" altText="Hromozom" />
    </>
  );
};

export default Genetika;
