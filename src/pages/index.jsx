import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import Photo from './images'
import Rocket from '../assets/rocket.png'
import Cover from '../assets/cover.png'
import Challenge from "./challenge";
import Grow from "./grow";
import Course from "./course";
import ReverseChallenge from "./reverse-challenge";
import Around from "./c-around";
import Run from './run-place';
import Blog from './blog';
import Learn from "./learning";
import Roll from "./faqroll";
import { Link } from "react-router-dom";
import cur from '../assets/java.png';
import cur2 from '../assets/python.png';
import cur3 from '../assets/webd.png'
import cur4 from '../assets/uiux.png'
import cur5 from '../assets/digtal.png';
import cur6 from '../assets/app.png'
import CountUp from 'react-countup';



export default function Overall(){
  let [show, setShow] = useState(false);
  let clk = () =>{
    setShow(!show);
  }
//   this for the animation done the the link executed
  let lk = "https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform";
  useEffect(function (){
     const but = document.getElementById("anime");
     but.addEventListener("click", function(){
       setTimeout(function(){
         window.location.href = lk
       },2000)
     });
  },[])

  // this for the number loading

        return(
        <>
        <section className="overall">
        {/* this for the home page design */}
          <div className="home">
            <div className="text text1">
                <h4>learn. learn again... learn better....</h4>
                <div className="big-font">
                   <h1>
                     india's 1st institute to give
                     free it training.   
                   </h1>    
                   <div className="click d-flex gap-3 pt-2">
                     <button className="lk"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform">join now</a></button>
                      <button className="lk2"><Link to="contact">contact us</Link></button>
                   </div>
                </div> 
            </div>
            {/* this us =ing for the image */}
            <div className="text text2 ">
                <Photo class={'move'}/>
                <Photo class={'move2'}/>
                <Photo class={'move3'}/>
            </div>
          </div>
          {/* this for the about us page design */}
          <div className="about">
            {/* this for the load number */}
            <div className="run-cover center">
            <div className="cover center">
                <div className="load-num num1">
                <h1>
                <CountUp
                  start={10}
                  end={1000}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                 >q
                 </CountUp>+
                </h1>
                  <p>students</p>
                </div>
                <div className="load-num num2">
                <h1>
                <CountUp
                  start={10}
                  end={280}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                 >
                 </CountUp>+
                </h1>
                <p>Real Time project</p>
                </div>
                <div className="load-num num3">
                <h1>
                <CountUp
                  start={0}
                  end={10}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyDelay={500}
                 >
                 </CountUp>+  
                </h1>
                <p>certified Traier</p>
                </div>
            </div> 
            </div>
            {/* this for the about page */}
            <div className="about-us center">
               <div className="details details1 center block2">
                 <Around/>
               </div>
               <div className="details details2 block3">
                  <h5>about Us</h5>
                   <div className="about-txt">
                      <h1>guaranteed IT succes with code99 IT Academy</h1>
                      <p>we believe in the power of self-confidence and the effectiveness of our training. our goal is to make you belive in yourself and your skills.</p>
                      <h4>learn.learn again..learn better...</h4>
                      <button><Link to='/about'>discover more</Link></button>
                   </div>
               </div>
            </div>
          </div>
          {/* this for the challeng page */}
           <div className="challenge">
              <h2 className="text-center">timeline of 99-days coding challenge</h2>
              <h1 className="text-center">99 days of coding challenge</h1>
               {/* lists */}
                <Challenge order={'c-list1'} num={'1'}  box={"rev-p"} round={"r-left"}/>
                <ReverseChallenge count={'2'} round={"c-list2"} box={"left-p"}  round2={"r-right"}/>
                <Challenge order={'c-list3'} num={'3'}  box={"rev-p"}  round={"r-left"}/>
                <ReverseChallenge count={'4'} round={"c-list4"} box={"left-p"}  round2={"r-right"}/>
           </div>
          {/* this forthe why us? */}
          <div className="choose center">
             <h1>why choose us?</h1>
             <div className="c-cover center">
                <Grow num={'1'} class={"c-text1"}/>
             </div> 
          </div>
          {/* this for the course */}
          <div id="course" className="co-cover  center">
            <h1>our course</h1>
            <div className="box-cover center p-3">
              <Course pic={cur} line={"./java"} course={'full Stack java'}/>
              <Course pic={cur2} line={"/python"} course={'full Stack python'}/>
              <Course pic={cur3} line={"/web"} course={'full Stack mern'}/>
              <Course pic={cur4} line={"/course"} course={'ui/ux Designer'}/>
              <Course pic={cur5} line={"/digital"} course={'digital marketing'}/>
              <Course pic={cur6} line={"/web"} course={'Web development'}/>
            </div>
          </div>
          {/* this for the join animaton */}
           <div className="rocket center" >
              <div className="r-cover block2">
                   <div className={`r-pic ${show?'r-move':null}`}>
                          <img src={Cover} alt="" />{console.log(show)}
                   </div>
                   <div className="txtover center">
                        <div className="r-txt">
                            <h4>join our inclusive coding classes</h4>
                            <button id="anime" onClick={clk}>apply now</button>
                        </div>
                        <div className="r-pic2">
                             <img className={`${show?'r2':null}`} src={Rocket} alt="" />
                        </div>
                   </div>
              </div>
           </div>
           {/* this for the vlog */}
           <div className="place center">
              <h1>our students <span>placed in.</span></h1>
             <div className="placein center">
                <div className="run-box center run-box1">
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                </div>
                <div className="run-box center run-box2">
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                   <Run/>
                </div>
             </div>
           </div>
         {/* this for the blog */}
         <div className="blog center">
           <div className="w-75 sm-w-90 b-tx text-center">
               <h1>we're dedicated to helping individulas achieve their potential</h1>
           </div>
           <div className="vi-blog center">
              <Blog  yt={"https://www.youtube.com/watch?v=1OSE_kyEt4E"} vl={"https://www.youtube.com/embed/1OSE_kyEt4E?si=396mCsyb_o89HP6J"}/> 
              <Blog  yt={"https://www.youtube.com/watch?v=yY9bBHieL_I"} vl={"https://www.youtube.com/embed/yY9bBHieL_I?si=QJYdwYgufPtlYSCr"}/> 
              <Blog  yt={"https://www.youtube.com/watch?v=b2HmVz8U1mQ"}  vl={"https://www.youtube.com/embed/b2HmVz8U1mQ?si=8WIkWZjzIAx0CFRZ"}/> 
           </div>
         </div>
         {/* learning */}
         <div className="code-link center">
            <Learn/>
         </div>
         {/* contact */}
         <div className="faq center">
            <div className="faq-box faq-box1">
              <h1>faq<small>s</small></h1>
              <p>for any further enquiries on our curriculums or courses,please get in touch with us</p>
              <button><a href="https://mail.google.com/mail/u/0/#inbox">code99icacademy@gmail.com</a></button>
            </div>
            <div className="faq-box faq-box2 center">
               <Roll con={"i have no prior experience with coding.can i still learn?"}/>
               <Roll con={"what do i need to know before learning coding?"}/>
               <Roll con={"how does coding strengthen logical thiking"}/>
               <Roll con={"can learning coding improve my problem-solving skill"}/>
               <Roll con={"is coding only for creating websites and apps"}/>
               <Roll con={"whar is coding? why it is important?"}/>
            </div>
         </div>
         </section>
        </>
    )
}