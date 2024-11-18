import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Addproducts() {
  let {id} =  useParams();
  
  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
    uploadimg: "",
    brand: "",
    color: "",
    size: "",
    description: ""

  });


  function handleChange(e) {

    setData({ ...data, [e.target.id]: e.target.value })
    // console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(id=== undefined){
      axios.post("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear", data)
      .then((res) => {
        console.log(res.data);
      }).catch((error) => {
        console.log(error);
      })

    setData({
      title: "",
      category: "",
      price: "",
      mrp: "",
      image: "",
      uploadimg: "",
      brand: "",
      color: "",
      size: "",
      description: ""
    })
    }
    else{

      axios.put("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear/" + id, data)
      .then((res)=>{
        setData({
          title: "",
          category: "",
          price: "",
          mrp: "",
          image: "",
          uploadimg: "",
          brand: "",
          color: "",
          size: "",
          description: ""
        })
        id=undefined;
      })
    }
   
  };

  useEffect(()=>{
    if(id){
      axios.get("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear/" + id)
      .then((res)=>{
        console.log(res.data);
        setData({
          title: res.data.title,
          category: res.data.category,
          price: res.data.price,
          mrp: res.data.mrp,
          image: res.data.image,
          uploadimg: res.data.uploadimg,
          brand: res.data.brand,
          color: res.data.color,
          size: res.data.size,
          description: res.data.description

        })
      })
    
    }
  }, [])

  



  return (
    <div>
      <form>
        <div className="container rounded">
          <div className="row pt-2">
            <div className="col-lg-6 mb-3">
              <label for="" className="form-label">Title</label>
              <input onChange={handleChange} value={data.title} type="text" name="title" id="title" className="form-control border border-dark rounded " />
            </div>
            <div className="col-lg-6 mb-3">
              <label for="" className="form-label">Category</label>
              <select onChange={handleChange} value={data.category} type="text" name="category" id="category" className="form-control border border-dark rounded ">
                <option>Choose Category...</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
              </select>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-3 mb-3">
              <label for="" className="form-label">Price</label>
              <input onChange={handleChange} value={data.price} type="number" id="price" name="price" className="form-control border border-dark rounded " />
            </div>
            <div className="col-lg-3 mb-3">
              <label for="" className="form-label">MRP</label>
              <input onChange={handleChange} value={data.mrp} type="number" name="mrp" id="mrp" className="form-control border border-dark rounded " />
            </div>
            <div className="col-lg-3 mb-3">
              <label for="" className="form-label">Image</label>
              <input onChange={handleChange} value={data.image} type="text" name="image" id="image" className="form-control border border-dark rounded " />
            </div>
            <div className="col-lg-3 mb-3">
              <label for="" className="form-label">Upload Image</label>
              <input onChange={handleChange} value={data.uploadimg} type="file" name="uploadimg" id="uploadimg" className="form-control border border-dark rounded " />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-3">
              <label for="" className="form-label">Brand</label>
              <select onChange={handleChange} value={data.brand} type="text" name="brand" id="brand" className="form-control border border-dark rounded ">
                <option>Select Brand...</option>
                <option value="puma">Puma</option>
                <option value="nike">Nike</option>
                <option value="adidas">Adidas</option>
                <option value="bata">Bata</option>
                <option value="other">Other</option>

              </select>
            </div>
            <div className="col-lg-3 mb-3">
              <label onChange={handleChange} value={data.color} for="" className="form-label">Color</label>
              <input type="text" name="color" id="color" className="form-control border rounded " />
            </div>
            <div className="col-lg-3 mb-3">
              <label for="" className="form-label">Size</label>
              <select onChange={handleChange} value={data.size} type="text" name="size" id="size" className="form-control border border-dark rounded ">
                <option>Select Size...</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option valu6="6">6</option>
                <option valu6="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Description</label>
              <textarea onChange={handleChange} value={data.description} name="description" id="description" class="form-control form-control border border-dark rounded" />
            </div>
          </div>
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-outline-info rounded ml-3 mb-3">Submit</button>
      </form>
    </div>
  )
}

export default Addproducts;