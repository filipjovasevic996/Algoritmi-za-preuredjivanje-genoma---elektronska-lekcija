import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const ZaristaLomova: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Proces preuređivanja hromozoma bi bio jednostavan i jasan
        kada bi postojali tačno definisani principi određivanja tački loma i
        preokreta. Kako odrediti žarišta preuređenja na kojima se češće dešavaju
        tačke loma sintenije? S obzirom na to da su na slici iz sekcije
        ITERACIJSKO PREUREĐIVANJE (link na sliku, a sa slike na ovaj deo),
        krajnje tačke svakog preokreta obeleženi vertikalnim segmentima, regioni
        na kojima se nalazi više pomenutih segmenata, su tačke višestrukih
        preloma hromozoma. Primer je region iza zašiljene strane bloka 3 na
        ljudskom hromozomu. On aludira na to da je taj region potencijalno
        žarište preuređivanja, ali, prikazani primer je samo jedan od mogućih,
        pa se takav zaključak ne bi smeo izvući. S obzirom na to da će pravi
        scenario preuređenja ostati nepoznat, pitanje je da li se, uopšte i može
        utvrditi da li postoje žarišta preuređivanja. <br />
        {TAB_INDENT}Prva hipoteza žarišta loma pretpostavila je da oni nastaju
        nasumično i nju je postavio japansko-američki genetičar i evolucioni
        biolog <i>Susumu Ohno</i>, 1973. godine, ali bez opipljivih dokaza.
        Nakon 11 godina <i>Joseph Nadeau</i> i <i>Benjamin Taylor</i> su
        testirali model slučajnog lomljenja analizom distribucije dužina blokova
        sintenije. Na primer, dužine sintenije čoveka i miša variraju u velikoj
        meri, pri čemu najveći blok (blok 11 na slici 6.2) zauzima skoro 25%
        dužine <i>X</i> hromozoma. Oni su postavili pitanje koje dužine blokova
        sintenije treba očekivati nakon N nasumičnih preokreta. Ako se isključi
        malo verovatan događaj da dva slučajna preokreta preseku hromozom u
        potpuno istoj poziciji, tada N slučajnih preokreta preseca hromozom na N
        lokacija i proizvede 2N + 1 blokova sintenije.
      </p>
      <Slika path="VelicinaBS1" altText="Broj blokova sintenije" />
      <p>
        Slika 6.3 (gore) prikazuje rezultat računarskog eksperimenta u kome se
        320 slučajnih preokreta primenjuje na simulirani hromozom koji se
        sastoji od 25.000 gena, koji proizvode 2*320+1=641 blok sintenije.
        Prosečna veličina bloka sintenije je 25.000/641, što je približno 34
        gena, ali to ne znači da svi blokovi sintenije treba da imaju oko 34
        gena. Ako biramo slučajne lokacije za tačke loma, onda neki blokovi mogu
        imati samo nekoliko gena, dok drugi blokovi mogu sadržati preko sto.
        Slika 6.3 (dole) daje prosečne rezultate 100 takvih simulacije i
        ilustruje da distribucija dužina blokova sintenije može da aproksimira
        krivu koja odgovara eksponencijalnoj raspodeli. Eksponencijalna
        distribucija predviđa da će postojati oko sedam blokova koji imaju po 34
        gena i jedan ili dva mnogo veća bloka sa po 100 gena. Rezultati su
        potvrđeni i desetak godina kasnije, ali se i dalje ne mogu prihvatiti
        kao konačni.
      </p>
      <Slika path="VelicinaBS2" altText="Broj blokova sintenije" />
    </>
  );
};

export default ZaristaLomova;
