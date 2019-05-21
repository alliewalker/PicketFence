import React from "react";

const Home = () => (
  <React.Fragment>
    <div className="fenceImg">
      <img
        src={require("../../assets/fence.jpg")}
        className="fence1"
        style={{ height: "250px" }}
      />
    </div>
    <div className="home-logo">Picket Fence Entertainment</div>
  </React.Fragment>
);

export default Home;
