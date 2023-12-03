import React from 'react'
// import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {GiHouse} from 'react-icons/gi';
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate, Link, NavLink } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.auth);

	const logoutHandler = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	const authLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/profile'>
					Profile
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' onClick={logoutHandler}>
					Logout
				</NavLink>
			</li>
		</>
	);

	const guestLinks = (
		<>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/login'>
					Login
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink className='nav-link' to='/register'>
					Register
				</NavLink>
			</li>
		</>
	);
    return (
    <header>
			{/* <Navbar
				fixed="top"
				expand="lg"
				collapseOnSelect
			>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand>
							<GiHouse className="nav-icon" /> Real Estate
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="ml-auto">
							<LinkContainer to="/">
								<Nav.Link>Home</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/properties">
								<Nav.Link>Properties</Nav.Link>
							</LinkContainer>

							{user ? (
								<NavDropdown
									title={
										user.firstName
											? user.firstName
											: "Welcome"
									}
									id="username"
								>
									<LinkContainer to="/profile">
										<NavDropdown.Item>
											Profile
										</NavDropdown.Item>
									</LinkContainer>

									<NavDropdown.Item onClick={logoutHandler}>
										<FaSignOutAlt /> Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to="/login">
									<Nav.Link>
										<FaSignInAlt /> Login
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar> */}
	  <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
    <div className="container">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <Link to="/" className="navbar-brand text-brand" >
        Estate<span className="color-b">Agency</span>
      </Link>
      <div
        className="navbar-collapse collapse justify-content-center"
        id="navbarDefault"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/properties">
              Property
            </Link>
          </li>
		  {user ? authLinks : guestLinks}
          <li className="nav-item">
            <a className="nav-link " href="contact.html">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
      >
        <i className="bi bi-search" />
      </button>
    </div>
  </nav>
		</header>
  )
}

export default Header