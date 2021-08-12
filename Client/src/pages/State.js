import React,{useEffect,useState} from 'react'
import './Statestyle.css';
const State = () => {
    const [data, setData]= useState([]);
  
    const Covidstate= async()=>{ 
      const res1= await fetch('https://api.covid19india.org/data.json');
      const actualdata1= await res1.json();
      console.log(actualdata1.statwise);
      setData(actualdata1.statewise);
    }
    
    useEffect(()=>{
      
      Covidstate();
    },[]);
    return (
        <>
            <h1> India COVID-19 DASHBOARD</h1>
            <div className="contain">
                <div className="main-heading">
                    <h1 className="mb-5"> <span className="font-weight-bold">INDIA</span>COVID- 19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover" cellSpacing="50">
                        <thead className="thead-dark">
                            <tr>
                                <th style={{color: 'white'}}>STATE </th>
                                <th style={{color: 'white'}}> CONFIRMED</th>
                                <th style={{color: 'white'}}> RECOVERED</th>
                                <th style={{color: 'white'}}> DEATH</th>
                                <th style={{color: 'white'}}> ACTIVE</th>
                                <th style={{color: 'white'}}> UPDATE</th>
                            </tr>
                        </thead>
                        <tbody className="tablebody">
                        
                            {data.map((curElem, ind)=>{
                                return(
                                    <tr key={ind}>
                                        <td style={{color:'white'}}>{curElem.state} </td>
                                        <td style={{color:'white'}}> {curElem.confirmed}</td>
                                        <td style={{color:'white'}}> {curElem.recovered}</td>
                                        <td style={{color:'white'}}> {curElem.deaths}</td>
                                        <td style={{color:'white'}}> {curElem.active}</td>
                                        <td style={{color:'white'}}> {curElem.lastupdatedtime}</td>
                                    </tr>
                                )

                            })}
                        
                        
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default State
