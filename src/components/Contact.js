import React, { useState } from "react";
import contactimg from "../assets/img/contact-img.svg";
import axios from "axios";

function Contact() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [buttonText, setButtonText] = useState("Send");

  const handleInputChange = (category, e) => {
    setFormData({
      ...formData,
      [category]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setTimeout(() => {
      setButtonText("Send");
      setFormData(initialFormData)
    }, 2000);
    await axios
      .post("http://localhost:5000/contact", formData)
      .then((res) => {
        console.log(res, "resssss");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="row">
          <h1 className="contact-header">Contact me</h1>
          <div className="col-12 col-md-6">
            <img
              src={contactimg}
              className="contact-img img-fluid"
              alt="contact"
            />
          </div>
          <div className="col-12 col-md-6">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="firstNameInput" className="form-label">
                  Firstname
                </label>
                <input
                  onChange={(e) => handleInputChange("firstName", e)}
                  type="text"
                  className="form-control"
                  id="firstNameInput"
                  value={formData.firstName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastNameInput" className="form-label">
                  Lastname
                </label>
                <input
                  onChange={(e) => handleInputChange("lastName", e)}
                  type="text"
                  className="form-control"
                  id="lastNameInput"
                  value={formData.lastName}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneInput" className="form-label">
                  Phone no.
                </label>
                <input
                  onChange={(e) => handleInputChange("phone", e)}
                  type="tel"
                  className="form-control"
                  id="phoneInput"
                  value={formData.phone}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputEmail" className="form-label">
                  Email address
                </label>
                <input
                  onChange={(e) => handleInputChange("email", e)}
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  value={formData.email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="textarea" className="form-label">
                  Message
                </label>
                <textarea
                  onChange={(e) => handleInputChange("message", e)}
                  id="textarea"
                  value={formData.message}
                />
              </div>
              <button type="submit" className="contact-btn">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
