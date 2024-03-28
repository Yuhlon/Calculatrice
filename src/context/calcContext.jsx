import { createContext, useContext} from "react";
import useCalcReducer from "../reducer/calcReducer.jsx";

const calcContext = createContext();

export const useCalcContext = () => useContext(calcContext);

const CalcContextProvider = ({ children }) => {
  const [state, dispatch] = useCalcReducer();

  return (
    <calcContext.Provider value={{ state, dispatch }}>
      {children}
    </calcContext.Provider>
  );
};

export default CalcContextProvider;
