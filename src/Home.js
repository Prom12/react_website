import React from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import Portfolio from './component/Portfolio'
import {heroData,servicesData,portfolioData} from './component/Data/home'


export default function Home() {
    return (
        <div>
            <Hero {...heroData}/>
            <Services {...servicesData}/>
            <Portfolio {...portfolioData}/>
        </div>
    )
}
