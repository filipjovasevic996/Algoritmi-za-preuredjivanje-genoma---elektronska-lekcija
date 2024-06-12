import { tabIndent } from "constants/constants";

const PreuredjivanjeGenoma: React.FC = () => {
  return (
    <p>
      {tabIndent}Kada bi bilo moguće napraviti porodično stablo miša i čoveka,
      unazad skoro 80 miliona godina, na vrhu stabla bi bio isti predak. Do tog
      zaključka je dovelo poređenje genoma miša i čoveka i činjenica da više od
      90% mišjih gena, postoji u sličnom obliku u ljudskom genomu. Ljudi i
      miševi, prema navodima <i>Lawrence Livermore National Laboratory</i>,
      imaju približno isti broj gena i to oko 140.000, od kojih je proučavano
      oko 4.000. Rezultati tih proučavanja govore da se manje od 10% kojih se
      nalaze u jednoj vrsti, ne nalaze u drugoj. Znači da je tok evolucije i
      „mešanje“ DNK unutar hromozoma, kao i između njih, opredilio da neki
      organizam od pre više desetina miliona godina, postane čovek ili, naizgled
      drastično različit sisar, miš. Najslikovitije prikazano, to bi izgledalo
      kao slaganje 280 kockica, tj. blokova sintenije, u slučaju čoveka u 23
      para hromozoma, a u slučaju „slaganja“ genoma miša, u 20 parova hromozoma.
      <br />
      {tabIndent}To znači da se evulitivni procesi zasnivaju na postepenom
      preuređevanju genoma, koje, u dovoljno dugom vremenskom periodu, dovodi do
      funkcionalno i vizuelno drastičnih razlika kod potomaka, u odnosu na
      zajedničkog pretka.
      <br />
      {tabIndent}To znači da se evulitivni procesi zasnivaju na postepenom
      preuređevanju genoma, koje, u dovoljno dugom vremenskom periodu, dovodi do
      funkcionalno i vizuelno drastičnih razlika kod potomaka, u odnosu na
      zajedničkog pretka.
      <br /> Preuređivanje se može obavljati:
      <ul>
        <li>preokretima</li>
        <li>premeštanjem (translokacijom)</li>
        <li>fusijom (cepanjem)</li>
        <li>fisijom (spajanjem)</li>
      </ul>
      {tabIndent}Dostupnost genoma čoveka i miša utrla je put za razvoj
      algoritama za mapiranje sintenije velikih razmera i bolje razumevanje
      evolutivnih procesa.
    </p>
  );
};

export default PreuredjivanjeGenoma;
