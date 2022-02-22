import React from 'react'
import earn from '../../assets/trade.png'
import './earn.css'

export default () => {
    return (
        <div className='earn'>
            <div className='container'>
                {/* Left */}
                <div className="left">
                    <div className="top">
                        <img  src={earn} alt="" />
                    </div>
                </div>
                {/* Right */}
                <div className="right">
                    <h2>Earn passive income with crypto</h2>
                    <p>Passive income is money generated from ventures in which an individual is not actively involved. For the most part, all you need to do is invest your money or digital assets in a particular crypto investment strategy or platform and watch it generate profit.</p>
                    <button className='btn'>Learn More </button>
                </div>
            </div>
        </div>
    )
}


