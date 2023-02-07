// The react-hook-form is used for handling errors in the form data while the yup is used for validation

import { useForm } from "react-hook-form";
import * as yup from "yup"; // if you add an * on a library, it means you're importing everything from that library
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
	// here the schema means how we should shape the data that we're going to get from the form and the yup.object() means that the data is an object and the shape() is that we're going to shape the data.
	const schema = yup.object().shape({
		fullName: yup.string().required("Full Name is required"), // we can add error message by passing a string to the required method
		email: yup.string().email().required("An email is required"),
		age: yup.number().positive().integer().min(18).required("Age is required"),
		password: yup.string().min(6).max(20).required("Password is required"),

		// here add a oneOf method to make the confirmPassword to be one of the password reference and we also add the null to make it sure that we only have one reference or field that we need to compare with the password field
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords must match")
			.required("Confirm Password is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		// resolver means is how our schema will look like and yupResolver is the function that we're going to use to make the schema work
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		// we can add a parameter of data that will be passed to the onSubmit function to get the data from the form inputs and console logs the data in an object form
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* here we passed the register function as the key of depending on the input name. As all of the inputs here are objects and the register helps us to add a key on that certain object.  */}

			<input type="text" placeholder="Full Name..." {...register("fullName")} />
			<p className="errorMessage">{errors.fullName?.message}</p>

			<input type="text" placeholder="Email..." {...register("email")} />
			<p className="errorMessage">{errors.email?.message}</p>

			<input type="number" placeholder="Age" {...register("age")} />
			<p className="errorMessage">{errors.age?.message}</p>

			<input
				type="password"
				placeholder="Password..."
				{...register("password")}
			/>
			<p className="errorMessage">{errors.password?.message}</p>

			<input
				type="password"
				placeholder="Confirm Password..."
				{...register("confirmPassword")}
			/>
			<p className="errorMessage">{errors.confirmPassword?.message}</p>

			<button type="submit">SUBMIT</button>

			{/* <input type="submit" /> */}
		</form>
	);
};
