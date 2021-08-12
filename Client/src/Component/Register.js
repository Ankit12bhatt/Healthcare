import React,{useState} from 'react'
import logo3 from '../images/logo3.png';
import Login from './Login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history=useHistory();
    const [user, setUser]=useState({
        name:"",
        // Dt:"",
        houseno:"",
        street:"",
        city:"",
        state:"",
        phoneNumber:"",
        email:"",
        password:""


    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value

        })
    }
        // const register=()=>{
        //     const{name, email, password }=user
        //     if(name && email && password)
        //     {
        //      axios.post("localhost:5000/register",user)
        //      .then(res=> {
        //          alert(res.data.message)
        //          history.push("/login")
             
        //         })
        //     }
        //     else{
        //         alert("invalid");
        //     }
        // }
const PostData=async (e)=>{
    e.preventDefault(); 
    const{name,
    Dt,
    houseno,
    street,
    city,
    state,
    // address,
    phoneNumber,
    email,
    password}=user;
    const res= await fetch("/reg",{
        method: "POST",
        body: JSON.stringify({
            name,
    // Dt,
    houseno,
    street,
    city,
    state,
    phoneNumber,
    email,
    password
        })
    })
    const data= await res.json();
    if(data.status==400 || !data){
        window.alert("Invalid reg");
        console.log("invalid");
    }else{
        window.alert("reg");
        console.log("succ");
        history.push("/login");
    }
}
    return (
        <>
             <section className="login">
             <div className="loginContainer">
              <div className="imagestyle">
                  <img style={{height:70}} src={logo3} alt="logo"/>
              </div>
              <form method="POST">
              <label>Name</label>
                     <input type="text" placeholde="Enter name" name="name" value={user.name} onChange={handleChange}/>
                 <label> Date of birth</label>
                     {/* <input type="Date" onClick={handleChange}/> */}
                     <label> Address</label>
                     {/* <input type="text" placeholder="House number" name="address" value={user.houseno} onChange={handleChange}/> */}
                     <input type="text" placeholder="House number" name="houseno" value={user.houseno} onChange={handleChange}/>
                     <input type="text" placeholder="Street" name="street" value={user.street} onChange={handleChange}/>
                     <input type="text" placeholder="City" name="city" value={user.city} onChange={handleChange}/>
                     <input type="text" placeholder="State" name="state" value={user.state} onChange={handleChange}/>
                     <label>Mobile number</label>
                     <input type="number" placeholder="Number" name="phoneNumber" value={user.phoneNumber} onChange={handleChange}/>     
                     
              <label> email</label>
                 <input type="text" placeholder="enter email" name="email" value={user.email} onChange={handleChange}/>
                 <p className="errorMsg"></p>
                 <label> Password</label>
                <input type="password" placeholder="enter password" name="password" value={user.password} onChange={handleChange}/>
                <div className="btnContainer">
                <button onClick={PostData}>Sign Up</button>
                </div>
              </form>
              
                
                <div className="btnContainer">
                <p>have an account ?  <span onClick={()=>history.push("/login")}>Sign in</span></p>
                </div>
                </div>

              
              </section>
        </>
    )
}

export default Register
