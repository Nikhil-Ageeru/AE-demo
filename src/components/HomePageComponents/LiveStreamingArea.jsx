import React from 'react';
import { Link } from 'react-router-dom';

function LiveStreamingArea() {
  return (
    <section className="live-streaming-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div className="hf-section-title mb-50">
              <h4 className="title">live streaming</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="live-stream-item mb-30">
              <div className="thumb">
                <img src="img/images/stream_thumb01.jpg" alt="" />
                <Link to="#" className="popup-video a">
                  <img src="img/icon/w_play.png" alt="" />
                </Link>
              </div>
              <div className="content">
                <div className="live-stream-meta">
                  <ul>
                    <li className="cat">
                      <Link to="#" className="a">CRICKET</Link>
                    </li>
                    <li>3 months ago</li>
                  </ul>
                </div>
                <h4 className="title">
                  <Link to="#" className="a">
                    Ditched The Naked Chicken Chalupa Here’s To Make
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="row">
              <div className="col-lg-12 col-md-6">
                <div className="live-stream-item style-two mb-30">
                  <div className="thumb">
                    <img src="img/images/stream_thumb02.jpg" alt="" />
                  </div>
                  <div className="content">
                    <Link to="#" className="popup-video a">
                      <img src="img/icon/w_play.png" alt="" />
                    </Link>
                    <div className="live-stream-meta">
                      <ul>
                        <li className="cat">
                          <Link to="#" className="a">sports</Link>
                        </li>
                        <li>3 months ago</li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <Link to="#" className="a">House last week that move would Inject</Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="live-stream-item style-two mb-30">
                  <div className="thumb">
                    <img src="img/images/stream_thumb03.jpg" alt="" />
                  </div>
                  <div className="content">
                    <Link to="#" className="popup-video a">
                      <img src="img/icon/w_play.png" alt="" />
                    </Link>
                    <div className="live-stream-meta">
                      <ul>
                        <li className="cat">
                          <Link to="#" className="a">sports</Link>
                        </li>
                        <li>3 months ago</li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <Link to="#" className="a">Twas the night before in the NFL</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LiveStreamingArea;
