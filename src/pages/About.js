import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar isLoggedIn={false} user={null} />
      <h1>
        About us <br /> contact us:
      </h1>
    </div>
  );
}
