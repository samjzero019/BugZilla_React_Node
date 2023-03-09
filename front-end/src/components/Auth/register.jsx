import React from "react";

import logo from "../../includes/images/logo.jpg";

import "./auth.css";
export default function Register() {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Event in Register: ", e.target);
	};

	return (
		<>
			<div className="main-wrapper">
				<div className="card m-3 card-container">
					<div className="d-flex p-2">
						<div className="left-div col-6 p-2">
							<img
								src={logo}
								width="100%"
								height="100%"
								alt="Logo"
								style={{ borderRadius: "22px" }}
							/>
						</div>
						<div className="right-div col-6 p-2">
							<div className="form-div p-4">
								<h2> Register</h2>
								<form className="form">
									<div className="form-floating">
										<input
											type={"email"}
											placeholder={"E-mail"}
											className="form-control my-3"
											id="email"
											name="email"
										/>
										<label for="email">E-Mail</label>
									</div>
									<div className="form-floating">
										<input
											type={"password"}
											placeholder={"Password"}
											className="form-control my-3"
											id="password"
											name="password"
										/>
										<label for="password">Password</label>
									</div>
									<div className="form-floating">
										<input
											type={"password"}
											placeholder={"Confirm Password"}
											className="form-control my-3"
											id="confirmPassword"
											name="confirmPassword"
										/>
										<label for="confirmPassword">
											Confirm Password
										</label>
									</div>
									<div className="form-floating">
										<select
											class="form-select my-3"
											aria-label="User Role"
											id="roleSelect"
											name="role"
										>
											<option value="0" selected>
												Developer
											</option>
											<option value="1">
												Quality Analyst
											</option>
											<option value="2">Manager</option>
										</select>
										<label for="roleSelect">
											Select User Role
										</label>
									</div>
									<button
										type="btn"
										className="btn btn-primary"
										onClick={(e) => handleSubmit(e)}
									>
										Register
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
