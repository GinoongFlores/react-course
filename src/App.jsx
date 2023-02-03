import "./App.css";

// A state in react is a variable that stores data that can be changed
import { useState } from "react";
import { Tasks } from "./Task";

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
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, // grabbing the last element of the array and adding one to it to increment the id by one. But, if the array has no id then we want to set it to 1
			taskName: newTask,
			completed: false,
		};

		setTodoList([...todoList, task]); // here we are copying everything from the todoList and adding the new task to it and then setting it to the todoList
	};

	const completeTask = (id) => {
		// make the list green if it was clicked
		setTodoList(
			// here we wrapped the todoList with its setTodoList function and were mapping through its array
			todoList.map((task) => {
				// Loop through the array and set the condition. If the id of the task is equal to the id that we want to complete, then return the all the element of the task but I want only the specific element completed as true
				if (task.id === id) {
					return { ...task, completed: true }; // here we wanted to return the specific task that we wanted to complete but the completed element will now be true
				} else {
					// if it's not the element that we wanted to complete then just return the task
					return task;
				}
			})
		);
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
							<Tasks
								taskName={task.taskName}
								id={task.id}
								completed={task.completed} // here we are passing the completed property from the task property to the Tasks component to be used as a condition to change the color of the task
								completeTask={completeTask} // here we are passing the completeTask function as a prop to the Tasks component so that we can call it in the Tasks component and pass the id of the task that we want to complete
								deleteTask={deleteTask} // we can also pass props as functions. By calling the deleteTask function as a prop
							/>
						); // here we are calling the Tasks component and passing the task object as a prop
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
