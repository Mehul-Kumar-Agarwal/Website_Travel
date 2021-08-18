import React from 'react';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            {/* Put a video here */}
            <video src="/videos/video-2.mp4" autoPlay loop muted></video>
            <h1>Adventuers Awaits</h1>
            <p>Wait no more!</p>
            <div className="hero-btns">
                <Button 
                    className="btns" 
                    buttonStyle="btn--outline" 
                    buttonSize="btn--large"
                >
                    Get Started
                </Button>
                <Button 
                    className="btns" 
                    buttonStyle="btn--primary" 
                    buttonSize="btn--large"
                >
                    Watch Trailer <i className="far fa-play-circle"></i>
                </Button>
            </div>
        </div>
    )
}

export default Hero
