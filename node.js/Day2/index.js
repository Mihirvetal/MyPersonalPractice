const {readFileSync, writeFileSync, read} = require('fs');
// const {add} = require('./calc');
// writeFileSync("new.txt" , 'mihir', 'utf-8');
// const read = readFileSync("new.txt", 'utf-8');
// console.log(read);
// const addd = add(2,2);
// console.log(addd);

const http = require('http');

//  so creating server using http and give the response of file in server response with readFileSync 
// const server  = http.createServer((req,res)=>{
//     try{
//         const data = readFileSync('./new.txt','utf-8')
//         res.end(data)
//     }catch(err){
//         res.end('cant read file')
//     }
// });

// server.listen(5000, ()=>{
//     console.log('http://localhost:5000');
// });

const server = http.createServer((req,res)=>{
    if (req.url === '/hi'){
        return res.end("hi")
    }
    if (req.url === '/hello'){
        return res.end('hello')
    }
    if (req.url === '/user/masai'){
        return res.end(JSON.stringify([1,2,3,4,5]))
    }
})

server.listen(5000 , (req,res)=>{
    console.log("http://localhost:5000");
})









