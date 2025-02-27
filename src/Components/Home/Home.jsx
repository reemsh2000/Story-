import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "./Footer";
import "../../css/home.css";
import NameInput from './NameInput'
function Home() {
  return (
    <Fragment>
      <Nav />
      <div className="welcome-conatiner">
        <div className="main">
          <div className="left">
            <h1> FOREST STORIES </h1>
            <p> When grace is lost from life,come with a burst of song.</p>
            <p> You can select your characters then start write your stories</p>
             <NameInput/>
            <Link to="/characters">Lets Start</Link>
          </div>
          <img
            className="main-img"
            src="../../utils/utils/WhatsApp Image 2025-02-27 at 23.42.29.jpeg"
            alt="img"
          />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Home;
