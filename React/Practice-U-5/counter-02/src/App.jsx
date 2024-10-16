import { useState } from "react";

import "./App.css";

function App() {
  let [counter,setCounter] = useState(0)
  const inc = () =>{
   counter = counter +1
    setCounter(counter);
    console.log(counter);
    
  }
  const dec = () =>{
   counter = counter -1
    setCounter(counter);
    console.log(counter);
    
  }
  return (
    <>
      <h1>Counter hena bhai yeh</h1>
      <h2>counter: {counter}</h2>
      <button onClick={inc}>inc</button>
      <br />
      <br />
      
      <button onClick={dec}>dec</button>
    </>
  );
}

export default App;
