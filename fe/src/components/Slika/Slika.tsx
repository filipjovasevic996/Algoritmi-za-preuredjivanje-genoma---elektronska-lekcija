interface SlikaProps {
  path: string;
  altText: string;
  caption: string;
}

const Slika: React.FC<SlikaProps> = ({ path, altText, caption }) => {
  return (
    <figure
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
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Slika;
