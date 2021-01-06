import React from 'react'
import styled from 'styled-components';
import {StyledDescription} from '../Styles';
function Faqsection() {
    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h3>How do i start</h3>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h3>Daily Schedule</h3>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h3>Diffrent Payment Methods</h3>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h3>What Products do you offer</h3>
                <div className="answers">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, unde!</p>
                </div>
                <div className="faq-line"></div>
            </div>
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
