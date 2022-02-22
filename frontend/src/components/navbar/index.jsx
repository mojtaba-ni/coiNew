import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
import './navbar.css'

export default () => {
    const [click, setClick] = useState(false)
    const Navigate = useNavigate()
    const HandleUser = (e) =>{
        Navigate('/sign', { replace: true })
    }

    //Handlers//
    const HandleClick = ()=> {
        setClick(!click)
    }
    return (
        <div className='header'>
            <div className="container">
                <a href='/' className='header-title'>coi<span className='primary'>New</span></a>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Featured</a>
                    </li>
                    <li>
                        <a href="/">Earn</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
                <div className="btn-group">
                    <button className='btn' onClick={HandleUser}>Connect Wallet</button>
                </div>
                <div className="hamburger" onClick={HandleClick}>
                    {click ? (<FaTimes size={20} style={{color:'#333'}}/>):(<FaBars size={20} style={{color: '#333'}}/>)}
                </div>
            </div>
        </div>
    )
}


