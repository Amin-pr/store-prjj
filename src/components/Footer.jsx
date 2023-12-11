/* eslint-disable jsx-a11y/anchor-is-valid */
import { memo } from "react";
import "./app.css";

function Footer() {
  const footerLogoSrc = process.env.PUBLIC_URL + "img/footer-icon.png";

  return (
    <section className="footer-holder  align-bottom w-100 py-5">
      <div className="footer row mx-auto container">
        <div className="footer-logo col">
          <img src={footerLogoSrc} alt="" className="footer-logo" />
          <p className="text-start text-white w-50">
            Your natural candle made for your home and for your wellness.
          </p>
        </div>
        <div className="footer-links col row justify-content-md-between">
          <a href="#" className="footer-title  text-glow col-12 col-sm-4 ">
            Discovery
          </a>
          <a href="#" className="footer-title  col-12 col-sm-4">
            About
          </a>
          <a href="#" className="footer-title   col-12 col-sm-4">
            Info
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            New Season
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Help
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Contact Us
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Most Searched
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Shipping
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Privacy Policy
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Most Selled
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Affiliate
          </a>
          <a href="" className="footer-link text-white  col-12 col-sm-4">
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
}
export default memo(Footer);
