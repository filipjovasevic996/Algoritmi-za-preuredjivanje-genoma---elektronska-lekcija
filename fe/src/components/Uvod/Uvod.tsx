import { TAB_INDENT } from "constants/constants";

const Uvod: React.FC = () => {
  return (
    <p>
      {TAB_INDENT}Bioinformatika je jedna od najperspektivnijih i najbrže
      rastućih naučno-tehnoloških oblasti čiji su temelji postavljeni 60-ih
      godina prošlog veka, ali, pun zamah je dobila tek pojavom i primenom
      superračunara i kompjuterskih mreža. To je interdisciplinarna oblast nauke
      koja razvija metode i softverske alate za razumevanje bioloških podataka,
      posebno kada su skupovi podataka veliki i složeni. Bioinformatika
      omogućava da se čitave laboratorije sa ogromnim i skupim resursima za
      izvođenje bioloških eksperimenata, zamene kompjuterskim eksperimentima
      koji traju kraće i ne zahtevaju skupe eksperimentalne metode. Jedna od
      naučnih poddisciplina bioinformatike se bavi genetikom i genomikom, i njen
      cilj je da uz pomoć računarske tehnologije prikuplja, skladišti, analizira
      i obznanjuje biološke podatke i informacije u vezi, na primer,
      sekvenciranja DNK i aminokiselina. <br />
      {TAB_INDENT}Preuređivanje genoma je osnova evolucionih procesa i zasniva
      se na pomeranju njegovih fragmenata koji sadrže neodređeni broj gena,
      takozvanih blokova sintenije. Pretpostavlja se da su se pomeranjem blokova
      po određenom obrascu, genomi tokom evolucije preuređivanjem menjali i na
      taj način evoluirali od izumrlog zajedničkog pretka, do različitih vrsta
      organizama koje danas postoje. Algoritmima za preuređivanje genoma se vrši
      simulacija pomeranja blokova po iteracijama i prikazuje se evolutivni
      proces koji je u prirodnim uslovima trajao oko više desetina miliona
      godina.
    </p>
  );
};

export default Uvod;
