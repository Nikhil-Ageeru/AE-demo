import { Link } from 'react-router-dom';

function HomeBanner() {
  return (
    <section className="home-five-banner">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-8">
            <div className="banner-content">
              <h6
                className="sub-title wow fadeInUp"
                data-wow-delay=".2s"
                data-wow-duration="1.8s"
              >
                best of 2021
              </h6>
              <h2
                className="title-one wow fadeInUp"
                data-wow-delay=".4s"
                data-wow-duration="1.8s"
              >
                gaming
              </h2>
              <h3
                className="title-two wow fadeInUp"
                data-wow-delay=".6s"
                data-wow-duration="1.8s"
              >
                world class
                <span>news</span>
              </h3>
              <div
                className="banner-meta wow fadeInUp"
                data-wow-delay=".8s"
                data-wow-duration="1.8s"
              >
                <ul>
                  <li className="quality">
                    <span>Pg 18</span>
                    <span>hd</span>
                  </li>
                  <li className="category">
                    <Link to="#" className="a">Romance,</Link>
                    <Link to="#" className="a">Drama</Link>
                  </li>
                  <li className="release-time">
                    <span>
                      <i className="far fa-calendar-alt" /> 2021
                    </span>
                    <span>
                      <i className="far fa-clock" /> 128 min
                    </span>
                  </li>
                </ul>
              </div>
              <Link
                to="#"
                className="border-btn popup-video wow fadeInUp a"
                data-wow-delay="1s"
                data-wow-duration="1.8s"
              >
                <i className="fas fa-play" /> Watch Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
