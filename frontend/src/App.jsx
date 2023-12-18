
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import Todo from './components/Todo'
import axios from 'axios'
function App() {
 
  const [todos, setTodos] = useState([])
  const [reload, setreload] = useState(false)

  useEffect(() => {
    
    async function getTodo() {
      setreload((prev)=> !prev)
      const res = await axios.get("http://localhost:4000/api/v1/todo");
			setTodos(res.data.todo);
      
    }

    getTodo();
    
  },[todos, reload])
  

  return (
		<div className="main">
			<Header />
			<Input />

			{todos.map((i, idx) => (
				<Todo todo={i.todo} key={idx} _id={i._id} />
			))}
		</div>
	);
}

export default App
