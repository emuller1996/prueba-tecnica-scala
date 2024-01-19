import "./NavBar.css";
import logo from "../../assets/images/slider-logo.svg";

import { useState } from "react";

export default function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <section className="position-relative ">
      <div className="header_section">
        <div className="d-none d-md-flex   container d-flex justify-content-between my-3">
          <div className="d-flex gap-4 ">
            <i className="fa-brands fa-facebook text-white "></i>
            <i className="fa-brands fa-x-twitter text-white"></i>
            <i className="fa-brands fa-instagram text-white"></i>
          </div>
          <div>
            <button className="text-uppercase btn-appointment ">
              <i className="fa-solid fa-calendar-days me-2 "></i>Make An
              Appointment
            </button>
          </div>
        </div>
        <div className=" pe-3 pt-3 d-md-none ">
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="float-end btn-menu-responsive"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <div className="text-center ">
          <img className="logo_nabvar" src={logo} alt="LOGO" />

          <div className="d-none d-md-flex  mt-5 d-flex gap-4 justify-content-center ">
            <a className="text-white  text-uppercase nav-link   " href="#home">
              Home
            </a>
            <a
              className="text-white  text-uppercase nav-link "
              href="#services"
            >
              services
            </a>
            <a className="text-white  text-uppercase nav-link" href="#Price">
              Price
            </a>
            <a className="text-white  text-uppercase nav-link" href="#Shop">
              Shop
            </a>
            <a
              className="text-white  text-uppercase nav-link"
              href="#Testimonial"
            >
              Testimonial
            </a>
            <a className="text-white  text-uppercase nav-link" href="#Contact">
              Contact
            </a>
          </div>

          {show && (
            <div
              data-aos="fade-up"
              className="d-md-none mt-5 bg-black py-2  menu-mobile-barber w-75 mx-auto "
            >
              <div className="d-flex gap-2  flex-column justify-content-evenly  h-100 ">
                <a
                  className="text-white text-uppercase nav-link   "
                  href="#home"
                >
                  Home
                </a>
                <a
                  className="text-white text-uppercase nav-link "
                  href="#services"
                >
                  services
                </a>
                <a className="text-white text-uppercase nav-link" href="#Price">
                  Price
                </a>
                <a className="text-white text-uppercase nav-link" href="#Shop">
                  Shop
                </a>
                <a
                  className="text-white text-uppercase nav-link"
                  href="#Testimonial"
                >
                  Testimonial
                </a>
                <a
                  className="text-white text-uppercase nav-link"
                  href="#Contact"
                >
                  Contact
                </a>
                <div>
                  <button className="text-uppercase btn-appointment ">
                    <i className="fa-solid fa-calendar-days me-2 "></i>Make An
                    Appointment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <Offcanvas enforceFocus show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column justify-content-evenly  h-100 ">
            <a className=" text-uppercase nav-link   " href="#home">
              Home
            </a>
            <a className=" text-uppercase nav-link " href="#services">
              services
            </a>
            <a
              onClick={(e) => {
                console.log(e);
                setShow(!show);
              }}
              className=" text-uppercase nav-link"
              href="#Price"
            >
              Price
            </a>
            <a className=" text-uppercase nav-link" href="#Shop">
              Shop
            </a>
            <a className=" text-uppercase nav-link" href="#Testimonial">
              Testimonial
            </a>
            <a className=" text-uppercase nav-link" href="#Contact">
              Contact
            </a>
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}
    </section>
  );
}
