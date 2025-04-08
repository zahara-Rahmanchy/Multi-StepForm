/* eslint-disable @typescript-eslint/no-explicit-any */
// Step2.tsx


const  Address=({ register, errors }: any) =>{
  return (
    <div className="">
         <h1 className=' text-xl text-teal-700 '>Address
          
          </h1>
          <span className=' text-xs italic text-gray-400'>Please fill in your address</span>
          <div className='space-y-4 my-10'>
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
  );
}
export default  Address