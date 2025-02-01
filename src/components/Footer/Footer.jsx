import React from "react";
import images from '../../constants/images'
import "./Footer.scss";
export const Footer = () => {
const currentYear = new Date().getFullYear()
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__items">
            <div className="footer__child">
              <h2>Security & Brand</h2>
              <p className="p-text-gray">Report Copyright Infringement</p>
              <p className="p-text-gray">Report Security Issue</p>
              <p className="p-text-gray">Trademark Notice</p>
            </div>

            <div className="footer__child">
              <h2>Website</h2>
              <p className="p-text-gray">Accessibility</p>
              <p className="p-text-gray">Digital Accessibility</p>
              <p className="p-text-gray">Privacy statement</p>
            </div>

            <div className="footer__child">
              <h2>Get In Touch</h2>
              <p className="p-text-gray">Contact Harvard</p>
              <p className="p-text-gray">Maps & Directions</p>
              <p className="p-text-gray">Jobs</p>
            </div>
          </div>

          <div className="footer__sub-items">
            <p className="p-text-gray">
              Copyright © {currentYear} The President and Fellows of Harvard College
            </p>

            <div className="footer__img-item">
              <a href="#">
                <img src= {images.instagram} alt="" />
              </a>
              <a href="#">
                <img src= {images.instagram} alt="" />
              </a>
              <a href="#">
                <img src= {images.instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
