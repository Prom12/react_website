import React,{useEffect} from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import Portfolio from './component/Portfolio'
import {heroData,servicesData,portfolioData} from './component/Data/home'

/*
useEffect(()=>{
    async function fetchData(){
        const req = await axios.get('/');
        //setInfo(req.data); create a state
    }
    fetchData()
},[])
*/
export default function Home() {
    return (
        <div>
            <Hero {...heroData}/>
            <Services {...servicesData}/>
            <Portfolio {...portfolioData}/>
        </div>
    )
}
