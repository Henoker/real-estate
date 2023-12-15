import React from 'react'
import { useGetAllAgentsQuery } from '../services/apiProperties';
import SpinnerComponent from '../components/SpinnerComponent';


const Agents = () => {
    const { data: agentsData, error, isLoading } = useGetAllAgentsQuery();

    if (isLoading) {
        return <p><SpinnerComponent/></p>;
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


  return (
    <>
     <section className="intro-single">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8">
          <div className="title-single-box">
            <h1 className="title-single">Our Amazing Agents</h1>
            <span className="color-text-a">Grid Properties</span>
          </div>
        </div>
        <div className="col-md-12 col-lg-4">
          <nav
            aria-label="breadcrumb"
            className="breadcrumb-box d-flex justify-content-lg-end"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#!">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Agents
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
      <section className="agents-grid grid">
    <div className="container">
      <div className="row">
        {agentsData.map((agent) => (
          <div key={agent.id} className="col-md-4">
            <div className="card-box-d">
              <div className="card-img-d">
                <img
                  src={agent.profile_photo} // Update the base URL
                  alt=""
                  className="img-d img-fluid"
                />
              </div>
              <div className="card-overlay card-overlay-hover">
                <div className="card-header-d">
                  <div className="card-title-d align-self-center">
                    <h3 className="title-d">
                      <a href="#!" className="link-two">
                      {agent.first_name} 
                          <br /> {agent.last_name}
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="card-body-d">
                  <p className="content-d color-text-a">{agent.about_me}</p>
                  <div className="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> {agent.phone_number}
                    </p>
                    {/* <p>
                      <strong>About Me: </strong> {agent.about_me}
                    </p> */}
                  </div>
                </div>
                <div className="card-footer-d">
                  <div className="socials-footer d-flex justify-content-center">
                    <ul className="list-inline">
                      {/* Add your social media links here */}
                      {/* Example: Facebook */}
                      <li className="list-inline-item">
                        <a href="#!" className="link-one">
                          <i className="bi bi-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      {/* Add other social media links similarly */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    </>
  
  )
}

export default Agents