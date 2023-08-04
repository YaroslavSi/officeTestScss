import React from "react";
import caller from '../../assets/images/form/caller.png';
import pointerRight from '../../assets/icons/arrow_white.png';
import { useEffect } from "react";
import WOW from 'wowjs';

const Form = (props) => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return (
        <section className="form_wrapper wow animate__rollIn" data-wow-duration="2s">
            <div className="form_tittle">Связаться с нами</div>
            <div className="form">
                <div className="form_item">
                    <input type="text" name="username" placeholder="Имя" className="form_shape"></input>
                    <input type="number" name="number" placeholder="Номер телефона*" className="form_shape" required></input>
                    <input type="email" name="email" placeholder="E-mail*" className="form_shape" required ></input>
                    <input type="text" name="goods" placeholder="Интересующий товар/услуга" className="form_shape"></input>
                    <input type="text" name="message" placeholder="Сообщение*" className="form_text" required></input>
                </div>
                <img className="form_picture" src={caller} alt="caller" />
            </div>
            <div className="form_apply">Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</div>
            <button className="form_button">
                <div className="form_button_tittle">ОТПРАВИТЬ</div>
                <img className="form_button_pointer" src={pointerRight} alt="pointer" />
            </button>
        </section>
    )
};

export default Form;