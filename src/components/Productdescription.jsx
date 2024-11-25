import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Productdescription() {
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams(); //useParams is a hook from the react-router-dom library that allows you to access URL parameters in your React components. && // Assuming your route is like this one /productdetail/:id

  useEffect(() => {
    if (id) {
      setLoading(true); //by default true to show loading
      axios
        .get("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear/" + id)
        .then((res) => {
          // console.log(res.data);
          setArr(Array.isArray(res.data) ? res.data : [res.data]); //To check res.data is always array or not if you skip / missed this line then you will get an error like arr.map is not function. In overall even if array is empty it ensures that array is is array format
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => setLoading(false)); //if not delayed to fetch or laod products it sets loading to false
    } else {
      setLoading(false);
    }
  }, [id]);

  return (
    <div className="mb-3">
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread fw-bold">
                <span>
                  <Link to="/" className="pointer-cursor">
                    Home
                  </Link>
                </span>{" "}
                / <span>Product Details</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* If loading is set to true then it shows loading spinner otherwise / after fetching products it shows products */}
      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      ) : (
        <div className="container productDetail mt-3">
          <div className="row ">
            <div className="col-lg-6">
              {arr.map((value) => (
                <div
                  key={value.id}
                  className=" d-flex justify-content-center align-items-center  p-1"
                >
                  <img src={value.image} alt="" />
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              {arr.map((value) => (
                <div key={value.id}>
                  <h2>{value.title}</h2>
                  <h3>&#8377;{value.price}</h3>
                  <del>
                    <h4 className="text-secondary">&#8377;{value.mrp}</h4>
                  </del>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#878e9b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#878e9b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#878e9b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#878e9b" }}
                  ></i>
                  <i
                    className="fa-solid fa-star-half"
                    style={{ color: "#878e9b" }}
                  ></i>
                  <span style={{ color: "#878e9b" }}>(104 Rating)</span>
                  <p className="pt-2 fs-5">{value.description}</p>
                  <div className="block-26 mb-2">
                    <h3 className="fs-4">Size</h3>
                    <ul>
                      <li>
                        <Link>6</Link>
                      </li>
                      <li>
                        <Link>7</Link>
                      </li>
                      <li>
                        <Link>8</Link>
                      </li>
                      <li>
                        <Link>9</Link>
                      </li>
                      <li>
                        <Link>10</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="block-26 mb-2">
                    <h3 className="fs-4">Width</h3>
                    <ul>
                      <li>
                        <Link>M</Link>
                      </li>
                      <li>
                        <Link>W</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="quantity-block">
                    <h5 className="mb-3">Quantity</h5>
                    <span>-</span>
                    <span className="w-50">1</span>
                    <span>+</span>
                  </div>
                  <div className="block-26 mt-3">
                    <button className="btn btn-dark ">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productdescription;