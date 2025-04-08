import React from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
const PersonalInformation = ({register,errors}:any) => {
  return (
    <div className=''>
        <h1 className=' text-xl text-teal-700 '>Personal Information
          
          </h1>
          <span className=' text-xs italic text-gray-400'>Please fill up the form with your details</span>
          {/* <div className='mt-10 flex justify-between items-center md:flex-row flex-col '> */}
        
          <div className='space-y-4 my-10'>
            <div>
          <label htmlFor="FullName" className="block">Full Name</label>
          <input
            {...register('FullName')}
            id="fullName"
            type='email'
            className="border p-2 w-full rounded-sm"
          />
          {errors.FullName && <p className="text-red-500 mt-1">{errors.FullName.message}</p>}
          </div>
        <div className=''>
          <label htmlFor="Email" className="block">Email</label>
          <input
            {...register('Email')}
            id="fullName"
            type='email'
            className="border p-2 w-full rounded-sm "
          />
          {errors.Email && <p className="text-red-500 mt-1">{errors.Email.message}</p>}
        </div>
  
        <div className=''>
          <label htmlFor="Phone" className="block">Phone</label>
          <input
            {...register('Phone')}
            id="fullName"
            type='email'
            className="border p-2 w-full"
          />
          {errors.Phone && <p className="text-red-500 mt-1">{errors.Phone.message}</p>}
        </div>
        </div>
    </div>
  )
}

export default PersonalInformation