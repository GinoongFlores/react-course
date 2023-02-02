
// anonymous function
{/* <button
	onClick={() => {
		console.log("Hello World");
	}}
></button>; */}

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
name = age > 18 && "Christian"; // here name is equal to Christian and will only display it if the condition is true
console.log(name)
// the output will be "Christian"


// in react we can use the same logic as above
export const Component = () => {
	// return age > 22 ? <h1>Christian</h1> : <h1>Paul</h1>;
};

// Objects 

const personsName = "Christian Paul"
const personsAge = 21
const isMarried = false

const person = {
	// Instead of this
	// namePerson: "Christian",
	// personsAge: 21, 
	// isMarried: false

	// we can do this 
	name: personsName,
	age: personsAge,
	status: isMarried
}


// destructuring arrays
// const {namePerson, personsAge, isMarried} = person

// another example: changing a certain value of an object, which is the name only
const person2 = { ...person, name: "Flores" }

// same thing with an array: adding a value inside of an existing array
const nameArr = ["Christian", "Jason", "Jaycon"]
const nameArr2 = [...nameArr, "Philipp"]