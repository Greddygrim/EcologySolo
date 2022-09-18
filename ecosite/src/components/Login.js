import React from "react";
import axios from "axios";
import Register from "./Register.js";
import { Navbar } from "./navbar";
const Login = () => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const fdata = new FormData(e.target);
    const params = {
      email: fdata.get("email"),
      password: fdata.get("password"),
      confirm_password: fdata.get("confirm_password"),
    };
    // fetch("http://localhost:8000/login", {
    //   data: params,
    //   method: "post",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     // window.location = "/";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert(err.message);
    //   });

    try {
      const response = await axios.post("http://localhost:8000/login", params);
      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem("saveToken", response.data.token);
        window.location = "/";
      }
    } catch (error) {
      console.log("you made an error: ", error);
    }
    // call server to authenticate
  };
  return (
    <div>
      <div>
        <Navbar />
        <form onSubmit={submitHandler}>
          <h2>Login Form</h2>
          <label className="label">Email Address</label>
          <input type="email" name="email" />
          <label className="label">Password</label>
          <input type="password" name="password" />
          <label className="label"> Confirm Password</label>
          <input type="password" name="confirm_password" />
          <button>Login</button>
        </form>
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};
export default Login;
