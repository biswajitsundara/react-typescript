import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const UseContextExample = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <>
      {console.log(state)};
      <button onClick={() => dispatch({ type: "CHANGE_THEME" })}>
        Change Theme
      </button>
      <button onClick={() => dispatch({ type: "CHANGE_FONT", payload: 20 })}>
        Change Font
      </button>
    </>
  );
};

export default UseContextExample;
