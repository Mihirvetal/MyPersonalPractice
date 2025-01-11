/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
const Fetcher = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [login, setLogin] = useState("Login");
  const [query, setQuery] = useState("");


  // the useeffect will run after every render of the component if dont use the dependency array if we use dependency array is empty it will render or run only one time for the first time of component render 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFiltered(data);
      })
      .catch((er) => console.log(er));
      console.log("effect");
  },[]);
console.log("object");
  const filterCard = () => {
    const filteredData = data.filter((card) => card.price < 100);

    console.log(filteredData);
    setFiltered(filteredData);
  };

  // const change=()=>{
  //   setLogin("Logout")
  //   if(login === "Logout"){
  //     setLogin("Login")
  //   }
  // }


  // whenever the react state variable is updated the react will re render the whole component again and again as per the updation of the react state variable all this will done by the reconciliation cycle which helps to re-render 

  const searchFn = filtered.filter((e) =>
    e.title.toLowerCase().includes(query.toLowerCase())
  );
  // setFiltered(searchFn);
  
  return (
    <div className="card-container">
      <button onClick={filterCard}>Filter </button>
      <button onClick={() => login === "Login" ?setLogin("Logout"): setLogin("Login")}>{login}</button>

      <input
        type="search"
        name="search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {searchFn.map((i) => {
          return (
            <li key={i.id}>
              <div className="card">
                <img className="card-img" src={i.image} alt="images" />
                <h1>{i.title}</h1>
                <h1>{i.price}</h1>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fetcher;
