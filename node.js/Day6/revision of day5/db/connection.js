const mongoose = require('mongoose');
const movieRoute =mongoose.connect("mongodb://localhost:27017/imdb")

module.exports = movieRoute;