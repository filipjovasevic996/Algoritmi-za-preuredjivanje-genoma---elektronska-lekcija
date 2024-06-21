import Slika from "components/Slika";
import { TAB_INDENT } from "constants/constants";

const Genetika: React.FC = () => {
  return (
    <>
      <p>
        {TAB_INDENT}Gen je osnovna fizička i funkcionalna jedinica nasleđa koji
        se sastoji od DNK. Kod ljudi, kompleksnost gena varira od nekoliko
        stotina do više od 2 miliona baza DNK.
        <br /> {TAB_INDENT}Hromozom je struktura koja se sastoji od molekula DNK
        čvrsto umotanih mnogo puta oko proteina zvanih histoni koji podržavaju
        njegovu strukturu. Ljudi imaju 46 hromozoma u svakoj ćeliji, podeljenih
        u 23 para, za razliku od miševa ili šimpanzi koji imaju, respektivno 20
        i 24 parova.
        <br />
        <br />
      </p>
      <Slika path="hromozom" altText="Hromozom" />
      <br />
      <p>
        {TAB_INDENT}Genom ili genotip je skup svih gena organizma i on sadrži
        kompletan nasledni materijal jednog organizma. To znači da se evolucija
        genoma zasniva na preuređivanju hromozoma, tj. promeni rasporeda gena na
        hromozomima. Genom je jedinstven za svakog pojedinca, a procenjuje se da
        ljudski genom sadrži 20 do 25 hiljada gena koji kodiraju proteine.
        <br /> {TAB_INDENT}Ljudi više od polovine genetskog materijala dele sa
        pilićima, voćnim mušicama i bananama. Ali, taj procenat zajedničkog
        genetskog materijala nije dovoljan za zaključak da svi imaju istog
        pretka. Procentat podudarnosti sa šimpanzama od 96% - 99% od zavisnosti
        od izvora, ili oko 90% sa miševima, psima, slonovima i govedima, već
        ukazuje na zajedničko poreklo. Procenat veći od 90% deluje nerazumno
        visok za toliko velike razlike između navedenih sisara, ali, sve postaje
        jasnije uz činjenicu da svi ljudi imaju 99,9% identičan genetski
        materijal i da sve razlike među ljudima staju u 0,01% procenat pogrešno
        kopiranih DNK.
      </p>
    </>
  );
};

export default Genetika;
