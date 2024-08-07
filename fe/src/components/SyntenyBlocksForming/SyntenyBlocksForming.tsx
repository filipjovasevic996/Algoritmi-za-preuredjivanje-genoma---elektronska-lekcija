import KgramAlgoritam from "components/KgramAlgoritam";
import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const SyntenyBlocksForming: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}U osnovi svih prethodno prikazanih algoritama su bili podaci
        koji se odnose na blokove sintenije. Od početka je postavljena
        pretpostavka da su blokovi sintenije već formirani, bez ulaženja u to na
        koji način se oni formiraju, pa je potrebno razmotriti i to pitanje.
        <br />
        {TAB_INDENT}edan od načina formiranja blokova sintenije je pomoću
        <i>k</i>-grama, odno- sno, lociranjem podniski nukleotida dužine{" "}
        <i>k</i> koje su identične u genima različitih vrsta. Blok sintenije je
        formiran od niza sličnih gena koji se pojavljuju u dva genoma u istom
        redosledu, pa proces poređenja hromozoma miša i čoveka počinje
        pronalaženjem svih pozicija <i>k</i>-grama. Lociranje takvih niski u oba
        hromozoma, pogotovo kada je <i>k</i> veliki broj (na primer 30),
        sugeriše da potiču od srodnih gena. <br />
        {TAB_INDENT}Smatra se da je <i>k</i>-gram deljen između dva hromozoma
        ukoliko se taj <i>k</i>-gram ili njegov komplement nalaze u oba genoma.
        Na slici 4.15 se može videti da postoje četiri trigrama između hromozoma
        AAACTCATC i TTTCAAATC. Drugi trigram, označen plavom bojom, prikazuje
        slučaj kada su podniske međusobno obrnuto komplementarne.
      </p>
      <Slika
        path="/kMer"
        altText="K-mer"
        caption="Slika 4.15: 3-mer primeri između dva genoma"
      />

      <p>
        U nastavku se nalazi algoritam koji određuje indekse početka k-grama u
        oba hromozoma.
      </p>

      <KgramAlgoritam />
    </>
  );
};

export default SyntenyBlocksForming;
