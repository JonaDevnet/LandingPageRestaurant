import React from "react";
import BannerBackground from "../../Assets/Imgs/home-banner-background.png"
import BannerImage from "../../Assets/Imgs/home-banner-image.png"
import { FiArrowRight } from "react-icons/fi"
import { Navbar } from "./Navbar/Navbar";
import './Home.css'

export const Home: React.FC = () => {
    return (
        <div className="home-container">
            <Navbar/>
            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BannerBackground} alt="" />
                </div>
                <div className="home-text-section">
                    <h1 className="primary-heading">
                        Your favorite food delivered Hot & Fresh
                    </h1>
                    <p className="primary-text">
                        Healthy switcher chefs do all the prep work, like pedding, chopping
                        & marinating, so you can cook a fresh food.
                    </p>
                    <button className="secondary-button">
                        OrderNow <FiArrowRight/> {" "}
                    </button>
                </div>
                <div className="home-image-section">
                    <img src={BannerImage} alt="" />
                </div>
            </div>
        </div>
    )
}