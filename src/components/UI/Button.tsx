import { ModeProp } from '../../types';
import classes from "./Button.module.css"

type Props = {
  mode: ModeProp;
  onSetMode: (value: ModeProp) => void;
}

const Button = ({mode, onSetMode}: Props) => {
  return (
    <button className={`${classes.btn} ${classes[mode]}`} onClick={()=>onSetMode(mode)}>{mode}</button>
  )
}

export default Button;