import React from "react";
import pointerRight from '../../assets/icons/generalPage/arrow_right.svg';
import firstTower from '../../assets/images/about/firstTower.png';
import secondTower from '../../assets/images/about/secondTower.png';
import thirdTower from '../../assets/images/about/thirdTower.png';
import WOW from 'wowjs';
import { useEffect } from "react";



const About = (props) => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return (
        <article className="wrapperAbout wow animate__fadeInLeftBig" data-wow-duration="1s" id="gallery">
            <div className="about_firstSection">
                <img className="about_firstSection_imgOne" src={firstTower} alt="officeTower" />
                <img className="about_firstSection_imgTwo" src={secondTower} alt="officeCompanyTower" />
            </div>
            <div className="about_secondSection">
                <img className="about_secondSection_img" src={thirdTower} alt="officeTower" />
            </div>
            <div className="about_descr">
                <div className="about_descr_tittle">О компании</div>
                <div className="about_descr_details">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
                <button className="about_button">
                    <div className="about_button_tittle">ЧИТАТЬ</div>
                    <img className="about_button_pointer" src={pointerRight} alt="pointer" />
                </button>
            </div>
        </article>
    )
};

export default About;