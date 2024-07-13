// 👉 This Header is only for Inner Pages 

import { Link } from "react-router-dom"



function Header() {
  return (
    <header>
    <div className="header-top-area s-header-top-area d-none d-lg-block">
      <div className="container-fluid s-container-full-padding">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="header-top-offer">
              <p>Exclusive Black Friday ! Offer</p>
              <span className="coming-time" data-countdown="2021/3/15"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header-top-right">
              <div className="header-social">
                <ul>
                  <li><Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link to="#" className="a"><i className="fab fa-twitter"></i></Link></li>
                  <li><Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link></li>
                  <li><Link to="#" className="a"><i className="fab fa-linkedin-in"></i></Link></li>
                </ul>
              </div>
              <div className="header-top-action">
                <ul>
                  <li>
                    <div className="header-top-mail">
                      <p><span>|</span><i className="far fa-envelope"></i><Link to="#" className="a"><span>info@gecoinfo.com</span></Link></p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sticky-header" className="transparent-header">
      <div className="container-fluid s-container-full-padding">
        <div className="row">
          <div className="col-12">
            <div className="main-menu menu-style-two">
              <nav>
                <div className="logo">
                  <Link to="index-2.html" className="a"><img src="img/logo/logo.png" alt="Logo" /></Link>
                </div>
                <div id="mobile-menu" className="navbar-wrap d-none d-lg-flex">
                  <ul>
                    <li><Link to="/" className="a">Home</Link>
                    
                    </li>
                    <li className="show"><Link to="#" className="a">Pages</Link>
                      <ul className="submenu">
                        <li className="active"><Link to="about-us.html" className="a">About Story</Link></li>
                        <li><Link to="upcoming-games.html" className="a">Upcoming Games</Link></li>
                        <li><Link to="game-single.html" className="a">Game Single</Link></li>
                      </ul>
                    </li>
                    <li><Link to="game-overview.html" className="a">Overview</Link></li>
                    <li><Link to="community.html" className="a">Community</Link></li>
                    <li><Link to="shop.html" className="a">Store</Link></li>
                    <li><Link to="#" className="a">Blog</Link>
                      <ul className="submenu">
                        <li><Link to="blog.html" className="a">News Page</Link></li>
                        <li><Link to="blog-details.html" className="a">News Details</Link></li>
                      </ul>
                    </li>
                    <li><Link to="contact.html" className="a">Contact</Link></li>
                  </ul>
                </div>
                <div className="header-action">
                  <ul>
                    <li className="header-shop-cart"><Link to="#" className="a"><i className="fas fa-shopping-basket"></i><span>0</span></Link>
                      <ul className="minicart">
                        <li className="d-flex align-items-start">
                          <div className="cart-img">
                            <Link to="#" className="a">
                              <img src="img/product/cart_p01.jpg" alt="" />
                            </Link>
                          </div>
                          <div className="cart-content">
                            <h4>
                              <Link to="#" className="a">Xbox One Controller</Link>
                            </h4>
                            <div className="cart-price">
                              <span className="new">$229.9</span>
                              <span>
                                <del>$229.9</del>
                              </span>
                            </div>
                          </div>
                          <div className="del-icon">
                            <Link to="#" className="a">
                              <i className="far fa-trash-alt"></i>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="total-price">
                            <span className="f-left">Total:</span>
                            <span className="f-right">$239.9</span>
                          </div>
                        </li>
                        <li>
                          <div className="checkout-link">
                            <Link to="cart.html" className="a">Shopping Cart</Link>
                            <Link to="checkout.html" className="a red-color">Checkout</Link>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="header-search"><Link to="#" className="a" data-toggle="modal" data-target="#search-modal"><i className="fas fa-bell"></i></Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="mobile-menu"></div>
          </div>
          {/* Modal Search */}
          <div className="modal fade" id="search-modal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <form>
                  <input type="text" placeholder="Search here..." />
                  <button><i className="fa fa-search"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;
