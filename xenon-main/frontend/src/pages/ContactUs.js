import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function ContactUs(props) {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
};

const handleSubmit = async (event) => {
    
  event.preventDefault();
  try {
    console.log(contact);
      const response = await axios.post("http://localhost:8080/contact/add", contact);
      console.log(response.data);
      alert(response.data)
  }
  catch{
    alert("Error");
  }
};
  return (
    <div>
      <Navbar />
      <header id="contact-header">
        <div id="contact" className="container align-items-center ">
          <div className="col m-3">
            <h1 className="mt-2 align-content-center">Contact Us</h1>
          </div>
        </div>
      </header>
      <div className="container mt-5 align-items-center">
        <h3 style={{ textAlign: "center" }}>Let's Start a Conversation.</h3>

        <div className="container-fluid mt-5 row align-items-center">
          <div className="container col-6">
            <form className="text-center border border-light p-5" onSubmit={handleSubmit}>
              <p className="h4 mb-4">Contact us</p>
              <input
                type="text"
                id="defaultContactFormName"
                className="form-control mb-4"
                name="name"
                placeholder="name"
                onChange={handleChange}
              />
              <input
                type="email"
                id="defaultContactFormEmail"
                className="form-control mb-4"
                name="email"
                placeholder="email"
                onChange={handleChange}
              />

              <div className="form-group">
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows={3}
                  placeholder="message"
                  name="message"
                  onChange={handleChange}
                  defaultValue={""}
                />
              </div>

              <button className="btn btn-info btn-block mt-4" type="submit">
                Send
              </button>
            </form>
          </div>
          <div className="container col-6 map1">
            <div className="row-6 justify-content-center d-flex">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30158.70774588553!2d72.85098084711525!3d19.114741022188095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61b41dfb131%3A0xa668297563ddac31!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1670424130777!5m2!1sen!2sin"
                width={400}
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className=" row-6 ">
              <div
                className="row"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "50%",
                }}
              >
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" />
                  SANTCRUZ, MUMBAI 400010, MH
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> + 01 234
                  567 88
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" /> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Do i have to return the car to the same location where i
                    picked it up?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    For all the bookings, return the Rentself Car to its pick-up
                    location. If you leave Rentself Car away from your Pick-up
                    location, you will be charged up to INR 10,000 in wrong
                    location drop penalties + Car recovery expenses incurred by
                    Rentself until the vehicle is returned to the correct
                    location. Late fees will also be charged at the effective
                    hourly booking rate.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Can i book for any period of time?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    You can book cars by the hour, day, week, or month. You can
                    book them 60 days in advance. The minimum reservation period
                    for regular bookings is 8 hours.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What happens if i return the car late?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    A high penalty will be applicable for the amount of time you
                    are late. In order to avoid paying this penalty, you can
                    extend the booking from the app, well in advance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ContactUs.propTypes = {};

export default ContactUs;
