import React from 'react';
import "./register.css"

const Register = () => {
    return (
        <div className=" forme">
            <h1>Register users</h1>
            <form >
              <div>
                  <label>Email :</label>
                  <input type="text" name="email" placeholder="enter email"/>
              </div>
              <div>
                  <label>Password :</label>
                  <input type="password" name="password" placeholder="enter email"/>
              </div>
              <button>sign </button>
            </form>
        </div>
    );
}

export default Register;
