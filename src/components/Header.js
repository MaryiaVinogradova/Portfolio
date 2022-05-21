import React from 'react';
import '../styles/Header.css';


const headerStyle = {
    mainDiv: {
      
      backgroundSize: "cover",
      justifyContent: 'left',
      alignItems: 'center',


  },
    anchors: {
      fontSize: '20px',
      color: '#8e979b',
      textAlign: 'center',
  }


}


function Header({ currentPage, changeFunction }) {
  return (
    <div class="container" id="gradient">

    <div className="header row align-items-left" style={headerStyle.mainDiv}>
      <a style={headerStyle.anchors}
        onClick={() => changeFunction("AboutMe")}
        className={currentPage === "AboutMe" ? "nav-link col-2 active" : "nav-link col-2"}
      >About me</a>

      <a style={headerStyle.anchors}
        onClick={() => changeFunction("Portfolio")}
        className={currentPage === "Portfolio" ? "nav-link col-2 active" : "nav-link col-2"}
      >Portfolio</a>

      <a style={headerStyle.anchors}
        onClick={() => changeFunction("Contact")}
        className={currentPage === "Contact" ? "nav-link col-2 active" : "nav-link col-2"}
      >Contact</a>

      <a style={headerStyle.anchors}
        onClick={() => changeFunction("Resume")}
        className={currentPage === "Resume" ? "nav-link col-2 active" : "nav-link col-2"}
      >Resume</a>
      </div>



      {/* <h1 className=" col-4">
        Maryia Vinogradova
      </h1> */}


    </div>
  );
}

export default Header;