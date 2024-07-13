import React from 'react';
import { Link } from 'react-router-dom';

function GameEpisodesArea() {
  return (
    <section className="game-episodes-area">
      <div className="container">
        <div className="episodes-wrapper">
          <div className="row">
            <div className="col-sm-6">
              <div className="hf-section-title mb-30">
                <h4 className="title">Episodes video</h4>
              </div>
            </div>
          </div>
          <div className="row game-episodes-active">
            <div className="col-lg-4">
              <div className="game-episodes-item">
                <div className="thumb">
                  <img src="img/images/episode_thumb01.jpg" alt="" />
                  <div className="episodes-tags">
                    <Link to="#" className="a">sports</Link>
                  </div>
                </div>
                <div className="content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <Link to="#" className="a">Hacking Satellites with $300 Worth of TV</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="game-episodes-item">
                <div className="thumb">
                  <img src="img/images/episode_thumb02.jpg" alt="" />
                  <div className="episodes-tags">
                    <Link to="#" className="a">sports</Link>
                  </div>
                </div>
                <div className="content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <Link to="#" className="a">Hacking Satellites with $300 Worth of TV</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="game-episodes-item">
                <div className="thumb">
                  <img src="img/images/episode_thumb03.jpg" alt="" />
                  <div className="episodes-tags">
                    <Link to="#" className="a">sports</Link>
                  </div>
                </div>
                <div className="content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <Link to="#" className="a">Hacking Satellites with $300 Worth of TV</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="game-episodes-item">
                <div className="thumb">
                  <img src="img/images/episode_thumb04.jpg" alt="" />
                  <div className="episodes-tags">
                    <Link to="#" className="a">sports</Link>
                  </div>
                </div>
                <div className="content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <Link to="#" className="a">Hacking Satellites with $300 Worth of TV</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="game-episodes-item">
                <div className="thumb">
                  <img src="img/images/episode_thumb02.jpg" alt="" />
                  <div className="episodes-tags">
                    <Link to="#" className="a">sports</Link>
                  </div>
                </div>
                <div className="content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <Link to="#" className="a">Hacking Satellites with $300 Worth of TV</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="game-episodes-item">
                <div className="thumb">
                  <img src="img/images/episode_thumb04.jpg" alt="" />
                  <div className="episodes-tags">
                    <Link to="#" className="a">sports</Link>
                  </div>
                </div>
                <div className="content">
                  <span className="date">December 19, 2021</span>
                  <h5 className="title">
                    <Link to="#" className="a">Hacking Satellites with $300 Worth of TV</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameEpisodesArea;
