import React from "react"; 
import Nav from "../navbar";
import tol1 from "../assets/tool1.png"
import tol2 from "../assets/tool2.png"
import tol3 from "../assets/tool3.png"
import tol4 from "../assets/tool4.png"
import train from "../assets/train1.png"
import train2 from "../assets/train2.png"
import train3 from "../assets/train3.png"
import pic5 from '../assets/coursepic.png'
import pic6 from '../assets/pic5.png'
import des from '../assets/desgin.png'
import { IoCall } from "react-icons/io5";
import Detail from "./learn-detail";
import Quest from "./quest-roll";
import Footer from "./footer.jsx"
import "./uiux.css"
export default function Coursepage(){  
    return(
        <>
         <Nav/>
          <section className="overall">
             {/* this for the content of the design */}
             <div className="sign center">
                 <div className="sign-cover center">
                      <div className="s-text s-text1">
                          <div className="inner txt">
                            <small>learn by doing live projects</small>
                            <p>UI UX designer course in chennai " 2 months course +1 month internship " </p>
                            <hr />
                            <small>get a UI UX designer course in chennai at code99 academy for your next-level career</small>
                          </div>
                          <div className="cal-show pt-4 d-flex gap-2">
                              <div className="cal-icon">
                                  <h1><IoCall /></h1>
                              </div>
                              <div className="pt-3 show-join">
                                 <b>have any questions? give us a call</b>
                                <h5>+91 63 74 51 07 54</h5>
                              </div>
                          </div>
                      </div>
                      {/* this for the form */}
                      <div className="s-text s-text2 p-3 text-center">
                          <form action="#">
                          <h4>star your <span>corporate caree</span></h4>
                              <div>
                                 <input type="text" placeholder="enter your name" />
                              </div>
                              <div>
                                 <input type="text" placeholder="enter your email" />
                              </div>
                               <div>
                                 <input type="text" placeholder="enter your number" />
                              </div> 
                              <div>
                                 <input type="text" placeholder="which course are you looking for" />
                              </div>
                              <div>
                                 <input type="text" placeholder="enter your qualifiaction" />
                              </div>
                              <div className="c-robot">
                                 <input type="checkbox" name="" id="" />
                                 <small>i'm not robort</small>
                              </div>  
                              <a href="#"><button>enquire now</button></a>
                          </form>
                      </div>
                 </div>
             </div>
             {/* this for the about */}
             <div className="about-train center">
                 <div className="t-about">
                    <h2>about <span>Training</span></h2>
                    <p>⭐ Our UI/UX Design course equips you with the skills to create engaging, user-friendly digital experiences. You'll start with the basics, understanding the difference between UI and UX, and exploring the importance of design thinking. Learn key principles such as visual hierarchy, consistency, and accessibility, while using popular tools like Figma and Adobe XD.</p>
                    <p>⭐ Through hands-on exercises, you'll develop wireframes, prototypes, and interactive components. Dive deeper into user research, personas, user journeys, and usability testing to build intuitive designs.</p>
                    <p>⭐ By the end of this course, you'll have the practical skills needed to design effective UI/UX solutions, create clickable prototypes, and showcase your portfolio. Whether you're new to the field or looking to upgrade your skills, this course prepares you to succeed in the ever-evolving design world.</p>
                 </div>
                 <div className="t-pic center">
                    <div className="t-photo">
                        <img src={pic5} alt="" />
                    </div>                    
                 </div>
             </div>
             {/* this for the tools  */}
             <div className="tools">
                <div className="tools-cover">
                    <h1>tools <span>used</span></h1>
                    <div className="tools-pic center">
                        <img src={tol1} alt="tools figma" />
                        <img src={tol2} alt="tools adobe" />
                        <img src={tol3} alt="tools ps" />
                        <img src={tol4} alt="tool ai" />
                    </div>
                </div>
             </div>
             {/* this for the training details */}
             <div className="t-detail center">
                 <div className="detail-head center">
                 <h1>How Does This <span>Training Work?</span></h1>  
                 <p>Our training offers a genuine corporate experience, unlike other institutes and training companies. You'll work on real tasks and projects, simulating a professional work environment.80</p>
                 </div>
               <div className="t-cover center">
                 <div className="details-box">
                    <img src={train2} alt="trainig logo" />
                    <h5>Daily Reporting</h5>
                    <p>You'll submit daily reports detailing your tasks and progress, just like in a corporate setting. This daily reporting helps you stay organized and prepares you for real-world job responsibilities.
                    </p>
                 </div>
                 <div className="details-box">
                     <img src={train} alt="training log" />
                    <h5>Real-Time Experience</h5>
                    <p>You'll address actual challenges enhancing your skills and gaining the confidence needed to step into professional roles through active involvement and immediate feedback.</p>
                 </div>
                 <div className="details-box">
                   <img src={train3} alt="training log" />
                    <h5>Personalized Coaching</h5>
                    <p>Offers personalized one-on-one guidance, tailored to your goals, helping you overcome challenges, refine skills, and achieve personal and professional growth.</p>
                 </div>
               </div>
             </div>
             {/* this for the info */}
             <div className="info center">
                <div className="info-cover center">
                    <div className="info-txt">
                      <h3>lookin for more info? WE've got you covered!</h3>
                      <p>find the answers you're looking for and see how code99 academy can build a successful career</p>
                      <a href="#"><button>contact us</button></a>
                    </div>
                    <div className="info-pic">
                       <img src={pic6} alt="profile pic" />
                    </div>
                </div>
             </div>
             {/* this for the learn list */}
             <div className="learn-list">
               <h1>what <span>you'll learn</span></h1>
               <div className="list-over center">
                  <div className="list box-1 center">
                      <Detail mo={1} con={"introduction to ui/ux design"}/>
                      <Detail mo={2} con={"design thinkink & principles"}/>
                      <Detail mo={3} con={"accessibility & inclusive design"}/>
                      <Detail mo={4} con={"ui design tools"}/>
                      <Detail mo={5} con={"visual desings & fundamentala"}/>
                  </div>
                  <div className="list box-2 center">
                     <Detail mo={6} con={"ux research & user journey"}/>
                     <Detail mo={7} con={"wireframing & usability testing"}/>
                     <Detail mo={8} con={"prototyping & interactive design"}/>
                     <Detail mo={9} con={"design systems & collaboration"}/>
                     <Detail mo={10} con={"final project & career in ui/ux"}/>                     
                  </div>               
               </div>
             </div>
             {/* training benefits */}
             <div className="benefits center">
                <div className="ben-cover center">
                   <div className="ben-pic">
                      <img src={des} alt="design photo" />
                   </div>
                   <div className="ben-txt">
                     <h2>training benefits</h2>
                     <p className="mt-4">
                        code99 Academy's IT Training in Chennai. Led by industry professionals, this course provides 100% practical training with live projects, career guidance, and interview preparation. We also offer lifetime support to ensure your growth.
                     </p>
                     <div className="d-flex gap-3">
                        <b>resume building</b>
                        <b>portfolio creation</b>
                        <b>mock interview prep</b>
                     </div>
                   </div>
                </div>
             </div>
             {/* this for the question */}
             <div className="quest center">
                  <h1>frequently <span>asked questions</span></h1>
                <div className="q-cover center">
                   <Quest txt={"what tools will l learn to use in this ui/ux design course"}/>
                   <Quest txt={"what tools will l learn to use in this ui/ux design course"}/>
                   <Quest txt={"what tools will l learn to use in this ui/ux design course"}/>
                   <Quest txt={"what tools will l learn to use in this ui/ux design course"}/>
                   <Quest txt={"what tools will l learn to use in this ui/ux design course"}/>
                </div>
             </div>
             {/* footer */}
             <Footer/>
          </section>
        </>
    )
}