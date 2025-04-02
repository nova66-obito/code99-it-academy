import { useEffect, useState } from "react";
import "./contact.css"
import Nav from "../navbar";
import Footer from './footer'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useForm } from "react-hook-form";
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // this for the reset
  const [isSubmit, setIsSubmit] = useState(false)
  function onSubmit(val) {
    console.log(val)
    setIsSubmit(true)
    reset()
  }
  return (
    <>
      {/* this for the overall */}
      <section className="overall">
        {/* this for the contact */}
      {isSubmit ? <div className="thank center">
        <h1>thank you !!!</h1>
        <h1>❤️❤️❤️</h1>
      </div>
      :  <div className="contact center">
      <div className="contact-text contact-text1">
        <div className="c-text">
          <h1>contact <span>us</span></h1>
          <p>let us know your queries , feedbacks and enquiries .we are here to support you 24/7</p>
        </div>
        {/* this for the contact text */}
        {/* box1 */}
        <div className="co-txt-cover">
          <div className="c-text2 d-flex gap-2">
            <div className="c-log">
              <h1><IoIosCall /></h1>
            </div>
            <div className="cl-text">
              <b>give us a call</b>
              <h5>+91 63 74 51 07 54</h5>
              <a href="tel:+916374510754">call</a>
            </div>
          </div>
          <p></p>
        </div>
        {/* box2 */}
        <div className="co-txt-cover">
          <div className="c-text2 d-flex gap-2">
            <div className="c-log">
              <h1><IoMdMail /></h1>
            </div>
            <div className="cl-text">
              <b>write to us</b>
              <h5>code99itacademy@gmail.com</h5>
              <a href="mailto:code99itacademy@gmail.com">send mail</a>
            </div>
          </div>
          <p></p>
        </div>
        {/* box3 */}
        <div className="co-txt-cover">
          <div className="c-text2 d-flex gap-2">
            <div className="c-log">
              <h1><FaLocationCrosshairs /></h1>
            </div>
            <div className="cl-text">
              <b>visit us in chennai @</b>
              <h5>no 16,1st floor ,sarathy nagar,opp to vijaya nagar,velachery,chennai:600-042</h5>
              <a href="https://www.google.com/maps/place/Code99+IT+Academy/@13.158374,80.24029,11z/data=!4m6!3m5!1s0x3a525d70050d495f:0xe1b0d7791146206d!8m2!3d12.9759082!4d80.2215366!16s%2Fg%2F11y4bc3xqq?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">location</a>
            </div>
          </div>
          <p></p>
        </div>
        {/* box4 */}
        <div className="co-txt-cover">
          <div className="c-text2 d-flex gap-2">
            <div className="c-log">
              <h1><FaBullhorn /></h1>
            </div>
            <div className="cl-text">
              <b>hours of operation</b>
              <h5>monday - saturday:10:00 am - 05:00 pm</h5>
              <h5>sunday-holiday</h5>
              <a href="tel:+916374510754">call</a>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      {/* this for the logo */}
      <div className="contact-text contact-text2">
        <div className="cont-head">
          <h3>say <span>hello!</span></h3>
          <p>a fresh approach to learning</p>
        </div>
        {/* this for the form conformation */}
        <form action="#" onSubmit={handleSubmit(onSubmit)} >
          <div className="val">
            <label>full name</label>
            <input type="text" placeholder="enter your full name"
              {...register('fullname', {
                required:'name is required'
              })} />
            {errors.fullname && <p>{errors.fullname.message}!</p>}
          </div>
          <div className="val">
            <label>email</label>
            <input type="email" placeholder="enter your email"
              {...register('email', { required: "email id is required" })}
            />
            {errors.email && <p>{errors.email.message}!</p>}
          </div>
          <div className="val">
            <label>phone no</label>
            <input type="number" placeholder="enter your phone no"
              {...register('phoneno', { required: "phone number is required", minLength: 7 })}
            />
            {errors.phoneno && <p>{errors.phoneno.message}!</p>}
          </div>
          <div className="text-ar">
            <label>how can i help you?</label>
            <textarea style={{ resize: 'none' }} rows={"5"} name="msg" id="msg" placeholder="type your message here"
              {...register('faq', { required: "message is required" })}
            ></textarea>
            {errors.faq && <p>{errors.faq.message}!</p>}
          </div>
          <div className="check center">
            <input  {...register('check', { required: "im not a roboat" })} type="checkbox" />
            <small>i'm not a robot</small>
          </div>
          <button type="submit">send mail</button>
        </form>
      </div>
    </div>  
    }
        <map className="pt-3" name="loction">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9364977802843!2d80.21896167330347!3d12.975913414787286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d70050d495f%3A0xe1b0d7791146206d!2sCode99%20IT%20Academy!5e0!3m2!1sen!2sin!4v1743050797016!5m2!1sen!2sin" width={"100%"} height={"200px"} allowFullScreen={""} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"}></iframe>
        </map>
        <Footer />
      </section>
    </>
  )
}