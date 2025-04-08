import React from 'react'
type SummaryTypes = {
    data: {
      FullName: string;
      Email: string;
      Phone: string;
      StreetAddress: string;
      City: string;
      Zip: string;
      Username: string;
    };
  };
const Summary = ({data}:SummaryTypes) => {
    console.log("data: ",data)
  return (
    <div className=" text-sm text-gray-700">
    <h2 className="text-xl font-semibold text-teal-700 mb-2">Summary</h2>
    <div className='my-10 space-y-4'>
    <div><strong>Full Name:</strong> {data.FullName}</div>
    <div><strong>Email:</strong> {data.Email}</div>
    <div><strong>Phone:</strong> {data.Phone}</div>
    <div><strong>Street Address:</strong> {data.StreetAddress}</div>
    <div><strong>City:</strong> {data.City}</div>
    <div><strong>Zip Code:</strong> {data.Zip}</div>
    <div><strong>Username:</strong> {data.Username}</div>
    </div>
  </div>
  )
}

export default Summary