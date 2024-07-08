import React from 'react';
import JobListings from '../JobListings';
import ViewAllJobs from '../ViewAllJobs';

const Jobs = () => {
  return (
    <>
      <JobListings isHome={false} />
      <ViewAllJobs />
    </>
  );
};

export default Jobs;



