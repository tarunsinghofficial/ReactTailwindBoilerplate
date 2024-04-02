import React, { useState } from 'react';
import ListCard from './ListCard';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        icon: faSchool,
        title: "Student",
        expandedTitle: "or soon to be enrolled"
    },
    {
        id: 2,
        icon: faSchool,
        title: "Student",
        expandedTitle: "or soon to be enrolled"
    },
    {
        id: 3,
        icon: faSchool,
        title: "Student",
        expandedTitle: "or soon to be enrolled"
    },
    {
        id: 4,
        icon: faSchool,
        title: "Student",
        expandedTitle: ""
    },
    {
        id: 5,
        icon: faSchool,
        title: "Student",
        expandedTitle: ""
    },
    {
        id: 6,
        icon: faSchool,
        title: "Student",
        expandedTitle: ""
    },
];

function InterestStep() {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (id) => {
        setSelectedItem(id);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-5 items-center justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center">Which are you most interested in?</h2>
                <p className="text-[#555555] text-md md:text-lg lg:text-xl text-center">Choose just one. This will help us get you started (but won't limit your experience).</p>
                <div className="mt-8 space-y-3">
                    {data.map((item) => (
                        <ListCard 
                            key={item.id} 
                            title={item.title} 
                            expandTitle={item.expandedTitle} 
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

export default InterestStep;
