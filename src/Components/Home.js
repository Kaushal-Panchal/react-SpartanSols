import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../Images/logo.svg';
import Common from './Common';

const Home = ()=>{
    return(
        <>
        <Common 
        image={image} 
        head="Boot up your business on digital platform with "
        btn='Get Started'
        btnTo = "/about"
        ></Common>
            
        </>
    );
}

export default Home;