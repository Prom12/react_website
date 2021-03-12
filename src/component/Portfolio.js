import React from 'react'
import './Portfolio.css'
import Header from './Header'

export default function Portfolio({headerT,headerD,url,portT,portD}) {
    return (
        <div>
            <Header title={headerT} description={headerD}/>
                <div className='portfolio'>   
                    <div className='portfolio-item'>
                        <img className='img' src={`${url}`} alt='image'></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>

                    <div className='portfolio-item'>
                        <img className='img' src={`${url}`} alt='image'></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>

                    <div className='portfolio-item'>
                        <img className='img' src={`${url}`} alt='image'></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>

                    <div className='portfolio-item'>
                        <img className='img' src={`${url}`} alt='image'></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
