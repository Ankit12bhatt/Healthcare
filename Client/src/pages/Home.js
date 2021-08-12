import React from 'react';
import './Homestyle.css';
import fare from './images/fare.jpg'

function Home() {
  return (
    <>
    <div className="cards">
    <div className="card-single">
    <div>
      <img style={{height:105, width:105}} src={fare} alt="profile"/>
    </div>
    <div className="content">
      <h2> Ankit Bhatt</h2>
      <h3> DOB:- 01-11-2000</h3>
      <h4> Sex:- Male</h4>

    </div>
    </div>
    </div>
    <div className="INFO">
      <label>Address :- </label>
      <div className="add">
      <div>
      {/* <input type="text" id="house number" placeholder="enter house number" value="plot no.324"/> */}
      <h3>plot no. 324</h3>
      </div>
      <div>
      {/* <input type="text" id="house number" placeholder="street, area" value="lane no. 6, Banjarawala"/> */}
      <h3>Lane no 6,bhagirathi puram</h3>
      </div>
      <div>
      {/* <input type="text" id="house number" placeholder="City" value="Dehradun"/> */}
      <h3>Banjarawala, Dehradun</h3>
      <h3>Uttrakhand, <span>248001</span></h3>
      </div>
      </div>
    
      </div>
    
    <div>
      <label> Mobile number:-</label>
      <h2 className="INFO">9876543210</h2>
      <label>Email:- </label>
      <h2 className="INFO">ankitbhatt640@gmail.com</h2>
    </div>
    

    

    
    </>
  );
}

export default Home;