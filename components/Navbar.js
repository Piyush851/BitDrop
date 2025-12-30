import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className="bg-slate-900 text-slate-100">
            <div className="px-6 py-4 flex justify-between">
                <Link href='/'><h1 className="text-xl font-bold text-indigo-500 cursor-pointerr">BitDrop</h1></Link>
                <ul className='flex gap-4'>
                    <Link href="/"><li className='cursor-pointer hover:text-slate-300'>Home</li></Link>
                    <Link href="/about"><li className='cursor-pointer hover:text-slate-300'>About</li></Link>
                    <Link href="/shorten"><li className='cursor-pointer hover:text-slate-300'>Shorten</li></Link>
                    <Link href="/contact"><li className='cursor-pointer hover:text-slate-300'>Contact Us</li></Link>
                </ul>
                <div className='flex gap-4 justify-center items-center'>
                    <Link href="/shorten" className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200r">
                        Try Now
                    </Link>
                    <a href="https://github.com/Piyush851/BitDrop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <Image
                            src='/icons/github.svg'
                            alt='github'
                            width={30}
                            height={30}
                            className='invert-100'
                        />
                    </a>
                </div>
            </div>
        </nav>
    )
}
// 3:46
export default Navbar