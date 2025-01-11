const {Router} = require('express');
const movieRouter = Router();
const connection= require('../db/connection')

movieRouter.get('/a', (req,res)=>{
    return res.send("movies")
})

movieRouter.get('/data', (req,res)=>{
    connection.query(
        `SELECT * FROM movies`,
        function (err,data){
            return res.send(data)
        }
    )
})

movieRouter.post('/newmovie', (req,res)=>{
    const body = req.body;
    connection.query(
        `INSERT INTO movies(id,name,rating) VALUES(${body.id}, "${body.name}", ${body.rating})`,

        function(err,data){
            return res.json(data)
        }
    )
})

// to get a movie on a specific id then do this

movieRouter.get("/:id", (req, res) => {
    // const { id } = req.params;
    const id  = req.params.id;
    connection.query(`SELECT * FROM movies WHERE id = ${id}`,  function (err, data) {
        return res.json(data);
    });
});




module.exports = movieRouter
