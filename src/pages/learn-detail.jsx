import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Detail(no){
    let [call , setCall] = useState(false);
    let rol = () =>{
        setCall(!call);
    }
    return(
        <>
         <div onClick={rol} className={`d-roll ${call ? 'g-roll' : null}`}>
            <div className="top">
               <div className="center top-text">
               <h5>moudle:{no.mo}</h5>
               <p><IoIosArrowDown /></p>
               </div>
               <div className="deg">
                  <p>{no.con}</p>
               </div>
            </div>
            <div className="bot text-center">
               <p>UI (User Interface) focuses on the visual elements and interactivity of a digital product, while UX (User Experience) encompasses the overall user's experience with a product, from initial interaction to completion. </p>
            </div>
         </div>
        </>
    )
}