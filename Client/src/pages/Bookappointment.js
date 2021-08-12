import React from 'react'
import './AppointmentStyle.css'
import doc from './images/dockint.jpg';

const Bookappointment = () => {
  const handelBooking=()=>{
    window.alert("appointment Booked");
  }
    return (
        <div>
             {/* <label htmlFor="appointmentDate"></label>
                {/* <Input>
                type="datetime-local"
                  className="form-control"
                  name="appointmentDate"

                </Input>
               */} 
               <div className="contappointment">

                <div className="textcenter">
                    <img src={doc} alt="Docname" />
                    </div>
                    <div className="details">
                    <h3> Appointment:- </h3>
                    <div>
                    <label>Enter Date:-</label>
                    </div>
                    <div>
                    <input type="Date"/>
                    </div>
                    <label>Enter Time:-</label>
                    <div>
                    <input type="time"/>
                    </div>
                    <label> CLICK TO BOOK APPOINTMENT</label>
                    <button onClick={handelBooking}>Book</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Bookappointment
