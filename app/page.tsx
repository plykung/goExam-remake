"use client"

import { DocumentPlusIcon, DocumentTextIcon, PlusCircleIcon, StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"
import { Button, Hero } from "react-daisyui"

export default function Home() {
  return (
    <>
      <div className="p-5 hero min-h-screen bg-neutral">

        <Hero >
          <Hero.Content className="w-[100%] text-start justify-between flex-col md:flex-row-reverse max-md:space-y-4">
            <Image src="https://placehold.co/400/png" width={400} height={400} alt="GoExam Logo" className="z-[0]" />
            <div className="py-5">
              <h1 className="text-5xl font-bold">GoExam</h1>
              <p className="py-6">
                Practice Exams Generator. <br />
                For Better Score, Better Future.
              </p>
              {/* <Link href="https://github.com/plykung/goexam-remake" target="_blank">
                <Button variant="outline" color="secondary" className="mx-2 px-14 py-1 truncate "><StarIcon className="w-4 h-4 pe-1" /> Follow us on Github</Button>
              </Link> */}
              <div className="flex flex-col lg:flex-row gap-4">
                <Link href="/generate">
                  <Button color="primary" className="mx-2 px-14 text-nowrap" startIcon={<DocumentPlusIcon className="w-4 h-4" />}>New Exam</Button>
                </Link>
                <Link href="/exam">
                  <Button color="secondary" className="mx-2 px-14 text-nowrap" startIcon={<DocumentTextIcon className="w-4 h-4" />}>Your Exam</Button>
                </Link>
              </div>
            </div>
          </Hero.Content>
        </Hero>

        {/* <div className="hero-content justify-between flex-col md:flex-row-reverse w-[100%]">

          <div className="z=[0]">
            <Image src="https://placehold.co/400/png" width={400} height={400} alt="hero" />
          </div>

          <div>
            <h1 className="text-5xl font-bold">GoExam</h1>
            <p className="pt-6">Practice exams generator. For Better Score, Better Future.</p>
            <p className="pb-6">Coming Soon!</p>
            <div className="flex">
               <Link href="/create">
                <button className="btn btn-primary mx-2 px-14">New Exam</button>
              </Link>
              <Link href="/exercise">
                <button className="btn btn-outline btn-secondary mx-2 px-14">Your Exam</button>
              </Link>

        <Link href="https://github.com/plykung/goexam-remake" target="_blank">
          <button className="btn btn-outline btn-secondary mx-2 px-14"><StarIcon className="w-4 h-4 pe-1" /> Follow us on Github</button>
        </Link>


      </div>


    </div >

        </div > */}
      </div >
      <div className="px-5">

      </div>

    </>

  )
}