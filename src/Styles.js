import styled from 'styled-components';
import {motion} from 'framer-motion';
// These are the styled components which we need to reuse
export const StyledDescription = styled(motion.div)`
 min-height:90vh;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:5rem 10rem;

 @media (max-width: 1410px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`
export const StyledTitle = styled.div`
flex:1;
padding-right:5rem;

@media (max-width: 1410px){
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
}
`

export const StyledImage = styled.div`
/* flex:1; */
overflow:hidden;
`