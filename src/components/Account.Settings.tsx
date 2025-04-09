// Step3.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Controller } from 'react-hook-form';

const AccountSettings=({ register, errors }:any) =>{
  return (
    <div className="">
        <h1 className="text-xl text-violet-700 dark:text-violet-300">Account Setup</h1>
<span className="text-xs italic  text-gray-400 dark:text-gray-20">Please create your account credentials</span>

       <div className='space-y-4 my-10'>
      <div>
        <label htmlFor="Username" className="block dark:text-gray-300">Username</label>
        <input
          {...register('Username')}
          id="username"
          className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
        />
        {errors.Username && <p className="text-red-500 mt-1">{errors.Username.message}</p>}
      </div>

      <div>
        <label htmlFor="Password" className="block dark:text-gray-300">Password</label>
        <input
          {...register('Password')}
          type="password"
          id="password"
          className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
        />
        {errors.Password && <p className="text-red-500 mt-1">{errors.Password.message}</p>}
      </div>

      <div>
        <label htmlFor="ConfirmPassword" className="block">Confirm Password</label>
        <input
          {...register('ConfirmPassword')}
          type="password"
          id="ConfirmPassword"
          className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
        />
        {errors.ConfirmPassword && <p className="text-red-500 mt-1">{errors.ConfirmPassword.message}</p>}
      </div>
      </div>
    </div>
  );
}
export default AccountSettings
