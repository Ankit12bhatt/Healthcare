import React, { useEffect, useState }from 'react'
import State from './State';
import "./Teststyle.css";
const Test = () => {
  const [data, setData]=useState([]);
  const getCovidData= async()=>{
    try{
   const res= await fetch('https://api.covid19india.org/data.json');
   const actualdata= await res.json();
   console.log(actualdata.statewise[0]);
   setData(actualdata.statewise[0]);
  } catch(err){
    console.log(err);

  }
}
  
  useEffect(()=>{
      getCovidData();
  },[]);
  return (
    <>
    <section className="whole">
    <div className="tracker">
      <h1> COVID-19 Tracker</h1>
      <h6> CURRENT COUNT :- </h6>
        
      </div>
    

    <div className="Covidcards">
      
      <div class="Covidcard-single">
                    <div>
                        <h3> Country:- </h3>
                        <h2> INDIA</h2>
                    </div>                
            </div>
      <div class="Covidcard-single">
                    <div>
                        <h3>RECOVERED:-</h3>
                        <h2> {data.recovered} </h2>
                    </div>                
            </div>
      <div class="Covidcard-single">
                    <div>
                        <h3>CONFIRMED:-</h3>
                        <h2> {data.confirmed}</h2>
                    </div>                
            </div>
      <div class="Covidcard-single">
                    <div>
                        <h3> DEATH:-</h3>
                        <h2> {data.deaths}</h2>
                    </div>                
            </div>
      <div class="Covidcard-single">
                    <div>
                        <h3> ACTIVE:-</h3>
                        <h2> {data.active}</h2>
                    </div>                
            </div>
      <div class="Covidcard-single">
                    <div>
                        <h3> UPDATE:-</h3>
                        <h2> {data.lastupdatedtime}</h2>
                    </div>                
            </div>


            </div>
            <State/>
            </section>
    </>
  )
}
export default Test
