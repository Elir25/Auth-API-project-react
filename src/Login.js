import React from "react";

function Login() {

    return (
      <div>
        <h1 className="h1">Login page</h1>
        <div className="form-div">
          <h2>Login</h2>
            <form >
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
            <p>Don't have an account? Register</p>
            </div>
      </div>
    );
  }
  
  export default Login;