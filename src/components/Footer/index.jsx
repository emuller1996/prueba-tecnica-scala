import "./index.css";
import logo from "../../assets/images/slider-logo.svg";

export default function Footer() {
  return (
    <section data-aos="fade-up">
      <div className="bg-footer-img py-5 position-relative">
        <div className="position-absolute top-50  start-50  translate-middle ">
          <h4 className="text-white">
            Book your visit online and save upto{" "}
            <b className="fw-bold ">25% Discount</b>{" "}
          </h4>
        </div>
      </div>
      <div className="bg-dark py-5 text-center ">
        <img className="logo_nabvar" src={logo} alt="LOGO" />

        <div className="d-flex gap-4 justify-content-center mt-4">
          <i
            className="fa-brands fa-facebook"
            style={{ color: "#c2c2c2b7" }}
          ></i>
          <i
            className="fa-brands fa-x-twitter"
            style={{ color: "#c2c2c2b7" }}
          ></i>
          <i
            className="fa-brands fa-instagram"
            style={{ color: "#c2c2c2b7" }}
          ></i>
        </div>
        <p className=" mt-3 text-uppercase " style={{ color: "#c2c2c28f" }}>
          © Prueba Presenta por Estefano Muller a Scala 2024{" "}
        </p>
      </div>
    </section>
  );
}
