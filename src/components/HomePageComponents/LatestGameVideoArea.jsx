import React from 'react';
import { Link } from 'react-router-dom';

function LatestGameVideoArea() {
  return (
    <section className="latest-game-video-area">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-sm-6">
            <div className="hf-section-title">
              <h4 className="title">Latest video</h4>
            </div>
          </div>
          <div className="col-sm-6 d-none d-sm-block">
            <div className="section-btn">
              <Link to="#" className="border-btn a">
                <i className="fas fa-play" /> Watch Now
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="trending-gameplay-item mb-50">
              <div className="gameplay-thumb">
                <Link to="#" className="popup-video a">
                  <img src="img/icon/v_play.png" alt="" className="play" />
                  <img src="img/images/trending_thumb01.jpg" alt="" />
                </Link>
                <div className="treand-gameplay-overlay">
                  <ul>
                    <li className="duration">01 :45</li>
                    <li className="quality">hd</li>
                  </ul>
                </div>
              </div>
              <div className="d-block d-sm-flex align-items-start">
                <div className="gameplay-content">
                  <h5 className="title">
                    <Link to="#" className="a">Mark Sniper sells House</Link>
                  </h5>
                  <div className="gameplay-meta">
                    <ul>
                      <li>35k views</li>
                      <li>January 25, 2021</li>
                    </ul>
                  </div>
                </div>
                <div className="gameplay-status">
                  <span>lives</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="trending-gameplay-item mb-50">
              <div className="gameplay-thumb">
                <Link to="#" className="popup-video a">
                  <img src="img/icon/v_play.png" alt="" className="play" />
                  <img src="img/images/trending_thumb02.jpg" alt="" />
                </Link>
                <div className="treand-gameplay-overlay">
                  <ul>
                    <li className="duration">01 :45</li>
                    <li className="quality">hd</li>
                  </ul>
                </div>
              </div>
              <div className="d-block d-sm-flex align-items-start">
                <div className="gameplay-content">
                  <h5 className="title">
                    <Link to="#" className="a">Mark Sniper sells House</Link>
                  </h5>
                  <div className="gameplay-meta">
                    <ul>
                      <li>35k views</li>
                      <li>January 25, 2021</li>
                    </ul>
                  </div>
                </div>
                <div className="gameplay-status">
                  <span>lives</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="trending-gameplay-item mb-50">
              <div className="gameplay-thumb">
                <Link to="#" className="popup-video a">
                  <img src="img/icon/v_play.png" alt="" className="play" />
                  <img src="img/images/trending_thumb03.jpg" alt="" />
                </Link>
                <div className="treand-gameplay-overlay">
                  <ul>
                    <li className="duration">01 :45</li>
                    <li className="quality">hd</li>
                  </ul>
                </div>
              </div>
              <div className="d-block d-sm-flex align-items-start">
                <div className="gameplay-content">
                  <h5 className="title">
                    <Link to="#" className="a">Mark Sniper sells House</Link>
                  </h5>
                  <div className="gameplay-meta">
                    <ul>
                      <li>35k views</li>
                      <li>January 25, 2021</li>
                    </ul>
                  </div>
                </div>
                <div className="gameplay-status">
                  <span>lives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestGameVideoArea;
