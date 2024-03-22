"use client"

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname()
    const checkFirstPath = pathname?.split('/')[1]
    // console.log('router pathname', pathname)
    // console.log('router list', checkFirstPath)


    return (
        <div className="navbar bg-base-100 ">

            <div className="navbar-start">
                {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Your Exam</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div> */}

                <Link href="/" className="btn btn-ghost text-xl">GoExam</Link>

            </div>

            {/* <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/create" className={classNames({ 'active': checkFirstPath === 'create' })}>Create</Link></li>

                    <li>
                        <details>
                            <summary>Your Exam</summary>
                            <ul className="p-2 z-[9999]">
                                <li><Link href="/question" className={classNames({ 'active': checkFirstPath === 'question' })}>Question Bank</Link></li>
                                <li><Link href="/exercise" className={classNames({ 'active': checkFirstPath === 'exercise' })}>Exercise List</Link></li>
                            </ul>
                        </details>
                    </li>

                    <li>
                        <details>
                            <summary>Account</summary>
                            <ul className="p-2 z-[9999]">
                                <li><Link href="/account" className={classNames({ 'active': checkFirstPath === 'account' })}>My Account</Link></li>
                                <li><a>Setting</a></li>
                                <div className="divider"></div>
                                <li><a>Log out</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div> */}

        </div>
    )
}