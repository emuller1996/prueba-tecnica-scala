import comb3 from "../../assets/images/icons/comb3.svg";
import shop1 from "../../assets/images/shop/1.jpg";
import shop2 from "../../assets/images/shop/2.jpg";
import shop3 from "../../assets/images/shop/3.jpg";
import shop4 from "../../assets/images/shop/4.jpg";
export default function ShopSection() {
  return (
    <section id="Shop">
      <div className="container mt-5">
        <div className="" data-aos="fade-up-left">
          <div className="d-flex align-items-center  flex-column gap-3  mb-2">
            <img width={"100px"} src={comb3} alt="" />
            <h4>SHOP</h4>
            <hr
              className="border border-dark border-2 mx-auto rounded-3 "
              style={{ width: "5%" }}
            />
          </div>
          <div className="row mt-4 g-4 ">
            <div className="col-md-3">
              <div className="border border-light d-flex flex-column ">
                <div className="bg-light text-center ">
                  <img src={shop1} className="img-fluid " alt="" />
                </div>
                <div className="text-center d-flex flex-column gap-2  bg-white p-3">
                  <span className="fw-semibold " style={{ color: "#0eaa7b" }}>
                    $21.49
                  </span>
                  <span className="fw-semibold ">RAZOR</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border border-light d-flex flex-column ">
                <div className="bg-light text-center ">
                  <img src={shop2} className="img-fluid " alt="" />
                </div>
                <div className="text-center d-flex flex-column gap-2  bg-white p-3">
                  <span className="fw-semibold " style={{ color: "#0eaa7b" }}>
                    $12.49
                  </span>
                  <span className="fw-semibold ">SHAVE BRUSH</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border border-light d-flex flex-column ">
                <div className="bg-light text-center ">
                  <img src={shop3} className="img-fluid " alt="" />
                </div>
                <div className="text-center d-flex flex-column gap-2  bg-white p-3">
                  <span className="fw-semibold " style={{ color: "#0eaa7b" }}>
                    $21.99
                  </span>
                  <span className="fw-semibold ">BEARD OIL</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border border-light d-flex flex-column ">
                <div className="bg-light text-center ">
                  <img src={shop4} className="img-fluid " alt="" />
                </div>
                <div className="text-center d-flex flex-column gap-2  bg-white p-3">
                  <span className="fw-semibold " style={{ color: "#0eaa7b" }}>
                    <b className="fw-light text-decoration-line-through  text-muted">
                      $24.99
                    </b>{" "}
                    $19.49
                  </span>
                  <span className="fw-semibold ">HAIR BRUSH</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4 ">
            <button className="text-uppercase btn-appointment">
              + More Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
