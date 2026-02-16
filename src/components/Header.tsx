import { ModeProp } from "../types.ts";
import Button from "./UI/Button.tsx"

import classes from './Header.module.css'
type Props = {
  onSetMode: (value: ModeProp) => void;
}

const Header = ({onSetMode}: Props) => {
  return (
    <header className={classes.header}>
      <h1>Der Die Das Die ... D'oh!</h1>
      <p>Practice or test yourself on the gender and plural of various German nouns.</p>
      <div className={classes.buttonContainer}><Button mode="practice" onSetMode={onSetMode}/><Button mode="test" onSetMode={onSetMode}/></div>
    </header>
  )
}

export default Header