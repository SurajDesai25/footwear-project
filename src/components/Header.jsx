import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Header() {

    const count = useSelector((state) => {
        // console.log(state.cart);
        return state.cart.cartProducts
        
    })

    return (
        <div>
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        {/* <div className="row">
                            <div className="col-sm-5 col-md-3">
                                <form action="#" className="search-wrap">
                                    <div className="form-group">
                                        <input type="search" className="form-control search" placeholder="Search" />
                                        <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                        <div className="row">
                            
                            <div className="col-sm-12 text-left menu-1">
                                <ul>
                            
                                    <li> <Link to={"/"} className="nav-item text-decoration-none">
                                      <img src={require("../assets/images/login-logo7.png")} style={{width:"120px"}} alt="Home" />  
                                    </Link></li>
                                    <li className=" dropdown"><Link to={"/men"} className="nav-item text-decoration-none m-1">
                                        Men
                                        {/* <ul className="dropdown-content ">
                                            <li>
                                                <Link>Product Detail</Link>
                                            </li>
                                            <li>
                                                <Link>Shopping Cart</Link>
                                            </li>
                                            <li>
                                                <Link>Checkout</Link>
                                            </li>
                                            <li>
                                                <Link>Order Complete</Link>
                                            </li>
                                            <li>
                                                <Link>Wishlist</Link>
                                            </li>
                                        </ul> */}
                                    </Link>
                                    </li>
                                    <li>
                                        <Link to={"/women"} className="nav-item text-decoration-none">Women</Link>
                                    </li>
                                    <li>
                                        <Link to={"/allproducts"} className="nav-item text-decoration-none">AllProducts</Link>
                                    </li>
                                    <li>
                                        <Link to={"/about"} className="nav-item text-decoration-none">About</Link>
                                    </li>
                                    <li>
                                        <Link to={"/contact"} className="nav-item text-decoration-none">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to={"/cart"} className="float-end mt-2"><i className="fa-solid fa-cart-shopping"></i> Cart [{count.length}]</Link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="sale">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center">
                                <div className="row">
                                    <div className="owl-carousel2">
                                        <div className="item">
                                            <div className="col">
                                                <h3><Link>25% off (Almost) Everything! Use Code: Summer Sale</Link></h3>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col">
                                                <h3><Link>Our biggest sale yet 50% off all summer shoes</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
