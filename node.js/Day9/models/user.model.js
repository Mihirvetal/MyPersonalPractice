const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["student", "teacher", "admin"],
        default: "student",
    },
    age: Number,
});

const UserModel = model("user", userSchema);

module.exports = UserModel;
