import React, { useState } from 'react';
import Footer from "../Footer"
import Projects from "../Projects"
import AboutMe from "../AboutMe"
import AboutMeParagraph from "../AboutMeParagraph"
const About = () => {
    return (
    <>
        <AboutMeParagraph />
        <AboutMe />
        <Projects />
        <Footer />
    </>
    )
}
export default About