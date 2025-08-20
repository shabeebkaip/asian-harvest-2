import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-20 h-20 border-4 border-green-100 rounded-full animate-spin"></div>
                {/* Inner ring */}
                <div className="absolute top-2 left-2 w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                
                {/* Loading text */}
                <div className="mt-8 text-center">
                    <p className="text-green-600 font-semibold text-lg">Loading Asian Harvest</p>
                    <div className="flex space-x-1 justify-center mt-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce animation-delay-1000"></div>
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingSpinner
