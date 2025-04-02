import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Roll(text){
    const [val,setVal] = useState(false)
    const ongrow=()=>{
        setVal(!val)
    }
    return(
        <>
           <div onClick={ongrow} className={`faq-text ${val?"roll":null}`}>
           <div className="f-txt center">
                <p>{text.con}</p>
                <p><IoIosArrowDown /></p>
            </div>
             <div className="f-roll p-1">
             <p>* yes! coding is like bulding with blocks.you can learn step by step,even if you're new.</p>
             </div>
           </div>
        </>
    )
}