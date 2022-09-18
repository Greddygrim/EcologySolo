import { useState } from "react";
import axios from "axios";

export const Register = () => {
  const defaultValues = {
    email: "",
    password: "",
    confirm_passowrd: "",
  };
  const [values, setValues] = useState(defaultValues);

  const sendFormData = async (post) => {
    const response = await axios.post("http://localhost:8000/register", post);
    console.log("Res: ", response.data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // To send form data to somewhere else
    console.log(values);
    sendFormData(values);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <div className="registration-container">
        <div className="register">
          <h3>Registration Form</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={values.email || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={values.password || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                value={values.confirm_password || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <input type="submit" className="button" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
