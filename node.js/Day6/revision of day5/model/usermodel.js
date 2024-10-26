const {Schema, model}= require('mongoose');

// In Mongoose, a schema defines the structure of documents within a MongoDB collection, while a model provides an interface to interact with the database, allowing you to create, read, update, and delete documents based on the defined schema.

// Schema:== A schema in Mongoose is used to define the structure of a document in a MongoDB collection. It specifies the fields, their data types, and any validation or constraints that should be applied to the data.Purpose: To define the shape of documents in a MongoDB collection.Includes: Field names, data types (e.g., String, Number, Date, Boolean, etc.), default values, and validation rules.


const userSchema=new Schema({
    name: String,
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        isMarried:Boolean,
        age:Number,
        metadata: Schema.Types.Mixed // This field can store any type of data
    }
})

// Model:- A model in Mongoose is a compiled version of a schema. It provides an interface for interacting with the database collection (e.g., for querying, creating, updating, or deleting documents). The model maps directly to a collection in the MongoDB database.
// Purpose: To interact with the MongoDB database.Functionality: It includes methods for interacting with documents, such as find(), save(), delete(), update(), etc.


const userModel= model('user', userSchema);

module.exports= userModel;

