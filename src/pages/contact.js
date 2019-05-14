import React from "react";

const Contact = () => (
  <React.Fragment>
    <div className="columns">
      <div className="column is-one-third">
        <div className="contact-text">
          <h2>Contact us</h2>
        </div>
        <div className="contact-body">
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
            efficitur leo, eget efficitur turpis. Vivamus tincidunt lobortis
            enim id semper. Sed efficitur felis eu justo pellentesque, at
            dapibus lorem eleifend. Cras elit sapien, eleifend eu facilisis sit
            amet, accumsan at mauris. Sed tempus nulla sit amet quam ornare, nec
            congue diam semper. Nullam placerat dapibus tincidunt. Quisque
            tristique, nisi et malesuada aliquam, purus ante consectetur purus,
            in efficitur magna arcu euismod arcu. Nullam mauris justo, egestas
            et quam non, fermentum consequat ante. Sed ex enim, dictum vel metus
            vel, egestas tempor nisi. Nullam eget lorem neque. Integer sit amet
            sagittis metus, id venenatis est. Integer sit amet massa pharetra,
            congue est lacinia, efficitur enim. Donec nec elit a purus dignissim
            fermentum. Nunc auctor ac nisl in porttitor. Vestibulum ultricies
            eleifend libero sit amet venenatis. In eget leo nec diam lobortis
            faucibus.{" "}
          </p>
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

                  <div className="control-group" id="messageBox">
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
