import React from "react";

export default function ReverseChallenge(reverse){
    return(
        <>
          <div className={`c-list center ${reverse.round}`}>
                   {/* this for the cod cover */}
                <div className="set set3 block1 center">
                   <div className={`s-cover d-flex ${reverse.round2}`}>
                    <div className="p-text">
                        <h1>foundation & setup</h1>
                    </div>
                   </div>
                </div>
                {/* this for the line */}
                <div className="set set2 center ">
                <div className="round block1">
                        <h1>{reverse.count}</h1>
                    </div>
                </div>
                  {/* this for the text */}
                <div className="set set1 block1 center">
                    <div className={`s-box center ${reverse.box}`}>
                        <h4>start with orientation,setting up your coding environment and learing the basics of your chosen technology stack</h4>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}