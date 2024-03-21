import { PlusCircleIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (

    <>
      <div className="hero min-h-screen bg-base-200 px-12">
        <div className="hero-content justify-between flex-col md:flex-row-reverse w-[100%]">

          <div className="z=[0]">
            <Image src="https://placehold.co/400/png" width={400} height={400} alt="hero" />
          </div>

          <div>
            <h1 className="text-5xl font-bold">GoExam</h1>
            <p className="py-6">Practice exams Generator for Better Score, Better Future.</p>
            <div className="flex">
              <Link href="/create">
                <button className="btn btn-primary mx-2 px-14">New Exam</button>
              </Link>
              <Link href="/exercise">
                <button className="btn btn-outline btn-secondary mx-2 px-14">Your Exam</button>
              </Link>


            </div>


          </div>

        </div>
      </div>
      <div className="px-5">

      </div>

    </>

  )
}