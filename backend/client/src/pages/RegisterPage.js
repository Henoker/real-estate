import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Title from "../components/Title";
import { register, reset } from "../features/auth/authSlice";
import SpinnerComponent from "../components/SpinnerComponent";

const RegisterPage = () => {
	const [username, setUsername] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [re_password, setRePassword] = useState("");

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
			toast.success(
				"An activation email has been sent your email address. Please check your email"
			);
		}

		dispatch(reset());
	}, [isError, isSuccess, message, user, navigate, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== re_password) {
			toast.error("Passwords do not match");
		} else {
			const userData = {
				username,
				first_name,
				last_name,
				email,
				password,
				re_password,
			};
			dispatch(register(userData));
		}
	};
	return (
		<>
			<Title title="Register" />
			<section className="">
    {/* Jumbotron */}
    <div
      className="px-4 py-1 px-md-5 text-center text-lg-start"
      style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
    >
      <div className="container">
	  {isLoading && <SpinnerComponent />}
        <div className="row gx-lg-5 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="my-5 py-2 display-3 fw-bold ls-tight">
              Register Here<br />
              <span className="text-primary"> to get the best offer.</span>
            </h1>
            <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="card mt-0">
              <div className="card-body py-0 px-md-5">
				<h1 className="fw-bold text-center">Register</h1>
                <form onSubmit={submitHandler}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
				  <div className="form-outline mb-4">
                        <input
                          type="name"
						//   placeholder="Enter Username"
						  value={username}
						  onChange={(e) =>
							  setUsername(e.target.value)
						  }
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Username
                        </label>
                  </div>
                  {/* Password input */}
				  <div className="form-outline mb-4">
                        <input
                          type="email"
						//   placeholder="Enter Email"
						  value={email}
						  onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Email Address
                        </label>
                  </div>
                    <div className="col-md-6 mb-4">
						<div className="form-outline">
                        <input
                          type="name"
						//   placeholder="Enter First Name"
						  value={first_name}
						  onChange={(e) =>
							  setFirstName(e.target.value)
						  }
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          First name
                        </label>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
						<div className="form-outline">
                        <input
                          type="name"
						//   placeholder="Enter Last Name"
						  value={last_name}
						  onChange={(e) =>
							  setLastName(e.target.value)
						  }
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          Last name
                        </label>
                        </div> 
                    </div>
                  </div>
				  <div className="row">
                    <div className="col-md-6 mb-4">
					<div className="form-outline">
                    <input
                     type="password"
					//  placeholder="Enter Password"
					 value={password}
					 onChange={(e) =>
						 setPassword(e.target.value)
					 }
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Password
                    </label>
                  	  </div>
                    </div>
                    <div className="col-md-6 mb-4">
					  <div className="form-outline">
                    <input
                     type="password"
					 value={re_password}
					 onChange={(e) =>
						 setRePassword(e.target.value)
					 }
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Confirm Password
                    </label>
                  	  </div>
                    </div>
                  </div>         
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Register
                  </button>
                  {/* Register buttons */}
                  <div className="text-left">
					<p>If you already have an account<Link to="/login" className="text-primary">{'  '}Login Here</Link></p>
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
			{/* <Container className="card card-outline-secondary form-signin">
				<Row>
					<Col className="mg-top text-center">
						<div className="card-header">
							<h1>
								<FaUser /> Register
							</h1>
						</div>
					</Col>
				</Row>

				{isLoading && <SpinnerComponent />}
				<Row className="card-body mt-3">
					<Col className="justify-content-center">
						<Form onSubmit={submitHandler} className="form">
							<Form.Group controlId="username">
								<Form.Label className="col-lg-3 col-form-label form-control-label">Username</Form.Label>
								<Form.Control
									className="col-lg-9"
									type="name"
									placeholder="Enter Username"
									value={username}
									onChange={(e) =>
										setUsername(e.target.value)
									}
								/>
							</Form.Group>

							<Form.Group controlId="first_name">
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type="name"
									placeholder="Enter First Name"
									value={first_name}
									onChange={(e) =>
										setFirstName(e.target.value)
									}
								/>
							</Form.Group>

							<Form.Group controlId="last_name">
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type="name"
									placeholder="Enter Last Name"
									value={last_name}
									onChange={(e) =>
										setLastName(e.target.value)
									}
								/>
							</Form.Group>

							<Form.Group controlId="email">
								<Form.Label>Email Addrss</Form.Label>
								<Form.Control
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

							<Form.Group controlId="re-password">
								<Form.Label>Confirm Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter confirm Password"
									value={re_password}
									onChange={(e) =>
										setRePassword(e.target.value)
									}
								/>
							</Form.Group>

							<Button
								type="submit"
								variant="primary"
								className="mt-3"
							>
								Sign Up
							</Button>
						</Form>
					</Col>
				</Row>

				<Row className="py-3">
					<Col>
						Have an account already?
						<Link to="/login">Login</Link>
					</Col>
				</Row>
			</Container> */}
		</>
	);
};

export default RegisterPage;