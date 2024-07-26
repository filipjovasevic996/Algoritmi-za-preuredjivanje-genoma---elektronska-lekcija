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
          backgroundColor: "lightgray",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        <h4 style={{ marginTop: 0, textAlign: "center" }}> {title}</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label style={{ fontSize: "18px" }}>{PERMUTATION_LENGTH_LABEL}</label>
          <input
            type="number"
            style={{ width: "40px" }}
            min={0}
            max={15}
            onChange={handleChange}
          />
          {permutationLength ? <label>{PERMUTATIONS_INPUT_LABEL}</label> : null}
          {[
            [...Array(2)].map((_, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {[...Array(permutationLength)].map((e, i) => (
                  <input
                    type="number"
                    style={{ width: "40px" }}
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
            )),
          ]}
          {!!permutationLength && (
            <button
              style={{ marginTop: "20px", width: "40%" }}
              onClick={() => getResult(permutations)}
            >
              {buttonText}
            </button>
          )}

          <span style={{ color: "red" }}>{errorMessage}</span>
          {!!result && (
            <label>
              {resultText}: {result}
            </label>
          )}
        </div>
      </div>
      <span
        style={{
          display: "table",
          margin: "auto",
        }}
      >
        Listing {listingOrder} - {title}
      </span>
    </>
  );
};

export default TwoBreakDistanceAlgorithm;
