"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiBookmarkCheck, CiDeliveryTruck, CiHome, CiMusicNote1 } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";


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
        { href: "/", label: "Home", icon: <CiHome/>},
        { href: "/music", label: "Music", icon: <CiMusicNote1/> },
        { href: "/content", label: "Bookmarks", icon: <CiBookmarkCheck/> },
        { href: "/awards", label: "Awards", icon: <TfiCup/> },
        { href: "/projects", label: "Projects", icon: <CiDeliveryTruck/> },
    ];


    return (
        <nav id="sidebar" className={open ? "" : "collapsed"} ref={sidebarRef}>
            <div id="sidebar-toggle" onClick={() => setOpen(true)}>
            <div id="sidebar-toggle-line">
                <div id="sidebar-toggle-arrow" />
            </div>
            </div>
            <ul>
            {links.map(({ href, label, icon }) => (
                <li key={href}>
                <Link href={href} className={`flex items-center gap-2 ${pathname === href ? "active" : ""}`}>
                    {label}
                    {icon}
                </Link>
                </li>
            ))}
            </ul>
      </nav>
    )
}