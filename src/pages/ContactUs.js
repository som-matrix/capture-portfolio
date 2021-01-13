import React from 'react'
import {motion} from 'framer-motion';
import {pageAnimation,titleAnimation} from '../Animation';
import styled from 'styled-components';
function ContactUs() {
    return (
        <StyledContact style ={{background:'#fff'}}  variants={pageAnimation} animate="show" initial="hidden" exit="exit">
            <motion.h1 variants={titleAnimation}>Get in Touch with us</motion.h1>
            <div className="contact-details">
                <motion.h2 variants={titleAnimation}>Send us a Message</motion.h2>
                <motion.h2 variants={titleAnimation}>Send an Email</motion.h2>
                <motion.h2 variants={titleAnimation}>Social Media</motion.h2>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
min-height:90vh;
padding:5rem 10rem;
 @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
 h1{
     padding-bottom:5rem;
     font-size:4rem;
 }
 h2{
     padding:1rem 0;
     color:#1b1b1b;
     font-size:3rem;
 }
`
export default ContactUs
