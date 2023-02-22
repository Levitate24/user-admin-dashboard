import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import SignIn from "./SignIn";

export default function SignUp() {
  const initialValues = { username: "", password: "", confirmpassword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  if (localStorage.getItem("userData") == null) {
    localStorage.setItem("userData", JSON.stringify([]));
  }

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
    let data = JSON.parse(localStorage.getItem("userData"));
    let index = data.findIndex(
      (toFind) =>
        toFind.username === formValues.username &&
        toFind.password === formValues.password
    );
    if (index > -1) {
      alert("User already exists!");
    } else {
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        console.log("Signed up successfully");
        console.log("test");
        localStorage.setItem("userData", JSON.stringify([...data, formValues]));
      }
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const password_pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,10}$/;
    const username_pattern = /^[a-zA-Z]+[a-zA-Z0-9 ]*$/;

    if (!values.username) {
      errors.username = "*Username is required!";
    } else if (!values.username.match(username_pattern)) {
      errors.username =
        "*Username must start with a letter and can't contain a special character!";
    } else if (values.username.length > 14 || values.username.length < 3) {
      errors.username =
        "*Username must be more than 2 and less than 15 characters";
    }

    if (!values.password) {
      const text = (
        <p>
          *Password is required <br></br>*Password must be more than 4 character
          and less than 10 characters <br></br>*Password should contain atleast
          one special character,one number,one lowercase and uppercase letter{" "}
        </p>
      );
      errors.password = text;
    } else if (!values.password.match(password_pattern)) {
      errors.password = "*Password is invalid";
      alert(
        "Password must be more than 4 character and less than 10 characters. \nPassword should contain atleast one special character,one number,one lowercase and uppercase letter."
      );
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "*Confirmation of password is required!";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "*Password didn't match!";
    }
    return errors;
  };

  const navigate = useNavigate();
  let handleClickOnSignIn = () => {
    console.log("a tag click-->");
    navigate("/usersignin");
  };

  return (
    <>
      <Navbar isLoggedIn={false} user={null} />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
            <div className="field">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                value={formValues.confirmpassword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.confirmpassword}</p>
            <button className="fluid ui button blue">Submit</button>
            <div className="ui signinlink">
              <p className="para-2">
                Already have an account ?
                <a href="#" onClick={handleClickOnSignIn}>
                  {" "}
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </form>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed Up successfully</div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
