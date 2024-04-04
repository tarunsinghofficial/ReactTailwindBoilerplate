import React, { useState } from 'react';
import SquareCard from './SquareCard';

const data = [
    {
        id: 1,
        bgImage: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa",
        title: "Arithmetic",
        level: "Introductory"
    },
    {
        id: 2,
        bgImage: "https://images.unsplash.com/photo-1632207190829-a97e41017175",
        title: "Basic Algebra",
        level: "Foundational"
    },
    {
        id: 3,
        bgImage: "https://images.unsplash.com/photo-1542621334-a254cf47733d",
        title: "Intermediate Algebra",
        level: "Intermediate"
    },
    {
        id: 4,
        bgImage: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
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
                            bgImage={item.bgImage} 
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
