import React from 'react'
import { User, Mail, Phone, MapPin, Home, Landmark, UserCircle } from 'lucide-react';

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

const Summary = ({ data }: SummaryTypes) => {
  return (
    <div className="text-sm text-gray-700 dark:text-gray-200">
      <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400 mb-2">Summary</h2>
      <div className="my-10 grid  grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
        <div className="flex items-center gap-4 border-b pb-3 col-span-2 border-gray-300 dark:border-slate-600">
          <User className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-full items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
            <p className="font-medium">{data.FullName}</p>
          </div>
        </div>

        <div className="flex items-center border-b gap-4 md:col-span-1 col-span-2 border-gray-300 dark:border-slate-600">
          <UserCircle className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-[90%] items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Username</p>
            <p className="font-medium">{data.Username}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b pb-3 md:col-span-1 col-span-2 border-gray-300 dark:border-slate-600">
          <Mail className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-[90%] items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
            <p className="font-medium">{data.Email}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b  md:col-span-1 col-span-2 pb-3 border-gray-300 dark:border-slate-600">
          <Phone className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-[90%] items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
            <p className="font-medium">{data.Phone}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:col-span-1 col-span-2 border-b pb-3 border-gray-300 dark:border-slate-600">
          <Home className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-[90%] items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Street Address</p>
            <p className="font-medium">{data.StreetAddress}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:col-span-1 col-span-2 border-b pb-3 border-gray-300 dark:border-slate-600">
          <MapPin className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-[90%] items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">City</p>
            <p className="font-medium">{data.City}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 border-b pb-3 border-gray-300 dark:border-slate-600">
          <Landmark className="w-5 h-5 text-violet-800 dark:text-violet-400 mt-1" />
          <div className="md:flex justify-between w-[90%] items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">Zip Code</p>
            <p className="font-medium">{data.Zip}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
