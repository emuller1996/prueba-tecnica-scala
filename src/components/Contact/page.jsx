import "./page.css";
export default function ContactSection() {
  return (
    <section id="Contact">
      <div className="container-fluid p-0" data-aos="fade-up">
        <div className="row g-0 ">
          <div className="col-md-6 align-self-center  ">
            <img
              className="img-fluid  float-start "
              src="https://storage.googleapis.com/gweb-cloudblog-publish/images/Screen_Shot_2020-08-03_at_2.30.37_PM.max-1400x1400.png"
              alt=""
            />
          </div>
          <div className="col-md-6 bg-light">
            <div className="p-5 ">
              <h4 className="fw-bold mb-5">OUR HEADQUARTERS</h4>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex flex-column gap-2 ">
                    <span className="fw-bold ">North America:</span>
                    <span>795 Folsom Ave, Suite 600</span>
                    <span>San Francisco, CA 94107</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column gap-2 ">
                    <span className="">
                      <b className="fw-bold ">Phone : </b>
                      (1) 8547 632521
                    </span>
                    <span className="">
                      <b className="fw-bold ">Fax : </b>
                      (1) 11 4752 1433
                    </span>
                    <span className="">
                      <b className="fw-bold ">Email : </b>
                      info@canvas.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6">
                  <input
                    placeholder="Name"
                    type="text"
                    className="form-control contact-form-input "
                  />
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Email Address"
                    type="text"
                    className="form-control contact-form-input "
                  />
                </div>
                <div className="col-md-4">
                  <input
                    placeholder="Phone"
                    type="text"
                    className="form-control contact-form-input "
                  />
                </div>
                <div className="col-md-8">
                  <input
                    placeholder="Subject"
                    type="text"
                    className="form-control contact-form-input "
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control contact-form-input "
                    name=""
                    placeholder="Your Message"

                    id=""
                    rows="2"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button className="text-uppercase btn-appointment ">
                    send message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
