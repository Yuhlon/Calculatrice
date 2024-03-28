import { useCalcContext } from "../../context/calcContext.jsx";
import "./styles.css";

function Input() {
  const { state } = useCalcContext();

  return <div className="result">{state.input}</div>;
}

export default Input;
