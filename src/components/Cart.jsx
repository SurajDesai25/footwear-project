import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart, incrementByQuantity, decrementByQuantity } from '../app/cartSlice.js'
import { Link, useNavigate } from 'react-router-dom';


function Cart() {
	const [discount, setDiscount] = useState(0)
	const [coupon, setCoupon] = useState("")
	const dispatch = useDispatch();
	let data = useSelector((state) => state.cart.cartProducts)
	const navigate = useNavigate()
	// console.log(data);


	let allTotal = 0;

	// useEffect(() => {
	// 	dispatch(AddAllTotal(allTotal))
	// }, [])

	function handleChange(e) {
		// console.log(e.target.value);
		setCoupon(e.target.value)

	}

	function handleApply(e) {
		e.preventDefault()
		if (allTotal > coupon) {

			setDiscount(coupon)
			setCoupon("")

		} else {
	
			setCoupon("")
		}


	}

	const handleCheckOut = () =>{
		const totalAmount = allTotal + 50 - discount
		navigate("/checkout",{state:{totalAmount}})
	}
	

	return (
		<div>
			{data.length > 0 ? 
			 <><div className="m-2">
				<p className="bread"><span><Link>Home</Link></span> / <span>Shopping Cart</span></p>
			</div>


			<div className="colorlib-product">
				<div className="container">

					<div className="row row-pb-lg">
						<div className="col-md-12">
							<div className="product-name d-flex rounded">
								<div className="one-forth text-left px-4">
									<span>Product Details</span>
								</div>
								<div className="one-eight text-center">
									<span>Price</span>
								</div>
								<div className="one-eight text-center">
									<span>Quantity</span>
								</div>
								<div className="one-eight text-center">
									<span>Total</span>
								</div>
								<div className="one-eight text-center px-4">
									<span>Remove</span>
								</div>
							</div>

							{
								data.map((product) => {
									// console.log(product.price);

									allTotal += parseInt(product.price * product.quantity)

									console.log(typeof (allTotal));


									return (
										<div className="product-cart d-flex">
											<div className="one-forth">
												<div className="product-img rounded" style={{ backgroundImage: `url(${product.image})` }}>
												</div>
												<div className="display-tc">
													<h3>{product.title}</h3>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<span className="price">₹{product.price}</span>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<div className="d-flex">
														<button onClick={() => dispatch(decrementByQuantity(product.id))} className="btn btn-primary rounded">-</button>
														<input type="text" name="quantity" className="form-control input-number text-center" value={product.quantity} min="1" max="100" />
														<button onClick={() => dispatch(incrementByQuantity(product.id))} className="btn btn-primary rounded">+</button>
													</div>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<span className="price">₹{product.price * product.quantity}</span>
												</div>
											</div>
											<div className="one-eight text-center">
												<div className="display-tc">
													<button onClick={() => dispatch(removeToCart(product.id))} className="btn btn-secondary rounded">X</button>
												</div>
											</div>
										</div>
									)
								})
							}



						</div>
					</div>
					<div className="row row-pb-lg">
						<div className="col-md-12">
							<div className="total-wrap">
								<div className="row">
									<div className="col-sm-8">
										<form action="#">
											<div className="row form-group d-flex">
												<div className="col-sm-9">
													<input onChange={handleChange}
														value={coupon} type="text" name="quantity" className="form-control input-number" placeholder="Your Coupon Number..." />
												</div>
												<div className="col-sm-3">
													<button onClick={(e) => handleApply(e)} className="btn btn-primary rounded">Apply Coupon</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-sm-4 text-center">
										<div className="total">
											<div className="sub">
												<p><span>Subtotal:</span> <span>{allTotal}</span></p>
												<p><span>Delivery:</span> <span>₹50.00</span></p>
												<p><span>Discount:</span> <span>₹{discount}</span></p>
											</div>
											<div className="grand-total">
												<p><span><strong>Total:</strong></span> <span>₹ {allTotal + 50 - discount} /-</span></p>
											</div>
											
												<button onClick={handleCheckOut} className="btn btn-primary rounded mt-2">Proceed to Checout</button>
											
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>

				</div>
			</div> </> : <div className="d-flex justify-content-center align-items-center p-5"> <img src="https://d16py1fyt83ijv.cloudfront.net/vedobi/assets/img/empty-cart.webp" alt="" /></div> }
		</div>
	)
}

export default Cart