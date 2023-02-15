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
    <div className="addUser">Hello, World!</div>
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
  localStorage.setItem("userData", JSON.stringify([]));
  let data = JSON.parse(localStorage.getItem("userData"));
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
    // let index = data.findIndex(
    //   (toDelete) =>
    //     toDelete.name === input.name && toDelete.password === input.password
    // );
    // console.log(index, data.length);
    // if (index <= data.length) {
    //   delete data[index];
    //   localStorage.setItem("userData", JSON.stringify([...data]));
    // } else {
    //   localStorage.setItem("userData", JSON.stringify([...data]));
    // }
    //   const tempData = data?.map(
    //     (i) => i.name != input.name && i.password != input.password
    //   );
    //   console.log("temp data ---->", tempData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);

    // let tdata = localStorage.getItem("userData");
    // if (tdata == null) {
    //   localStorage.setItem("userData", JSON.stringify([]));
    // }
    //data.push(...tdata, input);

    // const tempd = tdata?.map((i) => i != []);
    //  if(data.)

    // console.log("temp d - -->", tempd);

    localStorage.setItem("userData", JSON.stringify(...data, input));

    // console.log("data added=======>", data);
    console.log("data --->", ...data);
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
