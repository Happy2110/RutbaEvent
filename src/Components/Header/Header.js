import React from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { useState } from "react";
import { navLinkData } from "../../Constants";
function Header() {
  const [input, setInput] = useState("")

  return (
    <>
      <center>
        <img src="logo.jpeg" alt="RUTBA EVENT" />
      </center>
      <nav className="navbar">
        <ul className="unorderedList">
          {navLinkData.map(({ id, title, link }) => (
            <li key={id}>
              <Link 
              activeClass="active"
               to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}

              >
                {" "}
                {title}
              </Link>
            </li>
          ))}

          <li>
            <div className="searchbox">
              <input
                className="searchspace"
                type="text"
                value={input}
                placeholder="Search Here"
                onChange={(e) => setInput(e.target.value)}
              />

              <button type="button" className="close" onClick={() => (setInput(""))}>
                {" "}
                X{" "}
              </button>
              <button type="button" className="submit">
                Submit{" "}
              </button>
            </div>
          </li>
          <li>
            <div className="left-box">
              <button className="login">Login</button>
              <button className="signup">Sign up</button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
