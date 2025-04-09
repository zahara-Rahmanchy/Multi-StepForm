import React from 'react'
/* eslint-disable @typescript-eslint/no-explicit-any */
const PersonalInformation = ({register,errors}:any) => {
  return (
    <div className=''>
        <h1 className=' text-xl text-violet-700 dark:text-violet-300'>Personal Information
          
          </h1>
          <span className=' text-xs italic text-gray-400 dark:text-gray-200'>Please fill up the form with your details</span>
          {/* <div className='mt-10 flex justify-between items-center md:flex-row flex-col '> */}
        
          <div className='space-y-4 my-10'>
            <div>
          <label htmlFor="FullName" className="block dark:text-gray-400">Full Name</label>
          <input
            {...register('FullName')}
            id="fullName"
            type='text'
            className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
          />
          {errors.FullName && <p className="text-red-500 mt-1">{errors.FullName.message}</p>}
          </div>
        <div className=''>
          <label htmlFor="Email" className="block dark:text-gray-400">Email</label>
          <input
            {...register('Email')}
            id="Email"
            type='email'
            className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
          />
          {errors.Email && <p className="text-red-500 mt-1">{errors.Email.message}</p>}
        </div>
  
        <div className=''>
          <label htmlFor="Phone" className="block dark:text-gray-400">Phone</label>
          <input
            {...register('Phone')}
            id="Phone"
            type='text'
            className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
          />
          {errors.Phone && <p className="text-red-500 mt-1">{errors.Phone.message}</p>}
        </div>
        </div>
    </div>
  )
}

export default PersonalInformation