const {Router} = require('express')

const movierouter = Router();

movierouter.get('/movies', (req,res)=>{
    return res.json({
        list:[1,2,3,4]
    })
})

// movierouter.get('/:id', (req,res)=>{
//     return res.json({
//         movie:{}
//     })
// })

module.exports = movierouter;