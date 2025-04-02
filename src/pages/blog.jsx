import React from "react";
import { FaYoutube } from "react-icons/fa";
export default function Blog(pro){
  return(
    <>
    <div className="b-link">
      <div className="linkbox linkbox1">
      <iframe src={pro.vl} allowFullScreen></iframe>
      </div>
      <div className="center yt-link gap-3">
        <b><FaYoutube /></b>
       <a href={pro.yt}><b>watch on youtube</b></a>
      </div>
    </div>
   </>
  )
}