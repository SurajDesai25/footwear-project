import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

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
  }, [navigate])
  
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-lg-2 border border-right-secondary rounded">
      <nav className="collapse d-lg-block sidebar collapse">
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-2 mt-4">
            <Link to={"/admin"}>
            <Link className="list-group-item list-group-item-action py-2 ripple"><span>Dashboard</span></Link>
            </Link>

            <Link to={"/admin/addproduct"}> 
            <Link className="list-group-item list-group-item-action py-2 ripple"><span>Add Product</span></Link>
            </Link>
            <Link to={"/admin/products"}>
            <Link className="list-group-item list-group-item-action py-2 ripple">Products</Link>
            </Link>
            <Link to={"/"}>
            <Link className="list-group-item list-group-item-action py-2 ripple" onClick={logout}>
              Logout
            </Link>
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