import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
function OurWork() {
    return (
        <StyledWork>
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                 <img src={athlete} alt="Athlete"/></Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                 <img src={theracer} alt="Racer"/></Link>
            </StyledMovie>
            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                 <img src={goodtimes} alt="Good-Times"/></Link>
            </StyledMovie>
        </StyledWork>
    )
}

const StyledWork = styled.div`
 min-height:100vh;
 overflow:hidden;
 padding:5rem 10rem;
`
const StyledMovie = styled.div`
 padding-bottom:10rem;

 h2{
     padding: 2rem 0;
 }
 .line{
     height:0.3rem;
     margin:2rem 0;
     width:100%;
     background-color: #62da97;
 }
 img{
     width:100%;
     height:70vh;
     object-fit:cover;
 }
`
export default OurWork
