import React from "react";

const Crud = () => {
  const [inp, setInp] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    let obg = {
      name: inp,
      email: email,
    };
    setData([...data, obg ]);
    setInp("")
    setEmail("")

    console.log(e.target.inp);
  };
  console.log(data);

  return (
    <div>
      Crud
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          onChange={(e) => setInp(e.target.value)}
          value={inp}
        />
        <br />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button>Sub</button>
      </form>
      <ul>
          {data.map((item, index) => (
            <li key={index}>
              Name: {item.name}, Email: {item.email}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Crud;
