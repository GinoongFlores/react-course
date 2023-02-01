import "./App.css";

import { useState } from "react";
// A state in react is a variable that stores data that can be changed

function App() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChange = (event) => {
		setNewTask(event.target.value); // setNewTask is a function that sets the value of newTask
	};

	const addTasks = () => {
		const newTodoList = [...todoList, newTask]; // here we are copying everything from the todoList and adding the newTask to it
		setTodoList(newTodoList); // here we set the newTodoList function to the newTodoList
		// console.log(newTodoList);
	};

	return (
		<div className="App">
			<div className="addTask">
				<input type="text" onChange={handleChange} />
				<button onClick={addTasks}>Add Task</button>
			</div>

			{/* Lists of added tasks */}
			<div className="list">
				{todoList.map((task) => {
					return <h1>{task}</h1>;
				})}
			</div>
		</div>
	);
}

export default App;
