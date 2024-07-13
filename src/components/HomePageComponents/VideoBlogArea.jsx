import React from 'react';
import { Link } from 'react-router-dom';

function VideoBlogArea() {
  return (
    <section className="video-blog-area pt-80 pb-80">
      <div className="container">
        <div className="row align-items-center mb-30">
          <div className="col-sm-6">
            <div className="hf-section-title">
              <h4 className="title">Latest article</h4>
            </div>
          </div>
          <div className="col-sm-6 d-none d-sm-block">
            <div className="section-btn">
              <Link to="#" className="border-btn">
                <i className="fas fa-play" /> Watch Now
              </Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="video-blog-item mb-50">
              <div className="video-blog-thumb">
                <Link to="blog-details.html">
                  <img src="img/blog/h5_blog_thumb01.jpg" alt="" />
                </Link>
              </div>
              <div className="video-blog-content">
                <div className="video-blog-meta">
                  <ul>
                    <li>
                      <i className="far fa-clock" /> Mar 10, 2021
                    </li>
                    <li>
                      <Link to="#" className='a'>
                        <i className="far fa-comments" /> 0 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <Link to="blog-details.html" className="a">
                    Animated Short Film: "Thatching Eggs" by Max Marlow
                  </Link>
                </h4>
                <Link to="blog-details.html" className="read-more">
                  Read More <i className="fas fa-caret-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-blog-item mb-50">
              <div className="video-blog-thumb">
                <Link to="blog-details.html">
                  <img src="img/blog/h5_blog_thumb02.jpg" alt="" />
                </Link>
              </div>
              <div className="video-blog-content">
                <div className="video-blog-meta">
                  <ul>
                    <li>
                      <i className="far fa-clock" /> Mar 10, 2021
                    </li>
                    <li>
                      <Link to="#" className='a'>
                        <i className="far fa-comments" /> 0 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <Link to="blog-details.html" className="a">
                    Swagbucks Games, you have direct access
                  </Link>
                </h4>
                <Link to="blog-details.html" className="read-more">
                  Read More <i className="fas fa-caret-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="video-blog-item mb-50">
              <div className="video-blog-thumb">
                <Link to="blog-details.html">
                  <img src="img/blog/h5_blog_thumb03.jpg" alt="" />
                </Link>
              </div>
              <div className="video-blog-content">
                <div className="video-blog-meta">
                  <ul>
                    <li>
                      <i className="far fa-clock" /> Mar 10, 2021
                    </li>
                    <li>
                      <Link to="#" className='a'>
                        <i className="far fa-comments" /> 0 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <h4 className="title">
                  <Link to="blog-details.html" className="a">
                    Popular card game is a modern versionby Max
                  </Link>
                </h4>
                <Link to="blog-details.html" className="read-more">
                  Read More <i className="fas fa-caret-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoBlogArea;
