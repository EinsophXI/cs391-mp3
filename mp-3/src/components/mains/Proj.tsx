import { useState } from 'react'
import styled from 'styled-components';
import wow from './src/wow.png';

const StyledMain = styled.main   // moved styled components outside of the function since input box re-rendered every time a character or number was inputted
  `                              
    height: 100%;
    width: 70%;
    justify-content: center;
    padding:10px;

    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    p {
      margin: 5px;
    }

    h2 {
      padding: 10px;
    }

    h3 {
      margin-top: 2vh;
      margin-bottom: 2vh;
    }

    img {
      justify-content: center;
      max-width: 100%;
      height: auto;
    }
  `;

const StyledCalc = styled.div
  `
    width: 400px;
    margin: 20px auto;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: white;
    @media screen and (max-width: 1000px) {
      max-width: 300px;
    }
  `;

const StyledButton = styled.button
  `
    width: 50px;
    font-weight: bold;
    height: 50px;
    margin-top: 2vh;
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    border-radius: 50%;
    border: 1px solid black;
    background-color: white;
    @media screen and (max-width: 1000px) {

    }
  `;

const StyledOutput = styled.p < { isNegative: boolean } >
  `
    color: ${(props) => (props.isNegative ? 'red' : 'black')};  //boolean value to set number to red if negative and black if positive
    font-size: 20px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    margin: 10px auto;
    background-color: white;
    height: 35px;
    width: 275px;
  `;

const StyledDiv = styled.div
  `
    display: flex;
    justify-content: center;
    margin-top: 10px;
  `;

const StyledInput = styled.input
  `
      font-size: 20px;
      font-family: Arial, sans-serif;
      font-weight: bold;
      border: 1px solid black;
      padding: 5px;
      text-align: center;
      @media screen and (max-width: 1000px) {
        width: 246px;
      }
    `;

export function useCalc() { // handles mathematical functions as well as uses useState to to set/update values 
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [output, setOutput] = useState('');

  const add = () => setOutput(String(Number(num1) + Number(num2)));
  const sub = () => setOutput(String(Number(num1) - Number(num2)));
  const mult = () => setOutput(String(Number(num1) * Number(num2)));
  const div = () => setOutput(String(Number(num1) / Number(num2)));
  const pow = () => {
    const base = Number(num1);
    const exp = Number(num2);
    let res = 1;
    if (exp >= 0) { //if else statement to handle positive/negative exponents in the power function
      for (let i = 0; i < exp; i++) res *= base;
      setOutput(String(res));
    } else {
      for (let i = 0; i < -exp; i++) res *= base;
      setOutput(String(1 / res));
    }
  };
  const clear = () => {
    setNum1('');
    setNum2('');
    setOutput('');
  };

  return {
    num1, setNum1, num2, setNum2, output, add, sub, mult, div, pow, clear
  };
}

export default function Proj() {
  const { num1, setNum1, num2, setNum2, output, add, sub, mult, div, pow, clear } =
    useCalc();

  return (
    <StyledMain>
      <h1>Projects</h1>
      <h2>Ryan's Magnificent Calculator</h2>
      <StyledCalc>
        <h3>Enter the first number:</h3>
        <StyledInput value={num1} onChange={(e) => setNum1(e.target.value)} />
        <div>
          <StyledButton onClick={add}>+</StyledButton>
          <StyledButton onClick={sub}>-</StyledButton>
          <StyledButton onClick={mult}>*</StyledButton>
          <StyledButton onClick={div}>/</StyledButton>
          <StyledButton onClick={pow}>^</StyledButton>
          <StyledButton onClick={clear}>CE</StyledButton>
        </div>
        <h3>Enter the second number:</h3>
        <StyledInput value={num2} onChange={(e) => setNum2(e.target.value)} />
        <h3>The result is:</h3>
        <StyledDiv>
          <StyledOutput isNegative={Number(output) < 0}>{output}</StyledOutput>
        </StyledDiv>
        <script src='index.js'></script>
        <img src={wow} alt='wow' id='wow' />
      </StyledCalc>
    </StyledMain>
  )
}