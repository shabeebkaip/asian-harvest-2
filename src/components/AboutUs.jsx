import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emblems from '../assets/2_emblems.svg'

gsap.registerPlugin(ScrollTrigger)

const AboutUs = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)
    const emblemRef = useRef(null)
    const contentRef = useRef(null)
    const statsRef = useRef(null)

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

            // Subtitle animation
            gsap.fromTo(subtitleRef.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Emblem animation
            gsap.fromTo(emblemRef.current,
                { opacity: 0, rotation: -180, scale: 0 },
                {
                    opacity: 1,
                    rotation: 0,
                    scale: 1,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: emblemRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Content animation
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )

            // Stats animation
            gsap.fromTo(statsRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 80%",
                        end: "bottom 20%",
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="about" className="relative py-24 bg-gradient-to-b from-white to-green-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-2000"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        About <span className="text-green-600">Us</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto rounded-full"></div>
                </div>

                {/* Hero Statement */}
                <div ref={subtitleRef} className="text-center mb-16">
                    <h3 className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed max-w-4xl mx-auto">
                        It's not about just a Cashew, It's all about the{' '}
                        <span className="font-bold text-green-600 bg-green-100 px-4 py-2 rounded-lg inline-block transform hover:scale-105 transition-transform duration-300">
                            healthy products!
                        </span>
                    </h3>
                </div>

                {/* Emblem with floating animation */}
                <div ref={emblemRef} className="flex justify-center mb-16">
                    <div className="relative">
                        <img 
                            src={emblems} 
                            alt="Asian Harvest Emblems" 
                            className="w-48 h-48 hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </div>

                {/* Process Statement */}
                <div className="text-center mb-16">
                    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                        <span className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Harvest. Process. Produce
                        </span>
                    </h4>
                </div>

                {/* Content Grid */}
                <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100">
                            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">1</span>
                                Our Heritage
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                                Sailing from Kollam, the eponymous city, the cashew capital of the world, exporting 
                                millions of tonnes to USA, Japan, Saudi Arabia and more. We marked our presence 
                                two decades back with a clear mission.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100">
                            <h5 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">2</span>
                                Our Mission
                            </h5>
                            <p className="text-gray-600 leading-relaxed">
                                We understood that our people, despite being in a cashew hub, were not getting 
                                export-quality premium cashew nuts. They settled for what was cheap, not what was best.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-3xl shadow-xl text-white">
                            <h5 className="text-xl font-bold mb-4 flex items-center">
                                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 text-sm font-bold mr-3">3</span>
                                Our Promise
                            </h5>
                            <p className="leading-relaxed">
                                So we decided to serve our people premium healthy nuts at affordable prices. 
                                We serve only the best because we value your health - your health is our wealth.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-green-100">
                            <h5 className="text-xl font-bold text-gray-800 mb-4">Quality Guarantee</h5>
                            <p className="text-gray-600 leading-relaxed">
                                Every product goes through rigorous quality checks to ensure you receive 
                                only premium, export-quality nuts and authentic saffron that meet international standards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                        <div className="text-gray-600 font-medium">Years of Experience</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                        <div className="text-gray-600 font-medium">Premium Quality</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                        <div className="text-gray-600 font-medium">Happy Customers</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                        <div className="text-gray-600 font-medium">Customer Support</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs