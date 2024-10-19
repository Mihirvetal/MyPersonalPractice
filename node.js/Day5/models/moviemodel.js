const { Schema, model} = require('mongoose');


// schema is to give the format of the input or data
const movieschema = new Schema({
    name: String ,
    rating: Number,
    genre: String,
    cast : [String]
});

// model 
// very important: name is always singular 

const Movie = model("movie", movieschema);
module.exports = Movie;