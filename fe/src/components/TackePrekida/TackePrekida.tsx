const TackePrekida: React.FC = () => {
  return (
    <>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na slici ispod može se
        analizirati kako se sa svakom sledećom permutacijom početna približava
        permutacijij identiteta. U prvom preokretu sekcije (-12 -8 -7 -6 +1 +2
        +10 +9 -11), na desnoj krajnjoj tački umesto provbitna dva uzastopna
        elementa (-11 +13), dobijaju se poželjni elementi (+12 +13). U četvrtom
        preokretu (+11 -9) dobijaju se uzastopni elementi (-11 -10) koji prostim
        obrtanjem stvara interval sa poželjnim uzastopnim elementima (+10 +11).
      </p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/tackePrekida.png"
          alt="Tacke prekida"
          style={{
            objectFit: "cover",
            width: "60%",
          }}
        />
      </div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Naslućuje se da je
        formiranje sekcija sa uzastopnim elementima kao što su (+12 +13) ili
        (-11 -10) poželjno. Za navedene parove je zajedničko to što je drugi za
        1 veći od prvog, pa se za uzastopne elemente (p<sub>i</sub> p
        <sub>i+1</sub>) u permutaciji P = (p<sub>1</sub> ... p<sub>n</sub>) kaže
        da formiraju susednost ako važi da je p<sub>i+1</sub> - p<sub>i</sub> =
        1. Po definiciji, za bilo koji pozitivan ceo broj k &lt; n, susednosti
        su (k k + 1), isto kao i (-(k + 1) k). Ako p<sub>i+1</sub> - p
        <sub>i</sub> nije jednako 1, onda je (p<sub>i</sub> p<sub>i+1</sub>)
        tačka prekida. Jednostavnije rečeno, tačka prekida nastaje između parova
        uzastopnih elemenata koji su „van reda“ u poređenju sa permutacijom
        identiteta (+1 +2 ... +n). Na primer, parovi (+5 -12), (-12 -8), (-6
        +1), (+2 +10), (+9 -11) i (-11 +13) su očigledno tačke prekida jer nisu
        susedni. Ali, i par (+10 +9) je takođe tačka prekida, uprkos tome što
        sadrži uzastopne brojeve. Razlog je to što su njegovi predznaci van reda
        u poređenju sa permutacijom identiteta i jer je p<sub>i+1</sub> - p
        <sub>i</sub> = -1. Dodavanjem elemenata na početak (nula) i kraj
        permutacije (n+1), dobija se permutacija (0 p<sub>1</sub> ... p
        <sub>n</sub> (n+1)), koja ima n+1 parova uzastopnih elemenata: (0 p
        <sub>1</sub>), (p<sub>1</sub> p<sub>2</sub>), (p<sub>2</sub> p
        <sub>3</sub>) ... (p<sub>n-1</sub> p<sub>n</sub>), (p<sub>n</sub>{" "}
        (n+1)).
      </p>
      <h4>Brojanje tačaka prekida</h4>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pošto je objašnjeno da
        svaki par uzastopnih elemenata formira ili tačku prekida ili susednost,
        za svaku permutaciju P, dužine n, važi: Susednice (P) + Prelomne tačke
        (P) = n + 1. Jedina permutacija kod koje su svi uzastopni elementi
        ujedno i susedni, je permutacija identiteta.
      </p>
      <h4>ALGORITAM ODREĐIVANJA BROJA PRELOMNIH TAČAKA</h4>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sortiranje preokretima
        se, u stvari, eliminišu tačke prekida. Na slici (link) se broj tačaka
        prekida smanjuje sa 8 na 0, jer permutacija posle svakog preokreta
        postaje uređenija i bliža permutaciji identiteta, pa je potreban broj
        tačaka preloma sve manji.
      </p>
    </>
  );
};

export default TackePrekida;
