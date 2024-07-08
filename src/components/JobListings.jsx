// JobListings.jsx

import React, { useState, useEffect } from 'react';
import jobs from '../jobs.json'; // Assurez-vous que votre fichier JSON est correctement importé
import JobListing from './JobListing';

const JobListings = () => {
  const [jobData, setJobData] = useState([]);
  const recentJobs = jobs.slice(0, 3); // Affiche uniquement les 3 premières offres comme exemple

  useEffect(() => {
    // Simuler le chargement des données depuis jobs.json
    setJobData(jobs);
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Parcourir les offres d'emploi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <JobListing key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;


