import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
          The company put forward the finest range of Auto Self Starter Parts. These parts are manufactured using the O.E standards and the finest raw material available in the market. latest technology is used in order to produce such products; this certainly induces an essential impact over its performance and durability. The perfectly designed and finished products make Greatway India one of the renowned Self Starter Electrical Parts Suppliers and also ensure the best quality at reasonable prices without any compromises. We offer the complete range of auto electric components like starter motor parts such as Starter Drives, Solenoid Switches, Armatures, Field Coils etc. The auto electric components are supplied to replace auto electric parts used in complete units made by Lucas, Bosch, Delco-Remy, Magneti Marelli, Nippon Denso and others.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
               Motinagar, New Delhi,
              1224201
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 0231 345 0278</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: autocart@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Engine </span>
          <span className="text">Bearings</span>
          <span className="text"> Comfort and Interior</span>
          <span className="text">Brakes</span>
          <span className="text">tyres and alloys</span>
          <span className="text">Clutch</span>
          <span className="text">Accessories</span>
          <span className="text">Oils and fluids</span>

        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            AUTOSTART 2022 CREATED BY TANYA VERMA. PREMIUM E-COMMERCE SOLUTIONS.
          </span>
          <img src={Payment} /> alt=""
        </div>
      </div>
    </div>
  );
};

export default Footer;
