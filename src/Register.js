import React, { useState } from "react";
// import useForm from "react-hook-form";

function Register() {

  const [userdata, setUserdata] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    
    setUserdata({
      ...userdata,
      [event.target.name] : event.target.value
    })
  }
  const sendData = (event) => {
    event.preventDefault()
    console.log('los datos son..' + userdata.name + userdata.email + userdata.password)
  }
  
    return (
      <div >
        <h1 className="h1">Register page</h1>
        <div className="form-div">
          <h2>Register with us</h2>
            <form >
                <div className="col-md-4">
                <input type="text" 
                placeholder="Name" 
                className="form-control"
                onChange={handleInputChange}
                name="name" /> <br></br>
              </div>
              <div className="col-md-4">
                <input type="text" 
                placeholder="Email" 
                className="form-control"
                onChange={handleInputChange}
                name="email" /><br></br>
              </div>
              <div className="col-md-4">
                <input type="password" 
                placeholder="Password"
                className="form-control" 
                onChange={handleInputChange}
                name="password" /><br></br>
              </div>
                <input onSubmit={sendData} className="btn btn-primary" type="submit" />
            </form>
            <p>Already have an account? Login</p>
            </div>
      </div>
    );
  }
  
  export default Register;