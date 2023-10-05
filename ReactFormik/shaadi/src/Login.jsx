import React from "react";
import Registration from "./Registration";
import './index.css';
import Landing from "./Landingpage";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div id="loginuser" style={{width: "500px", margin: "auto", boxShadow: '0px 0px 47px 4px grey'}}>
            <div style={{margin:'20px',padding:'20px'}}>
                <h1 style={{width:'fit-content', margin:'auto', marginTop:'20px', marginBottom:'20px'}}>Login</h1>
                <form name="loginform" style={{width:'fit-content', margin:'auto'}}>
                    <input placeholder="email" type='text'/>
                    <br/>
                    <input placeholder="password" type='password'/>
                    <br/>
                    <button style={{background:'#FFB300', color:'white', margin: '10px',padding:'4px 10px',border:'1px solid #FFB300',borderRadius: '4px'}}>Login</button>
                    <br/>
                    <span>I don't have an account?</span><Link to='/registration'>Register</Link>
                    <br/>
                    <div id='footer'>
                        <hr/><span>or Login With</span>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
export default Login;