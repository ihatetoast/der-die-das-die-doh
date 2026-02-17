import classes from "./CubeButton.module.css"

type CubeButtonProps = {
  label: string;
  onClick: () => void;
}

const CubeButton = ({label, onClick}: CubeButtonProps) => {
  return (
    <button className={`${classes.btn} ${classes[label]}`} onClick={onClick}>{label}</button>
  )
}

export default CubeButton;