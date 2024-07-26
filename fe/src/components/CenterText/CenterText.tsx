import { FC, ReactNode } from "react";

type Props = { children: ReactNode };

const CenterText: FC<Props> = ({ children }) => {
  return (
    <span
      style={{
        display: "block",
        textAlign: "center",
        margin: "10px 0",
      }}
    >
      {children}
    </span>
  );
};

export default CenterText;
