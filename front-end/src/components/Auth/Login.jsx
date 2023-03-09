import React, { useEffect } from "react";

import logo from "../../includes/images/logo.jpg";

import "./auth.css";
export default function Login() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("event in login ", e.target);
	};
	return (
		<>
			<div className="main-wrapper">
				<div className=" m-2 ">
					<div className="d-flex p-3 main-div">
						<div className="left-div col-6 p-2" id="left-div">
							<img
								src={logo}
								alt="Logo"
								height={"100%"}
								width={"100%"}
								style={{ borderRadius: "22px" }}
								id="login-img"
								className=""
							/>
						</div>
						<div className=" card right-div col-6 m-2  card-container">
							<div className="form-div ">
								<div>
									<form className="right-dev-form form ">
										<h2 className="d-flex justify-content-center">
											Login
										</h2>
										<div className="form-floating ">
											<input
												type={"email"}
												placeholder={"E-mail"}
												className="form-control my-3"
												id="email"
												name="email"
											/>
											<label htmlFor="email">
												E-Mail
											</label>
										</div>
										<div className="form-floating">
											<input
												type={"password"}
												placeholder={"Password"}
												className="form-control my-3"
												id="password"
												name="password"
											/>
											<label htmlFor="password">
												Password
											</label>
										</div>
										<div
											className="d-flex justify-content-center"
											style={{ minWidth: "3rem" }}
										>
											<button
												type="btn"
												className="btn btn-primary btn-lg"
												onClick={(e) => handleSubmit(e)}
											>
												Login
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
