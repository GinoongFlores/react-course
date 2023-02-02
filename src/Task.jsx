export const Tasks = (props) => {
	return (
		<div className="taskLists">
			<h3>{props.taskName}</h3>
			<button onClick={() => props.completeTask(props.id)}>Complete</button>

			{/* here we are calling a function that the deletesTask function. And has the parameter of the task.id from the task object because we want to delete the task now by its id. */}
			<button className="deleteBtn" onClick={() => props.deleteTask(props.id)}>
				X
			</button>
		</div>
	);
};
