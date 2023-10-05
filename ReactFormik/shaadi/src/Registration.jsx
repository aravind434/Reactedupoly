import React from "react";
import { Link } from "react-router-dom";

function Registration(){
    return(
    <div className="registrationform" style={{width: "500px", margin: "auto", boxShadow: '0px 0px 47px 4px grey'}}>
        <Link to="/"><b>back</b></Link>
      <div style={{margin:'20px',padding:'20px'}}>
        <h1 style={{width:'fit-content', margin:'auto', marginTop:'20px', marginBottom:'20px'}}>Register</h1>
      <form style={{width:'fit-content', margin:'auto'}}>
            <input type="text" placeholder="Email" name="email" />
            <br/>
            <input type="password"placeholder="passwor"  name="password" />
            <br/>
            <input type="password" placeholder="confirm password" name="confirm password" />
            <br/>
            {/* <input type="radio" name="gender" value='male' />male
            <input type="radio" name="gender" value='female' />female
            <br/>
            <input type="text" placeholder="Enter username" name="username" />
            <br/> */}
            <button type='submit' style={{background:'#FFB300', color:'white', margin: '10px',padding:'4px 10px',border:'1px solid #FFB300',borderRadius: '4px'}}>Register</button>

        </form>
      </div>
      
    </div>
    )
}

 export default Registration;