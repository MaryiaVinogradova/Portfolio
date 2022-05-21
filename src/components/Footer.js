import React from 'react';
import '../styles/Footer.css'


function Footer() {

    return (
   <div class="foot-center">   
    <div class="footer-row" id="container-footer">
        <div className="footer align-items-center">
            <a className="contact-links col-1" href="https://github.com/MaryiaVinogradova" target="_blank"><i
                className="bi bi-github" id="icon"></i></a>

            <a className="contact-links col-1" href="https://www.linkedin.com/in/maryiavinogradova/"
                target="_blank"><i className="bi bi-linkedin" id="icon"></i></a>

        </div>
    </div>
   </div>   
    );
}

export default Footer;