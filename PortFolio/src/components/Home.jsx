import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card";
// import Home from "./Home.css"
// import hero from "../assets/Img/pp1.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faLinkedin,
//   faTwitter,
// } from "@fortawesome/free-brands-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="flex flex-row justify-center px-6">
     <Card/>

      <div className="flex flex-col px-6 text-white box-border" >
          <div className="  p-8 h-auto items-center mt-10">
              <h1 className="text-white text-7xl font-myFont2 uppercase ">
                <div>
                  <span className="hover:animate-spin">F</span>
                  <span>r</span>
                  <span>o</span>
                  <span>n</span>
                  <span>t</span>
                  <span>-</span>
                  <span>E</span>
                  <span>n</span>
                  <span>d</span>
                </div>
              </h1>
          </div>

          <div className=" text-xl ml-9 text-gray-400 font-sans " style={{width: "30em"}}>
            <p>Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.</p>
          </div>

          <button class="flex justify-center text-lg bg-gray-300 hover:shadow-2xl text-[#2b2d42] font-bold py-4 px-14  rounded-lg mt-12 w-24 ml-9">
            Resume
          </button>
      </div>

          
    </div>
  );
}

export default Home;



// Have to setup Navlink Tags also optimize the style 
