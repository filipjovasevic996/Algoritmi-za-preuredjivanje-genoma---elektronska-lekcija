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
          backgroundColor: "#f0f4f8",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          margin: "20px auto",
          border: "1px solid #e0e0e0",
        }}
      >
        <h4
          style={{
            marginTop: 0,
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Određivanje indeksa k-grama
        </h4>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <label
            style={{ fontSize: "18px", fontWeight: "bold", color: "#555" }}
            htmlFor="kInput"
          >
            Unesite duzinu k-grama
          </label>

          <input
            id="kInput"
            type="number"
            min={1}
            style={{
              width: "60px",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
            onChange={(e) => {
              setKmer(parseInt(e.target.value));
              setResult(undefined);
              setErrorMessage("");
            }}
          />
        </div>

        <label
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#555",
            marginTop: "20px",
          }}
          htmlFor="hromozomi"
        >
          Unesite 2 hromozoma, dozvoljene vrednosti su A, G, C i T
        </label>

        <div
          id="hromozomi"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <input
            type="text"
            style={{
              height: "35px",
              width: "200px",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
            onChange={(e) => {
              setFirstChromosome(e.target.value.toUpperCase());
              setResult(undefined);
              setErrorMessage("");
            }}
          />
          <input
            type="text"
            style={{
              height: "35px",
              width: "200px",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
            onChange={(e) => {
              setSecondChromosome(e.target.value.toUpperCase());
              setResult(undefined);
              setErrorMessage("");
            }}
          />

          {!!errorMessage && (
            <p
              style={{
                color: "red",
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "bold",
              }}
            >
              {errorMessage}
            </p>
          )}

          <button
            style={{
              height: "35px",
              width: "120px",
              padding: "8px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              backgroundColor: "#007BFF",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              alignSelf: "center",
              transition: "background-color 0.3s ease",
            }}
            onClick={handleClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007BFF")
            }
          >
            Izračunaj
          </button>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            {result?.map(([index1, index2], idx) => {
              const highlightSegment = (
                text: string,
                start: number,
                length: number,
                color: string
              ) => (
                <>
                  {text.slice(0, start)}
                  <span style={{ color: color, fontWeight: "bold" }}>
                    {text.slice(start, start + length)}
                  </span>
                  {text.slice(start + length)}
                </>
              );

              return (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "150px",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#333",
                        fontFamily: "monospace",
                      }}
                    >
                      {highlightSegment(firstChromosome, index1, kMer, "red")}
                    </span>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <span
                      style={{
                        fontSize: "18px",
                        color: "#333",
                        fontFamily: "monospace",
                      }}
                    >
                      {highlightSegment(secondChromosome, index2, kMer, "blue")}
                    </span>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#333",
                        fontWeight: "bold",
                      }}
                    >
                      ({index1}, {index2})
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <span
        style={{
          display: "table",
          margin: "20px auto 0",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#666",
        }}
      >
        Listing 4.6 - Određivanje indeksa k-grama
      </span>
    </>
  );
};

export default KgramAlgoritam;
