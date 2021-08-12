import React from 'react'
import doc from './images/docpoint.jpg';
import './Doctorsstyle.css';


import { Link } from 'react-router-dom';

const Doctors = () => {
  const docname="ankit bhatt";
  return (
    <>
     <div className="doctitle">
          <h1>List of Doctors</h1>
          <p>please select a doctor to check details </p> 
          </div>
      <div className="doccard">
      <div key={docname}>
      
      <Link to={`/Appointmentpage/${docname}`}>
      <img style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> dr. Ankit Bhatt</h2>
      <span> cardiologist</span>
      </Link>
     
      </div>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> dr. JHON SNOW</h2>
      <span> Genreal checkup</span>
      </Link>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> dr. Harry Potter</h2>
      <span> Colon and Rectal Surgeons</span>
      </Link>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> dr. Anil Kumar</h2>
      <span> Dermatologist</span>
      </Link>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> Dr. Manisha</h2>
      <span> Dentist</span>
      </Link>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> Dr. Shub</h2>
      <span> Emergency Medicine Specialist</span>
      </Link>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> dr. Allan</h2>
      <span> Allergists</span>
      </Link>
      <Link to={`/Appointmentpage/${docname}`}>
      <img  style={{height: 150, borderRadius: 450}} src={doc} alt="doc image"/>
      <h5> DOC name</h5>
      <h2> dr. Marshall</h2>
      <span> Anesthesiologists</span>
      </Link>

      
      </div>
      
    </>
  )
}

export default Doctors
