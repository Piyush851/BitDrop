"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-slate-900 text-slate-100">
            <div className="px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-indigo-500">
                    BitDrop
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-6 items-center">
                    <li><Link href="/" className="hover:text-slate-300">Home</Link></li>
                    <li><Link href="/about" className="hover:text-slate-300">About</Link></li>
                    <li><Link href="/shorten" className="hover:text-slate-300">Shorten</Link></li>
                    <li><Link href="/contact" className="hover:text-slate-300">Contact</Link></li>
                </ul>

                {/* Desktop actions */}
                <div className="hidden md:flex gap-4 items-center">
                    <Link
                        href="/shorten"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition"
                    >
                        Try Now
                    </Link>

                    <a
                        href="https://github.com/Piyush851/BitDrop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <Image
                            src="/icons/github.svg"
                            alt="GitHub"
                            width={28}
                            height={28}
                            className="invert"
                        />
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-6 pb-4">
                    <ul className="flex flex-col gap-4">
                        <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                        <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
                        <li><Link href="/shorten" onClick={() => setOpen(false)}>Shorten</Link></li>
                        <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

                        <Link
                            href="/shorten"
                            onClick={() => setOpen(false)}
                            className="bg-indigo-600 text-white text-center py-2 rounded-lg font-medium hover:bg-indigo-700"
                        >
                            Try Now
                        </Link>

                        <a
                            href="https://github.com/Piyush851/BitDrop"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center"
                        >
                            <Image
                                src="/icons/github.svg"
                                alt="GitHub"
                                width={28}
                                height={28}
                                className="invert"
                            />
                        </a>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
