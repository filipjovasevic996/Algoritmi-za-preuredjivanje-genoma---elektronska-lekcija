import React from "react";

interface PermutacijaProps {
  permutation: number[] | number[][];
  shortestRearrangement?: boolean;
  index: number;
  breakpoints?: number[];
  mid?: number[];
  left?: number[];
}

interface BrojPermutacijeProps {
  permutation: number[];
  isShortestAlgorithm: boolean;
  breakpoints?: number[];
  mid?: number[];
  left?: number[];
}

const BrojPermutacije: React.FC<BrojPermutacijeProps> = ({
  permutation,
  isShortestAlgorithm,
  breakpoints,
  mid,
  left,
}) => {
  return isShortestAlgorithm ? (
    <>
      {permutation.map((permutationNumber: number) => (
        <span
          style={{
            minWidth: "30px",
            textAlign: "center",
            marginLeft: "5px",
            marginRight: "5px",
            color: "black",
          }}
        >
          {permutationNumber}
        </span>
      ))}
    </>
  ) : (
    <>
      {breakpoints?.map((breakpoint, index) => (
        <React.Fragment key={index}>
          <span
            style={{
              color: breakpoint === 1 ? "#888" : "transparent",
              fontWeight: "bold",
              minWidth: "10px",
              display: "inline-block",
            }}
          >
            |
          </span>
          {index < permutation.length && (
            <span
              style={{
                minWidth: "30px",
                textAlign: "center",
                marginLeft: "5px",
                marginRight: "5px",
                color: `${
                  mid?.includes(permutation[index])
                    ? "red"
                    : left?.includes(permutation[index])
                    ? "#007FFF"
                    : "black"
                }`,
              }}
            >
              {permutation[index]}
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

const Permutacija: React.FC<PermutacijaProps> = ({
  permutation,
  shortestRearrangement,
  breakpoints,
  index,
  mid,
  left,
}) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px", // Increase the gap for better spacing
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    color: "#333", // Set a base color
  };

  const indexStyle = {
    fontWeight: "bold",
    color: "black", // Make the index stand out with a blue color
    marginRight: "8px",
  };

  const bracketStyle = {
    color: "#555", // Subtle color for brackets
  };

  const permutationStyle = {
    display: "flex",
    gap: "5px",
  };

  return (
    <>
      {shortestRearrangement ? (
        <span style={containerStyle}>
          <span style={indexStyle}>{index}.</span>
          {(permutation as number[][]).map((permutationArray: number[], i) => (
            <span key={i} style={permutationStyle}>
              <span style={bracketStyle}>&#91;</span>
              <BrojPermutacije
                permutation={permutationArray}
                isShortestAlgorithm={true}
              />
              <span style={bracketStyle}>&#93;</span>
            </span>
          ))}
        </span>
      ) : (
        <span style={containerStyle}>
          <span style={indexStyle}>{index}.</span>
          <BrojPermutacije
            permutation={permutation as number[]}
            isShortestAlgorithm={false}
            breakpoints={breakpoints}
            mid={mid}
            left={left}
          />
        </span>
      )}
    </>
  );
};

export default Permutacija;
