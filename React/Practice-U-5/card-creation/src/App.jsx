import "./App.css";
function App({src, name , title, pass}) {
  
 
  return (
    <div className="card">
      <img src="{src}" alt="" />
      <h1>Name: {name}</h1>
      <h3>Title: {title}</h3>
      <p>Passage: {pass}</p>

    </div>
  );
}

export default App;
