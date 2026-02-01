import Link from "next/link";
import NavBar from "../ui/nav-bar";

export default function content() {
  return (
    <div id="mainLayout">
      <NavBar/>
      <main>
        <div className="container">
          <h1>This is content</h1>
        </div>
      </main>
    </div>
  );
}