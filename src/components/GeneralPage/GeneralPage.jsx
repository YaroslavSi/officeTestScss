import React from "react";
import pointerRight from '../../assets/icons/generalPage/arrow_right.svg';
import pointerLeft from '../../assets/icons/generalPage/arrow_left.svg';
import office from '../../assets/images/generalPage/office.png';
import line from '../../assets/icons/generalPage/line.png';
import WOW from 'wowjs';
import { useState, useMemo } from "react";

let calcValue = () => {
    console.log('random');

    return  (50 - 1) + 1;
};
// const countTotal = (num) => {
//     return num + 11;
// }
const total = 100;
const GeneralPage = (props) => {
    const [slide, setSlide] = useState(calcValue);
    const [state, setState] = useState ({slide: 5, autoplay: false});
    
    function changeSlide (i) {
        setSlide(slide => slide + i);
    };

    
    return (
        <header>
            <div className="general_wrapper" id="homePage">
                <div className="tittle">PROJECT <br></br> <span className="subttitle">HOME</span></div>
                <div className="pointer">
                    <button className="slider"><img className="pointer_left" onClick={() => changeSlide(-1)} src={pointerLeft} alt="pointerLeft" /></button>
                    <button className="slider"><img className="pointer_right" onClick={() => changeSlide(1)} src={pointerRight} alt="pointerRight" /></button>
                </div>
                <div className="page">
                    <div className="page_number_one" >{slide}</div>
                    <img src={line} className="page_devide" alt="devideLine" />
                    <div className="page_number_two" >{total}</div>
                </div>
            </div>
            <div className="card">
                <img className="card_image" src={office} alt="office" />
                <button onClick={() => {props.setIsOpen(true)}} className="card_rectangle">
                    <div className="card_rectangle_tittle">ВЗГЛЯНУТЬ</div>
                    <img className="card_rectangle_pointer"  src={pointerRight} alt="pointer" />
                </button>
            </div>
        </header>
    )
};

export default GeneralPage;