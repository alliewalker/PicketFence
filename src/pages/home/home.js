import React from "react";

const Home = () => (
  <React.Fragment>
    <div className="fenceImg">
      <img
        src={require("../../assets/fence.png")}
        className="fence1"
        style={{ height: "200px" }}
      />
    </div>
    <div className="home-logo">Picket Fence Entertainment</div>
  </React.Fragment>
);

export default Home;
