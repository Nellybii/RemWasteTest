import React from 'react';

function Header() {

  

  return (
    <div className='bg-gray-900 text-white mt-4'>
      <nav className='container mx-auto flex justify-between items-center relative'> 
        <div className='mx-8'>
        <button
          className='absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 text-4xl m-2'
          aria-label="Go back"
        >
          &larr; 
        </button>
        </div>

        <ul className='flex space-x-6 p-4 m-2 ml-4'>
          <li>
            <a href="/postcode" className='text-gray-300 hover:text-white'>Postcode</a>
          </li>
          <li>
            <a href="/wastetype" className='text-gray-300 hover:text-white'>Waste Type</a>
          </li>
          <li>
            <a href="/selectskip" className='text-white font-semibold underline'>Select Skip</a>
          </li>
          <li>
            <a href="/permit" className='text-gray-300 hover:text-white'>Permit Check</a>
          </li>
          <li>
            <a href="/choosedate" className='text-gray-300 hover:text-white'>Choose Date</a>
          </li>
          <li>
            <a href="/payment" className='text-gray-300 hover:text-white'>Payment</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;