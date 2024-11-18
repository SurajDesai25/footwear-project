import React from 'react'

function Dashboard() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 m-3">
          <div className="card" style={{width: "18rem", borderRadius: "40px", backgroundColor: "rgb(136, 200, 188)"}}>
            <div className="card-body"><h5 className="display-5 fw-bold text-center"><i className="fa-solid fa-users fa-2x"></i>
          </h5><hr className="my-4"/>
          <div className="text-center">
            <button className="btn btn-outline-secondary" style={{color: "black", width: "100px"}}>Users</button>
            </div>
            </div>
            </div>
          </div>

          <div className="col-lg-3 m-3">
            <div className="card" style={{width:"18rem", borderRadius:"40px", backgroundColor:"rgb(136, 200, 188)"}}>
              <div className="card-body">
                <h5 className="display-5 fw-bold text-center"><i className="fa-solid fa-bag-shopping fa-2x"></i></h5><hr className="my-4" />
                <div className="text-center">
                <button className="btn btn-outline-secondary" style={{color: "black", width:"100px"}}>Products</button>
                </div>
              </div>
            </div>
          </div>

        <div className="col-lg-3 m-3">
          <div className="card" style={{width: "18rem", borderRadius:"40px", backgroundColor: "rgb(136,200,188)"}}>
            <div className="card-body">
              <h5 className="display-5 text-center"><i className="fab fa-first-order fa-2x"></i></h5> <hr className="my-4" />
              <div className="text-center">
                <button className="btn btn-outline-secondary" style={{color:"black", width:"100px"}}>Orders</button>
              </div>
            </div>
          </div>
        </div>

        </div>


      </div>

    </div>
  )
}

export default Dashboard