import "./App.css";

import { useState } from "react";
// A state in react is a variable that stores data that can be changed

function App() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChange = (event) => {
		setNewTask(event.target.value); // setNewTask is a function that sets the value of newTask. The event target value gets the user input and we passed into the setNewTask function to set the value of newTask
	};

	const addTasks = () => {
		// the task here is an object that sets an id and task name to a task
		const task = {
			// here we want to grab the element in the array before the current one and add 1 to that id
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, // again grabbing the last element of the array and adding one to it to increment the id by one. But, if the array has no id then we want to set it to 1
			taskName: newTask,
		};

		setTodoList([...todoList, task]); // here we are copying everything from the todoList and adding the new task to it and then setting it to the todoList
	};

	const deleteTask = (id) => {
		// better and shorter way of doing it
		//if the task.id is not equal to the id that we just passed then we want to delete it
		setTodoList(todoList.filter((task) => task.id !== id));
	};

	return (
		<div className="todoList">
			<div className="addTask">
				<input type="text" onChange={handleChange} />
				<button onClick={addTasks}>Add a Task</button>
			</div>

			{/* Lists of added tasks */}

			<div className="todoList--tasks">
				<h2>Added Tasks</h2>
				<div className="list">
					{todoList.map((task) => {
						// here the map loops through the todoList and returns the task
						return (
							<div className="taskLists">
								<h3>{task.taskName}</h3>

								{/* here we are calling a function that the deletesTask function. And has the parameter of the task.id from the task object because we want to delete the task now by its id. */}
								<button onClick={() => deleteTask(task.id)}>X</button>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
