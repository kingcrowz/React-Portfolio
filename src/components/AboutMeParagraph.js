import React from 'react'
import "../styles/aboutmeparagraph.css"
import AboutAnimation from './AboutAnimation'
const AboutMeParagraph = () => {
    const text = "Hello, my name is Zachary Zaleski, I am a 26 year old Full-Stack Developer from Voorhees, NJ. I graduated from the full stack coding bootcamp at the University of Pennsylvania powered by Trilogy on November 13th, 2021."
    return (
        <div className="aboutParaComponent">
            <div className="aboutParaDiv">
                    <AboutAnimation text={text} />
            </div>
        </div>
    )
}
export default AboutMeParagraph