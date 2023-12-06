import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../components/Title";
import { login, reset } from "../features/auth/authSlice";
import SpinnerComponent from "../components/SpinnerComponent";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [isError, isSuccess, message, user, navigate, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!email) {
			toast.error("An email must be provided");
		}

		if (!password) {
			toast.error("A password must be provided");
		}

		const userData = {
			email,
			password,
		};

		dispatch(login(userData));
	};

	return (
		<>
			<Title title="login" />
			<Container className="card card-outline-secondary form-signin mt-3">
				<Row>
					<Col className="mg-top text-center">
							<div class="card-header">
								<h3 class="mb-0"> <FaSignInAlt />Login</h3>
                            </div>
					</Col>
				</Row>

				{isLoading && <SpinnerComponent />}
				<Row className="card-body mt-3 ">
					<Col className="justify-content-center">
						<Form onSubmit={submitHandler}>
							<Form.Group controlId="email">
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									className="form-control"
									type="email"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>

							<Form.Group controlId="password">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Form.Group>

							<Button
								type="submit"
								variant="primary"
								className="btn btn-lg btn-primary btn-block mt-3"
							>
								Sign In
							</Button>
						</Form>
					</Col>
				</Row>

				<Row className="py-3">
					<Col>
						New Customer?
						<Link to="/register">Register Here.....</Link>
					</Col>
				</Row>
			</Container>
				
            {/* <div class="card card-outline-secondary">
              <div class="card-header">
                <h3 class="mb-0">Login</h3>
              </div>
			  {isLoading && <Spinner />}
              <div class="card-body">
                <form onSubmit={submitHandler} autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
                  <div class="form-group">
                    <label for="uname1">Username</label> 
					<input class="form-control" id="uname1" name="uname1" required="" type="text">
                  </div>
                  <div class="form-group">
                    <label>Password</label> 
										<input autocomplete="new-password" class="form-control" id="pwd1" required="" type="password">
                  </div>
                  <div class="form-check small">
                    <label class="form-check-label">
											<input class="form-check-input" type="checkbox"> 
											<span>Remember me on this computer</span>
                    </label>
                  </div>
									<button class="btn btn-success btn-lg float-right" type="button">Login</button>
                </form>
              </div>
            </div> */}
		</>
	);
};

export default LoginPage;