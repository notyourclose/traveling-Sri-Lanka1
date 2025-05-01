import React from 'react';

export const HortonPlainsDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Natural Wonder</h3>
        <p className="text-gray-700 leading-relaxed">
          Horton Plains National Park, situated at an elevation of over 2,000 meters, is a protected area in the central highlands 
          of Sri Lanka. This unique ecosystem consists of montane grassland and cloud forest, making it one of the world's best 
          examples of tundra and cloud forest biodiversity.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Biodiversity</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The park is home to an extraordinary variety of flora and fauna:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Endemic bird species like the Sri Lanka Whistling Thrush</li>
          <li>Rare mammals including Sambar deer and Purple-faced langur</li>
          <li>Unique highland butterflies and amphibians</li>
          <li>Diverse native plant species adapted to the high altitude</li>
          <li>Several species of orchids and other rare plants</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Famous Attractions</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Key highlights of Horton Plains include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>World's End - A stunning escarpment with an 880m drop</li>
          <li>Baker's Falls - A picturesque 20m high waterfall</li>
          <li>Mini World's End - Another spectacular viewpoint</li>
          <li>Chimney Pool - A natural pool with unique ecosystem</li>
          <li>Ancient stone bridges and archaeological sites</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Visitor Information</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Essential information for visitors:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Best visited early morning for clearest views</li>
          <li>9km circular hiking trail covering main attractions</li>
          <li>Cool climate requiring warm clothing</li>
          <li>Rich photography opportunities, especially at sunrise</li>
          <li>Strict conservation rules to protect the ecosystem</li>
        </ul>
      </section>
    </div>
  );
}; 