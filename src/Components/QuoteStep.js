import React from 'react'
import CustomButton from './CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import second from '../assets/2.png'

function QuoteStep() {
    return (
        <div className="container mx-auto max-w-[70rem] p-4 flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col md:flex-row lg:flex-row gap-10 items-center justify-center">
                <div className="w-[10em] md:w-[40em] lg:w-[70em]">
                    <img src={second} alt='quote' />
                </div>
                <div className="flex flex-col justify-evenly max-w-2xl gap-10">
                    <div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold">Your're on your way!</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-1">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl" />
                        </div>
                        <p className="text-[#555555] text-md md:text-lg lg:text-xl italic">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae delectus magnam! Cupiditate aliquid esse, veniam modi vitae aperiam illum temporibus doloremque recusandae assumenda magnam nulla nesciunt velit soluta itaque."</p>
                        <p className="italic"> -- Jacob S</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteStep
