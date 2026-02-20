import { ModeProp } from "../../types.ts";

import classes from './ModeButton.module.css';

type Props = {
  mode: ModeProp;
  onClick:  (value: ModeProp) => void;
}

const Button = ({mode, onClick}: Props) => {
  return (
    <button className={classes[mode]} onClick={() => onClick(mode)}>{mode}</button>
  )
}

export default Button