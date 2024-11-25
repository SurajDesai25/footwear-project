import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from "../app/cartSlice"


function Allproducts() {

  let dispatch = useDispatch();

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  function getData() {
    setLoading(true)
    axios.get("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear")
      .then((res) => {

        setData(res.data)

      }).catch((err) => console.log(err)
      ).finally(() => setLoading(false))
  }
  useEffect(() => {
    getData()
  }, [])


  function addProductToCart(product){
    let cartProduct = {
      id: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      quantity: 1
    }
    //  console.log(product);
    //  console.log(cartProduct);

     dispatch(addToCart(cartProduct))
     
  }


  return (
    <div className="container-fluid">
      
        <div className="col-lg-12 d-flex justify-content-end m-2">
          <label className="me-2 mt-2 fw-bold text-dark">Sort by:</label>

          <div className="a-dropdown-container border border-primary rounded">
            <select name="s" autocomplete="off" id="s-result-sort-select" tabindex="0" data-action="a-dropdown-select" className="a-native-dropdown a-declarative form-select border rounded" >
              <option value="relevanceblender">Featured</option>
              <option value="price-asc-rank">Price: Low to High</option>
              <option value="price-desc-rank">Price: High to Low</option>
              <option value="review-rank">Avg. Customer Review</option>
            </select>
          </div>

        </div>
      
      <div>
        <div className="row">
          <div className="col-lg-2 col-xl-2">
            <div className="row">
              <div className="col-sm-12">
                <div className="side border mt-2 mb-1">
                  <h3>Category</h3>
                  <ul>
                    <li><button className="btn p-0 text-secondary">Male</button></li>
                    <li><button className="btn p-0 text-secondary">Female</button></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="side border mb-1">
                  <h3>Brand</h3>
                  <ul>
                    <li><button className="btn p-0 text-secondary">Adidas</button></li>
                    <li><button className="btn p-0 text-secondary">Bata</button></li>
                    <li><button className="btn p-0 text-secondary">Nike</button></li>
                    <li><button className="btn p-0 text-secondary">Puma</button></li>
                    <li><button className="btn p-0 text-secondary">Other</button></li>
                  </ul>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="side border mb-1">
                  <h3>Size</h3>
                  <div className="block-26 mb-2">
                    <h4 className="text-secondary font-weight-bold">Size</h4>
                    <ul>
                      <li><button className="btn p-0 text-white">3</button></li>
                      <li><Link>4</Link></li>
                      <li><Link>5</Link></li>
                      <li><Link>6</Link></li>
                      <li><Link>7</Link></li>
                      <li><Link>8</Link></li>
                      <li><Link>9</Link></li>
                      <li><Link>10</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="side border mb-1">
                  <h3>Colors</h3>
                  <ul>
                    <li><Link >Black</Link></li>
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
                  <ul>
                    <div className="d-grid gap-2 col-12 mx-auto">
                      <button className="btn btn-outline-primary bg-dark rounded" type="button">Clear Filter</button>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Add on Products  */}

          <div className="col-lg-9 col-xl-9">
            {loading ?
              (<div className=' text-center'>
                <div className='spinner-border text-primary'></div>
                <h2>Loading..</h2>
              </div>) :
              (<div className="row row-pb-md">
                {
                  data.map((eachData, i) => {

                    return (
                      <div className="col-lg-4 mb-4 mt-2 text-center">
                        <div className="product-entry  border rounded">

                          <Link to={"/productdescription/" + eachData.id} className="prod-img">
                            <img id="image" src={eachData.image} className="img-fluid" alt="E-Commerce img" style={{ width: "180px", height:"140px" }} />
                            </Link>

                          <div className="desc">
                            <h2><Link>{eachData.brand} <br />{eachData.title}</Link></h2>
                            <span className="price">
                              <h4>{eachData.price}</h4>
                            </span>

                            <span className="price text-decoration-line-through"><h5>{eachData.mrp}</h5></span>
                            <button onClick={() => addProductToCart(eachData)} className="btn btn-primary">
                              <i className="icon-shopping-cart" id="cart"></i>
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }


              </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allproducts;