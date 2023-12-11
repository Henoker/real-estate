import "bootstrap/js/dist/tab";

const PropertyTabs = () => {
  return (
      <div className="col-md-10 offset-md-1">
            <ul
            className="nav nav-pills-a nav-pills mb-3 section-t3"
            id="pills-tab"
            role="tablist"
            >
                <li className="nav-item">
                    <button
                    className="nav-link active"
                    id="pills-video-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-video"
                    role="tab"
                    aria-controls="pills-video"
                    aria-selected="true"
                    >
                        Video
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    id="pills-plans-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-plans"
                    role="tab"
                    aria-controls="pills-plans"
                    aria-selected="false"
                    >
                        Floor Plans
                    </button>
                </li>
                <li className="nav-item">
                    <button
                    className="nav-link"
                    id="pills-map-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-map"
                    role="tab"
                    aria-controls="pills-map"
                    aria-selected="false"
                    >
                        Ubication
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
              className="tab-pane fade show active"
              id="pills-video"
              role="tabpanel"
              aria-labelledby="pills-video-tab"
              >
                <iframe
                src="https://player.vimeo.com/video/73221098"
                width="100%"
                height={460}
                frameBorder={0}
                webkitallowfullscreen=""
                mozallowfullscreen=""
                allowFullScreen=""
                title='iframe'
              />
            </div>
            <div
              className="tab-pane fade"
              id="pills-plans"
              role="tabpanel"
              aria-labelledby="pills-plans-tab"
            >
              <img src="https://cdn.houseplansservices.com/product/ols438ijj55pbk6u1e379fugca/w600.jpg?v=7" alt="" className="img-fluid w-100" />
            </div>
            <div
              className="tab-pane fade"
              id="pills-map"
              role="tabpanel"
              aria-labelledby="pills-map-tab"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834"
                width="100%"
                height={460}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen=""
                title='iframe'
              />
            </div>
         </div>
            </div> 
  )
}

export default PropertyTabs