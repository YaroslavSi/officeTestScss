import React from "react";
import pointerRight from '../../assets/icons/generalPage/arrow_right.svg';
import pointerLeft from '../../assets/icons/generalPage/arrow_left.svg';
import office from '../../assets/images/generalPage/office.png';
import line from '../../assets/icons/generalPage/line.png';
import WOW from 'wowjs';


const GeneralPage = (props) => {
    return (
        <header>
            <div className="general_wrapper" id="homePage">
                <div className="tittle">PROJECT <br></br> <span className="subttitle">HOME</span></div>
                <div className="pointer">
                    <button className="slider"><img className="pointer_left" src={pointerLeft} alt="pointerLeft" /></button>
                    <button className="slider"><img className="pointer_right" src={pointerRight} alt="pointerRight" /></button>
                </div>
                <div className="page">
                    <div className="page_number_one">01</div>
                    <img src={line} className="page_devide" alt="devideLine" />
                    <div className="page_number_two">02</div>
                </div>
            </div>
            <div className="card">
                <img className="card_image" src={office} alt="office" />
                <button onClick={() => {props.setIsOpen(true)}} className="card_rectangle">
                    <div className="card_rectangle_tittle">ВЗГЛЯНУТЬ</div>
                    <img className="card_rectangle_pointer" src={pointerRight} alt="pointer" />
                </button>
            </div>
        </header>
    )
};

export default GeneralPage;