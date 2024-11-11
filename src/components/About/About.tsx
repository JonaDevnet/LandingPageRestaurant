import React from "react";
import AboutBackground from "../../Assets/Imgs/about-background.png"
import AboutBackgroundImage from "../../Assets/Imgs/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs";
import './About.css'

export const About: React.FC = () => {
    return (
        <div className="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" />
            </div>
            <div className="about-section-image-cointainer">
                <img src={AboutBackgroundImage} alt="" />
            </div>
            <div className="abount-section-text-container">
                <p className="primary-subheading">
                    About
                </p>
                <h1 className="primary-heading">
                    Food is an important part of a balanced diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                    elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.            
                </p>
                <p className="primary-text">
                    Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                    facilisis at fringilla quam.
                </p>
                <div className="about-buttons-container">
                    <button className="secondary-button">Learn More</button>
                    <button className="watch-video-button">
                        <BsFillPlayCircleFill/> Watch video
                    </button>
                </div>
            </div>
        </div>
    )
}