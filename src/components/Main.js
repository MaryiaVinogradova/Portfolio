import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';


const Main = () => {


  const [content, setContent] = useState("Home")

  const handleChange = (content) => {
    setContent(content)
  }

  const [hoverActive, setHoverActive] = useState(10)


  const renderSection = () => {
    if (content === "Home") {
      return <Home />
    } 
    else if (content === "Portfolio") {
      return <Portfolio hoverActive={hoverActive} setHoverActive={setHoverActive}
      />
    } 
    else if (content === "Contact") {
      return <Contact />
    } else {
      return <Resume />
    }
  }


  return (
    <>
      <Header
        currentPage={content} changeFunction={handleChange}
      />
      {renderSection()}
      <Footer />
    </>
  )
};

export default Main;