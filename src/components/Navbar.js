import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        LoginPage
      </Link>
      <ul>
        <CustomLink to="/home"> Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/adminsignin">AdminSignin</CustomLink>
        <div className="nav">
          <CustomLink to="/usersignup">User Signup</CustomLink>
        </div>
      </ul>
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
