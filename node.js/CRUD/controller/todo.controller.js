const todomodel = require("../models/todo.model");

const posttodo = async (req, res)=>{
    try{
        const body = req.body
        const todo = await todomodel.insertMany(body);
        return res.send("movie added")
    }catch(er){
        return res.status(500).json({ error: er.message })
    }
}


const gettodo = async (req, res) => {
  try {
    const todo = await todomodel.find();
    return res.json({list: todo});
  } catch (er) {
    return res.status(500).json({ error: er.message });
  }
};





const upTodo = async (req,res)=>{
    try{
        const todo = req.params.id;
        const updatedData = req.body;
        const upd = await todomodel.updateOne({_id : todo},  { $set: updatedData })
    }catch(er){
        return res.status(500).json({error: er})
    }
}



// const deleteTodo = async (req, res)=>{
//     try{
//         const body = req.body;
//         const del = await todomodel.deleteOne(body)
//     }catch (er) {
//         return res.status(500).json({ error: er.message })
//     }
// }
const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id; // Extract the ID from the URL parameters
        const result = await todomodel.deleteOne({ _id: todoId }); // Delete the todo by ID

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Todo not found" }); // Handle case where no todo was found
        }

        return res.status(200).json({ message: "Todo deleted successfully" }); // Successful deletion response
    } catch (er) {
        console.error(er); // Log the error for debugging
        return res.status(500).json({ error: er.message }); // Send error message with status code
    }
};








module.exports = { gettodo,posttodo , deleteTodo,upTodo }