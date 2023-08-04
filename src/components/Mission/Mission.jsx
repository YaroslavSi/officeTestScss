import React from "react";

const Mission = (props) => {
    return (
        <section className="mission" id="certificate">
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