import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import pic from '../assets/img-spl-2.png'
import "./about.css";
import { Link } from "react-router-dom";
import Profbox from "./profbox";
import Coursebox from "./course-box";
import Aboutimg from "./about-img";
import Pic2 from '../assets/prof3.png';
import pic3 from '../assets/prof2.png';
import Rock from '../assets/rocket-full.png';
import pro2 from "../assets/pic2.png";
import pro1 from "../assets/pic1.png";
import pro3 from "../assets/pic3.png";
import pro4 from "../assets/pic4.png";
import Learn from "./learning";
import Footer from "./footer"
import { IoBookOutline } from "react-icons/io5";
import { RiMacbookLine } from "react-icons/ri";
 export default function About(){
  let [val,setval] = useState("")
  let call =(cl)=>{
    switch(cl){
      case '1':
        return setval("one");
      case '2':
        return setval("two") ;
      case '3':
        return setval("three");
    }
   }
   console.log(val)
    
    return(
        <>
         <main>
           <Nav/>
           <section className="about-link">
            {/*header*/}
             <header className="center a-home">
              <div className="text text1">
                <h4>learn. learn again... learn better....</h4>
                <div className="big-font">
                   <h1>
                     india's 1st institute to give
                     free it training.   
                   </h1>    
                   <div className="click d-flex gap-3 pt-2">
                     <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform">join now</a></button>
                     <button className="lk2"><Link to="/contact">contact us</Link></button>
                   </div>
                </div> 
              </div>
              {/* pic */}
                <div className="a-pic center">
                    <div className="rounder">
                        <div className="min-round"><b>html</b></div>
                        <div className="min-round"><b>java</b></div>
                        <div className="min-round"><b>ui/ux</b></div>
                        <div className="min-round"><b>css</b></div>
                        <div className="min-round"><b>SEO</b></div>
                    </div>
                    {/* this for the black round */}
                    <div className="round2"></div>
                    {/* this for the image */}
                    <div className="round-pic">
                         <img src={pic} alt="profile image" />     
                    </div>
                </div>
              </header>
              {/* -------------------------------------------------------------------------------- */}
              {/* this for the about-us */}
              <div className="a-about center">
                  <div className="apage-text center apage-text1">
                    {/* first box row */}
                    <div className="row-img r-img1 center gap-3">
                       <div className="min-pic m-pic">
                           <img src={pic3} alt="profile pic" />
                       </div>
                      <Aboutimg val={"</>"}/>
                      <div className="m-pic min-pic m-pic1">
                           <img src={Pic2} alt="profile pic" />
                       </div>
                    </div>
                    {/* sec box row */}
                    <div className="center gap-3 row-img r-img2">
                    <Aboutimg val={"UI/UX"}/>
                    <div className="min-pic m-pic2">
                           <img src={pic} alt="profile pic" />
                     </div>
                    <Aboutimg val={"CSS"}/>
                    </div>
                  </div>
                  {/* this for the text */}
                  <div className="apage-text apage-text2">
                    <div className="pg">
                    <h4>about us</h4>
                     <h1>code99 it academy-your guaranted path to it success</h1>
                     <p>we are not jusr any ordinary academy or institution thar sells courses. it is a software company thar shares real-world experience and knowledge from real-time programming experience and knowledge from real-time programming experts, helping students tackle challenges and achieve career success</p>
                    </div>
                    {/* this for the fonts */}
                    <div className="center gap-5">
                      {/* box1 */}
                        <div className="a-font d-flex gap-2 text-center">
                          <div>
                             <h1><IoBookOutline /></h1>
                          </div>
                           <div  className="bg">
                           <h4>30% theory</h4>
                           <small>learn,understand,and grow</small>
                           </div>
                        </div>
                        {/* box2 */}
                        <div className="a-font d-flex gap-2 text-center">
                          <div>
                            <h1><RiMacbookLine /></h1>
                          </div>
                           <div className="bg">
                           <h4>70% practical</h4>
                           <small>apply,practice,and achieve</small>
                           </div>
                        </div>
                    </div>
                  </div>
              </div>
              {/* ---------------------------------------------------------------------- */}
              {/* this for the rocket */}
              <div className="m-rock">
                 <div className="clik-show center">
                    <div id="mss" className={`show-box ${val == 'one' ? 'act' : null}`} >
                        <h1>our mission</h1>
                    </div>
                    <div id="vss" className={`show-box ${val == 'two' ? 'act2' : null}`} >
                        <h1>our vision</h1>
                    </div>
                    <div id="val" className={`show-box ${val == 'three' ? 'act3' : null}`} >
                        <h1>our values</h1>
                    </div>
                 </div>
                 <div className="rock-pic center">
                    <div className="rock-image-cover center">
                        <img src={Rock} alt="" />
                    </div>
                    <div className="show-btn">
                       <div className='btn-holder '>
                         <a href="#mss"><button onClick={() => call('1')}>mission</button></a>
                       </div>
                       <div className="btn-holder">
                         <a href="#vss"><button onClick={() => call('2')}>vision</button></a>
                       </div>
                       <div className="btn-holder">
                         <a href="#val"><button onClick={() => call('3')}>values</button></a>
                       </div>
                    </div>
                 </div>
              </div>
              {/* -------------------------------------------------------------------------- */}
              {/* this for the education */}
              <div className="a-course center">
                  <div className="cour-text">
                  <h2>what we do</h2>
                  <h1>education tailored to you</h1>
                  </div>
                  <div className="co-cover">
                      <Coursebox />
                      <Coursebox />
                      <Coursebox />
                  </div>
              </div>
              {/* this for the instructor */}
              <div className="center prof">
                  <div className="prof-head text-center">
                      <h4>our instructor</h4>
                      <h1>meet our industry</h1>
                  </div>
                  <div className="prof-cover p-4 center gap-5">
                        <Profbox prof={pro1} trai={"python"}/> 
                        <Profbox prof={pro2}  trai={"ui/ux design"}/>  
                        <Profbox prof={pro3}  trai={"java"}/>  
                        <Profbox prof={pro4}  trai={"web development"}/>   
                  </div>
              </div>
              {/* ---------------------------------------------------------- */}
              {/* this for tha apply card*/}
               <div className="learn center">
                  <Learn/>
               </div>
               {/* this for the footer */}
               <Footer/>
           </section>
         </main>
        </>
    )
 }