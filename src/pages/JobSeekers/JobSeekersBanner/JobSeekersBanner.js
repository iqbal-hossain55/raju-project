import React from "react";
import "./JobSeekersBanner.css";
import banner from '../../../assets/images/job-seeker-banner.37d1895.svg';
import resume from '../../../assets/images/build-your-resume.6663e29.png';
import connect from '../../../assets/images/connect-instantly-new.89a0872.png';
import verified from '../../../assets/images/100verified-new.28f66bb.png';

const JobSeekersBanner = () => {
  return (
    <section  class="job-seeker">
      <div  class="job-seeker-banner job-seeker-banner-old">
        <div  class="container">
          <div  class="row">
            <div  class="col-md-6">
              <div  class="jobseeker-banner-content">
                <h1 >
                  Looking <br  />
                  For a Job
                </h1>
              </div>
            </div>{" "}
            <div  class="col-md-6">
              <div  class="jobseeker-banner-img">
                <img
                  
                  src={banner}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div  class="building-profile">
        <div  class="container">
          <div  class="row">
            <div  class="col-md-7">
              <div  class="building-profile-content">
                <h3  class="title-md mb-65">
                  Building The Profile and Landing the Right Job Takes Just 5
                  minutes.
                </h3>{" "}
                <button
                  
                  type="button"
                  class="btn default-btn button-sm"
                >
                  Search Jobs
                </button>
              </div>
            </div>{" "}
            <div  class="col-md-5">
              <div  class="building-profile-img">
                <img
                  
                  src={resume}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div  class="connect-instantly">
        <div  class="container">
          <div  class="row">
            <div  class="col-md-6">
              <div  class="connect-instantly-img">
                <img
                  
                  src={connect}
                  alt=""
                />
              </div>
            </div>{" "}
            <div  class="col-md-6">
              <div  class="connect-instantly-content">
                <h3  class="title-md mb-65">
                  Connect Instantly with Startup Founders and Get Hired.
                </h3>{" "}
                <button
                  
                  type="button"
                  class="btn default-btn button-sm"
                >
                  Direct Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div  class="verified-recruiters">
        <div  class="container">
          <div  class="row">
            <div  class="col-md-6">
              <div  class="verified-recruiters-content">
                <h3  class="title-md mb-65">
                  100% Verified Recruiters and 150K+ Startups trust Hirect.
                </h3>{" "}
                <button
                  
                  type="button"
                  class="btn default-btn button-sm"
                >
                  Get Started
                </button>
              </div>
            </div>{" "}
            <div  class="col-md-6">
              <div  class="verified-recruiters-img">
                <img
                  
                  src={verified}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSeekersBanner;
