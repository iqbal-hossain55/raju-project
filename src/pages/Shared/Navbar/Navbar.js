import React from "react";
import "./Navbar.css";
import logo from "./../../../assets/images/hirect-logo.png";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light sticky-top"
        data-v-6a4c5e40=""
      >
        <div class="container" data-v-6a4c5e40="">
          <a
            href="/"
            aria-current="page"
            class="navbar-brand nuxt-link-exact-active nuxt-link-active"
            data-v-6a4c5e40=""
          >
            <img src={logo} alt="" data-v-6a4c5e40="" />
          </a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
            data-v-6a4c5e40=""
          >
            <span class="navbar-toggler-icon" data-v-6a4c5e40=""></span>
          </button>
          <div
            id="navbarScroll"
            class="collapse navbar-collapse"
            data-v-6a4c5e40=""
          >
            <ul
              class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll nav-dropdown-link"
              data-v-6a4c5e40=""
            >
              <li class="nav-item" data-v-6a4c5e40="">
                <a
                  href="/"
                  aria-current="page"
                  class="nav-link nuxt-link-exact-active nuxt-link-active"
                  data-v-6a4c5e40=""
                >
                  Home
                </a>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <a href="/aboutus" class="nav-link" data-v-6a4c5e40="">
                  About us
                </a>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <a href="/features-in" class="nav-link" data-v-6a4c5e40="">
                  {" "}
                  Features
                </a>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <a href="/connect" class="nav-link" data-v-6a4c5e40="">
                  Recruiters
                </a>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <a href="/job-seeker" class="nav-link" data-v-6a4c5e40="">
                  Job Seekers
                </a>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <a
                  href="https://www.hirect.in/blog/"
                  class="nav-link"
                  data-v-6a4c5e40=""
                >
                  {" "}
                  Blog
                </a>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <button
                  type="button"
                  class="btn default-btn button-sm download-btn"
                  data-v-6a4c5e40=""
                >
                  Download App
                </button>
              </li>
              <li class="nav-item" data-v-6a4c5e40="">
                <button
                  type="button"
                  class="btn bordered-btn button-sm watch-demobtn"
                  data-v-6a4c5e40=""
                >
                  <span class="text" data-v-6a4c5e40="">
                    Watch demo
                  </span>{" "}
                  <span class="icon" data-v-6a4c5e40="">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      class="svg-inline--fa fa-play"
                      data-v-6a4c5e40=""
                    >
                      <path
                        fill="currentColor"
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        data-v-6a4c5e40=""
                        class=""
                      ></path>
                    </svg>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
