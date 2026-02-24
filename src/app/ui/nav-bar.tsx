"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";


export default function NavBar() {

    const pathname = usePathname();
    const [open, setOpen] = useState(true);
    const sidebarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const links = [
        { href: "/", label: "Home"},
        { href: "/music", label: "Music" },
        { href: "/content", label: "Content" },
        { href: "/awards", label: "Awards" },
        { href: "/projects", label: "Projects" },
    ];


    return (
        <nav id="sidebar" className={open ? "" : "collapsed"} ref={sidebarRef}>
            <div id="sidebar-toggle" onClick={() => setOpen(true)}>
            <div id="sidebar-toggle-line">
                <div id="sidebar-toggle-arrow" />
            </div>
            </div>
            <ul>
            {links.map(({ href, label }) => (
                <li key={href}>
                <Link href={href} className={pathname === href ? "active" : ""}>
                    {label}
                </Link>
                </li>
            ))}
            </ul>
      </nav>
    )
}