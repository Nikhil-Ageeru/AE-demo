import React from 'react';

import Header from '../components/Shared/PageHeader';
import Footer from '../components/Shared/Footer';
import { Link } from 'react-router-dom';

function Contact() {
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
                                    <h2>contact <span>info</span></h2>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="index-2.html" className="a">Home</Link></li>
                                            <li className="breadcrumb-item"><Link to="#" className="a">pages</Link></li>
                                            <li className="breadcrumb-item active" aria-current="page">contact</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* breadcrumb-area-end */}

                {/* contact-area */}
                <section className="contact-area pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div id="contact-map">
                                <iframe className='w-100 h-100' title='Agent Esports' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3424112236!2d78.24288956988937!3d17.41228073375643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1720464147415!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" ></iframe>
                                </div>
                            </div>
                            <div className="col-lg-6 pl-45">
                                <div className="section-title title-style-three mb-20">
                                    <h2>CONTACT US ABOUT <span>PRESS</span></h2>
                                </div>
                                <div className="contact-info-list mb-40">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i>Walking Park, Los Angeles, Brockland, USA</li>
                                        <li><i className="fas fa-envelope"></i><a href="mailto:info@example.com" className="a text-secondary">info@example.com</a></li>
                                    </ul>
                                </div>
                                <div className="contact-form">
                                    <form action="#">
                                        <textarea name="message" id="message" placeholder="Write Message..."></textarea>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <input type="text" placeholder="Your Name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" placeholder="Your Mail" />
                                            </div>
                                        </div>
                                        <button>SUBMIT MESSAGE</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-area-end */}

                {/* brand-area */}
                <div className="brand-area lite-gray-bg pb-170 pt-120">
                    <div className="container">
                        <div className="row brand-active">
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo01.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo02.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo03.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo04.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo05.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo06.png" alt="" />
                                </div>
                            </div>
                            <div className="col-xl-2">
                                <div className="brand-item">
                                    <img src="img/brand/brand_logo03.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* brand-area-end */}

            </main>
            <Footer />
        </>
    )
}

export default Contact
