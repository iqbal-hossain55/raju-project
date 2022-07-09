import React from "react";
import "./Footer.css";
import footerLogo from "../../../assets/icons/hirect-logo-footer.6af077d.png";
import whatsappIcon from "../../../assets/icons/whatsapp-icon.05176f1.svg";
import indiaFlag from "../../../assets/icons/country-flag.745924a.svg";
import americaFlag from "../../../assets/icons/america-flag.png";

const Footer = () => {
    
  return (
    <section class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="footer-box">
              <div class="footer-logo">
                <a href="/homepage" class="">
                  <img src={footerLogo} alt="" />
                </a>
                <p>
                  Hire Instantly for Your Startup. <br />
                  Trusted by 3M+ verified Jobseekers &amp; <br />
                  verified 150K+ Startups!
                </p>
              </div>
              <div class="footer-whatsapp">
                <img src={whatsappIcon} alt="" />
                <a href="https://api.whatsapp.com/send?phone=+918446164920">
                  +918446164920
                </a>
              </div>
              <ul class="footer-social-link">
                <li>
                  <a href="https://twitter.com/HirectIndia" target="_blank">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://in.linkedin.com/company/hirectapp"
                    target="_blank"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/hirectindia/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UC98TU-jrNVOJCWC-FhnaPWQ"
                    target="_blank"
                  >
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/hirect_india/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-7">
            <div class="row">
              <div class="col-md-4">
                <div class="footer-link">
                  <h4>Hirect</h4>
                  <ul>
                    <li>
                      <a
                        href="/"
                        aria-current="page"
                        class="nuxt-link-exact-active nuxt-link-active"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/aboutus" class="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/features-in" class="">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="/connect" class="">
                        Recruiters
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hirect.in/blog/">Blog</a>
                    </li>
                    <li>
                      <a href="/job-seeker" class="">
                        Job Seekers
                      </a>
                    </li>
                    <li>
                      <a href="/startup-hiring" class="">
                        For Startup Hiring
                      </a>
                    </li>
                    <li>
                      <a href="/contact-us" class="">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-link">
                  <h4>Support</h4>
                  <ul>
                    <li>
                      <a href="mailto:support@hirect.in">Support@hirect.in</a>
                    </li>
                    <li>
                      <a>
                        For Recruiters
                        <br />
                        Schedule a Call
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-4">
                <div class="footer-link">
                  <h4>Legal</h4>
                  <ul>
                    <li>
                      <a href="/privacypolicy" class="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="/termsconditions" class="">
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a href="/product-pricing" class="">
                        Product &amp; Pricing
                      </a>
                    </li>
                    <li>
                      <a href="/refund-cancellation-policy" class="">
                        Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copy-right-footer">
          <div class="row">
            <div class="col-md-6 copy-right-text">
              <h3>© Elephantjob Private Limited. All Rights Reserved.</h3>
            </div>
            <div class="col-md-6">
              <div class="change-flage">
                <div class="dropdown">
                  <a class="dropbtn">
                    <img src={indiaFlag} alt="" />
                    <h6>Change Region</h6>
                  </a>
                  <div class="dropdown-content">
                    <a href="https://hirect.us?changeregion=1" class="dropbtn">
                      <img src={americaFlag} alt="" />
                      <h6>United States</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="el-dialog__wrapper schedule-dialog"
        style={{ display: "none" }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="dialog"
          class="el-dialog"
          style={{ marginTop: "15vh" }}
        >
          <div class="el-dialog__header">
            <span class="el-dialog__title"></span>
            <button
              type="button"
              aria-label="Close"
              class="el-dialog__headerbtn"
            >
              <i class="el-dialog__close el-icon el-icon-close"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
