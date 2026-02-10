import Link from "next/link";


export default function NavBar() {
    return (
        <nav id="sidebar">
            <ul>
                <li>
                    <Link href="/music">Music</Link>
                </li>
                <li>
                    <Link href="/movies">Movies</Link>
                </li>
                <li>
                    <Link href="/content">Content</Link>
                </li>
                <li>
                    <Link href="/awards">Awards</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
            </ul>
        </nav>
    )
}