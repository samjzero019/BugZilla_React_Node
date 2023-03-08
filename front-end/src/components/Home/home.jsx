import React from "react";
import { Outlet } from "react-router-dom";

export const Home = () => {
	return (
		<>
			<div className="sub-container">
				<h3>
					this page will act main landing page and connection to all
					other component
				</h3>
				<h2> this is home page </h2>
			</div>
			<Outlet />
		</>
	);
};
