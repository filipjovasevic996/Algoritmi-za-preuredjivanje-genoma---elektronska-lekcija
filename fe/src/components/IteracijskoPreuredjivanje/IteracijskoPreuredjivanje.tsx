const IteracijskoPreuredjivanje: React.FC = () => {
  return (
    <>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Poređenje mišjeg i
        ljudskog hromozoma je rađeno na jednom od dva hromozoma koji određuje
        pol, hromozomu <i>X</i>, jer je kroz evoluciju „sačuvao“ skoro sve gene.
        Na slici ispod, prikazana je istorija hromozoma X.
      </p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/odMisaDoCoveka.png"
          alt="Od misa do čoveka"
          style={{
            objectFit: "cover",
            width: "60%",
          }}
        />
      </div>
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na slici 6.2 je
        prikazana jedna od mogućih transformacija mišjeg <i>X</i> hromozoma u
        ljudski <i>X</i> hromozom u sedam preokreta. Svaki blok sintenije je
        označen bojom, celim brojem od 1 do 11 i smerom koji je predznak svakog
        celog broja (+ na desno, - na levo). Dva kratka vertikalna segmenta
        označavaju krajnje tačke preuređenog intervala u svakom preokretu. Kada
        bi pretpostavljeno preuređenje u sedam iteracija bilo ispravno, genetski
        materijal zajedničkog pretka bi se nalazio u nekom od središnjih
        preuređenja, do kojeg bi se miš vraćao unazad kroz evolucioni proces,
        sve do pretka koji je zajednički njemu i čoveku i od kojeg sledeće
        transformacije predstavljaju evolutivni proces u pravom smeru, ali ka
        hromozomu čoveka. Naravno, prikazani primer je samo jedan od 1.070
        mogućih scenarija od sedam iteracija kroz koji je se <i>X</i> hromozom
        miša može trasformisti u ljudski <i>X</i> hromozom.
      </p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/preuredjivanje.png"
          alt="Preuredjivanje"
          style={{
            objectFit: "cover",
            width: "60%",
          }}
        />
      </div>
      <br />
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Permutacija u kojoj su
        blokovi sintenije poređani po rastućem redosledu i svi imaju pozitivan
        predznak, naziva se permutacijom identiteta. Ona je dodeljena kao model
        ljudskom <i>X</i> hromozomu, ali to nije pravilo. Moglo je biti i
        obrnuto, i samo je stvar izbora onoga ko modeluje koju će permutaciju
        proglasiti permutacijom identiteta.
      </p>
    </>
  );
};

export default IteracijskoPreuredjivanje;
