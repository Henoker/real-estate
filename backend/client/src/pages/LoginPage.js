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
			<section className="">
    {/* Jumbotron */}
    <div
      className="px-4 py-5 px-md-5 text-center text-lg-start"
      style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
    >
      <div className="container mt-5">
	  {isLoading && <SpinnerComponent />}
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 display-3 fw-bold ls-tight">
              The best offer <br />
              <span className="text-success">for your business</span>
            </h1>
            <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card">
              <div className="card-body py-5 px-md-5">
				<h1 className="fw-bold text-center">Login</h1>
                <form onSubmit={submitHandler}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  {/* <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div> */}
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
					  placeholder="Enter Email"
					  value={email}
					  onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
					  placeholder="Enter Password"
					  value={password}
					  onChange={(e) =>setPassword(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  {/* Checkbox */}
                  {/* <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example33"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div> */}
                  {/* Submit button */}
                  <button
                    type="submit"
                    className="btn btn-success btn-block mb-4"
                  >
                    Sign up
                  </button>
                  {/* Register buttons */}
                  <div className="text-left">
					<p>If you don't have an account<Link to="/register" className="text-primary">{'  '}Register Here</Link></p>
				  
                    {/* <p>or sign up with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-twitter" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-github" />
                    </button> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Jumbotron */}
  </section>
			{/* <Container className="card card-outline-secondary form-signin mt-3">
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
			</Container> */}
				
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