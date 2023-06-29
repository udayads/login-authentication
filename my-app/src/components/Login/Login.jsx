import React, { useState } from 'react'
import {  toast } from 'react-toastify';


import './Login.css'

const Login = () => {
  const [email, emailchange]=useState("");
  const [password,passwordchange]=useState("");


  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
   
    if (email === null || email === '') {
      isproceed = false;
      errormessage += ' Email';
  }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }

    // const IsValidate=()=>{
    //   let isproceed=true;
    //   let errormessage = 'Please enter the value in  ';
    //   if (email === null || email === ''){
    //     isproceed = false;
    //     errormessage += 'email';
    //    }
    //    if (password === null || password === ''){
    //     isproceed = false;
    //     errormessage += 'password';
    //   }

    //   if (!isproceed){
    //     toast.warning(errormessage)
    //    }else{
    //      if(/^[a-zA-Z0-9] +@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

    //      }else{

    //        isproceed = false;
    //      toast.warning(errormessage)
    //        }
    //   }
      return isproceed;
    }
 
  const handlesubmit=(e)=>{
      e.preventDefault();
      let regobj={email,password};
      if (IsValidate()){

      fetch("http://localhost:6001/user",{ 
        method:"POST",
        headers:{ 'Content-Type': 'application/json'},
        body:JSON.stringify(regobj)
      }).then((res)=>{
        toast.success('Login Successfully..');
       
      }).catch((err)=>{
        toast.error('Failed :'+err.message);
      });
    }
  }
    
  
  return (
    <div className='mx-auto mt-4 p-5'>
      <div className='Login-card p-5 mx-auto '>
        <h1 className='heading text-center mt-1'> LOGIN </h1>

        <form onSubmit={handlesubmit} method="POST">
       
            <div className="mb-4 pt-2">
              <input type="email" className="form-control" value={email} onChange={e=>emailchange(e.target.value)}
              id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username'/>
            </div>
            <div className="mb-4 pt-1">
              <input type="password" className="form-control" value={password} onChange={e=>passwordchange(e.target.value)}
               id="exampleInputPassword1" placeholder='password'/>
            </div>
            
            <div className="mb-3">
              <div className="d-grid">
                <button className="btn btn-primary login"   type="submit">Login</button>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
