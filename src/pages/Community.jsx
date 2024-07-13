import { Link } from "react-router-dom"
import Header from "../components/Shared/PageHeader"
import Footer from "../components/Shared/Footer"

function Community() {
    return (
        <>
            <Header />

            <main>

                {/* breadcrumb-area */}
                <section className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="breadcrumb-content text-center">
                                    <h2>Our <span>Community</span></h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="index-2.html" className="a">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="#" className="a">pages</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">Community</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}

                {/* community-area */}
                <div className="community-area primary-bg pt-120 pb-175">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="community-wrap">
                                    <div className="table-responsive-xl">
                                        <table className="table mt-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col">mark all as soon</th>
                                                    <th scope="col">VOICES</th>
                                                    <th scope="col">POSTS</th>
                                                    <th scope="col">See</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="community-post-type">
                                                    <th><span>Game Concept</span></th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="community-post-wrap">
                                                            <div className="community-post-content">
                                                                <Link to="#" className="a">Electronic game that involves</Link>
                                                                <span>by <Link to="#" className="a">Tanvir snap</Link> Yesterday 12 : 19</span>
                                                            </div>
                                                            <div className="community-post-tag">
                                                                <Link to="#" className="a">@All</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td className="community-bell"><Link to="#" className="a"><i className="far fa-bell"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="community-post-wrap">
                                                            <div className="community-post-content">
                                                                <Link to="#" className="a">A vertically scrolling video</Link>
                                                                <span>by <Link to="#" className="a">Killer12</Link> Yesterday 12 : 19</span>
                                                            </div>
                                                            <div className="community-post-tag">
                                                                <Link to="#" className="a">@All</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>5</td>
                                                    <td>9</td>
                                                    <td className="community-bell"><Link to="#" className="a"><i className="far fa-bell"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="community-post-wrap">
                                                            <div className="community-post-content">
                                                                <Link to="#" className="a">Electronic game that involves</Link>
                                                                <span>by <Link to="#" className="a">Tanvir snap</Link> Yesterday 12 : 19</span>
                                                            </div>
                                                            <div className="community-post-tag">
                                                                <Link to="#" className="a">@All</Link>
                                                                <Link to="#" className="a">@Design</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>7</td>
                                                    <td>12</td>
                                                    <td className="community-bell"><Link to="#" className="a"><i className="far fa-bell"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table-responsive-xl">
                                        <table className="table">
                                            <tbody>
                                                <tr className="community-post-type">
                                                    <th><span>Zombie Island</span></th>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="community-post-wrap">
                                                            <div className="community-post-content">
                                                                <Link to="#" className="a">Electronic game that involves</Link>
                                                                <span>by <Link to="#" className="a">Tanvir snap</Link> Yesterday 12 : 19</span>
                                                            </div>
                                                            <div className="community-post-tag">
                                                                <Link to="#" className="a">@All</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td className="community-bell"><Link to="#" className="a"><i className="far fa-bell"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="community-post-wrap">
                                                            <div className="community-post-content">
                                                                <Link to="#" className="a">A vertically scrolling video</Link>
                                                                <span>by <Link to="#" className="a">Killer12</Link> Yesterday 12 : 19</span>
                                                            </div>
                                                            <div className="community-post-tag">
                                                                <Link to="#" className="a">@Design</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>5</td>
                                                    <td>9</td>
                                                    <td className="community-bell"><Link to="#" className="a"><i className="far fa-bell"></i></Link></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="community-post-wrap">
                                                            <div className="community-post-content">
                                                                <Link to="#" className="a">Electronic game that involves</Link>
                                                                <span>by <Link to="#" className="a">Tanvir snap</Link> Yesterday 12 : 19</span>
                                                            </div>
                                                            <div className="community-post-tag">
                                                                <Link to="#" className="a">@All</Link>
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>7</td>
                                                    <td>12</td>
                                                    <td className="community-bell"><Link to="#" className="a"><i className="far fa-bell"></i></Link></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="create-topic">
                                        <span>Viewing 6 topics - (of 7 Total)</span>
                                        <form action="#">
                                            <input type="text" placeholder="Must be logged in to create new topics." />
                                            <button className="btn">submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="community-sidebar">
                                    <div className="widget community-widget mb-30">
                                        <div className="community-widget-title mb-25">
                                            <h5>share public</h5>
                                        </div>
                                        <div className="community-sidebar-social">
                                            <ul>
                                                <li><Link className="a" to="#"><i className="fab fa-facebook-f"></i> Share With Facebook</Link></li>
                                                <li><Link className="a" to="#"><i className="fab fa-twitter"></i> Share With Twitter</Link></li>
                                                <li><Link className="a" to="#"><i className="fab fa-pinterest-p"></i> Share With Pinterest</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="widget community-widget">
                                        <div className="community-widget-title mb-25">
                                            <h5>new released game</h5>
                                        </div>
                                        <div className="community-sidebar-game">
                                            <ul>
                                                <li>
                                                    <div className="sidebar-new-game-thumb">
                                                        <Link to="#" className="a">
                                                            <img src="img/images/sidebar_new_game01.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="sidebar-new-game-content">
                                                        <span>Yesterday 12 : 19</span>
                                                        <h5><Link to="#" className="a">Sky Warrior Game involves</Link></h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sidebar-new-game-thumb">
                                                        <Link to="#" className="a">
                                                            <img src="img/images/sidebar_new_game02.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="sidebar-new-game-content">
                                                        <span>Yesterday 12 : 19</span>
                                                        <h5><Link to="#" className="a">Sky Warrior Game involves</Link></h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="sidebar-new-game-thumb">
                                                        <Link to="#" className="a">
                                                            <img src="img/images/sidebar_new_game03.jpg" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="sidebar-new-game-content">
                                                        <span>Yesterday 12 : 19</span>
                                                        <h5><Link to="#" className="a">Sky Warrior Game involves</Link></h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <div className="community-bg-shape"><img src="img/images/community_bg_shape.png" alt="" /></div>
                </div>
                {/* community-area-end */}

            </main>

            <Footer />

        </>
    )
}

export default Community
