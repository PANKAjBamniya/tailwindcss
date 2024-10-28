import React from 'react'
import img from './assets/free.png'

function App() {
  return (
    <>
          <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
            
            <div className="text-white text-2xl font-bold">
                <a href="#">E-skills</a>
            </div>

            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded">Home</a>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded">About</a>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded">Services</a>
                <a href="#" className="text-white hover:bg-blue-600 px-3 py-2 rounded">Contact</a>
            </div>

     
            <div className="md:hidden">
                <button id="menu-btn" className="text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <div id="mobile-menu" class="md:hidden hidden">
            <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">Home</a>
            <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">About</a>
            <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">Services</a>
            <a href="#" className="block text-white bg-blue-600 px-3 py-2 rounded">Contact</a>
        </div>
    </nav>
    <section className="w-full h-[90vh] relative bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
        <div className="absolute inset-0">
            <img src={img} alt="Hero Image" class="w-full h-full object-cover opacity-50"/>
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">We are dedicated to providing the best service possible. Explore our site to learn more.</p>
            <a href="#cta" className="bg-green-600 text-blue-900 hover:bg-yellow-400 px-6 py-3 rounded-lg text-lg font-semibold transition duration-300">Get Started</a>
        </div>
    </section>
    </>
  )
}

export default App;