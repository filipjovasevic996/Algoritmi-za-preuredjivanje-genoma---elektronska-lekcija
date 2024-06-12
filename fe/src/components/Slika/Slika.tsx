interface SlikaProps {
  path: string;
  altText: string;
}

const Slika: React.FC<SlikaProps> = ({ path, altText }) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <img
        src={`/images/${path}.png`}
        alt={`${altText}`}
        style={{
          objectFit: "cover",
          width: "60%",
        }}
      />
    </div>
  );
};

export default Slika;
