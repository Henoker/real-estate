import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { useGetProfileDetailsQuery } from '../services/apiProperties';
import SpinnerComponent from './SpinnerComponent';
import {toast} from 'react-toastify';


const ContactAgent = ({property}) => {
  // const { properties, isLoading, isError, message } = useSelector(
	// 	(state) => state.properties
	// );

	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	if (isError) {
	// 		toast.error(message, { icon: "😭" });
	// 	}
	// 	dispatch(getProperties());
	// }, [dispatch, isError, message]);

	// if (isLoading) {
	// 	return <SpinnerComponent />;
	// }
  return (
    <>
    <div className="col-md-12">
          <div className="row section-t3">
            <div className="col-sm-12">
              <div className="title-box-d">
                <h3 className="title-d">Contact Agent</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              {/* <img src={"http://localhost:8000"+property.profile_photo} alt="" className="img-fluid" /> */}
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="property-agent">
                {/* <h4 className="title-agent">{property.user.get_full_name}</h4> */}
                <p className="color-text-a">
                  Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit
                  amet quam vehicula elementum sed sit amet dui. Quisque velits
                  nisi, pretium ut lacinia in, elementum id enim.
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between">
                    <strong>Phone:</strong>
                    <span className="color-text-a">(222) 4568932</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Mobile:</strong>
                    <span className="color-text-a">777 287 378 737</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Email:</strong>
                    <span className="color-text-a">annabella@example.com</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Skype:</strong>
                    <span className="color-text-a">Annabela.ge</span>
                  </li>
                </ul>
                <div className="socials-a">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="bi bi-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="bi bi-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="bi bi-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#!">
                        <i className="bi bi-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="property-contact">
                <form className="form-a">
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-a"
                          id="inputName"
                          placeholder="Name *"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg form-control-a"
                          id="inputEmail1"
                          placeholder="Email *"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <textarea
                          id="textMessage"
                          className="form-control"
                          placeholder="Comment *"
                          name="message"
                          cols={45}
                          rows={8}
                          required=""
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 mt-3">
                      <button type="submit" className="btn btn-a">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
            </div>
    </>
  )
}

export default ContactAgent