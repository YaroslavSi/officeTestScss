import React from "react";
import pointerRight from '../../assets/icons/arrow_white.png';
import centerOne from '../../assets/images/projects/centerOne.png';
import stadiumTwo from '../../assets/images/projects/stadiumTwo.png';
import stadiumThree from '../../assets/images/projects/stadiumThree.png';
import hotelFour from '../../assets/images/projects/hotelFour.png';
import stadiumFive from '../../assets/images/projects/stadiumFive.png';
import WOW from 'wowjs';
import { useEffect } from "react";

const Projects = (props) => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return (
        <section className="projects" id="projects">
            <div className="projects_tittle wow animate__jello" data-wow-duration="100s">Наши проекты</div>
            <div className="projectsFirst">
                <div className="projectsFirst_wrapper wow animate__rotateInDownLeft" data-wow-duration="2s">
                    <img className="projectsFirst_img" src={centerOne} alt="stadium"  />
                    <div className="projectsFirst_tittle">ДОСУГОВЫЙ ЦЕНТР</div>
                    <button className="projectsFirst_button">
                        <div className="projectsFirst_button_tittle">ПОДРОБНЕЕ</div>
                        <img className="projectsFirst_button_pointer" src={pointerRight} alt="pointer" />
                    </button>
                </div>
                <img className="projectsFirst_two wow animate__rotateInDownRight" data-wow-duration="2s" src={stadiumTwo} alt="stadium"  />
            </div>

            <div className="projectsSecondLine wow animate__rotateInUpRight" data-wow-duration="3s">
                <img className="projectsSecondLine_three" src={stadiumThree} alt="stadium"  />
                <img className="projectsSecondLine_four" src={hotelFour} alt="hotels"  />
                <img className="projectsSecondLine_five" src={stadiumFive} alt="Balloon"  />
            </div>
            <button className="projects_button">
                <div className="projects_button_tittle">ВСЕ ПРОЕКТЫ</div>
                <img className="projects_button_pointer" src={pointerRight} alt="pointer" />
            </button>
        </section>
    )
};

export default Projects;