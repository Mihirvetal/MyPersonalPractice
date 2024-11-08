const {Schema , model} = require("mongoose");

const todoSchema = new Schema({
    name: String,
    active: Boolean
});

const todomodel = model("todo", todoSchema);


module.exports = todomodel;