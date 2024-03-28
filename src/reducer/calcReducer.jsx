import { useReducer } from "react";

const initialState = {
  input: "",
  operator: "",
};

export const setInput = (input) => ({
  type: "SET_INPUT",
  payload: input,
});

export const setOperator = (operator) => ({
  type: "SET_OPERATOR",
  payload: operator,
});

export const clear = () => ({
  type: "CLEAR",
});

export const appendInput = (number) => ({
  type: "APPEND_INPUT",
  payload: number,
});

export const calculateResult = () => ({
  type: "CALCULATE_RESULT",
});

export const reset = () => ({
  type: "RESET",
});

function calcReducer(state, action) {
  let result;
  switch (action.type) {
    case "APPEND_INPUT":
      return {
        ...state,
        input: state.input + action.payload,
      };

    case "SET_OPERATOR":
      return {
        ...state,
        operator: action.payload,
        currentInput: state.input,
        input: "",
      };

    case "CALCULATE_RESULT":
      switch (state.operator) {
        case "+":
          result = parseInt(state.currentInput) + parseInt(state.input);
          break;
        case "-":
          result = parseInt(state.currentInput) - parseInt(state.input);
          break;
        case "*":
          result = parseInt(state.currentInput) * parseInt(state.input);
          break;
        case "/":
          result = parseFloat(state.currentInput) / parseFloat(state.input);
          break;
        default:
          result = parseInt(state.input);
      }
      return {
        ...state,
        input: result.toString(),
        currentInput: "",
        operator: "",
      };

    case "RESET":
      return {
        input: "",
        currentInput: "",
        operator: "",
      };

    default:
      return state;
  }
}

const useCalcReducer = () => useReducer(calcReducer, initialState);

export default useCalcReducer;
