import { getTwoBreakDistance } from "api/getData";
import {
  PERMUTATIONS_INPUT_LABEL,
  PERMUTATION_LENGTH_LABEL,
} from "constants/constants";
import {
  isPermutationIncomplete,
  uniquePermutation,
} from "helpers/permutations";
import { useState } from "react";

interface TwoBreakDistanceAlgorithmProps {
  buttonText: string;
  resultText: string;
  title: string;
  listingOrder: number;
}

const TwoBreakDistanceAlgorithm: React.FC<TwoBreakDistanceAlgorithmProps> = ({
  buttonText,
  resultText,
  title,
  listingOrder,
}) => {
  const [permutationLength, setPermutationLength] = useState(0);
  const [permutations, setPermutations] = useState<number[][]>([]);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePermutationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
    permutation: number[],
    index: number
  ) => {
    permutation[i] = parseInt(e.target.value || "0");
    setPermutations((prev: number[][]) => {
      const newArray = [...prev];
      newArray[index] = permutation;
      return newArray;
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value);
    if (!length || length < 0) setPermutationLength(0);
    else {
      setPermutationLength(length);
      setPermutations([Array(length).fill(0), Array(length).fill(0)]);
    }
  };

  const getResult = async (permutations: number[][]) => {
    const [P, Q] = permutations;
    if (isPermutationIncomplete(P) || isPermutationIncomplete(Q)) {
      setErrorMessage("Unesite vrednosti razlicite od nule");
      return;
    }
    if (!uniquePermutation(P) || !uniquePermutation(Q)) {
      setErrorMessage(
        "Apsolutne vrednosti brojeva u permutaciji moraju biti jedinstvene!"
      );
      return;
    }

    const data = await getTwoBreakDistance("two-break-distance", {
      P: [P],
      Q: [Q],
    });
    setResult(data);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      getResult(permutations);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f0f4f8", // Softer, modern light gray background
          padding: "20px", // Increased padding for more space inside the wrapper
          borderRadius: "10px", // Smoother corners for a modern look
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
          maxWidth: "700px", // Contain content within a reasonable width
          margin: "20px auto", // Centered with space around
          border: "1px solid #e0e0e0", // Light border for a defined edge
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
          {title}
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px", // Add spacing between label/input groups
          }}
        >
          <label
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#555",
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
              marginBottom: "10px",
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
                color: "#555",
              }}
            >
              {PERMUTATIONS_INPUT_LABEL}
            </label>
          ) : null}

          {[...Array(2)].map((_, index) => (
            <div
              key={index}
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
                    handlePermutationChange(
                      event,
                      i,
                      permutations[index],
                      index
                    );
                    setErrorMessage("");
                    setResult(0);
                  }}
                />
              ))}
            </div>
          ))}

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
              onClick={() => getResult(permutations)}
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

          {!!result && (
            <label
              style={{
                marginTop: "20px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              {resultText}: {result}
            </label>
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

export default TwoBreakDistanceAlgorithm;
