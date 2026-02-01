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
            </ul>
        </nav>
    )
}