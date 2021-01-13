import React from 'react'
import styled from 'styled-components';
import {StyledDescription} from '../Styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion'
import {useScroll} from './useSroll';
import {scrollReveal} from '../Animation';
function Faqsection() {
    const [element,controls] = useScroll();
    return (
        <StyledFaq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
             <Toggle title='How do i start'>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
             </Toggle>
             <Toggle title='Daily Schedule'>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
             </Toggle>
             <Toggle title='Diffrent Payment Methods'>
                 <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                 </div>
             </Toggle>
             <Toggle title='What Products do you offer'>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
             </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledDescription)`
 
 display:block;

 span{
     display:block;
 }
 .question{
     padding:2rem 0rem;
     h3{
         cursor:pointer;
     }
     .answers{
       padding: 2rem 0;
         p{
             padding:1.5rem 0 !important;
         }
     }
     .faq-line{
         background-color:#cccccc;
         height:0.3rem;
         width:100%;
         margin:2rem 0;
     }
 }

`
export default Faqsection
