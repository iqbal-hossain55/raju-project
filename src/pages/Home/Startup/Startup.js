import React from 'react';
import './Startup.css';
import lenskart from '../../../assets/icons/lenskart-logo.6f67ce0.png';
import download from '../../../assets/icons/download.png';
import download1 from '../../../assets/icons/download (1).png';
import download2 from '../../../assets/icons/download (2).png';
import download3 from '../../../assets/icons/download (3).png';
import download4 from '../../../assets/icons/download (4).png';
import download5 from '../../../assets/icons/download (5).png';
import download6 from '../../../assets/icons/download (6).png';
import download7 from '../../../assets/icons/download (7).png';
import download8 from '../../../assets/icons/download (8).png';

 
const Startup = () => {
    return (
        <section class="startup-section">
        <div class="startups-logo">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 class="title-sm">
                  More than 150K+ startups trust Hirect for their recruitment
                  needs.
                </h3>
                <div class="jobs-list">
                  <ul class="startups-logo-list">
                    <li>
                      <img
                        src={lenskart}
                        alt=""
                      />
                    </li>
                    <li>
                      <img src={download} alt="" />
                    </li>
                    <li>
                      <img src={download1} alt="" />
                    </li>
                    <li>
                      <img src={download2} alt="" />
                    </li>
                    <li>
                      <img src={download3} alt="" />
                    </li>
                    <li>
                      <img src={download4} alt="" />
                    </li>
                    <li>
                      <img src={download5} alt="" />
                    </li>
                    <li>
                      <img src={download6} alt="" />
                    </li>
                    <li>
                      <img src={download7} alt="" />
                    </li>
                    <li>
                      <img src={download8} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Startup;