import React from "react";

import { Link } from "react-router-dom";

import logo from "../../includes/images/logo.jpg";
import "./header.css";

export const Header = () => {
	return (
		<>
			<nav className="header nav navbar-light">
					<div className=" d-flex container-fluid align-items-center ">
						<Link className="navbar-brand" to="/">
							<img
								src={logo}
								width="50"
								height="50"
								alt="Logo"
								style={{ borderRadius: "22px" }}
							/>
						</Link>
						<span className="px-2">BugZilla</span>
						<div className="menu ">
							<ul className="menu-list">
								<li className="menu-list-item">
									<Link to="#">Link1</Link>
								</li>
								<li className="menu-list-item">
									<Link to="#">Link2</Link>
								</li>
                                <li className="menu-list-item">
									<Link to="#">Link3</Link>
								</li>
							</ul>
						</div>
                        <div className="right-menu">
							<ul className="right-menu-list">
                            <li className="right-menu-item">
									<Link to="#">Link1</Link>
								</li>
								<li className="menu-list-item">
									<Link to="#">Link2</Link>
								</li>
							</ul>
						</div>
					</div>
			</nav>
		</>
	);
};
