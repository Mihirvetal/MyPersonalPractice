const heading = React.createElement("h1", { id: "hi" }, "hello");
//  so the react createelement just create the object in the document 

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "im hero")
  )
);

parent.innerText = "parent";  //this is not the DOM node so its cant be manipulate directly 

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// 
