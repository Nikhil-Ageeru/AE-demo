import React from 'react';
import { Link } from 'react-router-dom';

function MainHeader() {
  return (
    <header className="third-header-bg home-five-header">
      <div className="bg" />
      <div className="container custom-container">
        <div className="header-top-area t-header-top-area d-none d-lg-block">
          <div className="row">
            <div className="col-sm-6">
              <div className="header-top-social">
                <ul>
                  <li>Follow</li>
                  <li>
                    <Link to="/" className="a">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="a">
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="a">
                      <i className="fab fa-vimeo-v" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="a">
                      <i className="fab fa-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="header-top-login">
                <ul>
                  <li>
                    <Link to="#" className="a">
                      <i className="far fa-edit" />
                      Register
                    </Link>
                  </li>
                  <li className="or">or</li>
                  <li>
                    <Link to="#" className="a">
                      <i className="far fa-edit" />
                      Sign in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="main-menu menu-style-two">
                <nav>
                  <div className="logo d-block d-lg-none">
                    <Link to="index-5.html" className="a">
                      <img src="img/logo/logo.png" alt="Logo" />
                    </Link>
                  </div>
                  <div className="navbar-wrap d-none d-lg-flex">
                    <ul className="left">
                      <li>
                        <Link to="/" className="a">Home</Link>
                      </li>
                      <li>
                        <Link to="/about" className="a">About</Link>
                      </li>
                      <li>
                        <Link to="/overview" className="a">Overview</Link>
                      </li>
                      <li>
                        <Link to="/community" className="a">Community</Link>
                      </li>
                    </ul>
                    <div className="logo">
                      <Link to="/" className="a">
                        <img src="img/logo/h3_logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <ul className="right">
                      <li>
                        <Link to="#" className="a">Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="upcoming-games.html" className="a">Upcoming Games</Link>
                          </li>
                          <li>
                            <Link to="game-single.html" className="a">Game Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop.html" className="a">Store</Link>
                      </li>
                      <li>
                        <Link to="/blog" className="a">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html" className="a">News Page</Link>
                          </li>
                          <li>
                            <Link to="blog-details.html" className="a">News Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact" className="a">Contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-action">
                    <ul>
                      <li className="header-search">
                        <Link
                          to="#"
                          data-toggle="modal"
                          data-target="#search-modal"
                          className="a"
                        >
                          <i className="fas fa-bell" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu-wrap d-block d-lg-none">
                <nav>
                  <div id="mobile-menu" className="navbar-wrap">
                    <ul>
                      <li className="show">
                        <Link to="#" className="a">Home</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="index-2.html" className="a">Home One</Link>
                          </li>
                          <li>
                            <Link to="index-3.html" className="a">Home Two</Link>
                          </li>
                          <li>
                            <Link to="index-4.html" className="a">Home Three</Link>
                          </li>
                          <li>
                            <Link to="index.html" className="a">Home Four</Link>
                          </li>
                          <li>
                            <Link to="index-5.html" className="a">Home Five</Link>
                          </li>
                          <li>
                            <Link to="index-6.html" className="a">Home Six</Link>
                          </li>
                          <li>
                            <Link to="index-7.html" className="a">Home Seven</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="about-us.html" className="a">About</Link>
                      </li>
                      <li>
                        <Link to="game-overview.html" className="a">Overview</Link>
                      </li>
                      <li>
                        <Link to="community.html" className="a">Community</Link>
                      </li>
                      <li>
                        <Link to="#" className="a">Pages</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="upcoming-games.html" className="a">Upcoming Games</Link>
                          </li>
                          <li>
                            <Link to="game-single.html" className="a">Game Single</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="shop.html" className="a">Store</Link>
                      </li>
                      <li>
                        <Link to="#" className="a">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="blog.html" className="a">News Page</Link>
                          </li>
                          <li>
                            <Link to="blog-details.html" className="a">News Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="contact.html" className="a">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu"></div>
            </div>
            {/* Modal Search */}
            <div
              className="modal fade"
              id="search-modal"
              tabIndex={-1}
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <button>
                      <i className="fa fa-bell" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom-bg" />
    </header>
  );
}

export default MainHeader;
