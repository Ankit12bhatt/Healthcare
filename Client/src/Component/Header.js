import React from 'react'

const Header = ({hadnlelogout}) => {
    
    return (
        <>
        <section className="sidebar">
        <div className="side-brand">
        <h2> <span className="lab la-accusoft"></span> Healthcare</h2>
        </div>
        <div className="sidebar-menu">
            <ul>
                <li>
                    <a href="" className="active"><span className="las la-igloo"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href=""><span className="las la-users"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href=""><span className="las la-clipboard-list"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href=""><span className="las la-shipping-bag"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href=""><span className="las la-receipt"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href=""><span className="las la-user-circle"></span>
                    <span>Dashboard</span></a>
                </li>
                <li>
                    <a href=""><span className="las la-clipboard-list"></span>
                    <span>Dashboard</span></a>
                </li>
            </ul>
            </div>
       </section>
      <div className="main-content">
         <head>
            <h2>
           <label htmlFor="">
               <span className="las la-bars"></span>
           </label>
           Dashboard
          </h2>
           <div className="search-wrapper">
           <span className="las la-search"></span>
               <input type="search" placeholder="search here"/>
           
           </div>
          <div className="user-wrapper">
           <img style={{height:40, width:40}} src="/images/avatar.png" alt="avatar"/>
           <h2> Ankit Bhatt</h2>
        </div>

       </head>
           
       </div>
    </>
    )
}

export default Header;
