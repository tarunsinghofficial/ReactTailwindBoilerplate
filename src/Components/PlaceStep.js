import React from 'react'
import CustomButton from './CustomButton'

function PlaceStep() {
    return (
        <div className="container mx-auto max-w-[70rem] p-4 flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-5 md:gap-[4em] lg:gap-[10em]">
                <div>
                    <img src="https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-[14em] md:w-[18em] lg:w-[20em] h-full" />
                </div>
                <div className="flex flex-col gap-5 justify-start max-w-xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">Your're in the right place</h2>
                    <p className="text-[#555555] text-md md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae delectus magnam! Cupiditate aliquid esse, veniam modi vitae aperiam illum temporibus doloremque recusandae assumenda.</p>
                </div>
            </div>
        </div>
    )
}

export default PlaceStep
