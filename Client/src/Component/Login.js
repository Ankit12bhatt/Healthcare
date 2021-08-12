import React from 'react'
import "./Login.css" 

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handelSignup, hasAccount, setHasAccount, emailError, passwordError}= props;
    return (
        <section className="login">
             <div className="loginContainer">
              <div className="imagestyle">
                  <img style={{height:70}} src="/images/logo3.png" alt="logo"/>
              </div>
                 <label> Username</label>
                 <input type="text" autoFocus required value={email} onChange={(e)=> setEmail(e.target.value)}/>
                 <p className="errorMsg">{emailError}</p>
                 <label> Password</label>
                <input type="password" required value={password} onChange={(e)=> setPassword(e.target.value)}/>
                 {/* <input type="password" required value={password} onchange={(e)=> setPassword(e.target.value)} /> */}
                 <p className="errorMsg">{passwordError}</p>

                 <div className="btnContainer">
                 {hasAccount ?(
                     <>
                     <button onClick={handleLogin}>Sign In</button>
                     <p>Don't have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign up</span></p>
                     </>

                 ):(
                    <>
                    <label>Name</label>
                     <input type="text" placeholde="Enter name" />
                     <label> Date of birth</label>
                     <input type="Date" />
                     <button onClick={handelSignup}> Sign up</button>
                     <p> Have an account ?
                      <span onClick={()=>setHasAccount(!hasAccount)}> Sign in</span></p>
                     </>
                 )}

                 </div>
             </div>

        </section>
    )
}

export default Login
