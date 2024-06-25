import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react';
import NabButton from './NabButton';
export default function Navber() {
    const menuitem = <>
        <Link href='/'>Home</Link>
        <Link activclassName='active' href='/about'>About</Link>
        <Link activclassName='active' href='/services'>Services</Link>
        <Link activclassName='active' href='/blog'>Blog</Link>
        <Link activclassName='active' href='/contact'>Contact</Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {menuitem}
                    </ul>
                </div>
                <Link href='/'>
                <Image alt='logo' src='/assets/logo.svg' width={60} height={100}></Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5">
                    {menuitem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline  border-primary hover:bg-none">Appointment</a>
                <NabButton></NabButton>
            </div>
        </div>
    )
}
