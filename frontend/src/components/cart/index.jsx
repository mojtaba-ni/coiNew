import React from 'react'
import {FiArrowUpRight,FiArrowDown} from 'react-icons/fi'
import './cart.css'

export default({item}) => {
    const {id,name,current_price,image,price_change_percentage_24h} = item;
    return (
        <div className='cart' key={id}>
            <div className="top">
                    <img src={image} alt="" />
            </div>
            <div className='cart-desc'>
                <h5>{name}</h5>
                <p>${current_price.toLocaleString()}</p>
                {price_change_percentage_24h>0 ?
                    <span className='primary'> 
                        <FiArrowUpRight className='icon'/>
                        {price_change_percentage_24h.toFixed(2)}%
                    </span>
                    :
                    <span className='down'> 
                        <FiArrowDown className='icon'/>
                       {price_change_percentage_24h.toFixed(2)}%
                     </span>
                }
               
            </div>
        </div>
    )
}


