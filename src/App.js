import React, { useState, useEffect } from 'react';
import CustomButton from "./Components/CustomButton";
import ProfessionStep from "./Components/ProfessionStep";
import InterestStep from "./Components/InterestStep";
import PlaceStep from "./Components/PlaceStep";
import MathStep from "./Components/MathStep";
import QuoteStep from "./Components/QuoteStep";
import FinalStep from "./Components/FinalStep";
import AnimatedStep from "./Components/AnimatedStep";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentStep === 6) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setCurrentStep(7);
      }, 2000);
    }
  }, [currentStep]);

  const handleNextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
    setSelectedItem(null);
  };

  const handlePreviousStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
    setSelectedItem(null);
  };

  const handleSelectItem = (id) => {
    setSelectedItem(id);
  };

  return (
    <>
      <div className='relative top-2 md:top-4 lg:top-4 container mx-auto flex justify-center'>
        {currentStep > 1 && currentStep < 6 && (
          <div className='hover:cursor-pointer absolute left-2 lg:left-20 top-2' onClick={handlePreviousStep}>
            <FontAwesomeIcon icon={faChevronLeft} className='text-black text-2xl' />
          </div>
        )}
        {currentStep < 6 && (
          <div className="w-[85%] bg-[#e8e8e8] h-[6px] mt-4">
            <div className={`bg-[#119D7D] h-[6px] rounded-md`} style={{ width: `${(currentStep / 5) * 100}%` }}></div>
          </div>
        )}
      </div>
      <div className='w-full h-screen mt-10 lg:mt-0 flex flex-col items-center justify-evenly'>
        <div className="flex flex-col items-center justify-center">
          {currentStep === 1 && <ProfessionStep onSelectItem={handleSelectItem} selectedItem={selectedItem} />}
          {currentStep === 2 && <InterestStep onSelectItem={handleSelectItem} selectedItem={selectedItem} />}
          {currentStep === 3 && <PlaceStep />}
          {currentStep === 4 && <MathStep />}
          {currentStep === 5 && <QuoteStep />}
          {isLoading && <AnimatedStep />}
          {currentStep === 7 && <FinalStep />}
        </div>
        <div className='pb-5'>
          {!isLoading && currentStep < 7 && (
            <CustomButton onClick={handleNextStep}>Continue</CustomButton>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
