import React from "react";
import Course from "./course";
import cur from '../assets/java.png';
import cur2 from '../assets/python.png';
import cur3 from '../assets/webd.png'
import cur4 from '../assets/uiux.png'
import cur5 from '../assets/digtal.png';
import cur6 from '../assets/app.png'
export default function CourseLink() {
    return (
        <>
            <div className="co-cover main-course center">
                <h1>our course</h1>
                <div className="box-cover center p-3">
                    <Course pic={cur} line={"./java"} course={'full Stack java'} />
                    <Course pic={cur2} line={"/python"} course={'full Stack python'} />
                    <Course pic={cur3} line={"/web"} course={'full Stack mern'} />
                    <Course pic={cur4} line={"/course"} course={'ui/ux Designer'} />
                    <Course pic={cur5} line={"/digital"} course={'digital marketing'} />
                    <Course pic={cur6} line={"/web"} course={'Web development'} />
                </div>
            </div>
        </>
    )
}