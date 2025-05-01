import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CloudSun, Droplets, Wind, Thermometer } from 'lucide-react';
import './Weather.css';

export const Weather: React.FC = () => {
  const [weather, setWeather] = useState({
    temperature: 28,
    humidity: 75,
    windSpeed: 12,
    condition: 'Partly Cloudy'
  });

  const cities = [
    { name: 'Colombo', temp: 28, condition: 'Partly Cloudy' },
    { name: 'Kandy', temp: 25, condition: 'Sunny' },
    { name: 'Galle', temp: 27, condition: 'Humid' },
    { name: 'Nuwara Eliya', temp: 20, condition: 'Misty' }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Sri Lanka Weather</h2>
          <p className="text-blue-100">Plan your trip with current weather conditions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="login-box bg-white/10 backdrop-blur-lg rounded-lg p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <CloudSun className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold mb-4 text-center">{city.temp}°C</div>
              <div className="text-center mb-6">{city.condition}</div>
              
              <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Droplets className="w-4 h-4" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <div className="text-lg font-semibold">75%</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Wind className="w-4 h-4" />
                    <span className="text-sm">Wind</span>
                  </div>
                  <div className="text-lg font-semibold">12 km/h</div>
                </div>
              </div>
              <div className="text-center mt-6">
                <a href="#" className="weather-update-btn">Update</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-blue-100 text-sm"
        >
          <p>Weather data is updated every 3 hours</p>
        </motion.div>
      </div>
    </section>
  );
}; 