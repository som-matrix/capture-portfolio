import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import {pageAnimation,fade,imageAnimation,lineAnimation,rainbowAnimation,sliderContainer, dopeAnim} from '../Animation';
import {useScroll} from '../components/useSroll';
import ScrollTop from '../components/ScrollTop';
function OurWork() {
    const [element,controls] = useScroll();
    const [element2,controls2] = useScroll();
    return (
        <StyledWork style ={{background:'#fff'}} variants={pageAnimation} animate="show" initial="hidden" exit="exit">
            <motion.div variants={sliderContainer}>
             <Frame1 variants={rainbowAnimation}></Frame1>
             <Frame2 variants={rainbowAnimation}></Frame2>
             <Frame3 variants={rainbowAnimation}></Frame3>
             <Frame4 variants={rainbowAnimation}></Frame4>
            </motion.div>
            <StyledMovie initial="show">
                <h2>The Athlete</h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link  to="/work/the-athlete">
                    <Hide><motion.img variants={imageAnimation} src={athlete} alt="Athlete"/></Hide>
                </Link>
            </StyledMovie>

            <StyledMovie variants={fade} ref={element} animate={controls} initial="hidden">
                <h2>The Racer</h2>
                <motion.div variants={lineAnimation} ref={element} animate={controls} initial="hidden" className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide><motion.img variants={dopeAnim} ref={element} animate={controls} initial="hidden" src={theracer} alt="Racer"/></Hide>
                </Link>
            </StyledMovie>

            <StyledMovie variants={fade} ref={element2} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnimation} ref={element2} animate={controls2} initial="hidden" className="line"></motion.div>
                <Link to="/work/good-times">
                 <Hide><motion.img variants={dopeAnim} ref={element2} animate={controls2} initial="hidden" src={goodtimes} alt="Good-Times"/></Hide>
                </Link>
            </StyledMovie>
            <ScrollTop/>
        </StyledWork>
    )
}

const StyledWork = styled(motion.div)`
 min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  @media (max-width: 1410px) {
    padding: 2rem 2rem;
  }
`
const StyledMovie = styled(motion.div)`
 padding-bottom:10rem;
 h2{
     padding: 2rem 0;
     color:#1b1b1b;
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
const Hide = styled.div`
 overflow:hidden;
`
// Rainbow Frame
const Frame1 = styled(motion.div)`
 position:fixed;
 left:0;
 top:0%;
 width:100%;
 height:100vh;
 background-color:#ffeb1f;
 z-index:2;
`
const Frame2 = styled(Frame1)`
background-color:#ff8efb;
`
const Frame3 = styled(Frame1)`
background-color:#8ed2ff;
`
const Frame4 = styled(Frame1)`
background-color:purple;
`
export default OurWork
