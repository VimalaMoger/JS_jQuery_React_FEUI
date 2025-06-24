import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//parent functional component
function Calculator(){
 
  //React Hook-useState, json object
  const [display, setDisplay] = React.useState({current:"0", total:"0", isInitial:true, preOp:""});

  //public functions in Calculator 
  function handleNumber(value){    
    let newValue = value;
    if(!display.isInitial){
      newValue = display.current + value;
    }
    setDisplay({current: newValue, total:display.total, isInitial:false, preOp:display.preOp});
  }

  function handleOperator(value){  //operator type being passed
    const total = doCalculation();  //returns total
    setDisplay({current: total.toString(), total: total.toString(), isInitial:true, preOp:value});
  }

  function setClear(){
    setDisplay({current:"0", total:"0", isInitial:true, preOp:""});
  }

  //returns total
  function doCalculation(){
    //debugger;
    //console.log(display);
    let total = parseInt(display.total);
    switch(display.preOp){
      case "+":
        total += parseInt(display.current);
        break;
      case "-":
        total -= parseInt(display.current);
        break;
      case "/":
        total /= parseInt(display.current);
        break;
      case "x":
        total *= parseInt(display.current);
        break; 
      default:
        total = parseInt(display.current);
    }  
    return total;
  }

 /* 
  function handleEquals(){
      let total = doCalculation();
      setDisplay({current: total.toString(), total: total.toString(), isInitial:true,preOp:"="});
    } */

  return (
    <div className="calc">
      <div className="display">{display.current}</div>
      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton className="operator" value="/" onClick={handleOperator}/>  

      <CalcButton value="4" onClick={handleNumber} />
      <CalcButton value="5" onClick={handleNumber}/>
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton className="operator" value="x" onClick={handleOperator}/>

      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton className="operator" value="-" onClick={handleOperator}/>

      <CalcButton value="C" onClick={setClear}/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="=" onClick={handleOperator}/>
      <CalcButton className="operator" value="+" onClick={handleOperator}/>
    </div>
  )
}
//child component, pass callback(using props) function in response to html event onClick
function CalcButton(props){
  return <button className={props.className} onClick ={ ()=> {props.onClick(props.value)} }>{props.value}</button>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="app-container"><Calculator /></div>
  </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
