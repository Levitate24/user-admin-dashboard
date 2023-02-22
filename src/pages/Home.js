import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar isLoggedIn={false} user={null} />
      <h1>Welcome to Home</h1>
    </div>
  );
}
