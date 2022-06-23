import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import { useState } from 'react';
import { 
  numHandleClick,
  signHandleClick,
  equalsHandleClick,
  resetHandleClick,
  commaHandleClick,
  invertHandleClick,
  percentHandleClick
} from "./app_functions";

export type calcTypes = {
  sign: string, 
  num: string | number,
  res: string | number,
}

export const toLocaleString = (num: number | string) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

export const removeSpaces = (num: number | string) => num.toString().replace(/\s/g, "");

function App(): JSX.Element {

  let [calc, setCalc] = useState<calcTypes>({
    sign:"",
    num: 0,
    res: 0,
  })

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <Wrapper>
      <Screen value={`${calc.num ? calc.num : calc.res}`}/>
      <ButtonBox>
        {btnValues.flat().map((value, i) => {
          return (
            <Button
              key={i}
              className={value === "=" ? "equals" : ""}
              value={value}
              onClick={
                value === "C" ?
                () => resetHandleClick(calc, setCalc)
                : value === "=" ?
                () => equalsHandleClick(calc, setCalc)
                : value === "/" || value === "X" || value === "+" || value === "-" ?
                (e) => signHandleClick(e, calc, setCalc)
                : value === "%" ?
                () => percentHandleClick(calc, setCalc)
                : value === "+-" ?
                () => invertHandleClick(calc, setCalc)
                : value === "." ?
                (e) => commaHandleClick(e, calc, setCalc)
                : (e) => numHandleClick(e, calc, setCalc)
              }
            />
          )
        })}
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
