import React, { useState } from "react";

export const Users = () => {
  return (
    <div className="User">
      <h1>Welcome, Admin!</h1>
    </div>
  );
};

export const UserList = () => {
  if (localStorage.getItem("userData") === null) {
    localStorage.setItem("userData", JSON.stringify([]));
  }
  let data = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="User">
      <ul>
        {data.map((list) => {
          return (
            <>
              <li>
                Name: {list.name}, Password: {list.password}
              </li>
              <br />
            </>
          );
        })}
      </ul>
    </div>

    // <div className="User">
    //   {localStorage.getItem("Name") && (
    //     <div className="User">
    //       Name: <p>{localStorage.getItem("Name")}</p>
    //     </div>
    //   )}
    //   {localStorage.getItem("Password") && (
    //     <div className="User">
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

  //let globalData = [];
  //console.log(input);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify([]));
    }
  };

  const remove = () => {
    let dataRemove = JSON.parse(localStorage.getItem("userData"));
    let index = dataRemove.findIndex(
      (toDelete) =>
        toDelete.name === input.name && toDelete.password === input.password
    );
    console.log(index, dataRemove.length);
    if (index > -1) {
      dataRemove.splice(index, 1);
      //console.log(dataRemove);
      localStorage.setItem("userData", JSON.stringify([...dataRemove]));
    }

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
    let data = JSON.parse(localStorage.getItem("userData"));
    let index = data.findIndex(
      (toFind) =>
        toFind.name === input.name && toFind.password === input.password
    );
    if (index > -1) {
      alert("User already exists!");
    } else {
      localStorage.setItem("userData", JSON.stringify([...data, input]));
      // console.log("data added=======>", data);
      //console.log("data --->", ...data);
    }
    //localStorage.setItem("user", input.name);
  };

  return (
    <div>
      <p className="User">Name of the user:</p>
      <input
        className="User"
        placeholder="Name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <br></br>
      <p className="User">Password of the user:</p>
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

      <br />
      <br></br>
      <div>
        <button className="User" onClick={remove}>
          Remove
        </button>
      </div>
    </div>
  );
};
