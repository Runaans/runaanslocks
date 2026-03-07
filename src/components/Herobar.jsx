import React from 'react'
import background from '../assets/background.png'

const Herobar = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-purple-300 mb-4">
            Runaans Locks
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white">
            Your Edge in
            <br />
            <span className="bg-linear-to-r from-purple-300 via-purple-500 to-purple-700 text-transparent bg-clip-text">
              Sports Betting
            </span>
          </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300 max-w-xl">
          Data-driven picks, transparent tracking, and a fast-growing community built
          to help you make smarter plays.
        </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://whop.com/runaans-locks/"
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-linear-to-r from-purple-500 to-purple-800 px-5 py-2 rounded-md text-white font-semibold hover:opacity-90 transition"
            >
              Join Now
            </a>

            <a
              href="#about"
              className="text-white underline underline-offset-4 hover:text-purple-300 transition"
            >
              About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Herobar