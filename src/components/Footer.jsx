import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AH_Footer_logo from '../assets/AH_Footer_logo-01.svg'
import instagram from '../assets/instagram_c.png'
import facebook from '../assets/facebook_c.png'
import AH_Footer_tagline from '../assets/AH_Footer_tagline.png'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const footerRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(footerRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: "top 90%",
                        end: "bottom 20%",
                    }
                }
            )
        }, footerRef)

        return () => ctx.revert()
    }, [])

    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 to-emerald-500/20"></div>
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <defs>
                        <pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3"/>
                            <circle cx="75" cy="75" r="1" fill="currentColor" opacity="0.3"/>
                            <circle cx="25" cy="75" r="1" fill="currentColor" opacity="0.3"/>
                            <circle cx="75" cy="25" r="1" fill="currentColor" opacity="0.3"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grain)"/>
                </svg>
            </div>

            <div ref={footerRef} className="relative">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <img 
                                src={AH_Footer_logo} 
                                alt="Asian Harvest Logo" 
                                className="w-40 mb-6 hover:scale-105 transition-transform duration-300"
                            />
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Premium quality cashews and saffron from the heart of Kerala, 
                                delivering authentic flavors and nutritious goodness to your table.
                            </p>
                            <div className="flex space-x-4">
                                <a 
                                    href="https://instagram.com/asian.harvest?igshid=Yzg5MTU1MDY="
                                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25"
                                >
                                    <img src={instagram} alt="Instagram" className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://facebook.com"
                                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-blue-500/25"
                                >
                                    <img src={facebook} alt="Facebook" className="w-6 h-6" />
                                </a>
                                <a 
                                    href="https://wa.me/9526750675"
                                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-green-500/25"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-green-400">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#products" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                        Our Products
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <button className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center group">
                                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
                                        Privacy Policy
                                    </button>
                                </li>
                            </ul>
                        </div>

                        {/* Products */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-green-400">Our Products</h3>
                            <ul className="space-y-3">
                                <li className="text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                                    Premium Cashew Nuts
                                </li>
                                <li className="text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                                    Kashmiri Saffron
                                </li>
                                <li className="text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                                    Irani Saffron
                                </li>
                                <li className="text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                                    Export Quality Nuts
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-green-400">Contact Info</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 leading-relaxed">
                                            Chathinamkulam, Chandanathope,<br />
                                            Kollam - 691014, Kerala, India
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <a href="tel:+919526750675" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                        +91 9526 750 675
                                    </a>
                                </div>
                                
                                <div className="flex items-center space-x-3">
                                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:unaislatheef@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                                        unaislatheef@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Brand Tagline */}
                    <div className="flex justify-center mt-16 mb-8">
                        <img 
                            src={AH_Footer_tagline} 
                            alt="Asian Harvest Tagline" 
                            className="max-w-xs hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 text-sm">
                                © {new Date().getFullYear()} Asian Harvest LLP. All rights reserved.
                            </p>
                            <div className="flex space-x-6">
                                <button className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                                    Privacy Policy
                                </button>
                                <button className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                                    Terms of Service
                                </button>
                                <button className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                                    Cookie Policy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer

