import "./App.css";
// import "./styles.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users, UserList, AddUser } from "./pages/Users";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AdminSignIn from "./pages/AdminSignIn";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/adminsignin" element={<AdminSignIn />} />
        <Route path="/usersignin" element={<SignIn />} />
        <Route path="/usersignup" element={<SignUp />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/user" element={<Users />} />
        <Route path="/user/user-list" element={<UserList />} />
        <Route path="/user/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
