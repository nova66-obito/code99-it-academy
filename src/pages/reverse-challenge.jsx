import React from "react";

export default function ReverseChallenge(reverse){
    return(
        <>
           <div className={`c-list center`}>
           <div className="set set3 block1">
                   <div className={`d-flex ${reverse.round}`}>
                    <div className="p-text">
                        <h1>foundation & setup</h1>
                    </div>
                    <div className="cir">
                        <h1>{reverse.count}</h1>
                    </div>
                   </div>
                </div>
                <div className="set set2"></div>
                <div className="set set1 block1">
                    <div className={`box ${reverse.class}`}>
                        <h3>start with orientation,setting up your coding environment and learing the basics of your chosen technology stack</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}