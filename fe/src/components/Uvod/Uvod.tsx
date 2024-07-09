import { TAB_INDENT } from "constants/constants";

const Uvod: React.FC = () => {
  return (
    <p>
      {TAB_INDENT}Preuređivanje genoma predstavlja osnovu evolucionih procesa i
      zasniva se na na pomeranju njegovih fragmenata koji sadrže neodređeni broj
      gena, takozvanih blokova sintenije. Pretpostavlja se da su se pomeranjem
      blokova po određenom obrascu, genomi tokom evolucije preuređivanjem
      menjali i na taj način evoluirali od izumrlog zajedničkog pretka, do
      različitih vrsta organizama koje danas postoje. Algoritmima za
      preuređivanje genoma se vrši simulacija pomeranja blokova po iteracijama i
      prikazuje se evolutivni proces koji je u prirodnim uslovima trajao oko
      više desetina miliona godina.
      <br />
      {TAB_INDENT}Proteini su veliki, složeni molekuli koji obavljaju većinu
      posla u ćelijama i potrebni su za strukturu, funkciju i regulaciju
      telesnih tkiva i organa. Oni se sastoje od stotina ili hiljada manjih
      jedinica zvanih aminokiseline, koje su povezane jedna za drugu u dugim
      lancima. Redosled aminokiselina određuje jedinstvenu trodimenzionalnu
      strukturu svakog proteina i njegovu specifičnu funkciju [12].
    </p>
  );
};

export default Uvod;
