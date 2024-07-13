import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="home-five-footer">
      <div className="footer-top footer-bg">
        {/* newsletter-area */}
        <div className="newsletter-area s-newsletter-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="newsletter-wrap">
                  <div className="section-title newsletter-title">
                    <h2>
                      Our <span>Newsletter</span>
                    </h2>
                  </div>
                  <div className="newsletter-form">
                    <form action="#">
                      <div className="newsletter-form-grp">
                        <i className="far fa-envelope" />
                        <input
                          type="email"
                          placeholder="Enter your email..."
                        />
                      </div>
                      <button>
                        SUBSCRIBE <i className="fas fa-paper-plane" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* newsletter-area-end */}
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="footer-logo mb-35">
                  <Link to="/">
                    <img src="img/logo/w_h5_logo.png" alt="" />
                  </Link>
                </div>
                <div className="footer-text">
                  <p>
                    Gemas marketplace the relase etras thats sheets continig
                    passag.
                  </p>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <i className="fas fa-map-marker-alt" />{" "}
                        <span>Address : </span> Hyderabad
                      </li>
                      <li>
                        <i className="fas fa-headphones" />{" "}
                        <span>Phone : </span>+91 1245 123 456
                      </li>
                      <li>
                        <i className="fas fa-envelope-open" />
                        <span>Email : </span>
                        <a className='text-decoration-none text-white-50'  href="mailto:email@example.com">info@agentesports.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Products</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/" className="a">Graphics (26)</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Backgrounds (11)</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Fonts (9)</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Music (3)</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Photography (3)</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Need Help?</h5>
                </div>
                <div className="fw-link">
                  <ul>
                    <li>
                      <Link to="/" className="a">Terms &amp; Conditions</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Refund Policy</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">Affiliate</Link>
                    </li>
                    <li>
                      <Link to="/" className="a">FAQUse Cases</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Follow us</h5>
                </div>
                <div className="footer-social">
                  <ul>
                    <li>
                      <a href="#" className="a">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="a">
                        <i className="fab fa-discord" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@TELUGUAGENTGAMING" className="a">
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/agentesports.in/" className="a">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-widget mb-50">
                <div className="fw-title mb-35">
                  <h5>Newsletter Sign Up</h5>
                </div>
                <div className="footer-newsletter">
                  <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <button>
                      <i className="fas fa-rocket" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-fire">
          <img src="img/images/footer_fire.png" alt="" />
        </div>
        <div className="footer-fire footer-fire-right">
          <img src="img/images/footer_fire.png" alt="" />
        </div>
      </div>
      <div className="copyright-wrap s-copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="copyright-text">
                <p>
                  Copyright © 2024 <Link to="/" className="a">Agent Esports</Link> All Rights Reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-none d-md-block">
              <div className="payment-method-img text-right">
                <img src="img/images/card_img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
