import React from 'react';

const Popup = ({isOpen, setIsOpen}) => {
    const openPopup = () => {
        setIsOpen(true);
    };
    const closePopup = () => {
        setIsOpen(false);
    };
    return (
        <div className="popup">
            { isOpen && (
                <div className={isOpen ? "popup_container_active" : "popup_container"}>
                    
                    <div className="popup_content">
                        <div className="popup_content_header">Thank you for <span className="subscribing">subscribing!</span></div>
                        <div className="popup_content_subheader">Now you will receive alerts when new news are released!</div>
                        <button className="popup_content_button" onClick={closePopup}>Good</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Popup;