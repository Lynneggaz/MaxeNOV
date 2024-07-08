import React from 'react';

const Hero = ({
  title = 'Bienvenue chez MAXENOV',
  subtitle = 'Ingénierie et études techniques',
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white">
        Bienvenue chez MAXENOV
      </h1>
      <p className="my-4 text-xl text-white">Ingénierie et études techniques</p>
    </div>
  </div>
</section>

  );
};

export default Hero;


  