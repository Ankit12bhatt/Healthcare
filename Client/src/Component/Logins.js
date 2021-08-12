import React,{useState} from 'react'
import logo3 from '../images/logo3.png';
import './Login.css';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Logins = (setLoginUser) => {
    const history= useHistory()
    const [email,setEmail]=useState('');
    const [password, setPassword]= useState('');


    // const LoginUser = async (e)=>{

    // };
    return (
        <>
        
        <section className="login">
        {/* {console.log(user)} */}
             <div className="loginContainer">
              <div className="imagestyle">
                  <img style={{height:70}} src={logo3} alt="logo"/>
              </div>
              <label> Username</label>
                 <input type="text" placeholder="enter username" name="username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <p className="errorMsg"></p>
                 <label> Password</label>
                <input type="password" placeholder="enter password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className="btnContainer">
                {/* <button onClick={LoginUser}>Sign In</button> */}
                <p>Don't have an account ? <span onClick={()=>history.push("/register")}>Sign up</span></p>
                </div>

              </div>
              </section>

        </>
    )
}

export default Logins
