import React from 'react'
// Import Styled Components
import styled from 'styled-components';
// Import the necesaary styled components from styles.js
import {StyledDescription,StyledTitle,StyledImage} from '../Styles';
import home1 from '../img/home1.png';
function Aboutsection() {
    return (
        <StyledDescription>
            <StyledTitle>
                <StyledHide>
                    <h2>We work to make</h2>
                </StyledHide>
                <StyledHide>
                    <h2>your <span>dream</span> come</h2>
                </StyledHide>
                <StyledHide>
                    <h2>true.</h2>
                </StyledHide>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledTitle>
            <StyledImage>
                <img src={home1} alt="camera guy"/>
            </StyledImage>
        </StyledDescription>
    )
}

// Styling the components

const StyledHide = styled.div`
overflow:hidden;
`
export default Aboutsection
