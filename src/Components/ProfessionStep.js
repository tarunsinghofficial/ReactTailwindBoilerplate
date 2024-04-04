import React from 'react';
import ListCard from './ListCard';
import { faBuildingColumns, faGraduationCap, faBolt, faSchool, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: 1,
        icon: faSchool,
        title: "Student",
        expandedTitle: "or soon to be enrolled",
        color: "text-yellow-400"
    },
    {
        id: 2,
        icon: faUserTie,
        title: "Professional",
        expandedTitle: "pursuing a career",
        color: "text-green-300"
    },
    {
        id: 3,
        icon: faUser,
        title: "Parent",
        expandedTitle: "of a school age child",
        color: "text-blue-600"
    },
    {
        id: 4,
        icon: faGraduationCap,
        title: "Lifelong learner",
        expandedTitle: "",
        color: "text-green-600"
    },
    {
        id: 5,
        icon: faBuildingColumns,
        title: "Teacher",
        expandedTitle: "",
        color: "text-red-600"
    },
    {
        id: 6,
        icon: faBolt,
        title: "Other",
        expandedTitle: "",
        color: "text-black"
    },
];

function ProfessionStep({ onSelectItem, selectedItem }) {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-5 items-center justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center">Which describes you best?</h2>
                <p className="text-[#555555] text-md md:text-lg lg:text-xl text-center">This will help us personalize your experience.</p>
                <div className="mt-8 space-y-3">
                    {data.map((item) => (
                        <ListCard 
                            key={item.id} 
                            title={item.title} 
                            expandTitle={item.expandedTitle} 
                            icon={item.icon} 
                            isSelected={selectedItem === item.id} 
                            onSelect={() => onSelectItem(item.id)} 
                            iconColor={item.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfessionStep;
