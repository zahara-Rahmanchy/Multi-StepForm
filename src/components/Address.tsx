/* eslint-disable @typescript-eslint/no-explicit-any */
// Step2.tsx


const  Address=({ register, errors }: any) =>{
  return (
    <div className="">
         <h1 className=' text-xl text-violet-700 dark:text-violet-300 '>Address
          
          </h1>
          <span className=' text-xs italic  text-gray-400 dark:text-gray-20'>Please fill in your address</span>
          <div className='space-y-4 my-10'>
          <div>
        <label htmlFor="StreetAddress" className="block dark:text-gray-300">Street Address</label>
        <input
          {...register('StreetAddress')}
          id="streetAddress"
          className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
        />
        {errors.StreetAddress && <p className="text-red-500 mt-1">{errors.StreetAddress.message}</p>}
      </div>

      <div>
        <label htmlFor="City" className="block dark:text-gray-300">City</label>
        <input
          {...register('City')}
          id="city"
          className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
        />
        {errors.City && <p className="text-red-500 mt-1">{errors.City.message}</p>}
      </div>

      <div>
        <label htmlFor="Zip" className="block dark:text-gray-300">Zip Code</label>
        <input
          {...register('Zip')}
          id="zipCode"
          className="border p-2 w-full rounded-md my-2 bg-white border-gray-300 dark:bg-slate-800 dark:border-slate-500"
        />
        {errors.Zip && <p className="text-red-500 mt-1">{errors.Zip.message}</p>}
      </div> </div>
     
    </div>
  );
}
export default  Address