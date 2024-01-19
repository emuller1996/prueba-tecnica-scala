import foto1 from "../../assets/images/sections/1.jpg";
import scessior from "../../assets/images/icons/scessior.svg";
import moustache from "../../assets/images/icons/moustache.svg";
import comb from "../../assets/images/icons/comb.svg";
import time from "../../assets/images/icons/time.svg";
import drier1 from "../../assets/images/icons/drier1.svg";

export default function ServicesSection() {
  return (
    <section id="services" className="mt-5">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-md-6 ps-0" data-aos="fade-right">
            <img className="img-fluid  float-start " src={foto1} alt="" />
          </div>
          <div className="col-md-6 bg-light p-0" data-aos="fade-left">
            <div className="p-5">
              <div className="d-flex flex-column gap-4">
                <div className="d-flex justify-content-between gap-5">
                  <img src={scessior} width={"50px"} alt="s" />
                  <div>
                    <p className="fw-bold text-dark">WELL TRAINED BARBERS</p>

                    <p className="text-muted  lh-lg">
                      Proactively matrix go forward manufactured products before
                      premium innovation. Collaboratively fashion.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-5">
                  <img src={moustache} width={"50px"} alt="s" />
                  <div>
                    <p className="fw-bold text-dark">10 YEARS EXPIRIENCE</p>

                    <p className="text-muted lh-lg ">
                      Dynamically transition seamless metrics after premium
                      e-business. Phosfluorescently parallel task distinctive.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-5">
                  <img src={comb} width={"50px"} alt="s" />
                  <div>
                    <p className="fw-bold text-dark">BRANDED PR0DUCTS</p>
                    <p className="text-muted  lh-lg">
                      Distinctively initiate alternative information with
                      bricks-and-clicks e-commerce. Quickly evolve superior.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-5">
                  <img src={time} width={"50px"} alt="s" />
                  <div>
                    <p className="fw-bold text-dark">GREAT LOCATION</p>
                    <p className="text-muted  lh-lg">
                      Holisticly fashion cooperative ROI without unique
                      intellectual capital. Synergistically engage orthogonal.
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-between gap-5">
                  <img src={drier1} width={"50px"} alt="s" />
                  <div>
                    <p className="fw-bold text-dark">CUSTOMER SERVICE</p>
                    <p className="text-muted lh-lg">
                      Monotonectally evisculate high standards in best practices
                      before exceptional web-readiness. Competently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
