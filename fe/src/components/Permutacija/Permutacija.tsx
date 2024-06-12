interface PermutacijaProps {
  permutation: number[];
}

const Permutacija: React.FC<PermutacijaProps> = ({ permutation }) => {
  return (
    <span style={{ display: "flex", gap: "5px" }}>
      {permutation.map((permutationNumber) => (
        <span style={{ width: "30px" }}>{permutationNumber}</span>
      ))}
    </span>
  );
};

export default Permutacija;
