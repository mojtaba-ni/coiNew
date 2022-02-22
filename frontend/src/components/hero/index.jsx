import React from 'react'
import Crypto from '../../assets/hero-img.png'
import './hero.css'


export default () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="left">
                    <p>Buy & sell Crypto 24/7 using your retirment account </p> 
                    <h1>invest in Cryptocurrency with your IRA</h1>
                    <p>Buy,Sell and store hundreds of cryptocurrencies</p>
                    <div className="input-container">
                        <input type="email" placeholder='Enter your email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Crypto} alt="" />
                    </div>
                </div>
            </div>  
        </div>
    )
}


