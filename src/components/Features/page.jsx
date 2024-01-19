import shave from "../../assets/images/features/shave.jpg";
import haircut from "../../assets/images/features/haircut.jpg";
import hairwash from "../../assets/images/features/hairwash.jpg";

export default function FeaturesSection() {
  return (
    <section className="container mt-5">
      <div className="row g-4" data-aos="fade-up">
        <div className="col-md-4 " >
          <div className="d-flex flex-column gap-3 text-center ">
            <div className="position-relative text-center ">
              <img
                width={"250px"}
                className="rounded-pill  img-fluid"
                src={shave}
                alt=""
              />
              <div className="position-absolute text-center translate-middle  top-50 start-50 fs-3 text-white fw-bold   ">
                SHAVE
              </div>
            </div>
            <p className="text-muted fw-semibold">Your Property in Good Hands.</p>
            <p className="text-muted ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              rem, facilis nobis voluptatum est voluptatem accusamus molestiae
              eaque perspiciatis mollitia.
            </p>
            <a href="" className="text-uppercase ">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column gap-3 text-center ">
            <div className="position-relative text-center ">
              <img
                width={"250px"}
                className="rounded-pill  img-fluid"
                src={haircut}
                alt=""
              />
              <div className="position-absolute text-center translate-middle  top-50 start-50 fs-3 text-white fw-bold   ">
                HAIRCUT
              </div>
            </div>
            <p className="text-muted fw-semibold">Construction Process Organized.</p>
            <p className="text-muted ">
              Porro repellat vero sapiente amet vitae quibusdam necessitatibus
              consectetur, labore totam. Accusamus perspiciatis asperiores
              labore esse.
            </p>
            <a href="" className="text-uppercase ">
              Read More
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex flex-column gap-3 text-center ">
            <div className="position-relative text-center ">
              <img
                width={"250px"}
                className="rounded-pill  img-fluid"
                src={hairwash}
                alt=""
              />
              <div className="position-absolute text-center translate-middle  top-50 start-50 fs-3 text-white fw-bold   ">
                HAIRWASH
              </div>
            </div>
            <p className="text-muted fw-semibold ">We have got you Covered.</p>
            <p className="text-muted ">
              Quos, non, esse eligendi ab accusantium voluptatem. Maxime
              eligendi beatae, atque tempora ullam. Vitae delectus quia,
              consequuntur rerum quo.
            </p>
            <a href="" className="text-uppercase ">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
