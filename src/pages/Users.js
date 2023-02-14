import React, { useState } from "react";

export const Users = () => {
  return (
    <div className="home">
      <h1>Users</h1>
    </div>
  );
};

export const UserList = () => {
  return (
    <div></div>
    // <div className="home">
    //   {localStorage.getItem("Name") && (
    //     <div className="addUser">
    //       Name: <p>{localStorage.getItem("Name")}</p>
    //     </div>
    //   )}
    //   {localStorage.getItem("Password") && (
    //     <div className="addUser">
    //       Password: <p>{localStorage.getItem("Password")}</p>
    //     </div>
    //   )}
    // </div>
  );
};

export const AddUser = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });
  let [data, setData] = useState([]);
  //console.log(input);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const remove = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    localStorage.setItem("userData", JSON.stringify([input]));
    // console.log("data added=======>", data);
    console.log("name--->", input.name);
    //localStorage.setItem("user", input.name);
  };

  return (
    <div>
      <p className="addUser">Name of the user:</p>
      <input
        className="addUser"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <br></br>
      <p className="addUser">Password of the user:</p>
      <input
        className="addUser"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <br />
      <br></br>
      <div>
        <button className="addUser" onClick={handleSubmit}>
          Done
        </button>
      </div>

      <br />
      <br></br>
      <div>
        <button className="addUser" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
};
