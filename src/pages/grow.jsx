import React, { useEffect, useState } from "react";

export default function Grow(row) {
    let [vlaues, setValues] = useState("six");
    let per = (cl) => {
        switch (cl) {
            case '1':
                return setValues('one');
            case '2':
                return setValues('two');
            case '3':
                return setValues('three');
            case '4':
                return setValues('four');
            case '5':
                return setValues('five');
            case '6':
                return setValues('six');

        }
    }
    return (
        <>
            {/* box one */}
            <div className={`center grow ${row.class} ${vlaues == 'one' ? 'grow-text' : 'grow-off'}`}>
                <div className={`text-center g-text ${vlaues == 'one' ? 'show' : "g-text"} `}>
                    <h4>cost -effective & efficient</h4>
                </div>
                <div className={`g-text ${vlaues == 'one' ? 'show' : "g-text"}`}>
                    <p>get high-quality solutions ar competitive prices without compromiaing on prefromance</p>
                </div>
                <button id="show" onClick={() => per('1')}>1</button>
            </div>
            {/* box two */}
            <div className={`center grow ${row.class} ${vlaues == 'two' ? 'grow-text' : 'grow-off'}`}>
                <div className={`text-center g-text ${vlaues == 'two' ? 'show' : "g-text"} `}>
                    <h4>cost -effective & efficient</h4>
                </div>
                <div className={`g-text ${vlaues == 'two' ? 'show' : "g-text"}`}>
                    <p>get high-quality solutions ar competitive prices without compromiaing on prefromance</p>
                </div>
                <button id="show" onClick={() => per('2')}>2</button>
            </div>
            {/* box three */}
            <div className={`center grow ${row.class} ${vlaues == 'three' ? 'grow-text' : 'grow-off'}`}>
                <div className={`text-center g-text ${vlaues == 'three' ? 'show' : "g-text"} `}>
                    <h4>cost -effective & efficient</h4>
                </div>
                <div className={`g-text ${vlaues =='three' ? 'show' : "g-text"}`}>
                    <p>get high-quality solutions ar competitive prices without compromiaing on prefromance</p>
                </div>
                <button id="show" onClick={() => per('3')}>3</button>
            </div>
            {/* box four */}
            <div className={`center grow ${row.class} ${vlaues == 'four' ? 'grow-text' : 'grow-off'}`}>
                <div className={`text-center g-text ${vlaues == 'four' ? 'show' : "g-text"} `}>
                    <h4>cost -effective & efficient</h4>
                </div>
                <div className={`g-text ${vlaues == 'four' ? 'show' : "g-text"}`}>
                    <p>get high-quality solutions ar competitive prices without compromiaing on prefromance</p>
                </div>
                <button id="show" onClick={() => per('4')}>4</button>
            </div>
            {/* box five */}
            <div className={`center grow ${row.class} ${vlaues == 'five' ? 'grow-text' : 'grow-off'}`}>
                <div className={`text-center g-text ${vlaues === 'five' ? 'show' : "g-text"} `}>
                    <h4>cost -effective & efficient</h4>
                </div>
                <div className={`g-text ${vlaues == 'five' ? 'show' : "g-text"}`}>
                    <p>get high-quality solutions ar competitive prices without compromiaing on prefromance</p>
                </div>
                <button id="show" onClick={() => per('5')}>5</button>
            </div>
            {/* box six*/}
            <div className={`center grow ${row.class} ${vlaues == 'six' ? 'grow-text' : 'grow-off'}`}>
                <div className={`text-center g-text ${vlaues == 'six' ? 'show' : "g-text"} `}>
                    <h4>cost -effective & efficient</h4>
                </div>
                <div className={`g-text ${vlaues == 'six' ? 'show' : "g-text"}`}>
                    <p>get high-quality solutions ar competitive prices without compromiaing on prefromance</p>
                </div>
                <button id="show" onClick={() => per('6')}>6</button>
            </div>

        </>
    )
}