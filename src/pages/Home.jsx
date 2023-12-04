import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home = ({ isUserAuthenticated }) => {
  return (
    <div className="home-page">
      <Header isUserAuthenticated={isUserAuthenticated} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
