import React from 'react'
import './Hero.css'
import {Button} from './Button'

function Hero({title,description,url}) {
    return (
        <div className='hero-container' 
                style={{backgroundImage:`url(${url})`, 
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                alt:'/logo192.png'
                }}>
            <div className='hero-head'>
                <h3 className= 'head-title'>{title}</h3>           
            </div>
            <div className='hero-description'>
                <h2 className= 'head-description'>{description}</h2>           
            </div>
            <div className= 'hero-button'>
                <Button>Sign Up</Button>                   
            </div>
        </div>
    )
}

export default Hero
