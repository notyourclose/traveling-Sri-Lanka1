import React from 'react';
import { CalendarIcon, SunIcon, PartyPopperIcon, ClockIcon } from 'lucide-react';
import './Itinerary.css';

export const Itinerary: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-[#0d47a1]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Plan Your Sri Lankan Adventure</h2>
        <p className="text-gray-100 text-center mb-12">Create your perfect itinerary and discover the best times to visit each destination</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Build Your Itinerary Form */}
          <div className="bg-[#0d47a1] p-6 rounded-lg shadow-md login-box">
            <h3 className="text-xl font-bold mb-6 text-white">Build Your Itinerary</h3>
            <form>
              <div className="user-box">
                <input
                  type="text"
                  required
                  name="location"
                />
                <label>Location</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  required
                  name="date"
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                />
                <label>Date</label>
              </div>
              <div className="user-box">
                <input
                  type="text"
                  required
                  name="activity"
                />
                <label>Activity</label>
              </div>
              <div className="text-center">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="add-itinerary-btn"
                >
                  + ADD TO ITINERARY
                </button>
              </div>
            </form>
          </div>

          {/* Travel Tips */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-white">Travel Tips</h3>
            
            {/* Best Time to Visit */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <SunIcon className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Best Time to Visit</h4>
                  <p className="text-blue-800">
                    December to March is ideal for the west and south coasts and the Cultural Triangle. April to September is perfect for the east coast.
                  </p>
                </div>
              </div>
            </div>

            {/* Festival Seasons */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <PartyPopperIcon className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Festival Seasons</h4>
                  <p className="text-amber-800">
                    Experience Vesak in May, Esala Perahera in July/August, and Thai Pongal in January.
                  </p>
                </div>
              </div>
            </div>

            {/* Duration Tips */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <ClockIcon className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Duration Tips</h4>
                  <p className="text-green-800">
                    Recommended stay: 10-14 days to explore major attractions. Allow 2-3 days for each major region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 