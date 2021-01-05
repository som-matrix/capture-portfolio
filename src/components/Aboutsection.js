import React from 'react'
import home1 from '../img/home1.png';
function Aboutsection() {
    return (
        <div className="description">
            <div className="title">
                <div className="hide">
                    <h1>We work to make</h1>
                </div>
                <div className="hide">
                    <h1>your <span>dream</span>come</h1>
                </div>
                <div className="hide">
                    <h1>true.</h1>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
            </div>
            <div className="img-container">
                <img src={home1} alt="camera guy"/>
            </div>
        </div>
    )
}

export default Aboutsection
