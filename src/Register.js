import React, { useState } from "react";
// import useForm from "react-hook-form";

function Register() {
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

  function onSubmit() {
    console.log({
      name, 
      email,
      password
    })
  }
    return (
      <div >
        <div className="form-div">
          <h1>Register with us</h1>
            <form className="form-content">
                <div className="col-md-5">
                <input type="text" 
                placeholder="Name" 
                className="form-control"
                value={name} onChange={e => setName(e.target.value)}/> <br></br>
              </div>
              <div className="col-md-5">
                <input type="text" 
                placeholder="Email" 
                className="form-control"
                value={email} onChange={e => setEmail(e.target.value)} /><br></br>
              </div>
              <div className="col-md-5">
                <input type="password" 
                placeholder="Password"
                className="form-control" 
                value={password} onChange={e => setPassword(e.target.value)} /><br></br>
              </div>
                <input onClick={onSubmit} className="btn btn-primary" type="submit" />
            </form>
            <p>Already have an account? Login</p>
            </div>
      </div>
    );
  }
  
  export default Register;
//video min 2:51:17