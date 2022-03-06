import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Banner = () => {
  return (
    <div className="rainbow-bg-container">
      <ScrollAnimation animateIn="animate__fadeInUp">
        <h1>Unicorn Nodes</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <p className="description-header">
          Mint a Unicorn, get exclusive access to weekly node giveaways.
        </p>
      </ScrollAnimation>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <button disabled className="mint-button">
          Minting Soon
        </button>
      </ScrollAnimation>
      {/* <img src={cupcake} className="cupcake" alt="cupcake"/> */}
    </div>
  );
};

export default Banner;
