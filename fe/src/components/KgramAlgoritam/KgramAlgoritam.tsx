import { getKmers } from "api/getData";
import { isValidDNASequence } from "helpers/kMers";
import { ChangeEvent, MouseEvent, useState } from "react";

const KgramAlgoritam: React.FC = () => {
  const [firstChromosome, setFirstChromosome] = useState("");
  const [secondChromosome, setSecondChromosome] = useState("");
  const [kMer, setKmer] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [result, setResult] = useState<[number, number][] | undefined>();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (kMer <= 0) {
      setErrorMessage("K mora biti pozitivan broj");
      return;
    }

    if (kMer > Math.min(firstChromosome.length, secondChromosome.length)) {
      setErrorMessage("K ne sme biti duze od duzine hromozoma");
      return;
    }

    if (
      !firstChromosome ||
      !secondChromosome ||
      !isValidDNASequence(firstChromosome) ||
      !isValidDNASequence(secondChromosome)
    ) {
      setErrorMessage("Neispravna DNK sekvenca");
      return;
    }

    const result = await getKmers("k-mers", {
      chromosome1: firstChromosome,
      chromosome2: secondChromosome,
      k: kMer,
    });

    setResult(result);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        <h4 style={{ marginTop: 0, textAlign: "center" }}>
          Određivanje indeksa k-grama
        </h4>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <label style={{ fontSize: "18px" }} htmlFor="kInput">
            Unesite duzinu k-grama
          </label>

          <input
            type="number"
            min={1}
            style={{ width: "35px" }}
            onChange={(e) => {
              setKmer(parseInt(e.target.value));
              setResult(undefined);
              setErrorMessage("");
            }}
          />
        </div>

        <label style={{ fontSize: "18px" }} htmlFor="hromozomi">
          Unesite 2 hromozoma, dozvoljene vrednosti su A, G, C i T
        </label>

        <div
          id="hromozomi"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            style={{ height: "25px", width: "150px" }}
            onChange={(e) => {
              setFirstChromosome(e.target.value.toUpperCase());
              setResult(undefined);
              setErrorMessage("");
            }}
          />
          <input
            type="text"
            style={{ height: "25px", width: "150px" }}
            onChange={(e) => {
              setSecondChromosome(e.target.value.toUpperCase());
              setResult(undefined);
              setErrorMessage("");
            }}
          />

          {!!errorMessage && (
            <p
              style={{ color: "red", marginBottom: "10px", marginTop: "10px" }}
            >
              {errorMessage}
            </p>
          )}

          <button
            style={{ height: "25px", width: "100px" }}
            onClick={handleClick}
          >
            Izracunaj
          </button>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {result?.map(([index1, index2]) => (
              <span>
                ({index1}, {index2})
              </span>
            ))}
          </div>
        </div>
      </div>
      <span
        style={{
          display: "table",
          margin: "auto",
        }}
      >
        Listing 4.6 - Određivanje indeksa k-grama
      </span>
    </>
  );
};

export default KgramAlgoritam;
