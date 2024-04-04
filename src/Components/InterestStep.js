import React from 'react';
import ListCard from './ListCard';
import { faBolt, faBullseye, faChartLine, faEarthOceania, faRetweet } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        icon: faChartLine,
        title: "Learning specific skills to advance my career",
        color: "text-blue-600"
    },
    {
        id: 2,
        icon: faEarthOceania,
        title: "Exploring new topics I'm interested in",
        color: "text-blue-400"
    },
    {
        id: 3,
        icon: faRetweet,
        title: "Refreshing my math foundations",
        color: "text-green-600"
    },
    {
        id: 4,
        icon: faBullseye,
        title: "Excercising my brain to stay sharp",
        color: "text-red-500"
    },
    {
        id: 5,
        icon: faBolt,
        title: "Something else",
        color: "text-yellow-600"
    },
];

function InterestStep({ onSelectItem, selectedItem }) {
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
                            iconColor={item.color}
                            isSelected={selectedItem === item.id} 
                            onSelect={() => onSelectItem(item.id)} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InterestStep;
