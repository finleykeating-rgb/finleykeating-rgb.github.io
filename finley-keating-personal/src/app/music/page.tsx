import Link from "next/link";
import NavBar from "../ui/nav-bar";

export default function music() {
  return (
    <div id="mainLayout">
      <NavBar/>
      <main>
        <div className="container">
          <h1>This is music</h1>
        </div>
      </main>
    </div>
  );
}