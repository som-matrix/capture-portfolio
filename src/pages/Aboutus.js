import React from 'react'
import Aboutsection from '../components/Aboutsection';
import Servicessection from  '../components/Servicesection';
import Faqsection from '../components/Faqsection';
import {motion} from 'framer-motion';
import {pageAnimation} from '../Animation';
import ScrollTop from '../components/ScrollTop';
function Aboutus() {
    return (
        <motion.div variants={pageAnimation} animate="show" initial="hidden" exit="exit">
          <Aboutsection/>
          <Servicessection/> 
          <Faqsection/>
          <ScrollTop/>
        </motion.div>
    )
}

export default Aboutus
