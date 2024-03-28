import { useCalcContext } from "../../context/calcContext.jsx";
import {
  appendInput,
  setOperator,
  calculateResult,
  reset,
} from "../../reducer/calcReducer.jsx";
import "./styles.css";

function Buttons() {
  const { dispatch } = useCalcContext();

  const handleNumberClick = (number) => {
    dispatch(appendInput(number));
  };

  const handleOperatorClick = (operator) => {
    dispatch(setOperator(operator));
    dispatch(appendInput(""));
  };

  const handleEqualClick = () => {
    dispatch(calculateResult());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <>
      <div className="btn_calc">
        <div>
          <button onClick={() => handleNumberClick(7)}>7</button>
          <button onClick={() => handleNumberClick(8)}>8</button>
          <button onClick={() => handleNumberClick(9)}>9</button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(4)}>4</button>
          <button onClick={() => handleNumberClick(5)}>5</button>
          <button onClick={() => handleNumberClick(6)}>6</button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(1)}>1</button>
          <button onClick={() => handleNumberClick(2)}>2</button>
          <button onClick={() => handleNumberClick(3)}>3</button>
        </div>
        <div>
          <button onClick={() => handleNumberClick(0)}>0</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleOperatorClick("*")}>*</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
          <button onClick={handleEqualClick}>=</button>
        </div>
        <div>
          <button onClick={handleResetClick}>R</button>
        </div>
      </div>
    </>
  );
}

export default Buttons;
