import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Register() {

    let navigate = useNavigate();

    const [user, setUser] = useState({
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      password:""
    });
  
    const { firstName, lastName, email,
    phone, password } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post("http://localhost:8080/user", user);
      if(res.status===200){
        alert("Succefully Done")
        console.log("success");
        navigate("/");
      }
    };

  return (
    <div>
    {/* Section: Design Block */}
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
          height: "300px",
        }}
      />
      {/* Background image */}
      <div
        className="card mx-4 mx-md-5 shadow-5-strong"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <form onSubmit={(e) => onSubmit(e)}>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        name="firstName"
                        value={firstName} 
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example1">
                        First name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example2"
                        className="form-control"
                        name="lastName"
                        value={lastName} 
                        onChange={(e) => onInputChange(e)}
                        required
                      />
                      <label className="form-label" htmlFor="form3Example2">
                        Last name
                      </label>
                    </div>
                  </div>
                </div>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    name="email"
                    value={email} 
                    onChange={(e) => onInputChange(e)}
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

               


                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control"
                    name="phone"
                    value={phone} 
                    onChange={(e) => onInputChange(e)}
                    required
                    
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Mobile Number
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    name="password"
                    value={password} 
                    required
                    onChange={(e) => onInputChange(e)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                {/* Submit button */}
                
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  
                >
                  Sign up
                </button>
                <br />
                <Link  to={"/"}>
                <button
                  className="btn btn-primary btn-block mb-4"
                  
                >
                  Login
                </button>
                </Link>
                
                
                
                {/* Register buttons */}
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Section: Design Block */}
  </div>
  )
}