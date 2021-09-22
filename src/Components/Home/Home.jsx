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
            src="https://media.discordapp.net/attachments/857145728917045328/889969275069149264/2_1-01.png?width=618&height=458"
            alt="img"
          />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Home;
