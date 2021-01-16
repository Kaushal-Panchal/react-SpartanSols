import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import image from '../Images/about.svg';

const About = ()=>{
    return(
        <>
        <Common 
        image={image} 
        head="Want to know dev's at "
        btn="Let's talk"
        btnTo = "/contact"
        ></Common>
        </>
    );
}

export default About;