import React from 'react'
import './services.css'
import Header from './Header'
import {FaShoppingCart} from 'react-icons/fa'

function Services({headerT,headerD,iconT,iconD}) {
    return (
        <div className='services-container'>
            <Header title = {headerT} description = {headerD}/>
            <div className='services-item'>
                
                <div className='service-item'>
                    <span className='icons'><FaShoppingCart className='icon'/></span>
                    <div className='service-des'>
                        <h2 className='icon-title'>{iconT}</h2>
                        <p className='icon-description'><i>{iconD}</i></p>
                    </div>
                </div>
                <div className='service-item'>
                    <span className='icons'><FaShoppingCart className='icon'/></span>
                    <div className='service-des'>
                        <h2 className='icon-title'>{iconT}</h2>
                        <p className='icon-description'><i>{iconD}</i></p>
                    </div>
                </div>
                <div className='service-item'>
                    <span className='icons'><FaShoppingCart className='icon'/></span>
                    <div className='service-des'>
                        <h2 className='icon-title'>{iconT}</h2>
                        <p className='icon-description'><i>{iconD}</i></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Services
