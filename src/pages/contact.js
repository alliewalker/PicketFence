import React from "react";

const Contact = () => (
  <React.Fragment>
    <div className="columns">
      <div className="column is-one-third">
        <span className="contact-text">
          <h2>CONTACT</h2>
        </span>
        <div className="contact-body">
          <p>Contact text if its necessary, I dont know. </p>
        </div>
      </div>

      <div className="column is-three-quarters">
        <div className="contact">
          <section className="container" id="contact">
            <div className="columns">
              <form
                className="column is-three-quarters"
                action="https://formspree.io/gaballar@gmail.com"
                method="POST"
              >
                <div className="inputs">
                  <div className="control-group">
                    <div className="form-group">
                      <input
                        required="true"
                        type="text"
                        className="input"
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
                        required="true"
                        type="email"
                        className="input"
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
                        className="input"
                        rows="4"
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
                    <button type="submit" className="button">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Contact;
