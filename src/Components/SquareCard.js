import React from 'react'

const SquareCard = ({ bgImage, title, level, isSelected, onSelect }) => {
    return (
        <div className={`hover:cursor-pointer w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] hover:border-2 hover:border-[#f6c855] hover:shadow-md overflow-hidden rounded-[7px] border border-gray-200 bg-white ${isSelected ? 'border-2 border-yellow-400 shadow-md' : 'hover:border-[#E2D4B2] hover:shadow-md'}`} onClick={onSelect}>
            <div className="flex flex-col items-center text-center gap-2">
                <img src={bgImage} alt="mylogo" className="w-full h-[6em] md:h-[6.5em] lg:h-[10em]" />
                <div>
                    <h2 className="text-sm lg:text-lg">{title}</h2>
                    <h3 className="text-[#969696] text-sm lg:text-lg">{level}</h3>
                </div>
            </div>
        </div>
    )
}

export default SquareCard