import React from 'react';

export const GalleDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Historical Legacy</h3>
        <p className="text-gray-700 leading-relaxed">
          Galle, a UNESCO World Heritage site, represents the intersection of European colonial architecture and South Asian 
          traditions. Founded by Portuguese colonists in the 16th century and later fortified by the Dutch, the city stands as 
          one of the best-preserved colonial-era fortresses in Asia.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Architectural Highlights</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The fort area features numerous historical structures:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>The iconic Galle Lighthouse, standing since 1939</li>
          <li>Dutch Reformed Church with its historic gravestones</li>
          <li>Maritime Museum housed in a Dutch warehouse</li>
          <li>All Saints Church with its stunning Gothic architecture</li>
          <li>The Old Dutch Hospital, now a shopping and dining complex</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Cultural Experience</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Modern Galle offers a rich cultural experience:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Vibrant art galleries and craft boutiques</li>
          <li>Traditional gem and jewelry workshops</li>
          <li>Local cuisine blending Dutch and Sri Lankan flavors</li>
          <li>Annual Galle Literary Festival</li>
          <li>Traditional lace-making demonstrations</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Natural Beauty</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The city's coastal setting provides:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Stunning sunset views from the ramparts</li>
          <li>Beautiful beaches along the coast</li>
          <li>Historic harbor with fishing boats</li>
          <li>Marine wildlife watching opportunities</li>
          <li>Tropical gardens within the fort</li>
        </ul>
      </section>
    </div>
  );
}; 