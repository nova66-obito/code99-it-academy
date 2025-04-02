import React from "react";

export default function Challenge(value) {
    console.log(value.num)
    return (
        <>
            <div className={`c-list center ${value.order}`}>
                <div className="set set1">
                    <div className="box block1">
                        <h3>start with orientation,setting up your coding environment and learing the basics of your chosen technology stack</h3>
                        <p></p>
                    </div>
                </div>
                <div className="set set2 "></div>
                <div className="set set3 block1">
                   <div className="s-cover d-flex">
                   <div className="round">
                        <h1>{value.num}</h1>
                    </div>
                    <div className="p-text">
                        <h1>foundation & setup</h1>
                    </div>
                   </div>
                </div>
            </div>
        </>
    )
}