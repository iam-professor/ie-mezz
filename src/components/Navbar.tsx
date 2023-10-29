"use client"
import React from 'react'

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white font-bold text-lg">Ie Mezz</div>
      <div className="hidden md:flex space-x-4">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Services</a>
        <a href="#" className="text-white">Contact</a>
      </div>
      <div className="md:hidden">
        {/* Mobile menu icon */}
        <button className="text-white">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar