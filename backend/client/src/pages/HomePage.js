import React from 'react'
import { Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Title from '../components/Title';
import banner from '../images/banner.jpg';

const HomePage = () => {
  return (
    <>
		<Title />
        {/* <header className="masthead main-bg-image">
				<Container className="px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
					<div className="d-flex justify-content-center">
						<div className="text-center">
							<h1 className="mx-auto my-0 text-uppercase">
								Real Estate
							</h1>
							<h2 className="text-white-50 mx-auto mt-2 mb-5">
								The one stop shop for all matters properties.
								Buy,Rent or sell with us!
							</h2>
							<LinkContainer to="/properties">
								<Button variant="primary">Get Started</Button>
							</LinkContainer>
						</div>
					</div>
				</Container>
			</header> */}
			<div className="slider">
    <div className="callbacks_container">
      <ul className="rslides" id="slider">
        <li>
          <img src={banner} className="img-responsive" alt="" />
          <div className="banner_desc">
            <div className="container">
              <h1>Est notare quam littera gothica, quam nunc.</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
            {/* <div className="details">
              <div className="container">
                <div className="col-xs-10 dropdown-buttons">
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All Locations</option>
                        <option value="null">Business</option>
                        <option value="AX">First Class</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All Property types</option>
                        <option value="null">House</option>
                        <option value="AX">Apartment</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All contracts</option>
                        <option value="null">Sale</option>
                        <option value="AX">Rent</option>
                        <option value="AX">Sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2 submit_button">
                  <form>
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div> */}
          </div>
        </li>
        <li>
          <img src="images/banner1.jpg" className="img-responsive" alt="" />
          <div className="banner_desc">
            <div className="container">
              <h1>Est notare quam littera gothica, quam nunc.</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
            {/* <div className="details">
              <div className="container">
                <div className="col-xs-10 dropdown-buttons">
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All Locations</option>
                        <option value="null">Business</option>
                        <option value="AX">First Class</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All Property types</option>
                        <option value="null">House</option>
                        <option value="AX">Apartment</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All contracts</option>
                        <option value="null">Sale</option>
                        <option value="AX">Rent</option>
                        <option value="AX">Sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2 submit_button">
                  <form>
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div> */}
          </div>
        </li>
        <li>
          <img src="images/banner2.jpg" className="img-responsive" alt="" />
          <div className="banner_desc">
            <div className="container">
              <h1>Est notare quam littera gothica, quam nunc.</h1>
              <h2>At wisi enim ad minim veniam, quis nostrud.</h2>
            </div>
            {/* <div className="details">
              <div className="container">
                <div className="col-xs-10 dropdown-buttons">
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All Locations</option>
                        <option value="null">Business</option>
                        <option value="AX">First Class</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All Property types</option>
                        <option value="null">House</option>
                        <option value="AX">Apartment</option>
                        <option value="AX">Premium Economy</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xs-4 dropdown-button">
                    <div className="section_room">
                      <select
                        id="country"
                        onchange="change_country(this.value)"
                        className="frm-field required"
                      >
                        <option value="null">All contracts</option>
                        <option value="null">Sale</option>
                        <option value="AX">Rent</option>
                        <option value="AX">Sold</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-xs-2 submit_button">
                  <form>
                    <input type="submit" defaultValue="Search" />
                  </form>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div> */}
          </div>
        </li>
      </ul>
    </div>
  </div>
  {/* <div className="smart_details">
    <div className="container">
      <div className="col-md-10 dropdown-buttons">
        <div className="col-md-4 dropdown-button">
          <div className="section_room">
            <select
              id="country"
              onchange="change_country(this.value)"
              className="frm-field required"
            >
              <option value="null">All Locations</option>
              <option value="null">Business</option>
              <option value="AX">First Class</option>
              <option value="AX">Premium Economy</option>
            </select>
          </div>
        </div>
        <div className="col-md-4 dropdown-button">
          <div className="section_room">
            <select
              id="country"
              onchange="change_country(this.value)"
              className="frm-field required"
            >
              <option value="null">All Property types</option>
              <option value="null">House</option>
              <option value="AX">Apartment</option>
              <option value="AX">Premium Economy</option>
            </select>
          </div>
        </div>
        <div className="col-md-4 dropdown-button">
          <div className="section_room">
            <select
              id="country"
              onchange="change_country(this.value)"
              className="frm-field required"
            >
              <option value="null">All contracts</option>
              <option value="null">Sale</option>
              <option value="AX">Rent</option>
              <option value="AX">Sold</option>
            </select>
          </div>
        </div>
      </div>
      <div className="col-md-2 submit_button">
        <form>
          <input type="submit" defaultValue="Search" />
        </form>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div> */}
    </>
  )
}

export default HomePage