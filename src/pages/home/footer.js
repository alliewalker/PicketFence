import React, { Component } from "react";
import "../css/footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Picket Fence Entertainment does not accept any unsolicited materials
            of any kind. Any such materials will be destroyed.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
