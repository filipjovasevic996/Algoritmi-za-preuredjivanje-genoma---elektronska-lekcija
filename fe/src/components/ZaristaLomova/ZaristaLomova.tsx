import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const ZaristaLomova: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Ovako prikazan proces preuređivanja hromozoma bi bio
        jednostavan i jasan kada bi postojali tačno definisani principi
        određivanja prekidnih tačaka i preokreta. Na slici 3.2, krajnje tačke
        svakog preokreta su obeležene vertikalnim segmentima, pa su regioni na
        kojima se nalazi više pomenutih segmenata, višestruke prekidne tačke
        hromozoma. Primer je region iza zašiljene strane bloka 3 na ljudskom
        hromozomu. On upućuje na to da je taj region potencijalno mesto
        preuređivanja, ali prikazani primer je samo jedan od mogućih, pa se
        takav zaključak ne bi smeo izvući. S obzirom na to da će pravi scenario
        preuređenja ostati nepoznat, pitanje je da li se, uopšte i može utvrditi
        da li postoje mesta preuređivanja i da li prekidi nastaju slučajno ili
        po nekom obrascu. Na primer, dužine blokova sintenije čoveka i miša
        variraju u velikoj meri, pri čemu najveći blok (blok 11 na slici 3.2)
        zauzima skoro 25% dužine X hromozoma. Postavlja se pitanje da li
        različita dužina blokova sintenije ukazuje na tačnost modela slučajnih
        prekida? Ako se isključi malo verovatan događaj da dva slučajna
        preokreta preseku hromozom u potpuno istoj poziciji, tada n slučajnih
        preokreta preseca hromozom na 2n lokacija i proizvede 2n + 1 blokova
        sintenije.
      </p>
      <Slika
        path="VelicinaBS1"
        altText="Broj blokova sintenije"
        caption="Slika 3.3: Simulacija tačaka lomova"
      />
      <p>
        {TAB_INDENT}Slika 3.3 prikazuje rezultat računarskog eksperimenta u kome
        se 320 slučajnih preokreta primenjuje na simulirani hromozom koji se
        sastoji od 25000 gena, koji proizvode 2·320+1 = 641 blok sintenije.
        Prosečna veličina bloka sintenije je 25000/641, što je približno 34
        gena, ali to ne znači da svi blokovi sintenije treba da imaju oko 34
        gena. Izborom slučajnih lokacija za prekidne tačke, neki blokovi mogu
        imati samo nekoliko gena, dok drugi blokovi mogu sadržati preko sto.
        Slika 3.4 daje prosečne rezultate 100 simulacija slučajnih prekida i
        ilustruje da distribucija dužina blokova sintenije može da aproksimira
        krivu koja odgovara eksponencijalnoj raspodeli. Eksponencijalna
        distribucija predviđa da će postojati oko sedam blokova koji imaju po 34
        gena i jedan ili dva mnogo veća bloka sa po 100 gena. S obzirom na to da
        histogrami dužine blokova sintenije izrađeni na osnovu realnih genetskih
        podataka koji se odnose na miša i čoveka takođe prate eksponencijalnu
        raspodelu, potvrđeno je da evolutivno preuređenje genoma prati model
        slučajnog prekida.
      </p>
      <Slika
        path="VelicinaBS2"
        altText="Broj blokova sintenije"
        caption="Slika 3.4: Distribucija dužine blokova sintenije "
      />
    </>
  );
};

export default ZaristaLomova;
