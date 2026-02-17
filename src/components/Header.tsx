import { ModeProp } from "../types.ts";

import classes from './Header.module.css'
type Props = {
  onSetMode: (value: ModeProp) => void;
}

const Header = ({onSetMode}: Props) => {
  return (
    <header className={classes.header}>
      <h1>Der Die Das Die ... D'oh!</h1>
      <p>Practice or test yourself on the gender and plural of various German nouns.</p>
      <div className={classes.buttonContainer}><button className={classes.practice} onClick={() =>onSetMode("practice")}>Let's practice</button><button className={classes.test} onClick={() =>onSetMode('test')}>Test me</button></div>
    </header>
  )
}

export default Header