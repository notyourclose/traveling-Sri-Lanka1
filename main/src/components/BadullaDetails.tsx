import React from 'react';

export const BadullaDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Historical Background</h3>
        <p className="text-gray-700 leading-relaxed">
          Badulla, the capital of Uva Province, has a rich history dating back to the ancient Sri Lankan kingdoms. Located in the 
          lower central hills, it served as a crucial administrative center during various periods of Sri Lankan history. The city's 
          strategic location made it an important hub along ancient trade routes.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Natural Beauty</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The region is blessed with stunning natural features and attractions:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Picturesque tea plantations stretching across rolling hills</li>
          <li>The magnificent Dunhinda Falls, known as the "Bridal Veil"</li>
          <li>Scenic mountain ranges offering panoramic views</li>
          <li>Diverse climate zones supporting unique flora and fauna</li>
          <li>Beautiful valleys and streams creating perfect hiking trails</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Cultural Heritage</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Badulla's cultural significance is evident in its historical and religious sites:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>The ancient Muthiyangana Raja Maha Vihara temple</li>
          <li>Traditional Uva-style architecture in old buildings</li>
          <li>Historic colonial-era buildings and infrastructure</li>
          <li>Rich traditions of Uva folk music and dance</li>
          <li>Local crafts and traditional agricultural practices</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-bold text-orange-500 mb-3">Famous Railway Journey</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          The railway journey to Badulla is considered one of the world's most scenic train rides:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Spectacular views through misty mountains and tea estates</li>
          <li>The famous Nine Arch Bridge near Ella</li>
          <li>Historic railway stations with colonial architecture</li>
          <li>Dramatic elevation changes and engineering marvels</li>
          <li>Opportunities to interact with local travelers and tea pluckers</li>
        </ul>
      </section>
    </div>
  );
}; 