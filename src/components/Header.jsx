import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import logo from '../assets/images/Logo_new.svg'
import insta from '../assets/images/insta.svg'
import fb from '../assets/images/fb.svg'
import whatsapp from '../assets/images/whatsapp.svg'
import { Link } from 'react-scroll'

const Header = () => {
    const heroRef = useRef(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(heroRef.current, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
            )
        }

        const floatingElements = document.querySelectorAll(".floating")
        if (floatingElements.length > 0) {
            gsap.to(floatingElements, {
                y: -10,
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1
            })
        }
    }, [])

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
            </div>

            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-green-100 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img src={logo} alt="Asian Harvest" className="h-12 w-auto" />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="about" spy={true} smooth={true} offset={100} duration={500} 
                                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">
                                About
                            </Link>
                            <Link to="products" spy={true} smooth={true} offset={100} duration={500}
                                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">
                                Products
                            </Link>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}
                                className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer">
                                Contact
                            </Link>
                            
                            {/* Social Icons */}
                            <div className="flex items-center space-x-3 ml-8">
                                <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                                    <img src={fb} alt="Facebook" className="w-6 h-6" />
                                </a>
                                <a href="https://instagram.com/asian.harvest" className="text-gray-600 hover:text-pink-600 transition-colors duration-300">
                                    <img src={insta} alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a href="https://wa.me/9526750675" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center space-x-2">
                                    <img src={whatsapp} alt="WhatsApp" className="w-5 h-5" />
                                    <span className="text-sm font-medium">Chat Now</span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 p-2"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t border-green-100">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Link to="about" spy={true} smooth={true} offset={100} duration={500}
                                    className="block px-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}>
                                    About
                                </Link>
                                <Link to="products" spy={true} smooth={true} offset={100} duration={500}
                                    className="block px-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}>
                                    Products
                                </Link>
                                <Link to="contact" spy={true} smooth={true} offset={50} duration={500}
                                    className="block px-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}>
                                    Contact
                                </Link>
                                <div className="flex items-center space-x-3 px-3 py-2">
                                    <img src={fb} alt="Facebook" className="w-6 h-6" />
                                    <img src={insta} alt="Instagram" className="w-6 h-6" />
                                    <a href="https://wa.me/9526750675" className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <div ref={heroRef} className="relative pt-20 pb-16 flex items-center justify-center min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                        <span className="floating inline-block text-green-600">Premium</span>
                        <br />
                        <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Asian Harvest
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
                        From the cashew capital of the world, delivering 
                        <span className="text-green-600 font-semibold"> premium quality nuts</span> and 
                        <span className="text-green-600 font-semibold"> pure saffron</span> to your doorstep
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Link to="products" spy={true} smooth={true} offset={100} duration={500}>
                            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                                Explore Products
                            </button>
                        </Link>
                        <Link to="about" spy={true} smooth={true} offset={100} duration={500}>
                            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-300 cursor-pointer">
                                Our Story
                            </button>
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="animate-bounce">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header