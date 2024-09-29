import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../assets/Img/pp1.jpg";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Card() {
  return (
    <div>
       <div className="flex flex-col justify-around rounded-xl bg-[#dee2e6] hover:bg-white hover:shadow-md object-cover px-10 py-6 h-auto items-center mt-6 ">
        <div className="flex flex-row">
          <img
            className="object-fill rounded-lg"
            style={{ height: 300 }}
            src={hero}
            alt=""
          />
        </div>

        <div className="mt-6 items-center justify-center flex flex-col">
          <div className="items-center justify-center">
            <h1 className="uppercase font-myFont2 font-bold text-2xl text-[#2b2d42]">
              Anubhav
            </h1>
          </div>

          <div className="text-center w-52 mt-4 text-gray-700 font-myFont text-sm">
            <p>
            Front-end developer building, user-friendly websites with modern tech.
            </p>
          </div>

          <div className="mt-5">
            <ul className="mt-2 flex gap-7 text-2xl text-red-500">
              <NavLink >
                <FontAwesomeIcon icon={faInstagram} />
              </NavLink>

              <NavLink>
                <FontAwesomeIcon icon={faTwitter} />
              </NavLink>

              <NavLink>
                <FontAwesomeIcon icon={faLinkedin} />
              </NavLink>

              <NavLink>
                <FontAwesomeIcon icon={faEnvelope} />
              </NavLink>
            </ul>
          </div>
        </div>

      </div>
    </div>

    // <div className="container w-80">
    //   <div className="card">
    //     <div className="image">
    //       <img src={hero} style={{ height: "300px" }} alt="" />
    //     </div>

    //     <div className="content">
    //       <h1 className="uppercase font-myFont2 font-bold text-2xl text-[#2b2d42]">
    //         Anubhav
    //       </h1>
    //       <p>
    //         Front-end developer building, user-friendly websites with modern
    //         tech
    //       </p>
    //       <div className="mt-3">
    //       <ul className="mt-2 flex gap-7 text-2xl text-red-500">
    //         <NavLink>
    //           <FontAwesomeIcon icon={faInstagram} />
    //         </NavLink>

    //         <NavLink>
    //           <FontAwesomeIcon icon={faTwitter} />
    //         </NavLink>

    //         <NavLink>
    //           <FontAwesomeIcon icon={faLinkedin} />
    //         </NavLink>

    //         <NavLink>
    //           <FontAwesomeIcon icon={faEnvelope} />
    //         </NavLink>
    //       </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
