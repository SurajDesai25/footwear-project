	import React, { useEffect, useState } from 'react'
	import { useDispatch, useSelector } from 'react-redux'
	import { removeToCart, incrementByQuantity, decrementByQuantity, AddAllTotal } from '../app/cartSlice.js'
	import { Link } from 'react-router-dom';

	function Cart() {
		const[discount, setDiscount]= useState()

		const dispatch = useDispatch();
		let data = useSelector((state) => state.cart.cartProducts)
		let Subtotal = useSelector((state)=>state.cart.allTotal)
		// console.log(Subtotal);
		// console.log(data);
		

		let allTotal = 0;

		useEffect(() => {
			dispatch(AddAllTotal(allTotal))
		}, [])

		function handleChange(e){
			// console.log(e.target.value);
			setDiscount(e.target.value)
			
		}

		function handleApply(){
			
			// handleChange()
			// Get value from input box
            var number = document.getElementById("dis").value;
            
            // Display the number in the output div
            document.getElementById("output").innerText = "You entered: " + number;

		}

		return (
			<div>
				<div className="m-2">
					<p className="bread"><span><a>Home</a></span> / <span>Shopping Cart</span></p>
				</div>


				<div className="colorlib-product">
					<div className="container">
						{/* <div className="row row-pb-lg">
						<div className="col-md-10 offset-md-1">
							<div className="process-wrap">
								<div className="process text-center active">
									<p><span>01</span></p>
									<h3>Shopping Cart</h3>
								</div>
								<div className="process text-center">
									<p><span>02</span></p>
									<h3>Checkout</h3>
								</div>
								<div className="process text-center">
									<p><span>03</span></p>
									<h3>Order Complete</h3>
								</div>
							</div>
						</div>
					</div> */}
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


								{/* <div className="product-cart d-flex">
								<div className="one-forth">
									<div className="product-img" style={{backgroundImage: `url(images/item-7.jpg)`}}>
									</div>
									<div className="display-tc">
										<h3>Product Name</h3>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<span className="price">₹68.00</span>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<form action="#">
											<input type="text" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100"/>
										</form>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<span className="price">₹120.00</span>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<a href="#" className="closed"></a>
									</div>
								</div>
							</div>
							<div className="product-cart d-flex">
								<div className="one-forth">
									<div className="product-img" style={{backgroundImage: `url(images/item-8.jpg)`}}>
									</div>
									<div className="display-tc">
										<h3>Product Name</h3>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<span className="price">₹68.00</span>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100"/>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<span className="price">₹120.00</span>
									</div>
								</div>
								<div className="one-eight text-center">
									<div className="display-tc">
										<a href="#" className="closed"></a>
									</div>
								</div>
							</div> */}
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
														value={discount} type="text" id='dis' name="quantity" className="form-control input-number" placeholder="Your Coupon Number..." />
													</div>
													<div className="col-sm-3">
														<button onClick={handleApply} className="btn btn-primary rounded">Apply Coupon</button>
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
													<p><span><strong>Total:</strong></span> <span>₹ {allTotal} /-</span></p>
												</div>
												<Link to={"/checkout"}>
													<button className="btn btn-primary rounded mt-2">Proceed to Checout</button>
												</Link>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>Related Products</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">₹139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Minam Meaghan</a></h2>
										<span className="price">₹139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Men's Taja Commissioner</a></h2>
										<span className="price">₹139.00</span>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Russ Men's Sneakers</a></h2>
										<span className="price">₹139.00</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	export default Cart