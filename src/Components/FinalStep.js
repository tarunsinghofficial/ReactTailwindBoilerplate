import React, { useState } from 'react'
import PathCard from './PathCard'

const data = [
    {
        id: 1,
        logo: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Foundational Math",
        description: "Build your foundational skills in algebra, geometry and probability.",
        tag: "Most popular"
    },
    {
        id: 2,
        logo: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Mathematical Thinking",
        description: "Build your foundational skills in algebra, geometry and probability.",
        tag: ""
    },
]

function FinalStep() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleSelectItem = (id) => {
        setSelectedItem(id);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col gap-5 items-center justify-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center">Learning paths based on your answers</h2>
                <p className="text-[#555555] text-md md:text-lg lg:text-xl text-center">Choose one to get started. You can switch anytime.</p>
                <div className="mt-8 flex flex-col md:flex-row lg:flex-row gap-5 items-center">
                    {data.map((item) => (
                        <PathCard key={item.id} title={item.title} description={item.description} logo={item.logo} tag={item.tag}
                        isSelected={selectedItem === item.id} 
                            onSelect={() => handleSelectItem(item.id)} 
                             />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FinalStep
