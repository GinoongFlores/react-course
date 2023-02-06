import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Data, dataLoader } from "./Data";

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Link,
	Outlet,
	RouterProvider,
} from "react-router-dom";

export const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Root />}>
				<Route index element={<Home />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/data" element={<Data />} loader={dataLoader} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		)
	);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
};

const Root = () => {
	return (
		<>
			<div>
				<Link to={"/"}>Home</Link>
				<Link to={"/menu"}>Menu</Link>
				<Link to={"/contact"}>Contact</Link>
				<Link to={"/data"}>Data</Link>
			</div>

			<div>
				{/* An <Outlet> should be used in parent route elements to render their child route elements */}
				<Outlet />
			</div>
		</>
	);
};
