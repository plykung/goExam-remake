import Image from "next/image"

export default function Home() {
  return (
    <div className="px-5">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse md:justify-evenly">
          <Image src="https://placehold.co/400/png" width={400} height={400} alt="hero" />
          <div>
            <h1 className="text-5xl font-bold">GoExam</h1>
            <p className="py-6">Exam generator</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}