import React from 'react';
import '../styles/bio.css';

import '../styles/Contact.css';
import Contact from './Contact';
import Header from './Header';
import Portfolio from './Portfolio';

import { FaJava } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5"
import { MdOutlineWorkOutline } from "react-icons/md"
import { MdCastForEducation } from "react-icons/md"

function bio() {


    return (
        <div class="full-height p-0">
  
        <div className="container d-flex p-0 justify-content-center">
          <div clasName="col-3 m-0 p-0" id='text-center'>
               <ul className="p-for-about-me text-center"> 
               <li id="hello">Hi, I'm</li>
               <li id="maryia">MARYIA </li>
               <li id="hello-sm">Full-Stack</li>
               <li id="hello-sm">Web Developer</li>
               </ul> 
          </div>
            
          <div className='col-9 p-0 w-100'>
          <Header></Header>
          <br></br>

             <img id="image" alt="my portrait" src="https://github.com/MaryiaVinogradova/Portfolio/blob/main/src/images/Vinogradova_Maryia-52.jpg?raw=true"/> 
          </div>
        </div>
         
        <div className='row p-0'id="about">
          <div className='col-3 p-0'>
            <div>
              ABOUT ME
            </div>
          </div>

          <div className='col-1 p-0' id="grey">
          
            {/* <div >
            <li><IoPersonCircleOutline></IoPersonCircleOutline></li>
            </div> */}

            <img src="Capture_JPG (1).webp"></img>
      
          </div>

          <div className='col-8 p-0'>
            <div id="bio">
              urflbaecsbflea jW gwdguyergvueyrgf aieucbie aegcdbiwebc ajwyedgbuwyegd uyewdgcbyegd 
            </div>
          </div>
        </div>

    <div className="sidebar">

      <li class="b-nav-item ">
       <a 
       href="#bio" id="style"
       >About Me</a>
      </li>

      <li class="b-nav-item ">
       <a 
       href="#skills" id="style"
       >Skills</a>
      </li>

      <li class="b-nav-item ">
       <a 
       href="#work" id="style"
       >Work</a>
      </li>

      <li class="b-nav-item ">
       <a 
       href="#education" id="style"
       >Education</a>
      </li>

      <li class="b-nav-item ">
       <a 
       href="#contact" id="style"
       >Contact Me</a>
      </li>

    </div>
               

         <div className='row p-0 d-flex' id="skills">
         <div className='col-3 p-0'>
            <div>
              SKILLS
            </div>
          </div>

          <div className='col-1 p-0'>
                  <li>
                  <FaJava></FaJava>
                  </li> 
                  <li>
                  <FaCss3></FaCss3>
                  </li> 
                  <li>
                  <FaReact></FaReact>
                  </li>
          </div>

          <div className='col-8 p-0'>
                  <li>
                   JavaScript
                  </li> 
                  <li>
                    CSS
                  </li> 
                  <li>
                    REACT
                  </li>
          </div>
          
         </div>

         <div className='row' id="work">
         <div className='col-3'>
            <div>
              WORK SAMPLES
            </div>
          </div>

          <div className='col-2'>
            <div>
              <MdOutlineWorkOutline></MdOutlineWorkOutline>
            </div>
          </div>

          <div className='col-7'>
          <Portfolio></Portfolio>
          </div>
         </div>

         <div className='row' id="education">
         <div className='col-5'>
              EDUCATION
          </div>

          <div className='col-2'>
              <MdCastForEducation></MdCastForEducation>
          </div>

          <div className='col-5'>
            <div>
              DU Bootcamp
            </div>
          </div>
         </div>

     <Contact></Contact>

    </div>
    )

}

export default bio;


