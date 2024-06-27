interface PermutacijaProps {
  permutation: number[] | number[][];
  shortestRearrangement?: boolean;
}

interface BrojPermutacijeProps {
  permutation: number[];
}

const BrojPermutacije: React.FC<BrojPermutacijeProps> = ({ permutation }) => {
  return (
    <>
      {permutation.map((permutationNumber: number) => (
        <span
          style={{
            minWidth: "30px",
            textAlign: "center",
          }}
        >
          {permutationNumber}
        </span>
      ))}
    </>
  );
};

const Permutacija: React.FC<PermutacijaProps> = ({
  permutation,
  shortestRearrangement,
}) => {
  return (
    <>
      {shortestRearrangement ? (
        <span style={{ display: "flex", gap: "5px" }}>
          {(permutation as number[][]).map((permutationArray: number[]) => {
            return (
              <span>
                &#91;
                <BrojPermutacije permutation={permutationArray} />
                &#93;
              </span>
            );
          })}
        </span>
      ) : (
        <span style={{ display: "flex", gap: "5px" }}>
          <BrojPermutacije permutation={permutation as number[]} />
        </span>
      )}
    </>
  );
};

export default Permutacija;
