import React, { memo } from 'react';
import { FacebookIcon, TwitterIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export const Footer = () => {
  const SocialIcon = ({
    href,
    children
  }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#03e9f4] hover:shadow-[0_0_5px_#03e9f4] transition-all duration-300 p-2 rounded-full border border-[#03e9f4] hover:bg-[#03e9f4] hover:text-white">
      {children}
    </a>;
  return <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-[#03e9f4]">
              Traveling In Sri Lanka
            </h3>
            <p className="text-gray-300 mb-6">
              Discover the beauty and culture of Sri Lanka with our guided tours
              and travel experiences. From pristine beaches to ancient temples,
              we'll help you create unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://x.com/vikingpubg3427?s=21">
                <TwitterIcon size={24} />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com/share/1AFHXdp63v/?mibextid=wwXIfr">
                <FacebookIcon size={24} />
              </SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@1_notyourclose?is_from_webapp=1&sender_device=pc">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </SocialIcon>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#03e9f4]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Destinations', 'Tours', 'Experiences', 'Gallery', 'Contact'].map(item => <li key={item}>
                  <a href="#" className="text-[#03e9f4] hover:shadow-[0_0_5px_#03e9f4] tracking-wider transition-all duration-300">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#03e9f4]">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <PhoneIcon size={20} className="text-[#03e9f4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-[#03e9f4]">+94 78 168 2485</p>
              </div>
              <div className="flex items-start">
                <MailIcon size={20} className="text-[#03e9f4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-[#03e9f4]">kavishkadileepa8@gmail.com</p>
              </div>
              <div className="flex items-start">
                <MapPinIcon size={20} className="text-[#03e9f4] mr-3 mt-1 flex-shrink-0" />
                <p className="text-[#03e9f4]">Colombo, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-[#03e9f4]">
          <p>
            &copy; {new Date().getFullYear()} Traveling In Sri Lanka. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};