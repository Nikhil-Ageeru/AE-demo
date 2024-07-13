import React from 'react';
import { Link } from 'react-router-dom';

function TrendingGameplay() {
  return (
    <section className="trending-gameplay-area">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-sm-6">
            <div className="hf-section-title">
              <h4 className="title">Trending</h4>
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
        <div className="row">
          {[
            { id: 1, title: 'Mark Sniper sells House', views: '35k views', date: 'January 25, 2021', thumb: 'trending_thumb01.jpg' },
            { id: 2, title: 'Mark Sniper sells House', views: '35k views', date: 'January 25, 2021', thumb: 'trending_thumb02.jpg' },
            { id: 3, title: 'Mark Sniper sells House', views: '35k views', date: 'January 25, 2021', thumb: 'trending_thumb03.jpg' },
            { id: 4, title: 'Mark Sniper sells House', views: '35k views', date: 'January 25, 2021', thumb: 'trending_thumb04.jpg' },
            { id: 5, title: 'Mark Sniper sells House', views: '35k views', date: 'January 25, 2021', thumb: 'trending_thumb05.jpg' },
            { id: 6, title: 'Mark Sniper sells House', views: '35k views', date: 'January 25, 2021', thumb: 'trending_thumb06.jpg' },
          ].map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="trending-gameplay-item mb-50">
                <div className="gameplay-thumb">
                  <Link to="#" className="popup-video a">
                    <img src="img/icon/v_play.png" alt="" className="play" />
                    <img src={`img/images/${item.thumb}`} alt="" />
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
                      <Link to="#" className="a">{item.title}</Link>
                    </h5>
                    <div className="gameplay-meta">
                      <ul>
                        <li>{item.views}</li>
                        <li>{item.date}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gameplay-status">
                    <span>lives</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingGameplay;
