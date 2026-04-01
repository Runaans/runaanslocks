import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from "../assets/rl_transparent.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg border-b border-neutral-700/80 bg-black/70">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="">
            <img src={logo} alt="Runaans Locks" className="h-15 w-20" />
          </a>
        </div>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-10 text-lg font-semibold">
          <a href="#feature" className="hover:text-purple-500 transition">Features</a>
          <a href="#review" className="hover:text-purple-500 transition">Reviews</a>
          <a href="#pricing" className="hover:text-purple-500 transition">Pricing</a>
          <a href="#FAQ" className="hover:text-purple-500 transition">FAQ</a>
          <a href="#about" className="hover:text-purple-500 transition">About</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Join Button */}
          <div className="hidden lg:block">
            <a
              href="https://whop.com/runaans-locks/"
              target="_blank"
              rel="noopener noreferrer"   
              className="bg-linear-to-r from-purple-500 to-purple-800 px-5 py-2 rounded-md font-semibold hover:opacity-80 transition"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 bg-black/95 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
          <a
            href="#feature"
            className="hover:text-purple-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Features
          </a>
          <a
            href="#review"
            className="hover:text-purple-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </a>
          <a
            href="#pricing"
            className="hover:text-purple-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#FAQ"
            className="hover:text-purple-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <a
            href="#about"
            className="hover:text-purple-500 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
              href="https://whop.com/runaans-locks/"
              target="_blank"
              rel="noopener noreferrer" 
            className="bg-linear-to-r from-purple-500 to-purple-800 px-6 py-3 rounded-md font-semibold hover:opacity-80 transition"
            onClick={() => setMenuOpen(false)}
          >
            Join Now
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar