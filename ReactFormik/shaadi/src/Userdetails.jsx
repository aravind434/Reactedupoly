import React from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';

function Userdetails() {
    var [user, setuser] = React.useState([]);

    var userdetails = useFormik({
        initialValues:{
            fname:'',
            lname:'',
            age:'',
            gender:'',
            username:''
        },
        validationSchema:Yup.object({
            fname:Yup.string().required("Please enter firstnmae"),
            lname:Yup.string().required("Please enter lastnmae")
        }),

        onSubmit:(values) => {
            setuser([...user,values]);
        }
    })
    return (
      <div className="App" style={{border:'1px solid grey', padding:'10px', margin:'10px'}}>
       {console.log(userdetails)}
        <h1>Bride/Groom Details</h1>
        <form onSubmit={userdetails.handleSubmit}>
            <input type="text" placeholder="Enter fname" name="fname" onChange={userdetails.handleChange}/>
            <br/>
            <input type="text"placeholder="Enter lname"  name="lname" onChange={userdetails.handleChange}/>
            <br/>
            <input type="text" placeholder="Enter age" name="age" onChange={userdetails.handleChange}/>
            <br/>
            <input type="radio" name="gender" value='male' onChange={userdetails.handleChange}/>male
            <input type="radio" name="gender" value='female' onChange={userdetails.handleChange}/>female
            <br/>
            <input type="text" placeholder="Enter username" name="username" onChange={userdetails.handleChange}/>
            <br/>
            <button type='submit'>submit</button>

        </form>
        <hr/>
        <ul style={{display:'flex', flexWrap:'wrap'}}>
        {
            user.map(user=>{
                return(
                <li style={{width:'100px', listStyle:'none', padding:'10px', margin:'10px', border:'1px solid'}}>
                    <h4>{user.fname}</h4>
                    <h4>{user.lname}</h4>
                    <h4>{user.age}</h4>
                </li>
                )
                
            })
        }
        </ul>
      </div>
    );
  }

  export default Userdetails;