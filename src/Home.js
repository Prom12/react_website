import React,{useEffect,useState} from 'react'
import Hero from './component/Hero'
import Services from './component/Services'
import Portfolio from './component/Portfolio'
import {heroData,servicesData,portfolioData} from './component/Data/home'
import axios from "./Home"

export default function Home() {
/*
    const [Info,setInfo]= useState();
    
useEffect(()=>{
    async function fetchData(){
        const req = await axios.get('/');
        setInfo(req.data); //create a state
    }
    fetchData()
},[])
*/
    return (
        <div>
            <Hero {...heroData}/>
            <Services {...servicesData}/>
            <Portfolio {...portfolioData}/>
        </div>
    )
}
