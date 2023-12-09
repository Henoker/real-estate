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
        {/* Estate<span className="color-b">Agency</span> */}
		{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
			<rect x="25" y="40" width="50" height="50" fill="#ffffff"/>
  			<polygon points="25 40, 50 10, 75 40" fill="#2eca6a"/>
  			<rect x="45" y="70" width="10" height="20" fill="#f4b400"/>
  			<rect x="30" y="50" width="15" height="15" fill="#000000"/>
			<rect x="55" y="50" width="15" height="15" fill="#000000"/>
		</svg> */}
		<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width={60}
    height={60}
    viewBox="0 0 256 256"
    xmlSpace="preserve"
  >
    <defs></defs>
    <g
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 89.418 33.95 l -43.5 -33.637 c -0.54 -0.418 -1.295 -0.418 -1.835 0 L 0.583 33.95 c -0.508 0.393 -0.709 1.064 -0.502 1.671 c 0.208 0.607 0.778 1.015 1.419 1.015 h 9.388 V 88.5 c 0 0.828 0.671 1.5 1.5 1.5 h 65.225 c 0.828 0 1.5 -0.672 1.5 -1.5 V 36.637 H 88.5 c 0.642 0 1.212 -0.408 1.42 -1.015 C 90.127 35.014 89.925 34.343 89.418 33.95 z M 43.485 73.38 c -9.671 0 -17.51 -7.84 -17.51 -17.51 s 7.84 -17.51 17.51 -17.51 v 17.51 h 17.51 C 60.995 65.54 53.156 73.38 43.485 73.38 z M 46.515 52.89 V 35.38 c 9.671 0 17.51 7.84 17.51 17.511 H 46.515 z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "rgb(46,202,106)",
          fillRule: "nonzero",
          opacity: 1
        }}
        transform=" matrix(1 0 0 1 0 0) "
        strokeLinecap="round"
      />
    </g>
  </svg>
   {'  '}Estate Agency

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