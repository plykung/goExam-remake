"use client"

import Link from "next/link";
import { Footer } from "react-daisyui";

export default function FooterWeb() {

    return (<>
        <Footer className="p-5 bg-base-200 text-base-content" center={true}>
            {/* <div>
                <Footer.Title>Services</Footer.Title>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <Footer.Title>Company</Footer.Title>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <Footer.Title>Legal</Footer.Title>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div> */}
            <aside>
                <p>Made with ❤️ by <Link href="https://naphats.me/">NaphatS</Link></p>
            </aside>
        </Footer>

    </>)
}