import axios from "axios";
import React, { Component, useState } from "react";
import { Modal, Button} from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";




export default function Login() {
  
  const navigate = useNavigate();

  const [teamLogin, setTeamLogin] = useState({
      email: "",
      password: ""
  });
  const [modalOpeningStatus, setModalOpeningStatus] = useState(false);
  const [modalOpeningStatus1, setModalOpeningStatus1] = useState(false);

  const openDialog = () => {
      setModalOpeningStatus(true);
  };

  const closeDialog = () => {
      setModalOpeningStatus(false);
  };

  const openDialog1 = () => {
      setModalOpeningStatus1(true);
  };

  const closeDialog1 = () => {
      setModalOpeningStatus1(false);
  };

  const handleChange = (e) => {
      setTeamLogin({ ...teamLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
        const response = await axios.post("http://localhost:8080/userlogin", teamLogin);
        console.log(response.data);
        //const user = response.data;
        if (response.status === 200) {
            if (response.data != "") {
                if (response.data.email) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    console.log(JSON.parse(localStorage.getItem("user")));
                    
                    return handlePath();
                } else {
                    openDialog();
                    return;
                }
            } else {
                openDialog();
                return;
            }
          }
    } catch (error) {
        openDialog();
    }
     
   
      
    
    
   
    
  };

  const handlePath= () => {
   
      return navigate('/home');
    
  }

    return (
      <div>
         {/* <header id="intro" >
            <div className="container align-items-center "  >
                  <div className="col m-3">
                    <h1 className="mt-2 align-content-center">
                      Welcome To Recruit
                    </h1>
                  </div>
            </div>
          </header> */}
          <Navbar/>
        <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card" style={{ borderRadius: "1rem" }}>
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                      <img
                        src="https://www.urdesignmag.com/wp-content/uploads/2020/07/get-the-best-rental-cars-at-discount-rates-in-uae-3.jpg"
                        alt="login form"
                        className="img-fluid mt-2"
                        style={{ borderRadius: "1rem 0 0 1rem" }}
                      />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form onSubmit={handleSubmit}>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i
                              className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#ff6219" }}
                            />
                            <span className="h1 fw-bold mb-0"></span>
                          </div>
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form2Example17"
                              name="email"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example17"
                            >
                                Email
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              id="form2Example27"
                              name="password"
                              onChange={handleChange}
                              className="form-control form-control-lg"
                              required
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example27"
                            >
                              Password
                            </label>
                          </div>
                          <div className="pt-1 mb-4">
                            
                            <button
                              className="btn btn-dark btn-lg btn-block"
                              type="submit"
            
                            >
                              Login
                            </button>
                          </div>
                         
                          <p
                            className="mb-5 pb-lg-2"
                            style={{ color: "#393f81" }}
                          >
                            Don't have an account?{" "}
                            <Link to={"/register"} style={{ color: "#393f81" }}>
                              Register here
                            </Link>
                          </p>
                          
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
           
          </div>
          <Modal show={modalOpeningStatus} onHide={closeDialog}>
            <Modal.Header closeButton>
              <Modal.Title>Invalid Credentials</Modal.Title>
            </Modal.Header>
            <Modal.Body>Check Your Email And Password</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={closeDialog}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={modalOpeningStatus1}
            onHide={closeDialog1}
          >
            <Modal.Header closeButton>
              <Modal.Title>Login Successfully</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h3>Done</h3>
              <br />
              <Link to={"/institutehome"}>
                <Button className="btn btn-primary">
                  Go to Home
                </Button>
              </Link>
                
              
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={closeDialog1}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
      </div>
    );
  }


