import React from 'react'
import { Link } from 'react-router-dom'

function Thankyou() {

  
  return (
    <div>
        <div className="col-sm-10 offset-sm-1 text-center">
<p className="icon-addcart">
<span><i className="fa-solid fa-check" style={{color: "#88c8bc"}}></i></span>
</p>
<h2 className="mb-4">Thank you for purchasing, Your order is complete</h2>
<p>
    <Link to={"/"}>
<button className="btn btn-primary btn-outline-primary rounded">Home</button>
</Link>
<Link to={"/allproducts"}>
<button  className="btn btn-primary btn-outline-primary rounded">
<i className="fa-solid fa-cart-shopping"></i> Continue Shopping</button>
</Link>
</p>
</div>
    </div>
  )
}

export default Thankyou