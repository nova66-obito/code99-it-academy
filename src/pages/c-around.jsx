import React, { useEffect } from "react";
import pic from '../assets/img-spl-2.png'
export default function around() {
    useEffect(function(){
        let txt = document.querySelector('.r-text p');
        txt.innerHTML = txt.innerText.split('').map(
    (char,i) => 
        `<span style="transform:rotate(${i*10}deg)">${char}</span>`).join('')
    },[])
    return (
        <>
            <div className="around center">
                <div className="r-logo">
                    <img src={pic} alt="" />
                </div>
                <div className="r-text"> 
                    <p>code99 it academy.code99 it academy</p>
                </div>
            </div>
        </>
    )
}