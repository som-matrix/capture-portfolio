import React from 'react'
// Import Styled Components
import styled from 'styled-components';
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
const StyledDescription = styled.div`
 min-height:90vh;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:5rem 10rem;
`
const StyledTitle = styled.div`
flex:1;
padding-right:5rem;
`
const StyledImage = styled.div`
/* flex:1; */
overflow:hidden;

/* img{
    width:100%;
    height:80vh;
    object-fit:cover;
} */
`
const StyledHide = styled.div`
overflow:hidden;
`
export default Aboutsection
