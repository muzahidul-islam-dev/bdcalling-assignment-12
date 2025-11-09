import React from 'react'
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav className="w-full py-5 bg-white shadow-lg fixed top-0 z-40" role="navigation">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-5">
        <Link to={'/'}><img src={Logo} alt="John - Logo" className="h-10" /></Link>

        <ul className="hidden lg:flex items-center space-x-11" role="menubar">
          <li role="none">
            <Link to="/" className="text-[#5e3bee] font-normal text-base hover:text-[#5e3bee]/80 transition-colors"
              role="menuitem" aria-current="page">
              Home
            </Link>
          </li>
          <li role="none">
            <a href="/portfolio" className="text-[#1c1e53] font-normal text-base hover:text-[#5e3bee] transition-colors"
              role="menuitem">
              Portfolio
            </a>
          </li>
          <li role="none">
            <Link to="/about" className="text-[#1c1e53] font-normal text-base hover:text-[#5e3bee] transition-colors"
              role="menuitem">
              About me
            </Link>
          </li>
          <li role="none">
            <a href="/testimonial" className="text-[#1c1e53] font-normal text-base hover:text-[#5e3bee] transition-colors"
              role="menuitem">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="flex justify-between items-center gap-4">
          <span className="lg:hidden text-3xl text-gray-800"><i className="fa-solid fa-bars"></i></span>
          <button
            className="hidden lg:block border border-[#5e3bee] text-[#5e3bee] px-11 py-5 rounded hover:bg-[#5e3bee] hover:text-white transition-all duration-300"
            type="button">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
    )
}

export default Nav
