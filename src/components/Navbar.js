import { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar(props) {
  // const [bar, setBar] = useState({
  //   jsx: (
  //     <ul>
  //       <CustomLink to="/home"> Home</CustomLink>
  //       <CustomLink to="/about">About</CustomLink>
  //       <CustomLink to="/adminsignin">AdminSignin</CustomLink>
  //       <div className="nav">
  //         <CustomLink to="/usersignup">User Signup</CustomLink>
  //       </div>
  //     </ul>
  //   ),
  // });

  // const change = {
  //   adminLogin: JSON.parse(localStorage.getItem("adminLogin")),
  //   logInDetails: JSON.parse(localStorage.getItem("logInDetails")),
  // };
  // const [isLogIn, setIsLogIn] = useState(Boolean);
  // setIsLogIn(JSON.parse(localStorage.getItem("adminLogin")));
  // if (localStorage.getItem("adminLogin") === "true") {
  //   console.log("Inside If");
  //    setIsLogIn("true");
  // } else if (localStorage.getItem("logInDetails")) {
  //   console.log("logInDetails ===>", localStorage.getItem("logInDetails"));
  //   setIsLogIn("true");
  // }  else {
  //   setIsLogIn("false");
  // }
  // const handleChange = () => {
  //   if (localStorage.getItem("adminLogin") === "true") {
  //     change.adminLogin = true;
  //   } else if (localStorage.getItem("logInDetails")) {
  //     change.logInDetails = JSON.parse(localStorage.getItem("logInDetails"));
  //   } else {
  //     change.adminLogin = false;
  //     change.logInDetails = null;
  //   }
  // };
  // handleChange();

  // useEffect(() => {
  //   // console.log("Inside function");
  //   if (localStorage.getItem("adminLogin") === "true") {
  //     // console.log("Inside If Admin");
  //     setBar({ jsx: <h2>Hello, Admin!</h2> });
  //   } else {
  //     // console.log("Inside Else");
  //     setBar({
  //       jsx: (
  //         <ul>
  //           <CustomLink to="/home">Home</CustomLink>
  //           <CustomLink to="/about">About</CustomLink>
  //           <CustomLink to="/adminsignin">Admin SignIn</CustomLink>
  //           <div className="nav">
  //             <CustomLink to="/usersignin">User SignIn</CustomLink>
  //           </div>
  //         </ul>
  //       ),
  //     });
  //   }
  // }, []);
  // console.log("props===>", props);
  const handleNavBar = () => {
    // console.log("username===>", props.user);
    console.log("logged in===>", props.isLoggedIn);
    if (props.user !== null) {
      return <h2>Hello, {props.user.username}</h2>;
    } else if (props.isLoggedIn) {
      return <h2>Hello, Admin!</h2>;
    } else {
      return (
        <ul>
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/adminsignin">Admin SignIn</CustomLink>
          <div className="nav">
            <CustomLink to="/usersignin">User SignIn</CustomLink>
          </div>
        </ul>
      );
    }
  };
  return (
    <nav className="nav">
      <h2 className="site-title">User-Admin-Dashboard</h2>
      {handleNavBar()}
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
