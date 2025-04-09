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
                className={`w-12 h-8 rounded-br-3xl rounded-tr-3xl flex items-center justify-center text-white z-10  ${
                  index <= currentStep
                    ? 'bg-gradient-to-r from-indigo-300 via-purple-500 to-yellow-200 transition-colors duration-500 ease-in'
                    : 'bg-gray-300 dark:bg-slate-700 '
                }`}
                style={{ willChange: 'background-color' }}
              >
                {index + 1}
              </div>
              <span className="mt-2 text-sm text-center text-wrap">
                {label}
              </span>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-4 md:left-[6rem] left-[3rem] w-full h-1  ${
                    index < currentStep
                      ? 'bg-gradient-to-r from-indigo-300 via-purple-500 to-yellow-200 transition-colors duration-500 ease-in'
                      : 'bg-gray-300 dark:bg-slate-700 transition-colors duration-100 ease'
                  }`}
                  style={{ willChange: 'background-color' }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
  