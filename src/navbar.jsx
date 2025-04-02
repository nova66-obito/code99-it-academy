import React , { useState } from 'react';
import './nav.css'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-router-dom"
export default function Nav(){
    const [open, setOpen] =useState(true);
    const click = () =>{
        setOpen(!open);
    }
    return(
        <>
         <header>
          <nav className="main">
             <div className="nav-cover nav-cover1">
                 <h2 >logo</h2>
             </div>
             <div className={`nav-cover nav-cover2 d-flex gap-4 ${open ? 'up' : 'down'}`}>
                <Link to="/">home</Link>
                <Link to="/about">about</Link>
                <a href="#course">course</a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform">admission</a>
                <Link to="/contact">contact us</Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform"><button>enroll now</button></a>
             </div>
             <div className="nav-cover nav-cover3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform"><button>enroll now</button></a>
             </div>
             <h1 className={`${open ? 'roll' : null}`} onClick={click}>{open ? <FaBars/> : <IoCloseSharp />}</h1 >
          </nav>
          </header>
        </>
    )
}