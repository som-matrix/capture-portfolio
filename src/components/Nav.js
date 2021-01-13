import React from 'react'
import styled from 'styled-components';
import  {motion}  from 'framer-motion';
import {useLocation} from 'react-router-dom';
// Importing special link for a tags
import {Link} from 'react-router-dom';
function Nav() {
    const {pathname} = useLocation();
    return (
        <StyledNav>
          <Link id="logo" to="/">Capture</Link>
          <ul>
               <li>
                  <Link to="/">1. About Us</Link>
                  <Line transition={{duration:0.8}} initial={{opacity:0,width:'0%'}} animate={{opacity:1,width: pathname==='/' ? '45%':'0%'}}/>
                </li>
                <li>
                  <Link to="/work">2. Our Work</Link>
                  <Line transition={{duration:0.8}} initial={{opacity:0,width:'0%'}} animate={{opacity:1,width: pathname==='/work' ? '45%':'0%'}}/>
                </li>
                <li>
                  <Link to="/contact">3. Contact Us</Link>
                  <Line transition={{duration:0.8}} initial={{opacity:0,width:'0%'}} animate={{opacity:1,width: pathname==='/contact' ? '45%':'0%'}}/>
                </li>
          </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
 min-height:10vh;
 display:flex;
 justify-content:space-between;
 align-items:center;
 margin:auto;
 padding:1rem 10rem;
 background-color:#282828;
 position:sticky;
 top:0;
 z-index:10;
 a{
     color:white;
     text-decoration:none;
     font-size:1.2rem;
 }
 ul{
     list-style:none;
     display:flex;
     li{
         padding-left:10rem;
         position:relative;
     }
 }
 #logo{
     font-family:"Lobster" ,cursive;
     font-weight:lighter;
     font-size:1.6rem;
 }
 @media (max-width: 1410px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`
const Line = styled(motion.div)`
 height:0.4rem;
 width:0%;
 margin:1.8rem  0;
 background:#62da97;
 position:absolute;
 left:60%;
 top:25%;
 @media (max-width: 1410px) {
    left: 0%;
  }
`
export default Nav
