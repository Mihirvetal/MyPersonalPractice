const eve = require("events")

const event = new eve();

 let arr = [1,2,3,4,5,6,7,8,9]

 event.on("read arr", ()=>{
    console.log("object");
 })
event.on("salary", ( ) => {
    console.log("salary added");
})

event.on("salary reached", () =>{
    console.log("Fired");
})

event.on("need employee",()=>{
    console.log("user hired");
})
module.exports = event