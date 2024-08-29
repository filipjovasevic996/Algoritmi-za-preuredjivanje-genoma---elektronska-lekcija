import {
  getNumberOfBreakpoints,
  getPermutations,
  shortestRearrangementScenario,
} from "api/getData";
import Permutacija from "components/Permutacija/Permutacija";
import {
  PERMUTATION_INPUT_LABEL,
  PERMUTATION_LENGTH_LABEL,
} from "constants/constants";
import {
  isPermutationIncomplete,
  uniquePermutation,
} from "helpers/permutations";
import React, { useState } from "react";

interface SablonAlogritmaProps {
  endpoint: string;
  buttonText: string;
  resultText: string;
  title: string;
  listingOrder: number;
  shortestRearrangement?: boolean;
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  fontFamily: "Arial, sans-serif",
  fontSize: "18px",
  gap: "8px", // Adds space between elements
};

const elementStyle = {
  padding: "0 4px", // Adds padding around each element
  color: "#333",
  fontWeight: "bold",
};

const separatorStyle = {
  margin: "0 8px",
  color: "#888",
  fontWeight: "bold",
};

const SablonAlgoritma: React.FC<SablonAlogritmaProps> = ({
  endpoint,
  buttonText,
  resultText,
  title,
  shortestRearrangement,
  listingOrder,
}) => {
  const [permutationLength, setPermutationLength] = useState(0);
  const [mids, setMids] = useState<number[][]>([]);
  const [lefts, setLefts] = useState<number[][]>([]);
  const [breakpoints, setBreakpoints] = useState<number[][]>([]);
  const [permutation, setPermutation] = useState<number[]>([]);
  const [permutations, setPermutations] = useState<number[][]>([]);
  const [indexes, setIndexes] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const getResult = async (permutation: number[]) => {
    if (isPermutationIncomplete(permutation)) {
      setErrorMessage("Unesite vrednosti razlicite od nule");
      return;
    }
    if (!uniquePermutation(permutation)) {
      setErrorMessage(
        "Apsolutne vrednosti brojeva u permutaciji moraju biti jedinstvene!"
      );
      return;
    }

    let data;
    if (endpoint === "number-of-breakpoints") {
      const res = await getNumberOfBreakpoints(endpoint, {
        P: permutation,
      });
      data = res[0];
      setIndexes(res[1]);
    } else if (endpoint === "shortest-rearrangement-scenario") {
      const Q = Array.from({ length: permutation.length }, (_, i) => i + 1);
      const { permutations, permutationDistance } =
        await shortestRearrangementScenario(endpoint, {
          P: [permutation],
          Q: [Q],
        });

      data = permutationDistance;
      setPermutations(permutations);
    } else {
      const { permutations, permutationDistance, lefts, mids, breakpoints } =
        await getPermutations(endpoint, { P: permutation, verbose: true });
      data = permutationDistance;
      setBreakpoints(breakpoints);
      setMids(mids);
      setLefts(lefts);
      setPermutations(permutations);
    }
    setResult(data);
    setShowResult(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value);
    if (!length || length < 0) setPermutationLength(0);
    else {
      setPermutationLength(length);
      setPermutation(Array(length).fill(0));
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getResult(permutation);
    }
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
      <div
        style={{
          backgroundColor: "#f0f4f8", // A softer, more modern light gray background
          padding: "20px", // Increased padding for more space inside the wrapper
          borderRadius: "10px", // Slightly larger border-radius for smoother corners
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Added box shadow for a subtle 3D effect
          maxWidth: "700px", // Set a max-width to contain the content nicely
          margin: "20px auto", // Centered the wrapper with auto margin
          border: "1px solid #e0e0e0", // Added a light border for a defined edge
        }}
      >
        <h4 style={{ marginTop: 0, textAlign: "center" }}> {title}</h4>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxWidth: "600px",
            margin: "20px auto",
          }}
        >
          <label
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            {PERMUTATION_LENGTH_LABEL}
          </label>
          <input
            type="number"
            style={{
              width: "60px",
              padding: "8px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "20px",
              textAlign: "center",
            }}
            min={0}
            max={15}
            onChange={handleChange}
          />
          {permutationLength ? (
            <label
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {PERMUTATION_INPUT_LABEL}
            </label>
          ) : null}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap",
            }}
          >
            {[...Array(permutationLength)].map((e, i) => (
              <input
                key={i}
                type="number"
                style={{
                  width: "60px",
                  padding: "8px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  textAlign: "center",
                }}
                max={permutationLength}
                min={-permutationLength}
                onKeyUp={handleKeyPress}
                onChange={(event) => {
                  handlePermutationChange(event, i, permutation);
                  setErrorMessage("");
                  setResult(0);
                  setShowResult(false);
                  setIndexes([]);
                }}
              />
            ))}
          </div>

          {!!permutationLength && (
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#007BFF",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                alignSelf: "center",
                width: "40%",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => getResult(permutation)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#007BFF")
              }
            >
              {buttonText}
            </button>
          )}

          <span style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}>
            {errorMessage}
          </span>

          {showResult && (
            <>
              <label style={{ marginTop: "20px", fontWeight: "bold" }}>
                {resultText}: {result}
              </label>
              {!!indexes.length && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginTop: "10px",
                    gap: "5px",
                  }}
                >
                  {indexes.map((indexValue, index) => (
                    <React.Fragment key={index}>
                      {indexValue === 1 && (
                        <span
                          style={{
                            color: "#888",
                            fontWeight: "bold",
                          }}
                        >
                          |
                        </span>
                      )}
                      {index < permutation.length && (
                        <span
                          style={{
                            padding: "0 4px",
                            color: "#333",
                            fontWeight: "bold",
                          }}
                        >
                          {permutation[index]}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
              {permutations.length ? (
                <>
                  <label style={{ marginTop: "20px", fontWeight: "bold" }}>
                    Preokreti:
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginTop: "10px",
                      padding: "10px",
                      backgroundColor: "#e6f7ff",
                      borderRadius: "6px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {permutations.map((permutation, index) => (
                      <Permutacija
                        key={index}
                        index={index + 1}
                        mid={mids[index]}
                        left={lefts[index]}
                        breakpoints={breakpoints[index]}
                        permutation={permutation}
                        shortestRearrangement={shortestRearrangement}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </>
          )}
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
        Listing {listingOrder} - {title}
      </span>
    </>
  );
};

export default SablonAlgoritma;
