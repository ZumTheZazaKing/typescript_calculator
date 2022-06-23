import { MouseEvent } from "react"
import { calcTypes, toLocaleString, removeSpaces } from "./App";

const math = (a: number, b: number, sign: string) => {
    switch(sign){
        case "+":
            return a + b;
        case '-':
            return a - b;
        case "X":
            return a * b;
        case "/":
            return a / b;
    }
}

type eType = MouseEvent<HTMLButtonElement> 
type setCalcType = React.Dispatch<React.SetStateAction<calcTypes>>

export const numHandleClick = (e: eType, calc: calcTypes, setCalc: setCalcType): void => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;
    
    if(String(removeSpaces(calc.num)).length < 16){
        setCalc({
            ...calc,
            num: calc.num === '0' && value === "0"
            ? "0"
            : Number(removeSpaces(calc.num)) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        })
    }
}

export const signHandleClick = (e: eType, calc: calcTypes, setCalc: setCalcType): void => {
    e.preventDefault()
    const value = e.currentTarget.innerHTML;

    setCalc({
        ...calc,
        sign: value,
        res: calc.res ? (calc.res && calc.num && calc.sign ? 
            Number(math(Number(calc.res), Number(calc.num), calc.sign)) 
            : calc.res) 
            : calc.num,
        num: 0
    })
}

export const equalsHandleClick = (calc: calcTypes, setCalc: setCalcType): void => {
    setCalc({
        ...calc,
        res: calc.res ? 
        (calc.num ? 
            toLocaleString(Number(math(Number(removeSpaces(calc.res)), Number(removeSpaces(calc.num)), calc.sign)))
            : calc.res) 
        : calc.num,
        num: 0,
        sign: ""
    })
}

export const resetHandleClick = (calc: calcTypes, setCalc: setCalcType): void => {
    setCalc({
        ...calc,
        res: 0,
        num:0,
        sign: ""
    })
}

export const commaHandleClick = (e: eType, calc: calcTypes, setCalc: setCalcType): void => {
    e.preventDefault();
    const value = e.currentTarget.innerHTML;

    setCalc({
        ...calc,
        num: String(calc.num).includes(".") ? calc.num : calc.num + value
    })
}

export const invertHandleClick = (calc: calcTypes, setCalc: setCalcType): void => {
    setCalc({
        ...calc,
        num: calc.num ? toLocaleString(Number(removeSpaces(calc.num)) * -1) : 0,
        res: !calc.num ? toLocaleString(Number(removeSpaces(calc.res)) * -1) : calc.res,
    })
}

export const percentHandleClick = (calc: calcTypes, setCalc: setCalcType): void => {
    setCalc({
        ...calc,
        num: calc.num ? Number(removeSpaces(calc.num)) / 100 : 0,
        res: !calc.num ? Number(removeSpaces(calc.res)) / 100 : calc.res,
    })
}