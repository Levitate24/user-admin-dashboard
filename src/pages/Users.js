import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../App.css";
import Navbar from "../components/Navbar";

export const Users = () => {
  return (
    <div>
      <Navbar isLoggedIn={true} user={null} />
      <Sidebar />
      <h1 className="User">Welcome, Admin!</h1>
    </div>
  );
};

export const UserList = () => {
  if (localStorage.getItem("userData") === null) {
    localStorage.setItem("userData", JSON.stringify([]));
  }
  let data = JSON.parse(localStorage.getItem("userData"));

  return (
    <div>
      <Navbar isLoggedIn={true} user={null} />
      <Sidebar />
      <table className="Table">
        <tr>
          <th>Username</th>
          <th>Password</th>
        </tr>
        {data.map((list) => {
          return (
            <tr>
              <td>{list.username}</td>
              <td>{list.password}</td>
            </tr>
          );
        })}
      </table>
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
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  if (localStorage.getItem("userData") === null) {
    localStorage.setItem("userData", JSON.stringify([]));
  }

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
  };

  const remove = () => {
    let dataRemove = JSON.parse(localStorage.getItem("userData"));
    let index = dataRemove.findIndex(
      (toDelete) =>
        toDelete.username === input.username &&
        toDelete.password === input.password
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

  useEffect(() => {
    console.log(formErrors);
    let data = JSON.parse(localStorage.getItem("userData"));
    let index = data.findIndex(
      (toFind) =>
        toFind.username === input.username && toFind.password === input.password
    );
    if (index > -1) {
      alert("User already exists!");
    } else if (Object.keys(formErrors).length === 0 && isSubmit) {
      localStorage.setItem("userData", JSON.stringify([...data, input]));
      // console.log("data added=======>", data);
      //console.log("data --->", ...data);
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
      <Navbar isLoggedIn={true} user={null} />
      <Sidebar />
      <p className="User">Name of the user:</p>
      <input
        className="User"
        placeholder="Name"
        name="username"
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

export const LogOut = () => {
  console.log("inside log out ");

  // console.log("adminLogin ===>", localStorage.getItem("adminLogin"));
  let navigate = useNavigate();
  let handleLogOut = () => {
    localStorage.clear();
    // localStorage.setItem("adminLogin", false);
    navigate("/");
  };
  return (
    <div>
      <Navbar isLoggedIn={true} user={null} />
      <Sidebar />
      <button onClick={handleLogOut} className="User">
        Log Out
      </button>
    </div>
  );
};
