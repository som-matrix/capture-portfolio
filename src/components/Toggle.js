import React,{useState} from 'react'
import { motion } from 'framer-motion';
function Toggle({children,title}) {
    const [toggle,setToggle] =useState(false);
    return (
        <motion.div layout className='question' onClick={()=>setToggle(!toggle)}>
            <motion.h3 layout>{title}</motion.h3>
            {toggle ? children : ''}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle
