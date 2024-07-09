import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const ZaristaLomova: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Prikazan proces preuređivanja hromozoma bi bio jednostavan i
        jasan kada bi postojali tačno definisani principi određivanja prekidnih
        tačaka i preokreta. Na slici 2.2, krajnje tačke svakog preokreta su
        obeležene vertikalnim segmentima, pa su regioni na kojima se nalazi više
        pomenutih segmenata, višestruke prekidne tačke hromozoma. Primer je
        region iza zašiljene strane bloka 3 na ljudskom hromozomu. On aludira na
        to da je taj region potencijalno žarište preuređivanja, ali, prikazani
        primer je samo jedan od mogućih, pa se takav zaključak ne bi smeo
        izvući. S obzirom na to da će pravi scenario preuređenja ostati
        nepoznat, pitanje je da li se, uopšte i može utvrditi da li postoje
        žarišta preuređivanja. Na primer, dužine blokova sintenije čoveka i miša
        variraju u velikoj meri, pri čemu najveći blok (blok 11 na slici 2.2)
        zauzima skoro 25% dužine X hromozoma. Ako se isključi malo verovatan
        događaj da dva slučajna preokreta preseku hromozom u potpuno istoj
        poziciji, tada N slučajnih preokreta preseca hromozom na n lokacija i
        proizvede 2n + 1 blokova sintenije.
      </p>
      <Slika path="VelicinaBS1" altText="Broj blokova sintenije" />
      <p>
        {TAB_INDENT}Slika 2.3 prikazuje rezultat računarskog eksperimenta u kome
        se 320 slučajnih preokreta primenjuje na simulirani hromozom koji se
        sastoji od 25000 gena, koji proizvode 2*320+1 = 641 blok sintenije.
        Prosečna veličina bloka sintenije je 25000/641, što je približno 34
        gena, ali to ne znači da svi blokovi sintenije treba da imaju oko 34
        gena. Ako biramo slučajne lokacije za prekidne tačke, onda neki blokovi
        mogu imati samo nekoliko gena, dok drugi blokovi mogu sadržati preko
        sto. Slika 2.4 daje prosečne rezultate 100 takvih simulacija i ilustruje
        da distribucija dužina blokova sintenije može da aproksimira krivu koja
        odgovara eksponencijalnoj raspodeli. Eksponencijalna distribucija
        predviđa da će postojati oko sedam blokova koji imaju po 34 gena i jedan
        ili dva mnogo veća bloka sa po 100 gena. Rezultati su potvrđeni i
        desetak godina kasnije, ali se i dalje ne mogu prihvatiti kao konačni.
      </p>
      <Slika path="VelicinaBS2" altText="Broj blokova sintenije" />
    </>
  );
};

export default ZaristaLomova;
