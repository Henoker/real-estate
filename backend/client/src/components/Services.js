import React from 'react'
import { BsCart3 } from "react-icons/bs";
import { BsCalendar2Week } from "react-icons/bs";
import { BsCardChecklist } from "react-icons/bs";

const Services = () => {
  return (
    <section className="section-services section-t8">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title-wrap d-flex justify-content-between">
            <div className="title-box">
              <h2 className="title-a">Our Services</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
              <BsCart3 size={45} className="bi bi-cart" />
                {/* <span className="bi bi-cart" /> */}
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Lifestyle</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
                Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                dictum porta. Praesent sapien massa, convallis a pellentesque
                nec, egestas non nisi.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="#!" className="link-c link-icon">
                Read more
                <span className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
              <BsCalendar2Week size={45} />
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Loans</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
                Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id
                dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                nibh pulvinar a.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="#!" className="link-c link-icon">
                Read more
                
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-box-c foo">
            <div className="card-header-c d-flex">
              <div className="card-box-ico">
              <BsCardChecklist size={45} />
              </div>
              <div className="card-title-c align-self-center">
                <h2 className="title-c">Sell</h2>
              </div>
            </div>
            <div className="card-body-c">
              <p className="content-c">
                Sed porttitor lectus nibh. Cras ultricies ligula sed magna
                dictum porta. Praesent sapien massa, convallis a pellentesque
                nec, egestas non nisi.
              </p>
            </div>
            <div className="card-footer-c">
              <a href="#!" className="link-c link-icon">
                Read more
                <span className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services