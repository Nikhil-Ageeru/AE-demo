import { Link } from "react-router-dom"
import Header from "../components/Shared/PageHeader"
import Footer from "../components/Shared/Footer"

function About() {
    return (
        <>
    <Header/>
    <main>
    {/* breadcrumb-area */}
    <section className="breadcrumb-area breadcrumb-bg">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb-content text-center">
                        <h2>about <span>story</span></h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="index-2.html" className="a">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="#" className="a">pages</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">About story</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* breadcrumb-area-end */}

    {/* inner-about-area */}
    <section className="inner-about-area fix">
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
                        <p>Compete with 100 players on a remote Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.</p>
                        <p>Lorem Ipsn gravida. Pro ain gravida nibh vevelit auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum.</p>
                        <Link to="#" className="btn btn-style-two a">BUY THEME</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="inner-about-shape"><img src="img/images/medale_shape.png" alt="" /></div>
    </section>
    {/* inner-about-area-end */}

    {/* latest-match-area */}
    <section className="latest-match-area latest-match-bg pt-115 pb-90">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                    <div className="section-title title-style-three white-title text-center mb-70">
                        <h2>gaming Latest <span>matches</span></h2>
                        <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
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
                            <h3><Link to="#" className="a">Forza <span>Horizon ii</span></Link></h3>
                            <p>Find tecology people for digital projects in public There are many variations.</p>
                            <div className="tournament-schedule-meta">
                                <h5>price : <span>$125,00</span></h5>
                                <Link to="#" className="a">Joining</Link>
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
                            <h3><Link to="#" className="a">shooting <span>land</span></Link></h3>
                            <p>Find tecology people for digital projects in public There are many variations.</p>
                            <div className="tournament-schedule-meta">
                                <h5>price : <span>$125,00</span></h5>
                                <Link to="#" className="a">Joining</Link>
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
                            <h3><Link to="#" className="a">Thanos <span>Sky ii</span></Link></h3>
                            <p>Find tecology people for digital projects in public There are many variations.</p>
                            <div className="tournament-schedule-meta">
                                <h5>price : <span>$125,00</span></h5>
                                <Link to="#" className="a">Joining</Link>
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
                            <h3><Link to="#" className="a">Call Of <span>Duty ii</span></Link></h3>
                            <p>Find tecology people for digital projects in public There are many variations.</p>
                            <div className="tournament-schedule-meta">
                                <h5>price : <span>$125,00</span></h5>
                                <Link to="#" className="a">Joining</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* latest-match-area-end */}

    {/* team-member */}
    <section className="team-member-area pt-115 pb-125">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                    <div className="section-title title-style-three text-center mb-70">
                        <h2>Our team <span>member</span></h2>
                        <p>Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member-box text-center mb-50">
                        <div className="team-member-thumb">
                            <img src="img/team/team_member01.jpg" alt="" />
                            <div className="team-member-social">
                                <ul>
                                    <li><Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-member-content">
                            <h4><Link to="#" className="a">tomas aleman</Link></h4>
                            <span>Marketing CEO</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member-box text-center mb-50">
                        <div className="team-member-thumb">
                            <img src="img/team/team_member02.jpg" alt="" />
                            <div className="team-member-social">
                                <ul>
                                    <li><Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-member-content">
                            <h4><Link to="#" className="a">james wiseman</Link></h4>
                            <span>Marketing CEO</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member-box text-center mb-50">
                        <div className="team-member-thumb">
                            <img src="img/team/team_member03.jpg" alt="" />
                            <div className="team-member-social">
                                <ul>
                                    <li><Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-member-content">
                            <h4><Link to="#" className="a">emily watson</Link></h4>
                            <span>Head of Iaea</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div className="team-member-box text-center mb-50">
                        <div className="team-member-thumb">
                            <img src="img/team/team_member04.jpg" alt="" />
                            <div className="team-member-social">
                                <ul>
                                    <li><Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link></li>
                                    <li><Link to="#" className="a"><i className="fab fa-linkedin-in"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="team-member-content">
                            <h4><Link to="#" className="a">alexandra paol</Link></h4>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* team-member-end */}
</main>

        <Footer/>

        </>
    )
}

export default About
