import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__text">
        <h1>Li-commerce</h1>
        <h3>The best marketplace in Lithuania</h3>
      </div>
      <img
        src="https://cdn.pixabay.com/photo/2017/03/20/10/24/supermarket-2158692_960_720.jpg"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
