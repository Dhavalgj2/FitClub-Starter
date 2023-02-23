import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1n2lhqp",
        "template_sjw43bf",
        form.current,
        "kxxC0Qya3fudaJVv9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr></hr>
        <div>
          <span className="stroke-text">Ready To</span>
          <span>Level up</span>
        </div>
        <div>
          <span>Your body</span>
          <span className="stroke-text">With Us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter Your Email Address"
          />
          <button type="submit" className="btn btn-j">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
