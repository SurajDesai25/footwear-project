import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Products() {




  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [loading, setLoading] = useState(true);



  function loadData() {
    setLoading(true)
    axios.get("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear/")
      .then((res) => {
        // console.log(res.data);
        setNewData(res.data);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        setLoading(false);
      })
  };

  useEffect(() => {
    loadData();
  }, [])

  function handleDelete(id) {

    axios.delete("https://65af47b62f26c3f2139a5a37.mockapi.io/Footwear/" + id)
      .then((res) => {
        // loadData();
        // alert(id)
        console.log(res.data);
        loadData();

      }).catch((error) => {
        console.log(error);

      })
  };


  return (
    <div className="container-fluid">
      <div className="row t-responsive">
        <div className="col-lg-10">
          {loading ?
            (<div className="text-center mt-3">
              <div className="spinner-border text-primary"></div>
              <h1>Loading...</h1>
            </div>)
            :
            (<table className="table table-hover table-responsive">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Brand</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">MRP</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  newData.map((eachData, i) => {
                    return (
                      <tr key={eachData.id}>
                        <td scope="row">{i + 1}</td>
                        <td>
                      
                          <img src={eachData.image} style={{ width: "80px", height: "80px" }} alt="" />
                        
                          </td>
                        <td>{eachData.title} </td>
                        <td>{eachData.brand} </td>
                        <td>{eachData.category} </td>
                        <td>{eachData.price} </td>
                        <td>{eachData.mrp}</td>
                        <td>
                          <Link to={"/admin/addproducts/" + eachData.id}>
                            <button className="btn btn-outline-success rounded">Edit</button>
                          </Link>
                          <button onClick={() => handleDelete(eachData.id)} className="btn btn-outline-danger rounded">Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>)}
        </div>
      </div>

    </div>
  )
}

export default Products;