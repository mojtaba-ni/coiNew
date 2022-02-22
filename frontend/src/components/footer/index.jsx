import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './footer.css'

export default () => {
    return (
        <div className='footer'> 
            <div className="container">
                <div className="col title">
                    <h1>coi<span className='primary'>New</span></h1>
                    <span className='barfirst'/>
                </div>
                <div className="col">
                    <h5>Support</h5>
                    <span className='bar'/>
                    <a href="/">Contact Us</a>
                    <a href="/">Chat</a>
                    <a href="/">Help Center</a>
                    <a href="/">FAQ</a>
                </div>
                <div className="col">
                    <h5>Developers</h5>
                    <span className='bar'/>
                    <a href="/">Cloud</a>
                    <a href="/">Commerce</a>
                    <a href="/">Pro</a>
                    <a href="/">API</a>
                </div>
                <div className="col">
                    <h5>Company</h5>
                    <span className='bar'/>
                    <a href="/">About</a>
                    <a href="/">Information</a>
                    <a href="/">Legal</a>
                    <a href="/">Privacy</a> 
                </div>
                <div className="col">
                    <h5>Account</h5>
                    <span className='bar'/>
                    <a href="/"><FaFacebook className='icon'/>FaceBook</a>
                    <a href="/"><FaTwitter className='icon'/>Twitter</a>
                    <a href="/"><FaLinkedin className='icon'/>Linkedin</a>
                    <a href="/"><FaGithub className='icon'/>GitHub</a>  
                </div>
            </div>
        </div>
    )
}


