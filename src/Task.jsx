export const Tasks = (props) => {
	return (
		<div className="taskLists">
			{/* here we create a props of completed and called into the task component as a basis to change the color of the task based on the given condition*/}
			<div
				className="task"
				style={{ backgroundColor: props.completed ? "green" : "white" }}
			></div>

			<h3>{props.taskName}</h3>

			<button onClick={() => props.completeTask(props.id)}>Complete</button>

			{/* here we are calling a function that the deletesTask function. And has the parameter of the task.id from the task object because we want to delete the task now by its id. */}
			<button className="deleteBtn" onClick={() => props.deleteTask(props.id)}>
				X
			</button>
		</div>
	);
};
