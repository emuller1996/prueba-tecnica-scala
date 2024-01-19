import foto1 from "../../assets/images/about/1.jpg";
import foto2 from "../../assets/images/about/2.jpg";
import sign from "../../assets/images/about/sign.png";
import scessir from "../../assets/images/icons/cs.svg";

export default function AboutSection() {
  return (
    <section id="home" className="mb-5">
      <div className="container ">
        <div className="row g-3 justify-content-center  align-items-center" data-aos="fade-up">
          <div className="col-lg-3 text-center d-none d-lg-block" >
            <img src={foto1} alt="" />
          </div>
          <div className="col-lg-6 " >
            <div className="text-center justify-content-center  align-items -center  d-flex flex-column gap-4">
              <div>
                <img width={"60px"} height={"50px"} src={scessir} alt="" />
              </div>
              <h4>ABOUT US</h4>
              <hr className="mx-auto  border border-dark w-25" />

              <p>
                Authoritatively communicate world-class alignments before
                low-risk high-yield growth strategies. Synergistically
                envisioneer transparent niches after dynamic `outside the box`
                thinking. Uniquely implement cutting-edge partnerships before
                synergistic niche markets.
              </p>
              <div>
                <img width={"150px"} src={sign} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-center  d-none d-lg-block">
            <img src={foto2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
