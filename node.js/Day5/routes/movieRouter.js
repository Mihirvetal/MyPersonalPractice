

const {Router} = require('express')
const Moviemodel = require('../models/moviemodel')
const movierouter = Router();

movierouter.get('/movies', async (req,res)=>{
    const movies = await Moviemodel.find({})
    return res.json({
        list:movies,
    })
})



movierouter.get('/:id', (req,res)=>{
    return res.json({
        movie:movies
    })
})


// post method to add movies in database
movierouter.post('/addmovie' , async (req,res) =>{
    const data = req.body;
    await Moviemodel.insertMany(data);
    return res.send('movie added')
})

module.exports = movierouter;