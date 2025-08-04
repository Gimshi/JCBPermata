"use client";
import Link from "next/link";

const navLinks = [
  { href: "/create", label: "Create New Post" },
  { href: "/history", label: "All Post" },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="flex gap-4">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="navbar-link">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
