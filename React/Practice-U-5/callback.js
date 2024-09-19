// const promiseone = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     resolve()
//     console.log("D");
//   },2000)
// });

// promiseone.then(function(){
//   console.log("Done promise");
// })

// let completedAssignment = new Promise((resolve, reject) => {
//   let isCompleted = true;
//   if (isCompleted) {
//     resolve("Completed assignment");
//   } else {
//     reject("Not completed assignment");
//   }
// });
// console.log(completedAssignment);

// ---------------------------------------------------------------------


// let completedAssignment = new Promise((resolve, reject) => {
//   let isCompleted = true;
//   if (isCompleted) {
//     resolve("Completed assignment");
//   } else {
//     reject("Not completed assignment");
//   }
// });
// console.log(completedAssignment);

// completedAssignment
//   .then((fromResolve) => console.log(fromResolve))
//   .catch((fromReject) => console.log(fromReject));


const processTask = (taskName, duration) => new Promise(resolve => {
  setTimeout(() => {
      console.log(`${taskName} complete!`);
      resolve();
  }, duration);
});

processTask('Washing clothes', 2000)
  .then(() => processTask('Drying clothes', 3000))
  .then(() => processTask('Folding clothes', 2000))
  .then(() => processTask("All laundry tasks completed!",2000));