import React from 'react'

function AnimatedStep() {
    return (
        <div className="container mx-auto max-w-[45rem] p-4 flex flex-col gap-10 items-center justify-center">
            <div>
                <svg class="animate-spin -ml-1 mr-3 h-16 w-16 text-[#F3B030]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            <div>
                <h2 className="text-lg md:text-xl lg:text-2xl text-black font-bold text-center">Finding learning path recommendations for you based on your responses.</h2>
            </div>
        </div>
    )
}

export default AnimatedStep
