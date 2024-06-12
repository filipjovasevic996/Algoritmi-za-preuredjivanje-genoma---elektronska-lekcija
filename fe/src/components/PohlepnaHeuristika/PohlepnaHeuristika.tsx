const PohlepnaHeuristika: React.FC = () => {
  return (
    <>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pohlepna heuristika za
        sortiranje po preokretima se zasniva na pronalaženju najkraćeg niza
        preokreta koji pretvara jednu permutaciju u drugu. Ona donosi optimalne
        izbore u svakom koraku, nadajući se da će na taj način postići i
        globalno optimalno rešenje.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pohlepno sortiranje je
        prikazano na primeru u kojem se blokovi ređaju na prave pozicije u
        konačnoj permutaciji. Preuređivanje se vrši iteracijskim pomeranjem sve
        većih elemenata na njihove ispravne pozicije u permutaciji identiteta.
        Obrnuti interval svakog preokreta je prikazan crvenom bojom, a elementi
        koji su postavljeni u ispravan položaj su prikazani plavom bojom.
      </p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/greedySorting.png"
          alt="Pohlepno sortiranje"
          style={{
            objectFit: "cover",
            width: "60%",
          }}
        />
      </div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Matematički izraženo,
        element k u permutaciji{" "}
        <i>
          P = (p<sub>1</sub> ... p<sub>n</sub>)
        </i>
        je sortiran ako je p<sub>k</sub> = +k, u protivnom je nesortiran.
        Permutacija P je k-sortirana ako je njenih prvih k-1 elemenata sortirano
        i ako je element k nesortiran. Za svaku (k-1)-sortiranu permutaciju P,
        postoji jedan preokret, nazvan k-sortirajući preokret, koji fiksira
        prvih k-1 elemenata permutacije i pomera element k na ispravnu, k-tu
        poziciju. U slučaju kada je k već na k-toj poziciji permutacije P, ali
        nije dobro orjentisan, k-sortiranje se samo okreće k-ti element (primer
        bloka 11 u poslednjem koraku).
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U slučaju preuređivanja
        mišjeg X hromozoma, na ovaj način se do permutacije identiteta dolazi u
        11 koraka, što ne predstavlja optimalnu dužinu, jer je sortiranjem po
        preokretima preuređivanje kraće za čak 4 koraka. Tako je na ovom primeru
        dokazano da pohlepno sortiranje ne rezultira najkraćom dužinom
        preokreta.
      </p>
    </>
  );
};

export default PohlepnaHeuristika;
