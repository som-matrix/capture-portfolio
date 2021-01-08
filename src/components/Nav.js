import React from 'react'
import styled from 'styled-components';
// Importing special link for a tags
import {Link} from 'react-router-dom';
function Nav() {
    return (
        <StyledNav>
          <Link id="logo" to="/">Capture</Link>
          <ul>
              <li><Link to="/">1. About Us</Link></li>
              <li><Link to="/work">2. Our Work</Link></li>
              <li><Link to="/contact">3. Contact Us</Link></li>
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
     }
 }
 #logo{
     font-family:"Lobster" ,cursive;
     font-weight:lighter;
     font-size:1.6rem;
 }
`
export default Nav
