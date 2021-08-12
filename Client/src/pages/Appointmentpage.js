import React from 'react'
import { Link, useParams } from 'react-router-dom';
import './AppointmentStyle.css'
import doc from './images/dockint.jpg';

const Appointmentpage = () => {
    const {docname}=useParams();
    
        
    return (
        <>
        
            <div className="contappointment">

                <div className="textcenter">
                    <img src={doc} alt="Docname" />
                    </div>
                    <div className="details">
                    <p className="fee"> Appointment fee: <span>Rs.300</span> </p>
                    <p className="qualification">Qualification: <span>MBBS, PHD</span> </p>
                    <p className="Experience:"> Experience: <span>5yr.</span> </p>
                    <Link to="/Bookappointment">
                       <button className="button"> Book appointment</button>

                    </Link>
                </div>
            </div>
        
        </>
    )
}

export default Appointmentpage

