import React from "react";
import WOW from 'wowjs';
import { useEffect } from "react";

const Mission = (props) => {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
      }, []);
    return (
        <section className="mission wow animate__flipInX" id="certificate" data-wow-duration="2s" >
            <div className="mission_tittle">Основные задачи</div>
            <div className="mission_cardContainer">
                <div className="mission_card">
                    <div className="mission_card_number">1</div>
                    <div className="mission_card_descrOne">Создание комфортных условий и повышение качества обслуживания клиентов</div>
                </div>
                <div className="mission_card">
                    <div className="mission_card_number">2</div>
                    <div className="mission_card_descrTwo">Постоянно совершенствовать качество предоставляемых услуг путем обучения персонала, закупки нового оборудования и усиленной рекламы на рынке</div>
                </div>
            </div>
        </section>
    )
};

export default Mission;