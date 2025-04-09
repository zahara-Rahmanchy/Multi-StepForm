"use client"
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Effect to check the saved theme preference in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // If theme is found, set darkMode to true if it's dark
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode]);

  // Toggle dark mode state
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    console.log("mode: ",darkMode)
    // Save the theme in localStorage based on the current darkMode state
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    
  };
// bg-gradient-to-r from-teal-700 via-red-200 to-purple-500
  return (
    <div className=' w-full bg-violet-300 dark:bg-black flex justify-between px-3 items-center'>
      <h1 className='text-2xl font-bold italic text-yellow-200 dark:bg-gradient-to-r from-indigo-200 via-purple-500 to-yellow-200 bg-clip-text dark:text-transparent
'>Multi-Step Form</h1>
      <button
              onClick={toggleTheme}
              className="w-10 h-10 m-2 text-white p-2 rounded cursor-pointer bg-yellow-50"
            >
                    {darkMode ? '🌙' : '🌞'}

     </button>
        
    </div>
  );
};

export default ThemeToggle;
