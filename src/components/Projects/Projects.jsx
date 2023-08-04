import React from "react";
import pointerRight from '../../assets/icons/arrow_white.png';
import centerOne from '../../assets/images/projects/centerOne.png';
import stadiumTwo from '../../assets/images/projects/stadiumTwo.png';
import stadiumThree from '../../assets/images/projects/stadiumThree.png';
import hotelFour from '../../assets/images/projects/hotelFour.png';
import stadiumFive from '../../assets/images/projects/stadiumFive.png';


const Projects = (props) => {
    return (
        <section className="projects" id="projects">
            <div className="projects_tittle">Наши проекты</div>
            <div className="projectsFirst">
                <div className="projectsFirst_wrapper">
                    <img className="projectsFirst_img" src={centerOne} alt="stadium"  />
                    <div className="projectsFirst_tittle">ДОСУГОВЫЙ ЦЕНТР</div>
                    <button className="projectsFirst_button">
                        <div className="projectsFirst_button_tittle">ПОДРОБНЕЕ</div>
                        <img className="projectsFirst_button_pointer" src={pointerRight} alt="pointer" />
                    </button>
                </div>
                <img className="projectsFirst_two" src={stadiumTwo} alt="stadium"  />
            </div>

            <div className="projectsSecondLine">
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