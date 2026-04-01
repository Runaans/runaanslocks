import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/rl_transparent.png";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-neutral-700 py-10">

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8 text-gray-300">

        {/* Logo */}
        <img src={logo} alt="Runaans Locks" className="h-10 w-auto" />

        {/* Links */}
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#FAQ" className="hover:text-purple-400 transition">
            FAQ
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact Us
          </a>

        {/* Social Icons */}
          <a
            href="https://www.instagram.com/runaanslocks/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@runaanslocks"
            target="_blank"
            rel="noopener noreferrer"            
            className="hover:text-purple-400 transition"
          >
            <FaTiktok />
          </a>

          <a
            href="https://x.com/RunaansLocks"
            target="_blank"
            rel="noopener noreferrer"            
            className="hover:text-purple-400 transition"
          >
            <FaXTwitter />
          </a>

        </div>
    </footer>
  )
}

export default Footer