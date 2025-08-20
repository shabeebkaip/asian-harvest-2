import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Product_image from '../assets/images/Product_image.png'

gsap.registerPlugin(ScrollTrigger)

const Packages = () => {
    const packageRef = useRef(null)
    const imageRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Image reveal animation
            gsap.fromTo(imageRef.current,
                { opacity: 0, scale: 0.8, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Parallax effect
            gsap.to(imageRef.current, {
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: packageRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            })

        }, packageRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={packageRef} className="relative py-24 bg-gradient-to-b from-green-50 to-emerald-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-32 left-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-32 right-10 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-4000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Our <span className="text-green-600">Packages</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from our variety of premium packaging options, 
                        designed to preserve freshness and deliver quality
                    </p>
                </div>

                {/* Package Display */}
                <div ref={imageRef} className="relative max-w-5xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <img 
                            src={Product_image} 
                            alt="Asian Harvest Package Options" 
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent"></div>
                        
                        {/* Overlay Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="text-white text-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                    Premium Packaging Solutions
                                </h3>
                                <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                                    Our eco-friendly packaging ensures maximum freshness while maintaining 
                                    the authentic taste and nutritional value of our premium products
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Multiple Sizes</h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Available in various sizes from 100g to 1kg packages, 
                                perfect for personal use or family consumption
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Quality Sealed</h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Air-tight sealing technology preserves freshness, 
                                flavor, and nutritional value for extended periods
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">Easy Handling</h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Ergonomically designed packages with easy-open seals 
                                and convenient storage solutions
                            </p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-12 rounded-3xl shadow-2xl">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Quality?</h3>
                        <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                            Choose your preferred package size and enjoy the authentic taste of 
                            premium cashews and saffron delivered fresh to your doorstep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                View All Products
                            </button>
                            <a href="https://wa.me/9526750675" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300">
                                Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Packages