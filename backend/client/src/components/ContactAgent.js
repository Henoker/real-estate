import React, { useState } from 'react';
import { useGetPropertyDetailsQuery, useGetAllAgentsQuery } from '../services/apiProperties';
import SpinnerComponent from '../components/SpinnerComponent';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
import { sendEnquiry, resetStatus } from '../features/customer/customerContactSlice';


const ContactAgent = () => {
  const { slug } = useParams();
  const { data: property, error, isLoading } = useGetPropertyDetailsQuery(slug);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.customerContact.status);
  const successMessage = useSelector((state) => state.customerContact.successMessage);

  const agentUsername = property?.user;

  const { data: allAgents } = useGetAllAgentsQuery() ?? {};

  // Find the agent details for the specific user
  const agentDetails = allAgents?.find(agent => agent.username === agentUsername);

  // Use agentDetails?.full_name instead of agentFullName
  const agentFullName = agentDetails?.full_name || '';
  const agentEmail = agentDetails?.email || '';
  const agentPhone = agentDetails?.phone_number|| '';
  const agentDescription = agentDetails?.about_me || '';
  const agentImage = agentDetails?.profile_photo || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  console.log(agentFullName);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(sendEnquiry(formData));
    if (status === 'succeeded') {
      toast.success(successMessage);
    }
    else if (status === 'failed') {
      toast.error('Error occurred. Please try again.');
    }
  };
  

  if (isLoading) {
    return <p><SpinnerComponent/></p>;
  }

  if (error) {
    return toast.error(error.message, { icon: "🤦‍♂️" });
  }



	
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
              <img src={agentImage} alt="" className="img img-fluid" />
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="property-agent">
                <h4 className="title-agent">{agentFullName}</h4>
                <p className="color-text-a">
                  {/* Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit
                  amet quam vehicula elementum sed sit amet dui. Quisque velits
                  nisi, pretium ut lacinia in, elementum id enim. */}
                  {agentDescription}
                </p>
                <ul className="list-unstyled">
                  <li className="d-flex justify-content-between">
                    <strong>Phone:</strong>
                    <span className="color-text-a">{agentPhone}</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Mobile:</strong>
                    <span className="color-text-a">777 287 378 737</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <strong>Email:</strong>
                    <span className="color-text-a">{agentEmail}</span>
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
              {/* {status === 'succeeded' && <p>{successMessage}</p>} */}
              {/* {status === 'failed' && <p>Error occurred. Please try again.</p>} */}
                <form onSubmit={handleSubmit} className="form-a">
                  <div className="row">
                    <div className="col-md-12 mb-1">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-a"
                          id="inputName"
                          placeholder="Subject *"
                          required=""
                        />
                      </div>
                    </div>
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