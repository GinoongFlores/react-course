export const Tasks = (props) => {
	return (
		<div className="taskLists">
			<div
				className="task"
				style={{ backgroundColor: props.completed ? "green" : "#242432" }}
			>
				<h3>{`${props.id} ${props.taskName}`}</h3>
			</div>

			<button onClick={() => props.completeTask(props.id)}>Complete</button>

			{/* here we are calling a function that the deletesTask function. And has the parameter of the task.id from the task object because we want to delete the task now by its id. */}
			<button className="deleteBtn" onClick={() => props.deleteTask(props.id)}>
				X
			</button>
		</div>
	);
};
