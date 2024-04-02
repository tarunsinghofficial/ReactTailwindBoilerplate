import React from 'react';

const PathCard = ({ logo, title, description, tag, isSelected, onSelect }) => {
    return (
        <div className={`relative w-auto h-auto rounded-md hover:cursor-pointer hover:shadow-md p-5 lg:p-10 border-2 border-gray-200 hover:border-[#f6c855] bg-white ${isSelected ? 'border-[#f6c855] shadow-md' : 'hover:border-[#f6c855] hover:shadow-md'}`} onClick={onSelect}>
            <div className="flex flex-row gap-3 items-center justify-center">
                <div>
                    <h2 className="text-md md:text-xl lg:text-xl font-bold">{title}</h2>
                    <h3 className="text-black max-w-[18rem] text-md md:text-xl lg:text-xl">{description}</h3>
                </div>
                <div>
                    <img src={logo}
                        className="w-28 h-28"
                        alt="Path image"
                    />
                </div>
            </div>
            {tag && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#f6c855] rounded-full w-auto h-auto p-2 text-black text-xs md:text-md lg:text-[15px] flex items-center uppercase font-semibold'>{tag}</div>
            )}
        </div>
    );
};

export default PathCard;
