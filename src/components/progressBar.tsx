"use client"
type ProgressBarProps = {
    currentStep: number;
  };
  
  const steps = [
    'Personal Information',
    'Address',
    'Account Setup',
    'Summary',
  ];
  
  export default function progressBar({ currentStep }: ProgressBarProps) {
    return (
      <div className="flex md:items-center justify-between w-full mb-6">
        {steps.map((label, index) => (
          <div key={index} className="flex-1">
            <div className="flex flex-col items-center  justify-center relative">
              <div
                className={`w-12 h-8 rounded-br-3xl rounded-tr-3xl flex items-center justify-center text-white z-10 transition-color duration-500 ease-in-out ${
                  index <= currentStep
                    ? 'bg-blue-600'
                    : 'bg-gray-300'
                }`}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-sm text-center text-wrap">
                {label}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-4 left-[3rem] -right-[3rem] w-full h-1 transition-color duration-1000 ease-in-out ${
                    index < currentStep
                      ? 'bg-blue-600'
                      : 'bg-gray-300'
                  }`}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  