import React, { useState } from 'react';
import SquareCard from './SquareCard';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        icon: faSchool,
        title: "Arithmetic",
        level: "Introductory"
    },
    {
        id: 2,
        icon: faSchool,
        title: "Basic Algebra",
        level: "Foundational"
    },
    {
        id: 3,
        icon: faSchool,
        title: "Intermediate Algebra",
        level: "Intermediate"
    },
    {
        id: 4,
        icon: faSchool,
        title: "Calculus",
        level: "Advanced"
    },
];

function MathStep() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (id) => {
        setSelectedItem(id);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-5 items-center justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center">What is your math comfort level?</h2>
                <p className="text-[#555555] text-md md:text-lg lg:text-xl text-center">Choose the highest level you feel confident in - you can always adjust later.</p>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 place-items-center">
                    {data.map((item) => (
                        <SquareCard 
                            key={item.id} 
                            title={item.title} 
                            level={item.level} 
                            icon={item.icon} 
                            isSelected={selectedItem === item.id} 
                            onSelect={() => handleSelectItem(item.id)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MathStep;
