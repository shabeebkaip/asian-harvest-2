import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import productBack from '../assets/BANNER DESIGN/AH_BANNER_CASHEWpack.png'
import AH_spooncashew from '../assets/AH_spooncashew.png'

gsap.registerPlugin(ScrollTrigger)

const ContactUs = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const formRef = useRef(null)
    const imageRef = useRef(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Form animation
            gsap.fromTo(formRef.current.children,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Image animation
            gsap.fromTo(imageRef.current,
                { opacity: 0, x: 50, rotateY: 45 },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add form submission logic here
        console.log('Form submitted:', formData)
        
        // Show success animation
        gsap.to(e.target, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.out"
        })
    }

    return (
        <section ref={sectionRef} id="contact" className="relative py-24 bg-gradient-to-b from-white to-green-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-3000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Contact <span className="text-green-600">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to experience premium quality? Get in touch with us today 
                        and discover the difference Asian Harvest makes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <div ref={formRef} className="space-y-8">
                        {/* Quick Contact */}
                        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-3xl shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Get In Touch Quickly</h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Call Us Directly</p>
                                        <a href="tel:+919526750675" className="text-lg font-bold hover:text-green-200 transition-colors">
                                            +91 9526 750 675
                                        </a>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email Us</p>
                                        <a href="mailto:unaislatheef@gmail.com" className="text-lg font-bold hover:text-green-200 transition-colors">
                                            unaislatheef@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Visit Us</p>
                                        <p className="text-sm">Kollam, Kerala, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-3xl shadow-2xl border border-green-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors duration-300 bg-green-50/50"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors duration-300 bg-green-50/50"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors duration-300 bg-green-50/50"
                                        placeholder="What's this about?"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border-2 border-green-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors duration-300 resize-none bg-green-50/50"
                                        placeholder="Tell us how we can help you..."
                                    />
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div ref={imageRef} className="lg:sticky lg:top-8 space-y-8">
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <img 
                                src={productBack} 
                                alt="Asian Harvest Products" 
                                className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                        </div>
                        
                        <div className="hidden xl:block">
                            <img 
                                src={AH_spooncashew} 
                                alt="Cashew in Spoon" 
                                className="w-full max-w-md mx-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Additional Info Card */}
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                            <h4 className="font-bold text-gray-900 mb-3">Why Choose Asian Harvest?</h4>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    20+ years of experience in premium nuts
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Export quality standards maintained
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    Direct from Kollam, cashew capital
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                                    100% customer satisfaction guarantee
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs