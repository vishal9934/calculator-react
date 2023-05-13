import React from 'react'
import { useState } from 'react'
import "./Calculator.css"
const Calculator = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState('')
    const [error, setError] = useState('')


 // function for inputValidation

  function inputValidation(){
    if(num1 === '' || num2 === ''){
        setError('Error: Number Cannot be Empty')
        return false;
    }
    if(!isNumber(num1) || !isNumber(num2)){
        setError('Please Enter Valid Numbers')
        return false;
    }
    setError("")
    return true;
  }
  // checking for input should be negetive,positive number
  function isNumber(value) {
    return /^[-+]?\d+(\.\d+)?$/.test(value);
  }


// adding two number
  function add(){
    if(inputValidation()){
        let sum= parseFloat(num1)+parseFloat(num2);
        setResult(`Result = ${sum}`)
    }
  }
  // subtracting two number
  function subtract(){
    if(inputValidation()){
        let sub= parseFloat(num1)-parseFloat(num2);
        setResult(`Result = ${sub}`)
    }
  }
  // multiplying two number
  function multiply(){
    if(inputValidation()){
        let mult= parseFloat(num1)*parseFloat(num2);
        setResult(`Result = ${mult}`)
    }
  }
  // dividing two number
function divide(){
    if(inputValidation()){
        let div= parseFloat(num1)/parseFloat(num2);
        setResult(`Result = ${div}`)
    }
}


  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" placeholder='Num 1' onChange={(e)=>setNum1(e.target.value)}/> <br /> <br />
      <input type="text" placeholder='Num 2' onChange={(e)=>setNum2(e.target.value)}/> <br />
      <br />
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      {error && <div style={{color: "red"}}>{error}</div>}
      {result && <div style={{color: "white",fontSize: 20}}>{result}</div> }
      {result && <p style={{color: "green"}}>Success : Your result is shown above!</p>}
    </div>
  )
}

export default Calculator
