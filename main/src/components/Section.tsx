import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from './Button';
import { Modal } from './Modal';
import { SigiriyaDetails } from './SigiriyaDetails';
import { BadullaDetails } from './BadullaDetails';
import { HortonPlainsDetails } from './HortonPlainsDetails';
import { GalleDetails } from './GalleDetails';

interface SectionProps {
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  imgSrc,
  icon,
  reverse = false
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      x: reverse ? 100 : -100,
      scale: 0.6
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.8,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      x: reverse ? -100 : 100,
      scale: 0.6
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        mass: 0.8,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const getModalContent = () => {
    if (title.includes("Sigiriya")) {
      return {
        component: <SigiriyaDetails />,
        title: "Sigiriya: The Ancient Lion Rock Fortress"
      };
    } else if (title.includes("Badulla")) {
      return {
        component: <BadullaDetails />,
        title: "Journey Through Badulla: The Heart of Uva Province"
      };
    } else if (title.includes("Horton Plains")) {
      return {
        component: <HortonPlainsDetails />,
        title: "Horton Plains: A Natural Paradise"
      };
    } else if (title.includes("Galle")) {
      return {
        component: <GalleDetails />,
        title: "Explore Historic Galle: Where Colonial Legacy Meets Coastal Beauty"
      };
    }
    return null;
  };

  const modalContent = getModalContent();

  return (
    <>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className={`py-24 px-4 w-full ${reverse ? 'bg-gray-50' : 'bg-white'}`}
      >
        <div className={`container mx-auto flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div 
            variants={imageVariants} 
            className="md:w-1/2 transform-gpu"
          >
            <img
              src={imgSrc}
              alt={title}
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </motion.div>
          <motion.div 
            variants={itemVariants} 
            className="md:w-1/2 space-y-6 transform-gpu"
          >
            <div className="flex items-center gap-4">
              {icon}
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
            <Button onClick={handleLearnMore}>
              Learn More
              <svg
                className="w-4 h-4 ml-2 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={modalContent.title}
        >
          {modalContent.component}
        </Modal>
      )}
    </>
  );
};