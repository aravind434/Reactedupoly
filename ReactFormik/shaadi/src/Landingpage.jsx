import React from "react";
import Login from "./Login";
import Registration from "./Registration";
import { Outlet } from "react-router-dom";

function Landing(){
    // var [status,setstatus] = React.useState(true)
    return(
        <div id='landing' style={{border:'1px solid grey', padding:'10px', margin:'10px'}}>
            <h1>Welcome to Shaadi.com</h1>
            {/* <a onClick={()=>{setstatus(false)}}>Register</a>
            {status?<Login/>:<Registration/>} */}

            {/* <Login/> */}
            {/* <Registration/> */}
            <Outlet></Outlet>
        </div>
        
    )
}

export default Landing;