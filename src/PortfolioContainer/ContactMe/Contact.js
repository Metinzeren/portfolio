import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const notify = () => {
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("email").value === "" ||
      document.getElementById("message").value === ""
    ) {
      toast.error("Please fill all the fields");
    }
    if (document.getElementById("email").value.indexOf("@") === -1) {
      toast.error("Please enter a valid email");
    } else 
    toast.success("Message Sent Successfully")
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0mxtwx9",
        "template_gru8wvv",
        form.current,
        "AhkNtUIUd6yw3pEbL"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <Fade>
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>
        <div className="container">
          <div className="contact-mid">
            <div className="row">
              <div className="d-flex justify-content-center">
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="form-item">
                      <label>Name</label>
                      <input id="name" type="text" name="user_name" />
                    </div>
                    <div className="form-item">
                      <label>Email</label>
                      <input id="email" type="email" name="user_email" />
                    </div>
                    <div className="form-item">
                      <label>Message</label>
                      <textarea
                        id="message"
                        name="message"
                      />
                    </div>
                    <div className="contact-button form-item">
                      <input 
                      onClick={notify} type="submit" value="Send" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};
