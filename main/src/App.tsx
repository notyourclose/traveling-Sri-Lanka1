import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { Map } from './components/Map';
import { Gallery } from './components/Gallery';
import { Itinerary } from './components/Itinerary';
import { Weather } from './components/Weather';
import { PhoneIcon, MailIcon, MapIcon, UtensilsIcon, TreePineIcon, LandmarkIcon, SunriseIcon } from 'lucide-react';

export function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Gallery />
      <Section 
        title="Explore Sigiriya Rock Fortress" 
        description="Rising dramatically from the central plains, the enigmatic rocky outcrop of Sigiriya is perhaps Sri Lanka's single most dramatic sight. Near-vertical walls soar to a flat-topped summit that contains the ruins of an ancient civilization, thought to be once the epicenter of the short-lived kingdom of Kassapa. A UNESCO World Heritage site, it's also known as Lion Rock for the giant clawed feet that still stand guard halfway up the rock." 
        imgSrc="/sigiriya-sunrise.jpg" 
        icon={<LandmarkIcon className="w-8 h-8 text-amber-500" />} 
        reverse={false} 
      />
      <Section 
        title="Journey Through Badulla" 
        description="Nestled in the mountains of Uva Province, Badulla is a scenic wonderland connected by one of the world's most beautiful rail journeys. The iconic train ride through tea plantations and misty mountains offers breathtaking views of cascading waterfalls and verdant hillsides. This region is famous for its aromatic Uva tea, historic Muthiyangana Raja Maha Vihara temple, and the spectacular Dunhinda Falls." 
        imgSrc="/Temp_167a9419-5390-4733-9a68-4b2c5ff7f365.png" 
        icon={<UtensilsIcon className="w-8 h-8 text-amber-500" />} 
        reverse={true} 
      />
      <Section 
        title="Discover Horton Plains" 
        description="Horton Plains National Park, a protected area in the central highlands, is home to diverse wildlife including sambar deer, purple-faced langurs, and numerous endemic bird species. This unique ecosystem, situated on a plateau, features the famous World's End precipice and Baker's Falls. The park's misty grasslands and cloud forests create a mystical atmosphere perfect for nature enthusiasts and wildlife photographers." 
        imgSrc="/SAMBAR-DEER-IN-HORTON-PLAINS-NATIONAL-PARK-copy.jpg" 
        icon={<TreePineIcon className="w-8 h-8 text-amber-500" />} 
        reverse={false} 
      />
      <Section 
        title="Explore Historic Galle" 
        description="Galle, a jewel of the south coast, is famous for its Dutch colonial architecture and iconic lighthouse. The UNESCO World Heritage-listed Galle Fort, built in the 16th century by the Portuguese and extensively fortified by the Dutch, is a living time capsule. Wander through its charming streets lined with boutique shops, cafes, and historic buildings, or watch the sunset from the historic ramparts overlooking the Indian Ocean." 
        imgSrc="/Galle-1024x768.jpg" 
        icon={<SunriseIcon className="w-8 h-8 text-amber-500" />} 
        reverse={true} 
      />
      <Map />
      <Itinerary />
      <Weather />
      <Footer />
    </div>
  );
}