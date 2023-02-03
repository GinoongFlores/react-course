export const Tasks = (props) => {
	return (
		<div className="taskLists">
			<div
				className="task"
				style={{ backgroundColor: props.completed ? "green" : "#242432" }}
			>
				<h3>{`${props.id} ${props.taskName}`}</h3>
			</div>

			{/* the props.id is the argument that we passed into the completeTask() parameter same on the deleteTask() */}
			{/* the completeTaskBtn() and deleteTasBtn are also props that we can passed to the App component */}
			<button onClick={() => props.completeTaskBtn(props.id)}>Complete</button>

			{/* here we are calling a function that the deletesTask function. And has the parameter of the task.id from the task object because we want to delete the task now by its id.
			
			Notice here that we used an anonymous function to passed the parameter of id. Because the deleteTask function is expecting an id parameter. So we need to wrap it in an anonymous function so that we can pass the id parameter to the deleteTask function.

			Also, You need to add an anonymous function (also called a callback) to the onClick handler because, in React, you need to pass a reference to a function that should be invoked when the button is clicked, instead of invoking the function immediately.
			 */}
			<button
				className="deleteBtn"
				onClick={() => props.deleteTaskBtn(props.id)}
			>
				X
			</button>
		</div>
	);
};
