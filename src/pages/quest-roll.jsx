import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
export default function Quest(data){
    let [calv,setcalv] = useState(false)
    const cha = () => {
        setcalv(!calv)
    } 
    return(
        <>
          <div onClick={cha} className={`q-block ${calv ? 'q-on' : null}`}>
              <div className="q-up center">
                 <p>{data.txt}</p>
                 <p><IoIosArrowDown /></p>
              </div>
              <div className="q-dow">
                 <h5>deatils for the question</h5>
              </div>
          </div>
        </>
    )
}