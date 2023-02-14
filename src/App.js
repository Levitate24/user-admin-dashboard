import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Users, UserList, AddUser } from "./pages/Users";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/user" element={<Users />} />
        <Route path="/user/user-list" element={<UserList />} />
        <Route path="/user/add-user" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
