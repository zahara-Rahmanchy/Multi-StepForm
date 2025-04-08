// Step3.tsx
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Controller } from 'react-hook-form';

const AccountSettings=({ register, errors }:any) =>{
  return (
    <div className="">
        <h1 className="text-xl text-teal-700">Account Setup</h1>
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
  );
}
export default AccountSettings
