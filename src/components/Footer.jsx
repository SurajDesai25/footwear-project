import React from 'react';
import { Link } from 'react-router-dom';
// import "../assets/css/style.css";

export default function Footer() {

    return (
        <div id="footer-bg">
            <footer id="colorlib-footer" role="contentinfo">
                <div className="container">
                    <div className="row row-pb-md">
                        <div className="col footer-col colorlib-widget">
                            <h4>About Footwear</h4>
                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                            <div>
                                <ul className="colorlib-social-icons">
                                    <li><Link><i className="fa-brands fa-twitter"></i></Link></li>
                                    <li><Link><i className="fa-brands fa-facebook"></i></Link></li>
                                    <li><Link><i className="fa-brands fa-linkedin"></i></Link></li>
                                    <li><Link><i className="fa-brands fa-dribbble"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col footer-col colorlib-widget">
                            <h4>Customer Care</h4>
                            <div>
                                <ul className="colorlib-footer-links">
                                    <li><Link>Contact</Link></li>
                                    <li><Link>Returns/Exchange</Link></li>
                                    <li><Link>Gift Voucher</Link></li>
                                    <li><Link>Wishlist</Link></li>
                                    <li><Link>Special</Link></li>
                                    <li><Link>Customer Services</Link></li>
                                    <li><Link>Site maps</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col footer-col colorlib-widget">
                            <h4>Information</h4>
                            <div>
                                <ul className="colorlib-footer-links">
                                    <li><Link>About us</Link></li>
                                    <li><Link>Delivery Information</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Support</Link></li>
                                    <li><Link>Order Tracking</Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col footer-col">
                            <h4>News</h4>
                            <ul className="colorlib-footer-links">
                                <li><a href="blog.html">Blog</a></li>
                                <li><Link>Press</Link></li>
                                <li><Link to={"/adminlogin"}>Admin</Link></li>
                                <li><Link>Exhibitions</Link></li>
                            </ul>
                        </div>

                        <div className="col footer-col">
                            <h4>Contact Information</h4>
                            <ul className="colorlib-footer-links">
                                <li>291 South 21th Street, <br /> Suite 721 New York NY 10016</li>
                                <li><a href="tel://1234567920">+ 1235 2355 98</a></li>
                                <li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
                                <li><Link>yoursite.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5">
                    {/* <!-- Copyright --> */}
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2024. All rights reserved.
                    </div>
                    {/* <!-- Copyright --> */}

                    {/* <!-- Right --> */}
                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </div>
            </footer>
        </div>
    )
}
