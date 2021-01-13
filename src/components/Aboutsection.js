import React from 'react'
// Import Styled Components
import styled from 'styled-components';
// Import the necesaary styled components from styles.js
import {StyledDescription,StyledTitle,StyledImage} from '../Styles';
import home1 from '../img/home1.png';
// Import Framer motion for Transition
import {motion} from 'framer-motion';
import {titleAnimation,fade,imageAnimation} from '../Animation';
// Wave SVG
import Wave from '../components/Wave';
function Aboutsection() {
    // Using variants for framer motion
    // const titleAnimation = {
    //     hidden : {y:100},
    //     show : { y:0, transition : {duration:2}}
    // }
    return (
        <StyledDescription>
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                </StyledHide>
                <StyledHide>
                    <motion.h2 variants={titleAnimation}>your <span>dream</span> come</motion.h2>
                </StyledHide>
                <StyledHide>
                    <motion.h2 variants={titleAnimation}>true.</motion.h2>
                </StyledHide>
                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledTitle>
            <StyledImage>
                <motion.img variants={imageAnimation} src={home1} alt="camera guy"/>
            </StyledImage>
            <Wave/>
        </StyledDescription>
    )
}

// Styling the components

const StyledHide = styled.div`
overflow:hidden;
`
export default Aboutsection
