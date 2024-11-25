import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate()
    const location = useLocation()
    const totalAmount = location.state?.totalAmount
    console.log(totalAmount);
    

    const cartProducts = useSelector((state)=>state.cart.cartProducts)


    useEffect(()=>{
        if(!totalAmount){
            navigate("/")
        }
    }, [navigate, totalAmount])

    function handlePayment() {
        var options = {
            "key": "rzp_test_4yosHYDduPYmKN", // Enter the Key ID generated from the Dashboard
            "amount": totalAmount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Cool Footwear", //your business name
            "description": "Test Transaction",
            "image": "https://lms.igaptechnologies.com/assets/images/logo.png",
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "handler": function (response) {
                if (response) {
                 navigate("/thankyou")
                }
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature)
            },
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9998882222" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                // "color": "#3399cc"
                "color": "#62b4b5"
            }
        };

        var rzp1 = new window.Razorpay(options);

        rzp1.open();

    }
    

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
                                                    {cartProducts.length > 0 && (
                                                <ul>
                                                        
                                                        {cartProducts.map((product)=>(

                                                    <li key={product.id}>
                                                        <span>{product.quantity}  x  {product.title}</span> <span>{product.price * product.quantity}/-</span>
                                                    </li>
                                                        ))}
                                                </ul>
                                                    )}
                                            </li>
                                            <li>
                                                <span>Shipping</span> <span>50.00/-</span>
                                            </li>
                                            <li>
                                                <span>Order Total</span> <span>{totalAmount}</span>
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
                                        
                                        <button onClick={handlePayment} className="btn btn-primary">Place an Order</button>
                                    
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