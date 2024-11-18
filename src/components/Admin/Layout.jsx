import React, { useEffect } from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'

function Layout() {

  let navigate = useNavigate();

  function logout(){
    localStorage.clear()
  }

  useEffect(() => {
    window.scrollTo(0, 0)

    const id = localStorage.getItem("id")
    const password = localStorage.getItem("pass")
    const checkedAdminLoggedIn = () => {
      return id === "admin" && password === "suraj"
    }
    if (!checkedAdminLoggedIn()) {
      navigate("/adminlogin")
    }
  }, [])
  
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-2 border border-right-secondary rounded">
      <nav className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-2 mt-4">
            <Link to={"/admin"}>
            <a className="list-group-item list-group-item-action py-2 ripple"><span>Dashboard</span></a>
            </Link>

            <Link to={"/admin/addproduct"}> 
            <a className="list-group-item list-group-item-action py-2 ripple"><span>Add Product</span></a>
            </Link>
            <Link to={"/admin/products"}>
            <a className="list-group-item list-group-item-action py-2 ripple">Products</a>
            </Link>
            <Link to={"/"}>
            <a className="list-group-item list-group-item-action py-2 ripple" onClick={logout}>
              Logout
            </a>
            </Link>
          </div>
        </div>

      </nav>
      </div>
      <div className="col-lg-10">
        <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default Layout