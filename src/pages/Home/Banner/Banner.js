import React from 'react';
import './Banner.css';
import candidate from '../../../assets/images/candidates.0f51451.svg'
import startup from '../../../assets/images/startups2.796b96b.svg'

const Banner = () => {
    return (
        <section class="direct-banner">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Direct Hiring App for Startup <br />Ecosystem</h1>
            </div>
            <div class="col-md-6">
              <div class="direct-Candidates first">
                <div class="direct-text">
                  <h2>Candidates</h2>
                  <a href="/job-seeker" class="btn default-btn button-sm">
                    Looking for Jobs
                  </a>
                </div>
                <div class="direct-img">
                  <img src={candidate} alt="" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="direct-Candidates two">
                <div class="direct-text">
                  <h2>Startups</h2>
                  <a href="/connect" class="btn default-btn startup-btn">
                    Looking for Candidates
                  </a>
                </div>
                <div class="direct-img">
                  <img src={startup} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banner;