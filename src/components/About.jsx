import React from 'react'

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0b] py-24">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_45%)]" />

      {/* grid overlay */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-size-[38px_38px]" />

      {/* dark vignette */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/50" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
          About Us
        </div>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white max-w-4xl mx-auto">
          Built for smarter betting, backed by community and transparency.
        </h2>

        <p className="mt-8 text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Runaans Locks started as a shared passion for sports betting and has
          grown into a community focused on sharp picks, honest tracking, and
          helping members make smarter plays.
        </p>

        <p className="mt-6 text-lg md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
          We believe winning long term comes from discipline, consistency, and
          trust — not hype. That is why we focus on value, transparency, and
          building a space where bettors can learn and grow together.
        </p>

        {/* values */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Data-Driven Picks
            </h3>
            <p className="text-gray-400">
              Our approach is built around analysis, trends, and finding value
              instead of chasing random plays.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Transparent Tracking
            </h3>
            <p className="text-gray-400">
              We care about credibility, which is why transparency and honest
              performance matter to our community.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Community First
            </h3>
            <p className="text-gray-400">
              More than just picks, Runaans Locks is a place where members can
              connect, learn, and win together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About