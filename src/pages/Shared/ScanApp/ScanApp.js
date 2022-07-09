import React from 'react';
import './ScanApp.css';
import qrLogo from '../../../assets/icons/qr-code-scan23.a26d7f4.png';
import appLogo from '../../../assets/icons/app-store-logo.a63e95b.svg';
import googlePlayLogo from '../../../assets/icons/google-play-logo.09cc067.svg';
import hireCT from '../../../assets/images/download-hirect-img.4251287.png';


const ScanApp = () => {
    return (
        <section class="scan-app-section">
        <div class="scan-app">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="acan-code">
                  <h2>Scan &amp; Download Hirect App!</h2>
                  <p>
                    Open the camera on your phone and scan the QR code<br />below
                    to download Hirect App.
                  </p>
                  <ul class="app-scan-button">
                    <li>
                      <a
                        ><img
                          id="download-hirect-qrcode"
                          src={qrLogo}
                          alt=""
                          class="qr-code-img"
                      /></a>
                    </li>
                    <li>
                      <a
                        href="https://apps.apple.com/US/app/id1518442417?mt=8"
                        target="_blank"
                        ><img
                          src={appLogo}
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a
                        href="https://hirectin.onelink.me/TwhD/b0fe8b20"
                        target="_blank"
                        ><img
                          src={googlePlayLogo}
                          alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="app-scan-img">
                  <div class="downloads-stamp">
                    <span class="download-count">8M+</span>
                    <span class="download-text">Downloads</span>
                  </div>
                  <img
                    src={hireCT}
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

export default ScanApp;