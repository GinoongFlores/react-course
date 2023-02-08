import { useState } from "react";

export const useToggle = (initialValue = false) => {
	const [state, setState] = useState(initialValue);

	const toggle = () => {
		// the prev is the reference of the state that we can pass as a parameter to the setState function and the argument is the opposite of the state which is the !prev that makes the state to be true or false.
		setState((prev) => !prev);
	};

	return [state, toggle]; // returns an array with the state and the toggle function

	// return {state, toggle}; we can also return an object with the state and the toggle function but it must be the same name when calling it to the App component or we can destructure.  As example by this, {state: isVisible, toggle: toggle} = useToggle();
};
