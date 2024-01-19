import comb3 from "../../assets/images/icons/team.svg";
import barbers1 from "../../assets/images/barbers/1.jpg";
import barbers2 from "../../assets/images/barbers/2.jpg";
import barbers3 from "../../assets/images/barbers/3.jpg";

export default function BarberSection() {
  return (
    <section>
      <div className="container mt-5" data-aos="fade-up-right">
        <div className="">
          <div className="d-flex align-items-center  flex-column gap-3  mb-2">
            <img width={"60px"} src={comb3} alt="" />
            <h4>OUR BARBERS</h4>
            <p className="text-muted ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              esse eum doloremque deleniti nam voluptatem.
            </p>
            <hr
              className="border border-dark border-2 mx-auto rounded-3 "
              style={{ width: "5%" }}
            />
          </div>

          <div className="row g-3 ">
            <div className="col-md-4">
              <div className="d-flex flex-column ">
                <div>
                  <img src={barbers1} className="img-fluid " alt="" />
                </div>
                <div className="d-flex  flex-column  text-center  py-3">
                  <span className="fw-semibold ">JOHN DOE</span>
                  <span
                    style={{ color: "#0bc57e" }}
                    className="fw-lighter fst-italic"
                  >
                    Expert
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column ">
                <div>
                  <img src={barbers2} className="img-fluid " alt="" />
                </div>
                <div className="d-flex  flex-column  text-center  py-3">
                  <span className="fw-semibold ">JOSH THOMPSON</span>
                  <span
                    style={{ color: "#0bc57e" }}
                    className="fw-lighter fst-italic"
                  >
                    Barber
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="d-flex flex-column ">
                <div>
                  <img src={barbers3} className="img-fluid " alt="" />
                </div>
                <div className="d-flex  flex-column  text-center  py-3">
                  <span className="fw-semibold ">MARY JANE</span>
                  <span
                    style={{ color: "#0bc57e" }}
                    className="fw-lighter fst-italic"
                  >
                    Junior Barber
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
