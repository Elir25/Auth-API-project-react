import React, { useState } from "react";
// import useForm from "react-hook-form";

function Register() {

  // const [register, setRegister] = useState(null);

  // function onSubmit(data) {
  //   console.log(data)
  // }

    return (
      <div>
        <h1 className="h1">Register page</h1>
        <form /*onSubmit={setRegister(onsubmit)}*/>
          <div className="col-md-4">
          <input type="text" 
          placeholder="Name" 
          className="form-control"
          name="name" /*ref={register}*//> <br></br>
        </div>
        <div className="col-md-4">
          <input type="text" 
          placeholder="Email" 
          className="form-control"
          name="email" /*ref={register}*//><br></br>
        </div>
        <div className="col-md-4">
          <input type="password" 
          placeholder="Password"
          className="form-control" 
          name="password" /*ref={register}*//><br></br>
        </div>
          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    );
  }
  
  export default Register;