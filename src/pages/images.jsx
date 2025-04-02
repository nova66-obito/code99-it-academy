import React from "react";
import Pic from '../assets/img-spl-1.png'
export default function Photo(data){
    return(
        <>
          <div className={`img-holder ${data.class}`}>
             <h1></h1>
             <img src={Pic} alt="profile image" />
             <img src={Pic} alt="profile image" />
             <img src={Pic} alt="profile image" />
          </div>
        </>
    )
}