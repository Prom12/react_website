import React from 'react'
import './Portfolio.css'
import Header from './Header'

export default function Portfolio({headerT,headerD,url,portT,portD,alt}) {
    return (
        <div className='port-back'>
            <Header title={headerT} description={headerD}/>
                <div className='portfolio'>   
                    <div className='portfolio-item'>
                        <img className='img' src={`${url}`} style={{backgroundImage:`url(${alt})`,alignSelf:'center', backgroundPosition:'center',}}></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>

                    <div className='portfolio-item'>
                    <img className='img' src={`${url}`} style={{backgroundImage:`url(${alt})`,alignSelf:'center', backgroundPosition:'center',}}></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>

                    <div className='portfolio-item'>
                    <img className='img' src={`${url}`} style={{backgroundImage:`url(${alt})`,alignSelf:'center', backgroundPosition:'center',}}></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>

                    <div className='portfolio-item'>
                    <img className='img' src={`${url}`} style={{backgroundImage:`url(${alt})`,alignSelf:'center', backgroundPosition:'center',}}></img>
                        <div className='portfolio-des'>
                        <Header title={portT} description={portD}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
