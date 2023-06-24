import "./About.css";
import background from "../assets/bakery.png"


function About() {
  return (
    <>
      <div className="banner-image" style={{ backgroundImage: `url(${background})`, height: 30 }}>
        <h1 className="banner-title">
          About us
        </h1>
        <p className="banner-text">
        RESTAURANT NAME is a French-inspired bakery that offers customers a gourmet break in a lively setting.
        At RESTAURANT NAME, we dedicate to hand made food with artisan breads and pastries made daily with 
        locally-sourced, heirloom grains, as well as a produce forward day-time menu.
        </p>
      </div>
      <div className="disclaimer">
        <p>
          All resources in this page are obtained from Internet to help finish this assignment.
          If any kinds of infringement happens, please let us know at
          <a href="/contact"> Contact us.</a>
        </p>
      </div>
    </>
  );
}

export default About;
