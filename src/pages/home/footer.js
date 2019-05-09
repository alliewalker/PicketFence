import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <span className="is-active" id="social">
              <i className="fab fa-facebook-f fa-2x" />
              <i className="fab fa-instagram fa-2x" />
              <i className="fab fa-twitter fa-2x" />
            </span>
          </p>
          <p>
            Picket Fence Entertainment does not accept any unsolicited materials
            of any kind. Any such materials will be destroyed.
          </p>
          <p>
            <span className="is-active">
              &copy; 2019 Picket Fence Entertainment
            </span>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
