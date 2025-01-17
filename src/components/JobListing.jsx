
import Jobs from './pages/Jobs';
import React, { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';

const JobListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(prevState => !prevState);
  };

  return (
    <div className='bg-white rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{job.type}</div>
          <h3 className='text-xl font-bold'>{job.title}</h3>
        </div>

        <div className='mb-5'>
          {showFullDescription ? job.description : job.description.substring(0, 90) + '...'}
        </div>

        <button
          onClick={toggleDescription}
          className='text-indigo-500 mb-2 hover:text-indigo-600'
        >
          {showFullDescription ? 'Lire Moins' : 'Lire Plus'}
        </button>

        <h3 className='text-indigo-500 mb-2'>{job.salary} / Year</h3>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {job.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
