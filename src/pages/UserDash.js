import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserSidebar } from "../components/Sidebar";

function UserDash() {
  return (
    <div>
      <Navbar
        isLoggedIn={true}
        user={JSON.parse(localStorage.getItem("logInDetails"))}
      />
      <UserSidebar />
    </div>
  );
}

export default UserDash;

export function UserDetails() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  let user = JSON.parse(localStorage.getItem("logInDetails"));

  if (localStorage.getItem("userData") === null) {
    localStorage.setItem("userData", JSON.stringify([]));
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    console.log(formErrors);
    let data = JSON.parse(localStorage.getItem("userData"));
    let duplecateIndex = data.findIndex(
      (toFind) =>
        toFind.username === input.username && toFind.password === input.password
    );
    let index = data.findIndex(
      (toFind) =>
        toFind.username === user.username && toFind.password === user.password
    );
    // console.log("index===>", index);
    // console.log("input===>", input);
    if (duplecateIndex > -1) {
      alert("User already exists!");
    } else if (index > -1 && Object.keys(formErrors).length === 0 && isSubmit) {
      data.splice(index, 1, input);
      console.log("data-->", data);
      user.username = input.username;
      user.password = input.password;
      console.log("user===>", user);
      localStorage.setItem("userData", JSON.stringify([...data]));
      localStorage.setItem("logInDetails", JSON.stringify(user));
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const password_pattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{4,10}$/;
    const username_pattern = /^[a-zA-Z]+[a-zA-Z0-9 ]*$/;

    if (
      !values.username ||
      !values.username.match(username_pattern) ||
      values.username.length > 14 ||
      values.username.length < 3
    ) {
      errors.username =
        "*Username must start with a letter and can't contain a special character!";
      alert(
        "Username must start with a letter and can't contain a special character! \nUsername must be more than 2 and less than 15 characters"
      );
    }
    // } else if (values.username.length > 14 || values.username.length < 3) {
    //   errors.username =
    //     "*Username must be more than 2 and less than 15 characters";
    // }

    if (!values.password || !values.password.match(password_pattern)) {
      errors.password = "*Password is invalid";
      alert(
        "Password must be more than 4 character and less than 10 characters. \nPassword should contain atleast one special character,one number,one lowercase and uppercase letter."
      );
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(input));
    setIsSubmit(true);
    // console.log(input);
  };
  return (
    <div>
      <Navbar
        isLoggedIn={true}
        user={JSON.parse(localStorage.getItem("logInDetails"))}
      />
      <UserSidebar />
      <p className="User">New Name:</p>
      <input
        className="User"
        placeholder={user.username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <br></br>
      <p className="User">New Password:</p>
      <input
        className="User"
        type="password"
        name="password"
        placeholder={user.password}
        onChange={handleChange}
      />
      <br />
      <br></br>
      <div>
        <button className="User" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
}

export const UserLogOut = () => {
  console.log("inside log out ");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogIn = () => {
  //   if (localStorage.getItem("logInDetails") !== null) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // };

  // console.log("adminLogin ===>", localStorage.getItem("adminLogin"));
  let navigate = useNavigate();
  let handleLogOut = () => {
    localStorage.removeItem("logInDetails");
    navigate("/");
    // localStorage.clear();
  };
  return (
    <div>
      <Navbar
        isLoggedIn={true}
        user={JSON.parse(localStorage.getItem("logInDetails"))}
      />
      <UserSidebar />
      <button onClick={handleLogOut} className="User">
        Log Out
      </button>
    </div>
  );
};
