import React,{useEffect,useState} from 'react'
import Cart from '../cart'
import axios from 'axios'
import './featured.css'



export default () => {
    const [Loading, setLoading] = useState(false)
    const [Data, setData] = useState()
    console.log("Data")
    console.log(Data)
    
      useEffect(() => {
        try {
            axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false")
            .then((res)=>{
                setData(res.data)
                setLoading(true)
            })
        } catch (error) {
            console.log(error)
        }
        
      }, [])
    return (
        <div className='featured'>
            <div className='container'>
                {/* Left */}
                <div className="left">
                    <h2>Explore Top Crypto's Like Bitcoin,Ethereum and ...</h2>
                    <p>See all available assets:Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                {/* Right */}
                {Loading &&
                <div className="right">
                    {Data.map((item)=>(
                        <Cart item={item}/>
                    ))}
                </div>
                }
            </div>
        </div>
    )
}


