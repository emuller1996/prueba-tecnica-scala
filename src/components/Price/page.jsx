import wallet from "../../assets/images/icons/wallet-white.svg";

import "./page.css";
export default function PriceSection() {
  return (
    <section id="Price" className="my-5" style={{ height: "100vh" }} >
      <div className="image_section_price img-fluid contenedor-pr" data-aos="fade-up" >
        <div className="mx-auto p-2  text-center  contenedor-price">
          <div className="d-flex flex-column  gap-3 mt-5">
            <div className="">
              <img width={"40px"} src={wallet} alt="" />
            </div>
            <h4 className="text-white text-uppercase fw-bolder ">Pricing</h4>
            <hr className="mx-auto  border border-white w-25" />
          </div>

          <div className="bg-black mt-4">
            <div className="p-5  ">
              <div className="row g-4 ">
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="text-uppercase   dots"
                      style={{ color: "#00a0a0" }}
                    >
                      Haircut
                    </span>
                    <span className="fw-bolder text-white ">$59</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="text-uppercase   dots"
                      style={{ color: "#00a0a0" }}
                    >
                      HAIRWASH
                    </span>
                    <span className="fw-bolder text-white ">$42</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="fw-bolder  dots"
                      style={{ color: "#00a0a0" }}
                    >
                      SHAVE
                    </span>
                    <span className="fw-bolder text-white ">$29</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="fw-bolder  dots"
                      style={{ color: "#00a0a0" }}
                    >
                      HAIR COLOUR
                    </span>
                    <span className="fw-bolder text-white ">$17</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="fw-bolder  dots"
                      style={{ color: "#00a0a0" }}
                    >
                      MOUSTACHE
                    </span>
                    <span className="fw-bolder text-white ">$39</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="fw-bolder  dots"
                      style={{ color: "#00a0a0" }}
                    >
                      BEARD TRIM
                    </span>
                    <span className="fw-bolder text-white ">$42</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="fw-bolder  dots"
                      style={{ color: "#00a0a0" }}
                    >
                      FACIAL
                    </span>
                    <span className="fw-bolder text-white ">$29</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="d-flex justify-content-between ">
                    <span
                      className="fw-bolder  dots"
                      style={{ color: "#00a0a0" }}
                    >
                      HEAD MASSAGE
                    </span>
                    <span className="fw-bolder text-white ">$17</span>
                  </div>
                  <p className="text-secondary  text-start  mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt quos harum officia eaque nobis ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
