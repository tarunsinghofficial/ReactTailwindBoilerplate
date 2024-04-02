import React from 'react'

const CustomButton = ({ className, onClick, children }) => {
    return (
        <div className={`w-[10em] h-[3em] lg:w-[14em] lg:h-[3.5em] hover:cursor-pointer bg-black text-white rounded-lg p-4 flex items-center justify-center ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default CustomButton
