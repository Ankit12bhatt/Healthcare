import React, {useState, useEffect} from 'react';
import fire from './Fire';
import Login from './Component/Login';
import Header from './Component/Header';
import Navbar from "./Component/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
// import Logins from './Component/Logins';
import Register from './Component/Register';

import './App.css';
import Axios from 'axios';
import Doctors from './pages/Doctors';
import Appointmentpage from './pages/Appointmentpage';
import Bookappointment from './pages/Bookappointment';



const App = () => {
  const [user, setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password, setPassword]= useState('');
  const [emailError, setEmailError]=useState('');
  const [passwordError, setPasswordError]=useState('');
  const [hasAccount, setHasAccount]=useState(false);
 
     
   
  const clearInputs = () =>{
      setEmail('');
      setPassword('');
  }
  const clearErrors=() =>{
      setEmailError('');
      setPasswordError('');
  }

  const handleLogin=()=>{
      clearErrors();
      fire
         .auth()
         .signInWithEmailAndPassword(email, password)
         .catch(err =>{
             switch(err.code){

               case "auth/invalid-email":
               case "auth/user-disabled":
                   case "auth/user-not-found":
                       setEmailError(err.message);
                       break;
                   case "auth/worng.password":
                     setPasswordError(err.message);
                     break;
             } 
         });
  };
  const handelSignup =()=>{
      clearErrors();
      fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err =>{
          switch(err.code){

            case "auth/email-already-in-use":
            case "auth/invalid-email":
                  setEmailError(err.message);
                    break;
                case "auth/weak.password":
                  setPasswordError(err.message);
                  break;
          } 
      });

  };
  const hadnlelogout=() =>{
      fire.auth().signOut();
  };
  const authListner =()=>{
      fire.auth().onAuthStateChanged(user =>{
          if(user){
              clearInputs();
              setUser(user);
          }else{
              setUser("");
          }
      });
  };

  useEffect(()=>{
      authListner();
     
  },[])
  return (
    <div className="App">
    {user ? (
      <>
      <Router>
        <Navbar hadnlelogout={hadnlelogout}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Profile' component={Profile} />
          <Route path='/Test' component={Test} />
          <Route path="/Doctors" component={Doctors}/>
          <Route path="/Appointmentpage" component={Appointmentpage}/>
          <Route path="/Bookappointment" component={Bookappointment} />
        </Switch>
      </Router>
    </>
      
       ):(
        <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
         handelSignup={handelSignup}
         hasAccount={hasAccount}
         setHasAccount={setHasAccount}
         emailError={emailError}
         passwordError={passwordError}
       />

       )}
    
      
      </div>
  );
}

// function App(){
//   const [user, setLoginUser]=useState({})
//   return (
//     <>
//     <Router>
//       <Switch>
//       <Route exact path="/">
//         {
//           user && user._id
//           ?
//       <Home setLoginUser={setLoginUser}/>
//       :
//       <Logins setLoginUser={setLoginUser}/>
//         }
        
//         </Route>
//         <Route path="/login"><Logins setLoginUser={setLoginUser}/></Route>
//         <Route path="/register"><Register/></Route>
//         <Route path='/Profile' component={Profile} />
//            <Route path='/Test' component={Test} />
//            <Route path="/Doctors" component={Doctors}/>
//          <Route path="/Appointmentpage" component={Appointmentpage}/>
//          <Route path="/Bookappointment" component={Bookappointment} />
        
//       </Switch>
//     </Router>
   

//     </>
//   );
// }


export default App;
