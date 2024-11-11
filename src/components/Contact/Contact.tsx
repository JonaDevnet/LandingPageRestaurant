import React from "react";
import './Contact.css'

export const Contact: React.FC = () => {
    return (
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">Have quiestion in mind?</h1>
            <h1 className="primary-heading">Let us help you</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="yourmail@gmail.com" />
                <button className="secondary-button">Submit</button>
            </div>
        </div>
    )
}