import React, { useState } from "react";
import lindua from '../../assets/svg/logo/lindua.svg';
import digitalText from '../../assets/svg/logo/digitalProject.svg';

const Navigator = (props) => {
    const [hamburgerIsOpen, setHamburgerOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    let handleHamburgerClick = () => {
        setHamburgerOpen(!hamburgerIsOpen);
        setMenu(!hamburgerIsOpen);
    };
    return (
        <nav className="nav">
            <div className={menu ? 'men' + ' ' + 'men_active' : "men"}>
                <div className="logo">
                    <img className="logo_img" src={lindua} alt="lindua" />
                    <img className="logo_imgText" src={digitalText} alt="digitalText" />
                </div>
                <div className="menu">
                    <div className="dropdown">
                        <a href="#homePage" className="menu_item">ГЛАВНАЯ</a>
                        <div class="dropdown_content">
                            <a className='dropdown_content_text' href="#">Сторінка</a>
                            <a className='dropdown_content_text' href="#">Інша сторінка</a>
                        </div>
                    </div>
                    <div className="right_h">
                        <a href="#gallery" className="menu_item">ГАЛЕРЕЯ</a>
                    </div>
                    <div className="left_h">
                        <a href="#certificate" className="menu_item">СЕРТИФИКАТЫ</a>
                    </div>
                    <a href="#contacts" className="menu_item">КОНТАКТЫ</a>
                </div>
            </div>
            
            <div class={hamburgerIsOpen ? 'hamburger' + ' ' + 'hamburger_active' : 'hamburger'} onClick={handleHamburgerClick}>
                <div class="hamburger_line"></div>
                <div class="hamburger_line"></div>
                <div class="hamburger_line"></div>
            </div>
        </nav>
    )
};

export default Navigator;