import { Link } from "react-router-dom"
import Header from "../components/Shared/PageHeader"
import Footer from "../components/Shared/Footer"


function GameOverview() {
  return (
    <>
      <Header/>
      <main>
      {/* breadcrumb-area */}
      <div className="breadcrumb-area breadcrumb-bg game-overview-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-6">
              <div className="game-overview-img">
                <img src="img/images/game_overview_thumb.png" alt="" />
              </div>
            </div>
            <div className="col-xl-8 col-lg-6">
              <div className="breadcrumb-content text-center text-lg-left pl-80">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="index-2.html" className="a">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#" className="a">pages</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">game single</li>
                  </ol>
                </nav>
                <h2>PGS AMERICAS <span>2020</span></h2>
                <div className="game-overview-status">
                  <ul>
                    <li><span>Total Wins :</span> 21</li>
                    <li><span>Membership :</span>November 9, 2020</li>
                    <li><span>Categories :</span>Platinum ||</li>
                  </ul>
                </div>
                <Link to="#" className="btn btn-style-two">join now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* game-single-area */}
      <section className="game-single-area pt-120 pb-180">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="game-single-content game-overview-content">
                <div className="upcoming-game-head">
                  <div className="uc-game-head-title">
                    <span>SEPTEMBER 22, 2020</span>
                    <h4>welcome PLAY FOR EVERYONE zombie <span>land!</span></h4>
                  </div>
                </div>
                <p><span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris vitae lacus commodo iaculis eget vitae magna. Nam leohe a volutpat quis iaculis at, viverra id quam. Morbi pharetra, libero ut tempor finibus, metus massa pharetra dui, ornare pharetra felis risus eu quam. Nunc consectetur mi ac tristique eleifend. Phasellus eleifend pharetra ante non viverra. Curabitur iaculis ultrices felis in consequat.</p>
                <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
                <div className="game-single-title mt-50 mb-30">
                  <h4>Good to Know</h4>
                </div>
                <div className="game-single-info mb-45">
                  <ul>
                    <li><span>Category :</span> Vertical Shooter</li>
                    <li><span>Requirements :</span> PS4 , XBOX ONE , Steam</li>
                    <li><span>Multi player :</span> Games Controller System</li>
                    <li><span>Visual Effect :</span> Operating vero excepturi magnam System</li>
                  </ul>
                </div>
                <p>Consectetur adipiscing elit. Suspendisse a mauris vitae lacus commodo iaculis eget vitae magna. Nam leohe a volutpat quis iaculis at, viverra id quam. Morbi pharetra, libero ut tempor finibus, metus massa pharetra dui, ornare pharetra felis risus eu quam.</p>
                <div className="row mt-55 mb-55">
                  <div className="col-lg-6 order-0 order-lg-2">
                    <div className="overview-history-img">
                      <img src="img/images/overview_history_img.jpg" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="game-single-title mb-15">
                      <h4>overview history</h4>
                    </div>
                    <div className="overview-history-content">
                      <p>Donec orci enim, bibendum a augue aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabi lacus vitae tellus lacinia pretium.</p>
                      <div className="overview-history-list">
                        <ul>
                          <li>
                            <div className="overview-list-thumb">
                              <img src="img/images/overview_history_thumb01.jpg" alt="" />
                            </div>
                            <div className="overview-list-content">
                              <h4><Link to="#" className="a">CONSOLE UPDATE 6.2</Link></h4>
                              <span>1st place November 9, 2020</span>
                            </div>
                            <div className="overview-list-price">
                              <h4>$100,000</h4>
                            </div>
                          </li>
                          <li>
                            <div className="overview-list-thumb">
                              <img src="img/images/overview_history_thumb02.jpg" alt="" />
                            </div>
                            <div className="overview-list-content">
                              <h4><Link to="#" className="a">CONSOLE UPDATE 6.2</Link></h4>
                              <span>1st place November 9, 2020</span>
                            </div>
                            <div className="overview-list-price">
                              <h4>$50,000</h4>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mb-0">Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
                <div className="game-single-shape"><img src="img/images/game_section_shape.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* game-single-area-end */}
    </main>
    <Footer/>
    </>
  )
}

export default GameOverview
