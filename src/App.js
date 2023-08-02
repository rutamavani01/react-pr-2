import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
function App() {
  const [no, setNo] = useState(0);
  const increment = () => {
    setNo(no + 1)
  }
  const reset = () => {
    setNo(0)
  }
  const decrement = () => {
    if (no > 0) {
      setNo(no - 1);
    }else{
      alert("Something wrong!");
    }
   
  }
  useEffect(() => {
    console.log('Current value:- ', no);
  }, [no]);

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const number = {
    fontSize: '70px'
  };

  return (
    <>
      <center>
        <h1 style={number}>{no}</h1>
        <button  style={buttonStyle}  onClick={() => increment()}>Increment</button>
        <button  style={buttonStyle}  onClick={() => reset()}>Reset</button>
        <button  style={buttonStyle}  onClick={() => decrement()}>Decrement</button>
      </center>
    </>
  );
}

export default App;