import React, { useState } from 'react'
import axios from 'axios';
const Input = () => {

	const addTodo = ( todo ) => {
		axios.post(`http://localhost:4000/api/v1/todo`, { todo });
	};

	const [todo, setTodo] = useState("");

	const todoValue = (e) => {
		setTodo(e.target.value)
	}
	
	return (
		<form>
			<input
				name="todo"
				onChange={todoValue}
				type="text"
				value={todo}
				placeholder="ENTER A TASKE..."
			/>

			<button type='submit' onClick={()=>{addTodo(todo)}}>ADD</button>
		</form>
	);
};

export default Input;
