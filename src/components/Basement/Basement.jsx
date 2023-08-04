import React from "react";
import logo from '../../assets/images/footer/logoFoot.png';
import facebook from '../../assets/icons/footer/facebook.svg';
import twitter from '../../assets/icons/footer/twitter.svg';
import linkedin from '../../assets/icons/footer/linkedin.svg';
import pinterest from '../../assets/icons/footer/pinterest.svg';
import geo from '../../assets/icons/footer/geo.svg';
import phone from '../../assets/icons/footer/phone.svg';
import mail from '../../assets/icons/footer/mail.svg';

const Basement = (props) => {
    return (
        <footer>
            <div className="wrapper" id="contacts">
                <img className="wrapper_logo" src={logo} alt="logo" />
                <div className="wrapper_menu">
                    <a href="#" className="wrapper_menu_item wrapper_menu_item_gen">Информация</a>
                    <a href="#" className="wrapper_menu_item">Главная</a>
                    <a href="#" className="wrapper_menu_item">Галерея</a>
                    <a href="#" className="wrapper_menu_item">Проекты</a>
                    <a href="#" className="wrapper_menu_item">Сертификаты</a>
                    <a href="#" className="wrapper_menu_item">Контакты</a>
                </div>
                <div className="wrapper_contacts">
                    <div className="wrapper_contacts_header">Контакты</div>
                    <div className="wrapper_contacts_item">
                        <img src={geo} alt="location" className="wrapper_contacts_item_icon" />
                        <a className="wrapper_contacts_item_info" href="#">
                            100000, Республика  Казахстан, <br /> г. Караганда, ул. Телевизионная 10
                        </a>
                    </div>
                    <div className="wrapper_contacts_item">
                        <img src={phone} alt="phone" className="wrapper_contacts_item_icon" />
                        <a className="wrapper_contacts_item_info" href="tel:+380000000000">+38 (000) 000 00 00</a>
                    </div>
                    <div className="wrapper_contacts_item">
                        <img src={mail} alt="mail" className="wrapper_contacts_item_icon" />
                        <a className="wrapper_contacts_item_info" href="mailto:mail@gmail.com">mail@gmail.com</a>
                    </div>
                </div>
                <div className="wrapper_social">
                    <div className="wrapper_social_header">Социальные сети</div>
                    <div className="wrapper_social_items">
                        <a href="#"><img src={facebook} alt="facebook" className="wrapper_social_items_icon" /></a>
                        <a href="#"><img src={twitter} alt="twitter" className="wrapper_social_items_icon" /></a>
                        <a href="#"><img src={linkedin} alt="linkedin" className="wrapper_social_items_icon" /></a>
                        <a href="#"><img src={pinterest} alt="pinterest" className="wrapper_social_items_icon" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Basement;