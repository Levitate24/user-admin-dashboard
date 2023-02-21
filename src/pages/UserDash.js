import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserSidebar } from "../components/Sidebar";

function UserDash() {
  return (
    <div>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    let data = JSON.parse(localStorage.getItem("userData"));
    let user = JSON.parse(localStorage.getItem("logInDetails"));
    let index = data.findIndex(
      (toFind) =>
        toFind.username === user.username && toFind.password === user.password
    );
    console.log("index===>", index);
    console.log("input===>", input);
    if (index > -1) {
      data.splice(index, 1, input);
      console.log("data-->", data);

      user.username = input.username;
      user.password = input.password;
      console.log("user===>", user);
      localStorage.setItem("userData", JSON.stringify([...data]));
      localStorage.setItem("logInDetails", JSON.stringify(user));
    }
  };
  return (
    <div>
      <UserSidebar />
      <p className="User">New Name:</p>
      <input
        className="User"
        placeholder="Name"
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
        placeholder="Password"
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

  // console.log("adminLogin ===>", localStorage.getItem("adminLogin"));
  let navigate = useNavigate();
  let handleLogOut = () => {
    localStorage.removeItem("logInDetails");
    navigate("/home");
  };
  return (
    <div>
      <UserSidebar />
      <button onClick={handleLogOut} className="User">
        Log Out
      </button>
    </div>
  );
};
