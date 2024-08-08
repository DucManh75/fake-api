import "./Login.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Vui lòng không để trống");
    } else {
      const user = JSON.parse(localStorage.getItem(email));
      if (user && user.email === email && user.password === password) {
        alert("Đăng Nhập Thành Công");
        navigate("/");
      } else {
        alert("Đăng Nhập Thất Bại");
      }
    }
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <form onSubmit={handleLogin}>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Your Email</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                      <input
                        id="form3Example4cg"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">Password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account yet?
                      <a href="/register" className="fw-bold text-body">
                        <u>&nbsp;Register for free</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
