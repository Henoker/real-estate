import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { logout, reset } from "../features/auth/authSlice";
import { BsSearch } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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
				<NavLink 
        className='nav-link' 
        to='/profile'
        onClick={() => setIsMenuOpen(false)}
        >
					Profile
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink 
        onClick={() => {
          logoutHandler();
          setIsMenuOpen(false); 
        }}>
					Logout
				</NavLink>
			</li>
		</>
	);

	const guestLinks = (
		<>
			<li className='nav-item'>
				<NavLink 
        className='nav-link' 
        to='/login'
        onClick={() => setIsMenuOpen(false)}
        >
					Login
				</NavLink>
			</li>
			<li className='nav-item'>
				<NavLink 
        className='nav-link' 
        to='/register'
        onClick={() => setIsMenuOpen(false)}
        >
					Register
				</NavLink>
			</li>
		</>
	);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  
 

    return (
    <header>
	  <nav className={`navbar navbar-default navbar-trans navbar-expand-lg fixed-top ${isMenuOpen ? 'navbar-open' : ''}`}>
    <div className="container">
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarDefault"
        aria-controls="navbarDefault"
        aria-expanded={isMenuOpen ? 'true' : 'false'}
        aria-label="Toggle navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>
      <Link to="/" className="navbar-brand text-brand" >
        {/* Estate<span className="color-b">Agency</span> */}
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
          fill: "rgb(18, 102, 227)",
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
        className={`navbar-collapse collapse justify-content-center ${isMenuOpen ? 'show' : ''}`} id="navbarDefault"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="/properties" onClick={() => setIsMenuOpen(false)}>
              Property
            </Link>
          </li>
		  {user ? authLinks : guestLinks}
          <li className="nav-item">
            <Link className="nav-link " to="/contact" onClick={() => setIsMenuOpen(false)} >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="btn btn-b-n navbar-toggle-box navbar-toggle-box-collapse"
        onClick={() => {
          handleShow();
          setIsMenuOpen(false); // Close menu on search button click
        }}
      >
        <BsSearch className="bi bi-search" />
      </button>
    </div>
  </nav>
  <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="title-d">Search Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <div className="row">
          <div className="col-md-12 mb-2">
            <div className="form-group">
              <label className="pb-2" htmlFor="Type">
                Keyword
              </label>
              <input
                type="text"
                className="form-control form-control-lg form-control-a"
                placeholder="Keyword"
              />
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="Type">
                Type
              </label>
              <select
                className="form-control form-select form-control-a"
                id="Type"
              >
                <option>All Type</option>
                <option>For Rent</option>
                <option>For Sale</option>
                <option>Open House</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="city">
                City
              </label>
              <select
                className="form-control form-select form-control-a"
                id="city"
              >
                <option>All City</option>
                <option>Alabama</option>
                <option>Arizona</option>
                <option>California</option>
                <option>Colorado</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="bedrooms">
                Bedrooms
              </label>
              <select
                className="form-control form-select form-control-a"
                id="bedrooms"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="garages">
                Garages
              </label>
              <select
                className="form-control form-select form-control-a"
                id="garages"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="bathrooms">
                Bathrooms
              </label>
              <select
                className="form-control form-select form-control-a"
                id="bathrooms"
              >
                <option>Any</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="form-group mt-3">
              <label className="pb-2" htmlFor="price">
                Min Price
              </label>
              <select
                className="form-control form-select form-control-a"
                id="price"
              >
                <option>Unlimite</option>
                <option>$50,000</option>
                <option>$100,000</option>
                <option>$150,000</option>
                <option>$200,000</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="btn btn-b">
              Search Property
            </button>
          </div>
        </div>
          </Form>
        </Modal.Body>
      </Modal>
		</header>
  )
}

export default Header