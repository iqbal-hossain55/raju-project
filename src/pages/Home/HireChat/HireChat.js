import React from 'react';
import './HireChat.css';
import chat from '../../../assets/images/chat-directly-new.558e07e.png'
import hire from '../../../assets/images/hire-direct-hirect-new.ea598ac.png'

const HireChat = () => {
    return (
        <section class="hire-chat-section">
        <div class="hire-chat">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="hire-now">
                  <h2>Chat Directly With <br />Candidates &amp; Hire Now</h2>
                  <a href="/connect" class="btn default-btn button-sm"
                    >Get Connected</a
                  >
                </div>
              </div>
              <div class="col-md-7">
                <div class="hire-now-img">
                  <img
                    src={chat}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hire-chat">
          <div class="container">
            <div class="row">
              <div class="col-md-7">
                <div class="hire-now-img">
                  <img
                    src={hire}
                    alt=""
                  />
                </div>
              </div>
              <div class="col-md-5">
                <div class="hire-now">
                  <h2>Hire Direct with <br />Hirect</h2>
                  <p>
                    AI Algorithm: The app connects 150K+ verified Startups with
                    3M+ verified and relevant Jobseekers!
                  </p>
                  <a href="/connect" class="btn default-btn button-sm"
                    >Instant Hiring</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HireChat;