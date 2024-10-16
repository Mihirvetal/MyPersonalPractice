import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const [submit , setSubmit] = useState("");
  const handleInputChange = (e) => {
    setSubmit(e.target.value);
  };
  const handleonchange = () =>{
    setColor(submit )
  }

  return (
    <div className="w-full " style={{ backgroundColor: color, height: "100px", width: "100px"} }>
      <br />
      <br />
      <input type="text"
      className="border-solid" 
      onChange={handleInputChange} 
      value={submit}
      />
      
      <button onClick={handleonchange}> Sub</button>
    </div>
  );
}

export default App;
