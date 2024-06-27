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
import { useState } from "react";

interface SablonAlogritmaProps {
  endpoint: string;
  buttonText: string;
  resultText: string;
  shortestRearrangement?: boolean;
}

const SablonAlgoritma: React.FC<SablonAlogritmaProps> = ({
  endpoint,
  buttonText,
  resultText,
  shortestRearrangement,
}) => {
  const [permutationLength, setPermutationLength] = useState(0);
  const [permutation, setPermutation] = useState<number[]>([]);
  const [permutations, setPermutations] = useState<number[][]>([]);
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
      data = await getNumberOfBreakpoints(endpoint, {
        P: permutation,
      });
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
      const { permutations, permutationDistance } = await getPermutations(
        endpoint,
        { P: permutation, verbose: true }
      );
      data = permutationDistance;
      setPermutations(permutations);
    }
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
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          border: "1px solid",
        }}
      >
        <label>{PERMUTATION_LENGTH_LABEL}</label>
        <input
          type="number"
          style={{ width: "40px" }}
          min={0}
          max={15}
          onChange={handleChange}
        />
        {permutationLength ? <label>{PERMUTATION_INPUT_LABEL}</label> : null}
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
              onKeyUp={handleKeyPress}
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
          <>
            <label>
              {resultText}: {result}
            </label>
            {permutations.length ? (
              <>
                <label>Permutacije su:</label>
                {permutations.map((permutation, index) => [
                  <Permutacija
                    key={index}
                    permutation={permutation}
                    shortestRearrangement={shortestRearrangement}
                  />,
                ])}
              </>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default SablonAlgoritma;
