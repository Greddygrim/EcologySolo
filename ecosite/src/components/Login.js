import React from "react";
import { Navbar } from "./navbar";
const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const fdata = new FormData(e.target);
    const params = {
      email: fdata.get("email"),
      password: fdata.get("password"),
    };
    fetch("/login", {
      data: params,
      method: "post",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location = "/";
      })
      .catch((vrr) => {
        console.log(vrr);
        alert(vrr.message);
      });
    // call server to authenticate
  };
  return (
    <div>
      <Navbar />
      <form onSubmit={submitHandler}>
        <h2>Login Form</h2>
        <label className="label">Email Address</label>
        <input type="email" name="email" />
        <label className="label">Password</label>
        <input type="password" name="password" />
        <label className="label"> Confirm Password</label>
        <input type="confirmpassword" name="confirmpassword" />
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
