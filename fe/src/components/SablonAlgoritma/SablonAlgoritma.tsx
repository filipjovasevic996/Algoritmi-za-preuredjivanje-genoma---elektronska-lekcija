import { getData } from "api/getData";
import axios from "axios";
import { baseUrl } from "constants/constants";
import { isPermutationComplete, uniquePermutation } from "helpers/permutations";
import { useState } from "react";

interface SablonAlogritmaProps {
  endpoint: string;
  buttonText: string;
  resultText: string;
}

const SablonAlgoritma: React.FC<SablonAlogritmaProps> = ({
  endpoint,
  buttonText,
  resultText,
}) => {
  const [permutationLength, setPermutationLength] = useState(0);
  const [permutation, setPermutation] = useState<number[]>([]);
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const getResult = async (permutation: number[]) => {
    if (isPermutationComplete(permutation)) {
      setErrorMessage("Unesite vrednosti razlicite od nule");
      return;
    }
    if (!uniquePermutation(permutation)) {
      setErrorMessage(
        "Apsolutne vrednosti brojeva u permutaciji moraju biti jedinstvene!"
      );
      return;
    }

    const data = await getData(endpoint, { P: permutation });
    setResult(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const length = parseInt(e.target.value);
    if (!length || length < 0) setPermutationLength(0);
    else {
      setPermutationLength(length);
      setPermutation(Array(length).fill(0));
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
        {permutationLength ? <label>Unesi permutaciju</label> : null}
        <div
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
              onChange={(event) => {
                handlePermutationChange(event, i, permutation);
                setErrorMessage("");
                setResult(0);
              }}
            />
          ))}
        </div>

        {!!permutationLength && (
          <button
            style={{ marginTop: "20px", width: "40%" }}
            onClick={() => getResult(permutation)}
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
    </>
  );
};

export default SablonAlgoritma;
