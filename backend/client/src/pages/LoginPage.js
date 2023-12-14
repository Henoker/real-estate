import React, { useEffect, useState } from "react";
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
              <span className="text-primary">for your business</span>
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
                <p className="text-lg-center fa-bold ">Welcome to Relators</p>
				<h1 className="fw-bold text-center">Login</h1>
                <form onSubmit={submitHandler}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
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
                      value={password}
					            onChange={(e) =>setPassword(e.target.value)}
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Login
                  </button>
                  {/* Register buttons */}
                  <div className="text-left">
					<p>If you don't have an account<Link to="/register" className="text-primary">{'  '}Register Here</Link></p>
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
		
		</>
	);
};

export default LoginPage;