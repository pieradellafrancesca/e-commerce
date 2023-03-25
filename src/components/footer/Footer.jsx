import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__container">
        <div className="Footer__container--row">
          <div className="col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>make money with us</h4>
            <ul>
              <li>
                <a href="#">sell on Ea - COM</a>
              </li>
              <li>
                <a href="#">sell on Ea - COM Business</a>
              </li>
              <li>
                <a href="#">sell on Ea - COM Handmade</a>
              </li>
              <li>
                <a href="#">fulfillment by Ea - COM</a>
              </li>
              <li>
                <a href="#">advertise your products</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">shipping</a>
              </li>
              <li>
                <a href="#">returns</a>
              </li>
              <li>
                <a href="#">order status</a>
              </li>
              <li>
                <a href="#">payment options</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>follow us</h4>
            <div className="social-links">
              <ImFacebook className="social-icon" />
              <ImTwitter className="social-icon" />
              <BsInstagram className="social-icon" />
              <ImLinkedin2 className="social-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
