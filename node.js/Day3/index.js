const express = require('express')


const app = express()

app.get('/',(req,res)=>{
    return res.end("get index")
})

// send html to the browser with server 
app.get('/html', (req,res)=>{
    return res.send('<h1 style="font-size:58px">Mihir</h1>')
})
app.post('/',(req,res)=>{
    return res.end("post index 1")
})
app.get('/date', (req, res) => {
    return res.send(new Date().toUTCString()); // Sends the current date
});

// for getting that particular id  & its called dynamic route
// path params = Path parameters are dynamic segments of a URL that allow you to capture values from the URL path and pass them to your route handlers in an Express.js application. 
app.get('/user/:userid', (req,res)=>{
    const id = req.params.userid;
    return res.send({
        id:id
    })
})
 
// query params = Query parameters are a way to pass additional data in the URL of a request, typically used in GET requests. They are appended to the URL after a question mark (?) and consist of key-value pairs, separated by the ampersand (&).
 







app.listen(5000, ()=>{
    console.log(" http://localhost:5000");
})














