import React, { useState, useEffect } from "react";
import lindua from '../../assets/svg/logo/lindua.svg';
import digitalText from '../../assets/svg/logo/digitalProject.svg';
import WOW from 'wowjs';

const Navigator = (props) => {
    const [hamburgerIsOpen, setHamburgerOpen] = useState(false);
    const [menu, setMenu] = useState(false);
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    let handleHamburgerClick = () => {
        setHamburgerOpen(!hamburgerIsOpen);
        setMenu(!hamburgerIsOpen);
    };
    return (
        <nav className="nav wow animate__backInDown" data-wow-duration="1s">
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