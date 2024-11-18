import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

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
                        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                            
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li> <Link to={"/"} className="nav-item text-decoration-none">
                                      <img src={require("../assets/images/footweare-h-logo.jpg")} style={{width:"120px"}} alt="Home" />  
                                    </Link></li>
                                    
                                    <li className=" nav-item dropdown"><Link to={"/men"} className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    Men
                                    <ul className="dropdown-menu ">
                                            <li>
                                                <Link className="dropdown-item">Product Detail</Link>
                                            </li>
                                        </ul>
                                        </Link></li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><hr class="dropdown-divider"/></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
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
                                        <Link to={"/cart"} className="cart float-end"><i className="fa-solid fa-cart-shopping"></i> Cart [0]</Link>
                                    </li>
                                    </ul>
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                            <button class="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav> */}
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
                                                <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="col">
                                                <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
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
