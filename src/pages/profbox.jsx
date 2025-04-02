import React from "react";
export default function Profbox(call){
    return(
        <>
          <div className="prof-box block3">
              <div className="prof-img">
                   <img src={call.prof} alt="profile pic" />                 
              </div>
              <div className="prof-text text-center p-2">
                 <h5>name:*****</h5>
                 <small>trainer:{call.trai}</small>
              </div>
          </div>
        </>
    )
}