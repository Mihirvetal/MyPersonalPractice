const user = require('./index')

setTimeout(() =>{
    user.emit("need employee")

}, 5000)
let count =0
const salary =setInterval(() => {
    user.emit("salary")
    count+=1
    if(count == 5){
        user.emit("salary reached and salary is 50000")
        clearInterval(salary)
    }
}, 500);