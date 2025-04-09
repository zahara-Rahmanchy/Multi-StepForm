/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import PersonalInformation from './PersonalInformation';
import {  useForm } from 'react-hook-form';
import Address from './Address';
import AccountSettings from './Account.Settings';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '@/lib/validationSchema';
const MultiStepForm2 = () => {
     const {register,handleSubmit, 
        formState: { errors, } }=useForm({
        resolver:zodResolver(validationSchema),
        // defaultValues:userInfo,
        mode:"onBlur"
      })
  
    const onSubmit = (data: any,e) => {
        // getValues();
        e?.preventDefault(); 
        console.log("hiiiiiiiii")
        console.log('Form Data:', data);
      };
      
  return (
    <div>

         <form onSubmit={handleSubmit(onSubmit)}>
               {/* <PersonalInformation register={register} errors={errors}/>
        
               <Address register={register} errors={errors}/> */}
                <div className="">
         <h1 className=' text-xl text-teal-700 '>Address
          
          </h1>
          <span className=' text-xs italic text-gray-400'>Please fill in your address</span>
          <div className='space-y-4 mt-10'>
          <div>
        <label htmlFor="StreetAddress" className="block">Street Address</label>
        <input
          {...register('StreetAddress')}
          id="streetAddress"
          className="border p-2 w-full"
        />
        {errors.StreetAddress && <p className="text-red-500 mt-1">{errors.StreetAddress.message}</p>}
      </div>

      <div>
        <label htmlFor="City" className="block">City</label>
        <input
          {...register('City')}
          id="city"
          className="border p-2 w-full"
        />
        {errors.City && <p className="text-red-500 mt-1">{errors.City.message}</p>}
      </div>

      <div>
        <label htmlFor="Zip" className="block">Zip Code</label>
        <input
          {...register('Zip')}
          id="zipCode"
          className="border p-2 w-full"
        />
        {errors.Zip && <p className="text-red-500 mt-1">{errors.Zip.message}</p>}
      </div> </div>
     
    </div>
               <div className="">
        <h1 className="text-xl text-violet-700">Account Setup</h1>
<span className="text-xs italic text-gray-500">Please create your account credentials</span>

       <div className='space-y-4 my-10'>
      <div>
        <label htmlFor="Username" className="block">Username</label>
        <input
          {...register('Username')}
          id="username"
          className="border p-2 w-full"
        />
        {errors.Username && <p className="text-red-500 mt-1">{errors.Username.message}</p>}
      </div>

      <div>
        <label htmlFor="Password" className="block">Password</label>
        <input
          {...register('Password')}
          type="password"
          id="password"
          className="border p-2 w-full"
        />
        {errors.Password && <p className="text-red-500 mt-1">{errors.Password.message}</p>}
      </div>

      <div>
        <label htmlFor="ConfirmPassword" className="block">Confirm Password</label>
        <input
          {...register('ConfirmPassword')}
          type="password"
          id="ConfirmPassword"
          className="border p-2 w-full"
        />
        {errors.ConfirmPassword && <p className="text-red-500 mt-1">{errors.ConfirmPassword.message}</p>}
      </div>
      </div>
    </div>
    <div className=''>
        <h1 className=' text-xl text-violet-700 '>Personal Information
          
          </h1>
          <span className=' text-xs italic text-gray-400'>Please fill up the form with your details</span>
          {/* <div className='mt-10 flex justify-between items-center md:flex-row flex-col '> */}
        
          <div className='space-y-4 my-10'>
            <div>
          <label htmlFor="FullName" className="block">Full Name</label>
          <input
            {...register('FullName')}
            id="fullName"
            type='text'
            className="border p-2 w-full rounded-sm"
          />
          {errors.FullName && <p className="text-red-500 mt-1">{errors.FullName.message}</p>}
          </div>
        <div className=''>
          <label htmlFor="Email" className="block">Email</label>
          <input
            {...register('Email')}
            id="Email"
            type='email'
            className="border p-2 w-full rounded-sm "
          />
          {errors.Email && <p className="text-red-500 mt-1">{errors.Email.message}</p>}
        </div>
  
        <div className=''>
          <label htmlFor="Phone" className="block">Phone</label>
          <input
            {...register('Phone')}
            id="Phone"
            type='text'
            className="border p-2 w-full"
          />
          {errors.Phone && <p className="text-red-500 mt-1">{errors.Phone.message}</p>}
        </div>
        </div>
    </div>
               
                    <>
                    {/* <Summary data={getValues()}/> */}
                   </>
                  
                   <div className="w-full text-right mt-4">
                      <button 
                        type='submit' 
                        // disabled={currentStep !== 3}  
                        className="btn-sm px-4 py-2 mb-10  bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded cursor-pointer"
                      >
                        Submit
                      </button>
                    </div>
               
               </form>
    </div>
  )
}

export default MultiStepForm2