
'use client';

import { useState } from 'react';
import ProgressBar from './progressBar';
import { SubmitHandler, useForm } from 'react-hook-form';
import PersonalInformation from './PersonalInformation';
import AccountSettings from './Account.Settings';
import Address from './Address';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '@/lib/validationSchema';
import Summary from './Summary';
type InfoType={
    FullName:string,
    Email:string,
    Phone:string,
    StreetAddress:string,
    City:string,
    Zip:string,
    Username:string,
    Password:string,
    ConfirmPassword:string
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo,setUserInfo] = useState<InfoType>({
    FullName:"",
    Email:"",
    Phone:"",
    StreetAddress:"",
    City:"",
    Zip:"",
    Username:"",
    Password:"",
    ConfirmPassword:""


  })

  const {register,handleSubmit,  trigger, getValues,
    formState: { errors, } }=useForm({
    resolver:zodResolver(validationSchema),
    defaultValues:userInfo,
    mode:"onBlur"
  })
  const handleNext =async() => {
    let stepFields: (keyof InfoType)[] = [];

  if (currentStep === 0) stepFields = ['FullName', 'Email', 'Phone'];
  if (currentStep === 1) stepFields = ['StreetAddress', 'City', 'Zip'];
  if (currentStep === 2) stepFields = ['Username', 'Password', 'ConfirmPassword'];

  const valid = await trigger(stepFields);

    if (valid &&  currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const onSubmit:SubmitHandler<InfoType>=(data,e)=>{
    e?.preventDefault(); 
    console.log("dsjhjkhaj")
    console.log(data)
    alert("User Data Submitted Successfully!")
    setUserInfo(data)
  }
//   console.log("useinfo: ",userInfo) :
  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow dark:bg-black ">
      <ProgressBar currentStep={currentStep} />

       <form onSubmit={handleSubmit(onSubmit)}>
       {currentStep===0 && <PersonalInformation register={register} errors={errors}/>}

        {currentStep==1 && <Address register={register} errors={errors}/>}
{currentStep===2 && <AccountSettings register={register} errors={errors}/>}
        {currentStep === 3 && 
            <>
            <Summary data={getValues()}/>
           
           </>}
            <div className="w-full text-right mt-4">
            <button 
              type='submit' 
              disabled={currentStep !== 3}  
              className="disabled:hidden btn-sm px-4 py-2 mb-10  bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
          
          
       
       </form>

       <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-violet-500 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === 3}
          className="px-4 py-2 bg-yellow-500 text-white rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
       
      </div>
     
    </div>
  );
}
