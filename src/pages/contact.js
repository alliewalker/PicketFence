import React from "react";

const Contact = () => (
  <div className="contact">
    <h2>CONTACT ME</h2>
    <section className="container" id="contact">
      <div className="columns is-centered">
        <form
          className="column is-half"
          action="https://formspree.io/gaballar@gmail.com"
          method="POST"
        >
          <div className="inputs">
            <div className="control-group">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  id="name"
                  required
                  data-validation-required-message="Please enter your name"
                  name="name"
                />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="control-group">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  id="email"
                  required
                  data-validation-required-message="Please enter your email"
                  name="_replyto"
                />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="control-group">
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  id="message"
                  required
                  data-validation-required-message="Please leave a message"
                  name="message"
                />
                <p className="help-block text-danger" />
              </div>
            </div>

            <div className="text-center">
              <div id="success" />
              <button type="submit" className="btn btn-outline-secondary">
                Send Message <i className="far fa-paper-plane" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
);

export default Contact;
