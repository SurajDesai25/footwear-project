import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Adminlogin() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false)



  useEffect(() => {
    window.scrollTo(0, 0)

    const id = localStorage.getItem("id")
    const password = localStorage.getItem("pass")
    const checkedAdminLoggedIn = () => {
      return id === "admin" && password === "suraj"
    }
    if (checkedAdminLoggedIn()) {
      navigate("/admin")
    }
  }, [])


  function handleSubmit(e) {
    e.preventDefault()
    if (userName === "admin" && password === "suraj") {
      navigate("/admin")
      localStorage.setItem("id", userName)
      localStorage.setItem("pass", password)
    } else {
      Swal.fire({
        icon: "error",
        // title: "Oops...",
        text: "Please Enter Valid Credentials",

      });
    }


  };

  return (
    <div>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center shadow bg-body-tertiary rounded" style={{ backgroundImage: `url(https://img.freepik.com/premium-photo/colorful-shoe-realistic-ai-generated_647611-433.jpg)`, backgroundSize: 'cover' }}>

                  <div className="mb-5"><img src={require("../../assets/images/admin-logo-removebg-preview.png")} style={{ width: "170px" }} alt="Admin" />

                  </div>
                  <form>

                    <div data-mdb-input-init className="form-outline mb-4 text-white">
                      <label className="form-label" for="typeEmailX-2">Admin</label>
                      <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} className="form-control form-control-lg rounded" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4 text-white">
                      <label className="form-label" >Password</label>
                      <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control form-control-lg rounded" />
                    </div>

                    {/* <!-- Checkbox --> */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input className="form-check-input" type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                    </div>
                  </form>

                  <button onClick={handleSubmit} data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Adminlogin;