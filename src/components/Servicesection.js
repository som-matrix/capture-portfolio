import React from 'react';
// Styled Components
import styled from 'styled-components';
// Import the necesaary styled components from styles.js
import {StyledDescription,StyledTitle,StyledImage} from '../Styles';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
function Servicesection() {
    return (
        <StyledServices>
            <StyledTitle>
                <div className="details">
                    <h2>High <span>Quality</span>Services.</h2>
                </div>
                <StyledCards>
                    <StyledCard>
                      <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                      <div className="icon">
                        <img src={teamwork} alt="people"/>
                        <h3>Teamwork</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                      <div className="icon">
                        <img src={diaphragm} alt="diaphragm"/>
                        <h3>Diaphragm</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                      <div className="icon">
                        <img src={money} alt="money"/>
                        <h3>Affordable</h3>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledTitle>
            <StyledImage>
                <img src={home2} alt="camera"/>
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledDescription)`
h2{
    padding-bottom:5rem;
}
h3{
    font-size:1.5rem;
}
p{
    width:70%;
    padding: 2rem 0rem 4rem 0rem;
}
`;

// Cards
const StyledCards = styled.div`
display:flex;
flex-wrap:wrap;
`
// Single Card
const StyledCard = styled.div`
flex-basis:25rem;

.icon{
    display:flex;
    align-items:center;

    h3{
        background-color:white;
        color:#1b1b1b;
        padding:1rem 1.2rem;
        margin-left:1.5rem;
    }
}
`
export default Servicesection
