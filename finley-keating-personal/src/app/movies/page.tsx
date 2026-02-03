import Link from "next/link";
import NavBar from "../ui/nav-bar";

export default function movies() {
  return (
    <div id="main-layout">
      <NavBar/>
      <main>
        <div className="container">
          <h1>This is movies</h1>
        </div>
      </main>
    </div>
  );
}