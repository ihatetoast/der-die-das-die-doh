import { ReactNode } from "react";
import { ModeProp } from "../../types.ts";

import classes from "./ModeButton.module.css";

type Props = {
  mode: ModeProp;
  onClick: (value: ModeProp) => void;
  children?: ReactNode;
};

const Button = ({ mode, onClick, children }: Props) => {
  return (
    <button className={classes[mode]} onClick={() => onClick(mode)}>
      {children}
    </button>
  );
};

export default Button;
