import React from "react";
import { Link } from "react-router-dom";
export default function Course(data){
    return(
        <>
             <div className="box p-2 block3">
                     <div className="pic-co text-center p-2">
                       <img src={data.pic} alt="course pic"/>
                     </div>
                   <div className="text-co text-center">
                       <h4 className="p-2">{data.course}</h4>
                       <p className="p-1">master front-end and back-end technologies to build interactive and dynamic websites.</p>
                       <Link to={data.line}>View Detail</Link>
                   </div>
             </div>
        </>
    )
}