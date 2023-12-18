import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import axios from 'axios';

const deleteTodo = (_id) =>{
    axios.delete(`http://localhost:4000/api/v1/todo/${_id}`);
}

const isdone = (_id)=>{
    axios.put(`http://localhost:4000/api/v1/todo/${_id}`);
}


const Todo = ({todo, _id}) => {
  return (
    <div className='todo' >
        <p>{todo}</p>

        <div>
            <button onClick={()=>{deleteTodo(_id)}}>
                <MdDelete/>
            </button>
        </div>
    </div> 
  )
}

export default Todo
