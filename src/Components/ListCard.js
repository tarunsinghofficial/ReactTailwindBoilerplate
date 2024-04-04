import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ListCard = ({ icon, title, expandTitle, isSelected, onSelect, iconColor }) => {
    return (
        <div className={`hover:cursor-pointer w-auto md:w-[38rem] lg:w-[38rem] h-auto px-4 py-5 rounded-[7px] border-2 border-gray-200 hover:border-[#f6c855] bg-white ${isSelected ? 'border-yellow-400 shadow-md' : 'hover:border-[#E2D4B2] hover:shadow-md'}`} onClick={onSelect}>
            <div className="grid grid-cols-10 gap-5 items-center justify-start">
                <div className='col-span-1'>
                    <FontAwesomeIcon icon={icon} className={`text-lg md:text-xl lg:text-2xl ${iconColor}`} />
                </div>
                <div className='col-span-8'> 
                    <h2 className="text-md md:text-md lg:text-lg">{title} <span className="text-[#969696]">{expandTitle}</span></h2>
                </div>
            </div>
        </div>
    )
}

export default ListCard;
