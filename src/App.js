import "./App.css";
// import "./styles.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users, UserList, AddUser, LogOut } from "./pages/Users";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AdminSignIn from "./pages/AdminSignIn";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState, useEffect } from "react";
import UserDash, { UserDetails, UserLogOut } from "./pages/UserDash";

if (localStorage.getItem("adminLogin") === null) {
  localStorage.setItem("adminLogin", false);
}

function App() {
  // let [bar, setBar] = useState(false);
  // useEffect(() => {
  //   console.log("bar ===>", bar);
  //   if (localStorage.getItem("adminLogin") === "true") {
  //     console.log("inside if--->");
  //     console.log("test 1 ->", bar);
  //     setBar(true);
  //   } else {
  //     console.log("test value --->", localStorage.getItem("adminLogin"));
  //     console.log("test 2 ->", bar);
  //     setBar(false);
  //   }
  // }, [bar]);
  return (
    <Router>
      {/* {bar ? <Sidebar /> : <Navbar />} */}
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/usersignin" element={<SignIn />} />
        <Route path="/usersignup" element={<SignUp />} />
        <Route path="/user" element={<Users />} />
        <Route path="/user/user-list" element={<UserList />} />
        <Route path="/user/add-user" element={<AddUser />} />
        <Route path="/log-out" element={<LogOut />} />
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/user-log-out" element={<UserLogOut />} />
      </Routes>
    </Router>
  );
}

export default App;
