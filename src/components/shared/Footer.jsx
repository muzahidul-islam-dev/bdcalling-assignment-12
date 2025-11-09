import React from 'react'

import Logo from './../../assets/logo.png'
function Footer() {
    return (
        <footer className="bg-[#f5fcff] py-28  px-5 md:px-20">
      <div className="max-w-7xl mx-auto space-y-28">
        <div className="grid gap-10  lg:flex justify-center text-center lg:text-left md:justify-between items-center">
          <img src={Logo} alt="John - Footer logo" className="h-10" />

          <nav className="grid gap-2 sm:flex items-center sm:space-x-2" role="navigation">
            <a href="#home" className="text-black font-normal text-base hover:text-[#5e3bee] transition-colors">Home</a>
            <a href="#portfolio"
              className="text-black font-normal text-base hover:text-[#5e3bee] transition-colors">Portfolio</a>
            <a href="#about" className="text-black font-normal text-base hover:text-[#5e3bee] transition-colors">About
              me</a>
            <a href="#contact"
              className="text-black font-normal text-base hover:text-[#5e3bee] transition-colors">Contact</a>
            <a href="#testimonials"
              className="text-black font-normal text-base hover:text-[#5e3bee] transition-colors">Testimonials</a>
            <a href="#portfolio"
              className="text-black font-normal text-base hover:text-[#5e3bee] transition-colors">Portfolio</a>
          </nav>

          <div className="flex items-center space-x-4" role="list">
            <a href="#" role="listitem" className="hover:opacity-80 transition-opacity">
              <img src="./assets/facebook.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" role="listitem" className="hover:opacity-80 transition-opacity">
              <img src="./assets/instagram.png" alt="Instagram" className="w-8 h-8" />
            </a>
            <a href="#" role="listitem" className="hover:opacity-80 transition-opacity">
              <img src="./assets/twitter.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" role="listitem" className="hover:opacity-80 transition-opacity">
              <img src="./assets/linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="space-y-11">
          <div className="h-px bg-[#282938]/55"></div>
          <div className="grid gap-10 lg:flex justify-center text-center lg:text-left lg:justify-between items-center">
            <p className="text-black text-sm">
              Made with 💖 by
              <a href="https://facebook.com/rahathossain1470" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#5e3bee] transition-colors">
                Rahat Hossain
              </a>
            </p>
            <nav className="flex items-center space-x-2 sm:space-x-8" role="navigation">
              <a href="#" className="text-black font-normal text-sm hover:text-[#5e3bee] transition-colors">Privacy
                Policy</a>
              <a href="#" className="text-black font-normal text-sm hover:text-[#5e3bee] transition-colors">Terms of
                Service</a>
              <a href="#" className="text-black font-normal text-sm hover:text-[#5e3bee] transition-colors">Cookies
                Settings</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    )
}

export default Footer
