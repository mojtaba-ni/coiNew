import React from 'react'
import Navbar from '../../components/navbar'
import Hero from '../../components/hero'
import Featured from "../../components/featured";
import Earn from "../../components/earn";
import "./home.css"

export default  () => {
    return (
        <div className='background'>
            <Navbar/>
            <Hero/>
            <Featured/>
            <Earn/>
            
        </div>
    )
}


