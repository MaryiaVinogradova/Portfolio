import React from 'react';
import '../styles/Header.css';

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const headerStyle = {
    anchors: {
      color: '#8e979b',
      textAlign: 'center',
      padding: 0,
      margin: 0,
  
  },
  
}


function Header({ currentPage, changeFunction }) {
  return (
<div className="container mainDiv" id="top-heather">

    <div className="header" style={headerStyle.mainDiv}>
      <ul class="navbar navbar-expand-sm  flex-row align-items-top" id="p-0">

      <li class="b-nav-item" id="margin">
      <div className="btn btn-primary" id="download">
                <p id="margin"> 
                    <a id="link-color" href="https://github.com/Maryia Vinogradova_Full-stack_Jr_2022.pdf" download="Maryia Vinogradova">
                    DOWNLOAD RESUME
                </a>
                </p>
            </div>
      </li>

  
      <li class="b-nav-item">
        <a style={headerStyle.anchors} className="link" href="https://www.linkedin.com/in/maryiavinogradova/"
                target="_blank "><i className="bi" id="icon">
                  <FaLinkedinIn></FaLinkedinIn>
                  </i></a>
        </li>

        <li class="b-nav-item ">
        <a style={headerStyle.anchors} className="link " href="https://github.com/MaryiaVinogradova" target="_blank "><i className="bi" id="icon">
          <FaGithub></FaGithub>
          </i></a>
        </li>

      </ul>
      </div>
</div>
  );
}

export default Header;