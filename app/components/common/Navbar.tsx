"use client"

import Link from "next/link";
import { Button, Divider, Dropdown, Menu, Navbar } from "react-daisyui";

export default function NavbarWeb() {
    return (
        <>

            <Navbar>
                <Navbar.Start>
                    <Link href="/">
                        <Button color="ghost" className="text-xl">GoExam</Button>
                    </Link>
                </Navbar.Start>

                <Navbar.End>
                    <Menu horizontal className="px-1 hidden md:flex">
                        <MenuItemNavBar />
                    </Menu>

                    <Dropdown end>
                        <Button tag="label" color="ghost" tabIndex={0} className="md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </Button>
                        <Dropdown.Menu tabIndex={0} className="mt-3 z-[9999]">
                            <MenuItemNavBar />
                        </Dropdown.Menu>
                    </Dropdown>

                </Navbar.End>
            </Navbar>

        </>

    )
}

function MenuItemNavBar() {
    return (
        <>
            <Menu.Item>
                <Link href="/create">
                    New Exam
                </Link>
            </Menu.Item>
            <Menu.Item>
                <details>
                    <summary>Bank</summary>
                    <ul className="p-2 z-[9999]">
                        <Menu.Item>
                            <Link href="/exercise">
                                Exercise List
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/question">
                                Question Bank
                            </Link>
                        </Menu.Item>

                    </ul>
                </details>
            </Menu.Item>

            <Menu.Item>
                <details>
                    <summary>Account</summary>
                    <ul className="p-2 z-[9999]">
                        <Menu.Item>
                            <Link href="#">
                                Profile
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="#">
                                Setting
                            </Link>
                        </Menu.Item>
                        <Divider className="m-0" />
                        <Menu.Item>
                            <Link href="#" >
                                Logout
                            </Link>
                        </Menu.Item>
                    </ul>
                </details>
            </Menu.Item>
        </>
    )
}