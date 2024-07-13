import React from 'react';

import Header from '../components/Shared/PageHeader';
import Footer from '../components/Shared/Footer';
import { Link } from 'react-router-dom';

function Blog() {
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
                        <h2>Blog Right <span>Sidebar</span></h2>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="index-2.html" className="a">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog Right Sidebar</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* breadcrumb-area-end */}

    {/* blog-area */}
    <section className="blog-area primary-bg pt-120 pb-175">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog-list-post">
                        <div className="blog-list-post-thumb">
                            <Link to="blog-details.html"><img src="img/blog/t_blog_thumb01.jpg" alt="" /></Link>
                        </div>
                        <div className="blog-list-post-content">
                            <div className="blog-list-post-tag mb-25">
                                <Link to="#" className="a">shooting</Link>
                            </div>
                            <h2><Link to="#" className="a">welcome PLAY FOR EVERYONE zombie</Link></h2>
                            <div className="blog-meta">
                                <ul>
                                    <li>bY <Link to="#" className="a">x-hunter</Link> OCTOBER 19, 2020</li>
                                </ul>
                            </div>
                            <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvi condimentum dictum, sapien nibh auctor
                                tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus
                                vitae tellus lacinia pretium.</p>
                        </div>
                        <div className="blog-list-post-bottom">
                            <ul>
                                <li><Link to="#" className="a">more reding<i className="fas fa-angle-double-right"></i></Link></li>
                                <li>
                                    <span>SHARE :</span>
                                    <div className="blog-post-share">
                                        <Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#" className="a"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog-list-post">
                        <div className="blog-list-post-thumb">
                            <Link to="blog-details.html"><img src="img/blog/t_blog_thumb02.jpg" alt="" /></Link>
                        </div>
                        <div className="blog-list-post-content">
                            <div className="blog-list-post-tag mb-25">
                                <Link to="#" className="a">shooting</Link>
                            </div>
                            <h2><Link to="#" className="a">welcome PLAY FOR EVERYONE zombie</Link></h2>
                            <div className="blog-meta">
                                <ul>
                                    <li>bY <Link to="#" className="a">x-hunter</Link> OCTOBER 19, 2020</li>
                                </ul>
                            </div>
                            <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvi condimentum dictum, sapien nibh auctor
                                tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus
                                vitae tellus lacinia pretium.</p>
                        </div>
                        <div className="blog-list-post-bottom">
                            <ul>
                                <li><Link to="#" className="a">more reding<i className="fas fa-angle-double-right"></i></Link></li>
                                <li>
                                    <span>SHARE :</span>
                                    <div className="blog-post-share">
                                        <Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#" className="a"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="blog-list-post">
                        <div className="blog-list-post-thumb">
                            <Link to="blog-details.html"><img src="img/blog/t_blog_thumb03.jpg" alt="" /></Link>
                        </div>
                        <div className="blog-list-post-content">
                            <div className="blog-list-post-tag mb-25">
                                <Link to="#" className="a">shooting</Link>
                            </div>
                            <h2><Link to="#" className="a">welcome PLAY FOR EVERYONE zombie</Link></h2>
                            <div className="blog-meta">
                                <ul>
                                    <li>bY <Link to="#" className="a">x-hunter</Link> OCTOBER 19, 2020</li>
                                </ul>
                            </div>
                            <p>Donec orci enim, bibendum a augue quis, aliquet cursus quam. Pellentesque pulvi condimentum dictum, sapien nibh auctor
                                tortoris vulputate sapien tortor et velit. Sed nulla nisi, congue eu quam vel, molestie grvida ipsum. Curabitr ut lacus
                                vitae tellus lacinia pretium.</p>
                        </div>
                        <div className="blog-list-post-bottom">
                            <ul>
                                <li><Link to="#" className="a">more reding<i className="fas fa-angle-double-right"></i></Link></li>
                                <li>
                                    <span>SHARE :</span>
                                    <div className="blog-post-share">
                                        <Link to="#" className="a"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#" className="a"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#" className="a"><i className="fab fa-pinterest-p"></i></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pagination-wrap mt-60">
                        <ul>
                            <li><Link to="#" className="a">first</Link></li>
                            <li><Link to="#" className="a">1</Link></li>
                            <li><Link to="#" className="a">2</Link></li>
                            <li><Link to="#" className="a">next</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <aside className="blog-sidebar">
                        <div className="widget mb-45">
                            <div className="sidebar-about">
                                <div className="sidebar-about-thumb">
                                    <img src="img/blog/sidebar_about_thumb.jpg" alt="" />
                                </div>
                                <div className="sidebar-widget-title mb-15">
                                    <h4>ABOUT THE <span>AUTHOR</span></h4>
                                </div>
                                <div className="sidebar-about-content">
                                    <p>Donec orci enim, bibendum a augue quis, aliquet cursus quamPellentesq.</p>
                                </div>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-search">
                                <form action="#">
                                    <input type="text" placeholder="Type and hit enter..." />
                                    <button><i className="fas fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-widget-title mb-25">
                                <h4>category <span>post</span></h4>
                            </div>
                            <div className="sidebar-cat">
                                <ul>
                                    <li><Link to="#" className="a">ESPORTS ( 12 )</Link></li>
                                    <li><Link to="#" className="a">play store ( 03 )</Link></li>
                                    <li><Link to="#" className="a">pubg ( 09 )</Link></li>
                                    <li><Link to="#" className="a">zombieland ( 07 )</Link></li>
                                    <li><Link to="#" className="a">shooting ( 02 )</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-widget-title mb-25">
                                <h4>Recent <span>post</span></h4>
                            </div>
                            <div className="rc-post-list">
                                <ul>
                                    <li>
                                        <div className="rc-post-thumb">
                                            <Link to="#" className="a"><img src="img/blog/rc_post_thumb01.jpg" alt="" /></Link>
                                        </div>
                                        <div className="rc-post-content">
                                            <h5><Link to="#" className="a">EVERYONE zombie</Link></h5>
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rc-post-thumb">
                                            <Link to="#" className="a"><img src="img/blog/rc_post_thumb02.jpg" alt="" /></Link>
                                        </div>
                                        <div className="rc-post-content">
                                            <h5><Link to="#" className="a">Archery World Tour</Link></h5>
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="rc-post-thumb">
                                            <Link to="#" className="a"><img src="img/blog/rc_post_thumb03.jpg" alt="" /></Link>
                                        </div>
                                        <div className="rc-post-content">
                                            <h5><Link to="#" className="a">The Ranger Magic</Link></h5>
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget mb-45">
                            <div className="sidebar-widget-title mb-25">
                                <h4>TRENDING <span>MATCHES</span></h4>
                            </div>
                            <div className="sidebar-trending-match">
                                <ul>
                                    <li>
                                        <div className="sidebar-trend-match-thumb">
                                            <Link to="#" className="a"><img src="img/blog/trend_match_thumb01.png" alt="" /></Link>
                                        </div>
                                        <div className="sidebar-trend-match-action">
                                            <span>0</span> <span>-</span> <span>3</span>
                                        </div>
                                        <div className="sidebar-trend-match-thumb">
                                            <Link to="#" className="a"><img src="img/blog/trend_match_thumb02.png" alt="" /></Link>
                                        </div>
                                        <div className="sidebar-trend-match-date">
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-trend-match-thumb">
                                            <Link to="#" className="a"><img src="img/blog/trend_match_thumb03.png" alt="" /></Link>
                                        </div>
                                        <div className="sidebar-trend-match-action">
                                            <span>0</span> <span>-</span> <span>7</span>
                                        </div>
                                        <div className="sidebar-trend-match-thumb">
                                            <Link to="#" className="a"><img src="img/blog/trend_match_thumb04.png" alt="" /></Link>
                                        </div>
                                        <div className="sidebar-trend-match-date">
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar-trend-match-thumb">
                                            <Link to="#" className="a"><img src="img/blog/trend_match_thumb05.png" alt="" /></Link>
                                        </div>
                                        <div className="sidebar-trend-match-action">
                                            <span>0</span> <span>-</span> <span>3</span>
                                        </div>
                                        <div className="sidebar-trend-match-thumb">
                                            <Link to="#" className="a"><img src="img/blog/trend_match_thumb06.png" alt="" /></Link>
                                        </div>
                                        <div className="sidebar-trend-match-date">
                                            <span>OCTOBER 19, 2020</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget">
                            <div className="sidebar-widget-title mb-25">
                                <h4>TAGS <span>post</span></h4>
                            </div>
                            <div className="sidebar-tag-list">
                                <ul>
                                    <li><Link className="a" to="#">pubg</Link></li>
                                    <li><Link className="a" to="#">dota 2</Link></li>
                                    <li><Link className="a" to="#">zombie</Link></li>
                                    <li><Link className="a" to="#">call of duty</Link></li>
                                    <li><Link className="a" to="#">development</Link></li>
                                    <li><Link className="a" to="#">zombieland 2</Link></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>
    {/* blog-area-end */}

</main>

            <Footer />
        </>
    )
}

export default Blog
