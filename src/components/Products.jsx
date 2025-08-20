import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import banner from '../assets/BANNER DESIGN/AH_BANNERFULL.png'
import saffronBox from '../assets/images/saffron_box.png'

gsap.registerPlugin(ScrollTrigger)

const Products = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const cashewCardRef = useRef(null)
    const saffronCardRef = useRef(null)

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

            // Cashew card animation
            gsap.fromTo(cashewCardRef.current,
                { opacity: 0, x: -100, rotateY: -45 },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cashewCardRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Saffron card animation
            gsap.fromTo(saffronCardRef.current,
                { opacity: 0, x: 100, rotateY: 45 },
                {
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: saffronCardRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Floating animation for product images
            gsap.to(".product-float", {
                y: -10,
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                stagger: 0.5
            })

        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="products" className="relative py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-32 left-10 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div ref={titleRef} className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="text-green-600">Products</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Premium quality products sourced directly from the best farms, 
                        ensuring freshness and authenticity in every package
                    </p>
                </div>

                {/* Products Grid */}
                <div className="space-y-32">
                    {/* Cashew Product */}
                    <div ref={cashewCardRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-green-100">
                                <div className="mb-6">
                                    <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                                        Premium Quality
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Asian Harvest<sup className="text-lg">®</sup>
                                        <br />
                                        <span className="text-green-600">Healthy Cashew Nuts</span>
                                    </h3>
                                </div>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Export Quality Standards</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Rich in Healthy Fats & Proteins</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">From Kollam, Cashew Capital</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Multiple Size Options</span>
                                    </div>
                                </div>

                                <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Order Now
                                </button>
                            </div>
                        </div>
                        
                        <div className="order-1 lg:order-2 relative">
                            <div className="product-float relative">
                                <img 
                                    src={banner} 
                                    alt="Asian Harvest Cashew Nuts" 
                                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl"></div>
                            </div>
                        </div>
                    </div>

                    {/* Saffron Product */}
                    <div ref={saffronCardRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="product-float relative">
                                <img 
                                    src={saffronBox} 
                                    alt="Asian Harvest Saffron" 
                                    className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-orange-400/20 rounded-3xl"></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 border border-red-100">
                                <div className="mb-6">
                                    <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
                                        Authentic & Pure
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        Asian Harvest<sup className="text-lg">®</sup>
                                        <br />
                                        <span className="text-red-600">Pure Kashmiri & Irani Saffron</span>
                                    </h3>
                                </div>
                                
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">100% Pure & Natural</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Premium Kashmiri Origin</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Rich Aroma & Flavor</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Carefully Hand-picked</span>
                                    </div>
                                </div>

                                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quality Promise */}
                <div className="mt-32 text-center">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Quality Promise</h3>
                        <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                            Every product is carefully selected, processed, and packaged to maintain the highest quality standards. 
                            We guarantee freshness, purity, and authentic taste in every package delivered to your doorstep.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products