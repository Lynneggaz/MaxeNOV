import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const HomeCards = () => {
  return (
    <div className="container mx-auto">
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        {/* Card pour les développeurs */}
        <Card>
          <h2 className="text-2xl font-bold">Pour les Développeurs</h2>
          <p className="mt-2 mb-4">
            Parcourez nos offres d'emploi React et commencez votre carrière aujourd'hui
          </p>
          <Link
            to="/jobs"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Parcourir les offres
          </Link>
        </Card>

        {/* Card pour les témoignages */}
        <Card bg="bg-yellow-100">
          <h2 className="text-2xl font-bold">Témoignages</h2>
          <p className="mt-2 mb-4">
            Découvrez ce que nos clients et partenaires disent à propos de Maxenov
          </p>
          <Link
            to="/testimonials"
           className="inline-block bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600"
          >
            Voir les témoignages
          </Link>
        </Card>

        
      </div>
    </div>
  );
};

export default HomeCards;



