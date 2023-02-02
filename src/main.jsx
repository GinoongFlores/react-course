export const DoSomething = () => {
	return <h1>Hello World</h1>;
};

// anonymous function
<button
	onClick={() => {
		console.log("Hello World");
	}}
></button>;

// working with conditionals using ternary operators

let age = 20;

// instead of this
// if (age > 22) {
// 	console.log(name);
// } else {
// 	name = "Paul";
// 	console.log(name);
// }

// we do this for if-else
name = age > 22 ? "Christian" : "Paul";
// or much better this

// using logical operators
let name = age > 18 && "Christian"; // here name is equal to Christian and will only display it if the condition is true
// the output will be "Christian"

// in react we can use the same logic as above
const Component = () => {
	return age > 22 ? <h1>Christian</h1> : <h1>Paul</h1>;
};
