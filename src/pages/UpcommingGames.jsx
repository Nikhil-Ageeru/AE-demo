import React from 'react'
import Header from '../components/Shared/PageHeader'
import Footer from '../components/Shared/Footer'
import { Link } from 'react-router-dom'
function UpcommingGames() {
    return (
        <>
            <Header />
            <main>

                {/* breadcrumb-area */}
                <section className="breadcrumb-area breadcrumb-bg s-breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h2>Upcoming <span>Games</span></h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="index-2.html" className="a">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="#" className="a">pages</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Games</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}

                {/* upcoming-games */}
                <section className="upcoming-games-area upcoming-games-bg pt-120 pb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="upcoming-game-item mb-40">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <span>SEPTEMBER 22, 2020</span>
                                            <h4><Link to="#" className="a">zombie land</Link></h4>
                                        </div>
                                        <div className="uc-game-price">
                                            <h5>$19</h5>
                                        </div>
                                    </div>
                                    <p>Compete with players remote island winner takes showdown known issue.</p>
                                    <div className="upcoming-game-thumb">
                                        <img src="img/images/upcoming_game_thumb01.jpg" alt="" />
                                        <div className="upcoming-game-cart">
                                            <Link to="#" className="btn transparent-btn a"><i className="fas fa-shopping-basket"></i>BUY Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="upcoming-game-item mb-40">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <span>SEPTEMBER 22, 2020</span>
                                            <h4><Link to="#" className="a">call of duty</Link></h4>
                                        </div>
                                        <div className="uc-game-price">
                                            <h5>$19</h5>
                                        </div>
                                    </div>
                                    <p>Compete with players remote island winner takes showdown known issue.</p>
                                    <div className="upcoming-game-thumb">
                                        <img src="img/images/upcoming_game_thumb02.jpg" alt="" />
                                        <div className="upcoming-game-cart">
                                            <Link to="#" className="btn transparent-btn"><i className="fas fa-shopping-basket"></i>BUY Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="upcoming-game-item mb-40">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <span>SEPTEMBER 22, 2020</span>
                                            <h4><Link to="#" className="a">sky hunter</Link></h4>
                                        </div>
                                        <div className="uc-game-price">
                                            <h5>$19</h5>
                                        </div>
                                    </div>
                                    <p>Compete with players remote island winner takes showdown known issue.</p>
                                    <div className="upcoming-game-thumb">
                                        <img src="img/images/upcoming_game_thumb03.jpg" alt="" />
                                        <div className="upcoming-game-cart">
                                            <Link to="#" className="btn transparent-btn"><i className="fas fa-shopping-basket"></i>BUY Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="upcoming-game-item mb-40">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <span>SEPTEMBER 22, 2020</span>
                                            <h4><Link to="#" className="a">NEW RELEASED!</Link></h4>
                                        </div>
                                        <div className="uc-game-price">
                                            <h5>$19</h5>
                                        </div>
                                    </div>
                                    <p>Compete with players remote island winner takes showdown known issue.</p>
                                    <div className="upcoming-game-thumb">
                                        <img src="img/images/upcoming_game_thumb04.jpg" alt="" />
                                        <div className="upcoming-game-cart">
                                            <Link to="#" className="btn transparent-btn"><i className="fas fa-shopping-basket"></i>BUY Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="upcoming-game-item mb-40">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <span>SEPTEMBER 22, 2020</span>
                                            <h4><Link to="#" className="a">NEW RELEASED!</Link></h4>
                                        </div>
                                        <div className="uc-game-price">
                                            <h5>$19</h5>
                                        </div>
                                    </div>
                                    <p>Compete with players remote island winner takes showdown known issue.</p>
                                    <div className="upcoming-game-thumb">
                                        <img src="img/images/upcoming_game_thumb05.jpg" alt="" />
                                        <div className="upcoming-game-cart">
                                            <Link to="#" className="btn transparent-btn"><i className="fas fa-shopping-basket"></i>BUY Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="upcoming-game-item mb-40">
                                    <div className="upcoming-game-head">
                                        <div className="uc-game-head-title">
                                            <span>SEPTEMBER 22, 2020</span>
                                            <h4><Link to="#" className="a">NEW RELEASED!</Link></h4>
                                        </div>
                                        <div className="uc-game-price">
                                            <h5>$19</h5>
                                        </div>
                                    </div>
                                    <p>Compete with players remote island winner takes showdown known issue.</p>
                                    <div className="upcoming-game-thumb">
                                        <img src="img/images/upcoming_game_thumb06.jpg" alt="" />
                                        <div className="upcoming-game-cart">
                                            <Link to="#" className="btn transparent-btn"><i className="fas fa-shopping-basket"></i>BUY Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* upcoming-games-end */}

                {/* latest-match-area */}
                <section className="latest-match-area latest-match-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8">
                                <div className="section-title title-style-three white-title text-center mb-70">
                                    <h2>gaming Latest <span>matches</span></h2>
                                    <p>Compete with 100 players on a remote island for winner takes showdown
                                        known issue where certain skin strategic</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="latest-match-box mb-30">
                                    <div className="latest-match-thumb">
                                        <img src="img/images/latest_match_thumb01.jpg" alt="" />
                                    </div>
                                    <div className="tournament-schedule-content">
                                        <h3><Link className='a' to="#">Forza <span>Horizon ii</span></Link></h3>
                                        <p>Find tecology people for digital projects in public There are many variations.</p>
                                        <div className="tournament-schedule-meta">
                                            <h5>price : <span>$125,00</span></h5>
                                            <Link to="#">Joining</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="latest-match-box mb-30">
                                    <div className="latest-match-thumb">
                                        <img src="img/images/latest_match_thumb02.jpg" alt="" />
                                    </div>
                                    <div className="tournament-schedule-content">
                                        <h3><Link to="#">shooting <span>land</span></Link></h3>
                                        <p>Find tecology people for digital projects in public There are many variations.</p>
                                        <div className="tournament-schedule-meta">
                                            <h5>price : <span>$125,00</span></h5>
                                            <Link to="#">Joining</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="latest-match-box mb-30">
                                    <div className="latest-match-thumb">
                                        <img src="img/images/latest_match_thumb03.jpg" alt="" />
                                    </div>
                                    <div className="tournament-schedule-content">
                                        <h3><Link to="#">Thanos <span>Sky ii</span></Link></h3>
                                        <p>Find tecology people for digital projects in public There are many variations.</p>
                                        <div className="tournament-schedule-meta">
                                            <h5>price : <span>$125,00</span></h5>
                                            <Link to="#">Joining</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="latest-match-box mb-30">
                                    <div className="latest-match-thumb">
                                        <img src="img/images/latest_match_thumb04.jpg" alt="" />
                                    </div>
                                    <div className="tournament-schedule-content">
                                        <h3><Link to="#">Call Of <span>Duty ii</span></Link></h3>
                                        <p>Find tecology people for digital projects in public There are many variations.</p>
                                        <div className="tournament-schedule-meta">
                                            <h5>price : <span>$125,00</span></h5>
                                            <Link to="#">Joining</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* latest-match-area-end */}

                {/* inner-about-area */}
                <section className="inner-about-area inner-about-padding fix">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 order-0 order-lg-2">
                                <div className="inner-about-img">
                                    <img src="img/images/inner_about_img01.png" className="wow fadeInRight" data-wow-delay=".3s" alt="" />
                                    <img src="img/images/inner_about_img02.png" className="wow fadeInLeft" data-wow-delay=".6s" alt="" />
                                    <img src="img/images/inner_about_img03.png" className="wow fadeInUp" data-wow-delay=".6s" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                <div className="section-title title-style-three mb-25">
                                    <h2>released <span>GAMES</span></h2>
                                </div>
                                <div className="inner-about-content">
                                    <h5>Monica Global Publishing for Marketing</h5>
                                    <p>Compete with 100 players on a remote Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean
                                        ollicitudin ain gravida nibh vel version an ipsum.</p>
                                    <p>Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.</p>
                                    <Link to="#" className="btn btn-style-two">BUY THEME</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inner-about-shape"><img src="img/images/medale_shape.png" alt="" /></div>
                </section>
                {/* inner-about-area-end */}

            </main>
            <Footer />
        </>
    )
}

export default UpcommingGames
