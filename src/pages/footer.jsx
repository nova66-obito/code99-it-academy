import React from "react";
import { Link } from "react-router-dom";
import { PiStudentFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { IoIosFastforward } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
import "./footer.css"
export default function Footer(){
   return(
    <>
      <footer className="center">
         <div className="f-cover center">
            <div className="f-text f-al">
               <h1>code99</h1>
               <p>these sections can be adjusted based on the target audience and the cloud</p>
            </div>
            <div className="f-navigation f-al">
                <b>navigation</b>
                <Link to="/"><FaHome /> home</Link>
                <Link to="/about"><FaClipboardQuestion /> about us</Link>
                <a href="#course"><PiStudentFill />course</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform"><IoIosFastforward /> admission</a>
                <Link to="/contact"><IoMdContact /> contact us</Link>
            </div>
            <div className="f-media f-al">
                <b>social</b>
                <a href=""><FaFacebook /> facebook</a>
                <a href=""><FaInstagram /> instagram</a>
                <a href=""><FaLinkedin /> linkedin</a>
                <a href=""><FaTwitter /> twitter</a>
            </div>
            <div className="git">
                <b>get in touch</b>
                <p><FaLocationArrow/> no 116,1st floor,sarathy nagar,opp to vijaya nagar,velachery,chennai 600-042</p>
                <p><IoMdContact/> +91 63 74 51 07 54</p>
                <p><CgMail/> code99itacademy@gmail.com</p>
            </div>
         </div>
         <div className="lic center">
            <h5 className="text-light">copyright © 2025 code99 | all right reserved</h5>
         </div>
      </footer>
    </>
   )
}