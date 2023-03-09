import React from "react";
import { Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Home from "./components/Home/home";
import Login from "./components/Auth/login";
import Register from "./components/Auth/register";

import "./App.css";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="register" element={<Register />} />
					<Route path="login" element={<Login />} />
				</Routes>
			</Router>
			<main className="main-body">
				<Outlet />
			</main>
		</>
	);
}

export default App;
