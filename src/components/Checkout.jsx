import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate();

    return (
        <div>

            <div className="colorlib-product">
                <div className="m-2"><p>Home <span>/</span>CHECKOUT</p></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <form method="post" className="colorlib-form">
                                <h2>Billing Details</h2>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="country">Select Country</label>
                                            <div className="form-field">
                                                <i className="icon icon-arrow-down3">
                                                </i>
                                                <select name="people" id="country" className="form-control">
                                                    <option>Select country</option>
                                                    <option value="india">India</option>
                                                    <option value="china">China</option>
                                                    <option value="japan">Japan</option>
                                                    <option value="korea">Korea</option>
                                                    <option value="Philippines">Philippines</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="fname">First Name</label>
                                            <input type="text" id="name" className="form-control" placeholder="Your firstname" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="lname">Last Name</label>
                                            <input type="text" id="surname" className="form-control" placeholder="Your lastname" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="fname">Address</label>
                                            <input type="text" id="address" className="form-control" placeholder="Enter Your Address" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label for="companyname">Town/City</label>
                                            <input type="text" id="city" className="form-control" placeholder="Town or City" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="stateprovince">State</label>
                                            <input type="text" id="state" className="form-control" placeholder="State Province" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="lname">Zip/Postal Code</label>
                                            <input type="text" id="zip" className="form-control" placeholder="Zip / Postal" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="email">E-mail Address</label>
                                            <input type="text" id="email" className="form-control" placeholder="State Province" />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="Phone">Phone Number</label>
                                            <input type="text" id="mobile" className="form-control" placeholder="" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="radio">
                                                <label>
                                                    <input type="radio" name="optradio" /> Create an Account? </label>
                                                <label>
                                                    <input type="radio" name="optradio" /> Ship to different address</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="cart-detail">
                                        <h2>Cart Total</h2>
                                        <ul>
                                            <li>
                                                <span>Subtotal</span> <span>53994/-</span>
                                                <ul>
                                                    <li>
                                                        <span>6  x  Daily wear Sneakers Adidas</span> <span>5999/-</span>
                                                    </li>
                                                    <li>
                                                        <span>3  x  White Adidas Doorstep High Top Mens Sneakers Shoes </span> <span>6000/-</span>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span>Shipping</span> <span>50.00/-</span>
                                            </li>
                                            <li>
                                                <span>Order Total</span> <span>53944/-</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="w-100">
                                </div>

                                <div className="col-md-12">
                                    <div className="cart-detail">
                                        <h2>Payment Method</h2>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optradio" /> Direct Bank Tranfer</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optradio" /> Check Payment</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label>
                                                        <input type="radio" name="optradio" /> Paypal</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="checkbox">
                                                    <label>
                                                        <input type="checkbox" value="checked" /> I have read and accept the terms and conditions</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <p>
                                        <Link to={"/thankyou"}>
                                        <button className="btn btn-primary">Place an Order</button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout