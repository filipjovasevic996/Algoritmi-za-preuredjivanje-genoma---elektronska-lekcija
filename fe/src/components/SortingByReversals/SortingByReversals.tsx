import { useState } from "react";
import axios from "axios";

const SortingByReversals: React.FC = () => {
  const [permutationLength, setPermutationLength] = useState(0);
  const [permutation, setPermutation] = useState<number[]>([]);
  const [distance, setDistance] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value);
    if (!length || length < 0) setPermutationLength(0);
    else {
      setPermutationLength(length);
      setPermutation(Array(length).fill(0));
    }
  };

  const countDistance = async (permutation: number[]) => {
    const { data } = await axios.post<number>(
      "http://localhost:9090/greedy-sorting-by-reversals",
      { P: permutation }
    );
    setDistance(data);
  };

  const handlePermutationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    permutation: number[]
  ) => {
    permutation[index] = parseInt(e.target.value);
    setPermutation([...permutation]);
  };

  return (
    <>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;S obzirom na to da
        priroda obično koristi najkraće puteve, probajmo da nađemo minimalni
        broj preokreta u skladu sa principom tzv. Okamove oštrice. Evolucija se
        možda neće uvek kretati najkraćim putevima, ali čak i kada to ne čini,
        broj koraka u pravom evolucionom scenariju se često približava broju
        koraka u najštedljivijem scenariju. Zato se treba orjenitsati ka
        najjednostavnijoj hipotezi koja podržava ono što je već poznato.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Studije preuređivanja
        genoma obično zanemaruju dužinu blokova sintenije i predstavljaju
        hromozome potpisanim permutacijama. Svaki blok je označen brojem, kome
        se dodeljuje pozitivan/negativan predznak u zavisnosti od smera bloka.
        Broj elemenata u permutaciji određuje njenu dužinu. Kao što je prikazano
        na slici 6.2 (link na sliku i klik za nazad), ljudski i mišji X
        hromozomi mogu biti predstavljeni sledećim potpisanim permutacijama
        dužine 11:
        <br />
        <ul>
          Miš: (+1 -7 +6 -10 +9 -8 +2 -11 -3 +5 +4)
          <br />
          Čovek: (+1 +2 +3 +4 +5 +6 +7 +8 +9 +10 +11)
        </ul>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bitno je naglasiti da su
        blokovi sintenije jedinstveni i da ponavljanje brojeva, sa ili bez
        znaka, nije dozvoljeno. Modelovanje preokreta se zasniva na obrtanju
        elemenata, tj. blokova sintenije unutar intervala permutacije, nakon
        čega se menja predznak elementima unutar obrnutog intervala. Na primeru
        razbijanja permutacije između blokova +3 i +4 kao i između blokova +8 i
        +9, to izgleda ovako:
        <br />
        „Odseca“ se deo između vertikalnih segmenata (+1 +2 +3 | +4 +5 +6 +7 +8
        | +9 +10), zatim se inerval okreće i menja se znak elementima unutar
        njega (+1 +2 +3 | -8 -7 -6 -5 -4 | +9 +10) i, na kraju, „lepi“ uz
        segmente koji su ostali nepromenjeni (+1 +2 +3 -8 -7 -6 -5 -4 +9 +10),
        kako je prikazano na slici ispod.
      </p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/preokreti.png"
          alt="Preokreti"
          style={{
            objectFit: "cover",
            width: "60%",
          }}
        />
      </div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;U algoritmu koji sledi,
        izračunava se broj preokreta, tj. dužina preokreta za permutaciju dužine
        n, od unete permutacije do permutacije identiteta:
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          border: "1px solid",
          height: "200px",
        }}
      >
        <label>Unesi duzinu permutacije</label>
        <input
          type="number"
          style={{ width: "40px" }}
          min={0}
          max={15}
          onChange={handleChange}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {[...Array(permutationLength)].map((e, i) => (
            <input
              type="number"
              style={{ width: "40px" }}
              onChange={(event) =>
                handlePermutationChange(event, i, permutation)
              }
            />
          ))}
        </div>

        {!!permutationLength && (
          <button
            style={{ marginTop: "20px", width: "40%" }}
            onClick={() => countDistance(permutation)}
          >
            Racunaj rastojanje
          </button>
        )}
        {!!distance && <label>Broj potrebnih permutacija je: {distance}</label>}
      </div>
    </>
  );
};

export default SortingByReversals;
