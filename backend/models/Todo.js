import mongoose, { Schema } from "mongoose";

const todoSchema = mongoose.Schema(
    {
        todo: {
            type:String,
            required:true
        },
        completed:{
            type:String,
            enum:["yes", "no"],
            default:"no"
        }
    }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;