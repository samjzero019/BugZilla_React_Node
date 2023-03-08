import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import { Header } from "./components/Header/header";
import { Home } from "./components/Home/home";
import { Login } from "./components/Auth/Login";
function App() {
	return (
		<>
			<Header />
			
			{/* routes */}
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
