import React from 'react'

const SquareCard = ({ icon, title, level, isSelected, onSelect }) => {
    return (
        <div className={`hover:cursor-pointer w-[10rem] h-[10rem] lg:w-[15rem] lg:h-[15rem] hover:border-2 hover:border-[#f6c855] hover:shadow-md overflow-hidden rounded-[7px] border border-gray-200 bg-white ${isSelected ? 'border-2 border-[#f6c855] shadow-md' : 'hover:border-[#E2D4B2] hover:shadow-md'}`} onClick={onSelect}>
            <div className="flex flex-col items-center text-center gap-2">
                <img src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="mylogo"
                    className="w-full h-auto"
                />
                <div>
                    <h2 className="text-sm lg:text-lg">{title}</h2>
                    <h3 className="text-[#969696] text-sm lg:text-lg">{level}</h3>
                </div>
            </div>
        </div>
    )
}

export default SquareCard