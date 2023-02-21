import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import SignUp from "./SignUp";

export default function SignIn() {
  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    // const password_pattern=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,10}$/;
    // const username_pattern = /^[a-zA-Z]+[a-zA-Z0-9 ]*$/;

    if (!values.username) {
      errors.username = "*Username is required!";
    }
    // }else if(!values.username.match(username_pattern)){
    //   errors.username = "*Username must start with a letter and can't contain a special character!";
    // }else if(values.username.length > 14 || values.username.length < 3){
    //   errors.username ="*Username must be more than 2 and less than 15 characters";
    // }

    if (!values.password) {
      errors.password = "*Password is required!";
    }
    // } else if(!values.password.match(password_pattern)){
    //   errors.password = "*Password is invalid";
    //   alert("Password must be more than 4 character and less than 10 characters. \nPassword should contain atleast one special character,one number,one lowercase and uppercase letter.");
    // }

    const getuserArr = localStorage.getItem("userData");

    if (getuserArr && getuserArr.length) {
      const userdata = JSON.parse(getuserArr);
      const userlogin = userdata.filter((el, k) => {
        return (
          el.username === formValues.username &&
          el.password === formValues.password
        );
      });
      console.log(userlogin);
      if (userlogin.length !== 0) {
        alert("Signed In successfully");
        navigate("/userdash");
        localStorage.setItem("logInDetails", JSON.stringify(formValues));
      } else {
        alert("Signed In failed");
      }
    }

    return errors;
  };

  const navigate = useNavigate();
  let handleClickOnSignUp = () => {
    console.log("sign up link click");
    navigate("/usersignup");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>
            <button className="fluid ui button blue">Submit</button>
            <div className="ui signuplink">
              <p className="para-2">
                Don't have an account ?
                <a href="#" onClick={handleClickOnSignUp}>
                  {" "}
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </form>
        {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed In successfully</div>
      ) : (
        <div></div>
      )} */}
      </div>
    </>
  );
}
