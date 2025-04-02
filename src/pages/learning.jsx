import React from "react";

export default function Learn(){
    return(
        <>
          <div className="code-cover center">
               {/* designs */}
                <div className="code-box code-box1"> </div>
                {/* text content */}
                <div className="code-box  text-center code-box2">
                    <h2>inspire innovation,build confidence, and create a future</h2>  
                    <p className="text-light">at code99,we don't teach code;we inspire young mind to innovate and think critically</p> 
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdYxFdD1a5TpMMBthUV8piowtGEUtcof5k01apWs1tuSOFX7w/viewform"><button className="btn bg-light">learn code</button></a>
                </div>
                <div className="code-box code-box3"></div>
             </div>
        </>
    )
}