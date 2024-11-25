import React from 'react'
import { Link } from 'react-router-dom'

export default function Women() {


  return (
    <div className="container-fluid">
        	<div className="breadcrumbs">
			<div className="container">
				<div className="row">
					<div className="col">
						<p className="bread"><span><Link to="/">Home</Link></span> / <span>Women</span></p>
					</div>
				</div>
			</div>
		</div>

		<div className="breadcrumbs-two">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="breadcrumbs-img" style= {{backgroundImage: `url(images/cover-img-1.jpg)`}}>
							<h2>Women's</h2>
						</div>
						<div className="menu text-center">
							<p><Link>New Arrivals</Link> <Link>Best Sellers</Link> <Link>Extended Widths</Link> <Link>Sale</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="colorlib-featured">
			<div className="container">
				<div className="row">
					<div className="col-sm-4 text-center">
						<div className="featured">
							<div className="featured-img featured-img-2" style={{backgroundImage: `url(images/img_bg_2.jpg)`}}>
								<h2>Casuals</h2>
							</div>
								<p><Link className="btn btn-primary btn-lg">Shop now</Link></p>
						</div>
					</div>
					<div className="col-sm-4 text-center">
						<div className="featured">
							<div className="featured-img featured-img-2" style={{backgroundImage: `url(images/women.jpg)`}}>
								<h2>Dress</h2>
							</div>
								<p><Link className="btn btn-primary btn-lg">Shop now</Link></p>
						</div>
					</div>
					<div className="col-sm-4 text-center">
						<div className="featured">
							<div className="featured-img featured-img-2" style={{backgroundImage: `url(images/item-11.jpg)`}}>
								<h2>Sports</h2>
							</div>
								<p><Link className="btn btn-primary btn-lg">Shop now</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="colorlib-product">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-xl-3">
						<div className="row">
							<div className="col-sm-12">
								<div className="side border mb-1">
									<h3>Brand</h3>
									<ul>
										<li><Link>Nike</Link></li>
										<li><Link>Adidas</Link></li>
										<li><Link>Merrel</Link></li>
										<li><Link>Gucci</Link></li>
										<li><Link>Skechers</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="side border mb-1">
									<h3>Size/Width</h3>
									<div className="block-26 mb-2">
										<h4>Size</h4>
					               <ul>
					                  <li><Link>7</Link></li>
					                  <li><Link>7.5</Link></li>
					                  <li><Link>8</Link></li>
					                  <li><Link>8.5</Link></li>
					                  <li><Link>9</Link></li>
					                  <li><Link>9.5</Link></li>
					                  <li><Link>10</Link></li>
					                  <li><Link>10.5</Link></li>
					                  <li><Link>11</Link></li>
					                  <li><Link>11.5</Link></li>
					                  <li><Link>12</Link></li>
					                  <li><Link>12.5</Link></li>
					                  <li><Link>13</Link></li>
					                  <li><Link>13.5</Link></li>
					                  <li><Link>14</Link></li>
					               </ul>
					            </div>
					            <div className="block-26">
										<h4>Width</h4>
					               <ul>
					                  <li><Link>M</Link></li>
					                  <li><Link>W</Link></li>
					               </ul>
					            </div>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="side border mb-1">
									<h3>Style</h3>
									<ul>
										<li><Link>Slip Ons</Link></li>
										<li><Link>Boots</Link></li>
										<li><Link>Sandals</Link></li>
										<li><Link>Lace Ups</Link></li>
										<li><Link>Oxfords</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="side border mb-1">
									<h3>Colors</h3>
									<ul>
										<li><Link>Black</Link></li>
										<li><Link>White</Link></li>
										<li><Link>Blue</Link></li>
										<li><Link>Red</Link></li>
										<li><Link>Green</Link></li>
										<li><Link>Grey</Link></li>
										<li><Link>Orange</Link></li>
										<li><Link>Cream</Link></li>
										<li><Link>Brown</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="side border mb-1">
									<h3>Material</h3>
									<ul>
										<li><Link>Leather</Link></li>
										<li><Link>Suede</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-12">
								<div className="side border mb-1">
									<h3>Technologies</h3>
									<ul>
										<li><Link>BioBevel</Link></li>
										<li><Link>Groove</Link></li>
										<li><Link>FlexBevel</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-9 col-xl-9">
						<div className="row row-pb-md">
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-1.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-2.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Minam Meaghan</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-3.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Men's Taja Commissioner</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-4.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Russ Men's Sneakers</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-5.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-6.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-7.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-8.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-9.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-10.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-11.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-12.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-13.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-14.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-4 mb-4 text-center">
								<div className="product-entry border">
									<Link className="prod-img">
										<img src={require("../assets/images/item-15.jpg")} className="img-fluid" alt="Free html5 bootstrap 4 template"/>
									</Link>
									<div className="desc">
										<h2><Link>Women's Boots Shoes Maca</Link></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center">
								<div className="block-27">
				               <ul>
					               <li><Link><i className="fa-solid fa-arrow-left"></i></Link></li>
				                  <li className="active"><span>1</span></li>
				                  <li><Link>2</Link></li>
				                  <li><Link>3</Link></li>
				                  <li><Link>4</Link></li>
				                  <li><Link>5</Link></li>
				                  <li><Link><i className="fa-solid fa-arrow-right"></i></Link></li>
				               </ul>
				            </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="colorlib-partner">
			<div className="container">
				<div className="row">
					<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm"/>
						<h2>Trusted Partners</h2>
					</div>
				</div>
				<div className="row">
					<div className="col partner-col text-center">
						<img src="images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src="images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src="images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src="images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
					<div className="col partner-col text-center">
						<img src="images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"/>
					</div>
				</div>
			</div>
		</div>
    
  )
}
