import React from 'react'
import Header from '../components/Shared/PageHeader'
import Footer from '../components/Shared/Footer'
import { Link } from 'react-router-dom'

function GameSingle() {
  return (
    <>
    <Header/>
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
              <li className="breadcrumb-item active" aria-current="page">game single</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>
{/* breadcrumb-area-end */}

{/* game-single-area */}
<section className="game-single-area pt-120 pb-120">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="game-single-content">
          <div className="upcoming-game-head">
            <div className="uc-game-head-title">
              <span>SEPTEMBER 22, 2020</span>
              <h4>welcome PLAY FOR EVERYONE zombie <span>land!</span></h4>
            </div>
            <div className="uc-game-price">
              <h5>$19</h5>
            </div>
          </div>
          <p><span>Lorem ipsum</span> dolor sit amet, consectetur adipiscing elit. Suspendisse a mauris vitae lacus commodo iaculis eget vitae
            magna. Nam leohe a volutpat quis iaculis at, viverra id quam. Morbi pharetra, libero ut tempor finibus, metus massa
            pharetra dui, ornare pharetra felis risus eu quam. Nunc consectetur mi ac tristique eleifend. Phasellus eleifend
            pharetra ante non viverra. Curabitur iaculis ultrices felis in consequat.</p>
          <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien
            nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum.
            Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec
            non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis
            ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
          <div className="game-single-img">
            <div className="row">
              <div className="col-sm-6">
                <img src="img/images/game_single_img01.jpg" alt="" />
              </div>
              <div className="col-sm-6">
                <img src="img/images/game_single_img02.jpg" alt="" />
              </div>
            </div>
          </div>
          <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien
            nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum.
            Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec
            non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis
            ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
          <div className="game-single-title mt-60 mb-30">
            <h4>Good to Know</h4>
          </div>
          <div className="game-single-info mb-65">
            <ul>
              <li><span>Category :</span> Vertical Shooter</li>
              <li><span>Requirements :</span> PS4 , XBOX ONE , Steam</li>
              <li><span>Multi player :</span> Games Controller System</li>
              <li><span>Visual Effect :</span> Operating vero excepturi magnam System</li>
            </ul>
          </div>
          <div className="game-single-title mb-30">
            <h4>Games Controller <span>System</span></h4>
          </div>
          <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvinar, elit at condimentum dictum, sapien
            nibh auctor tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum.
            Curabitr ut lacus vitae tellus lacinia pretium. Proin vestibulum sollcitudin tortor, quis auctor mi rutrum non. Donec
            non eros eget purus lobortis imperdiet ac vitae est. Interdum et masuda fames ac ante ipsum primis in faucibus. Duis
            ultricies mi sed lorem blandit, non sodales sapien fermentum. Donec ultricies, turpis a sagittis suscipit</p>
          <div className="game-single-gallery">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <img src="img/images/game_single_gallery01.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <img src="img/images/game_single_gallery02.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <img src="img/images/game_single_gallery03.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <img src="img/images/game_single_gallery04.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <img src="img/images/game_single_gallery05.jpg" alt="" />
              </div>
              <div className="col-lg-4 col-sm-6">
                <img src="img/images/game_single_gallery06.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="game-single-shape"><img src="img/images/game_section_shape.png" alt="" /></div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* game-single-area-end */}

{/* upcoming-games */}
<section className="upcoming-games-area pb-140">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="game-single-title mb-55">
          <h4>released <span>GAMES</span></h4>
        </div>
      </div>
    </div>
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
    </div>
  </div>
</section>
{/* upcoming-games-end */}

</main>
      <Footer/>
    </>
  )
}

export default GameSingle
