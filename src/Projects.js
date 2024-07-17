import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
// components
import Header from './components/Header';

export default function Projects() {
  useEffect(() => {
    document.title = `Serafica's Portfolio`;
  }, []);

  const details = [
    {
      imgsrc: 'https://snipboard.io/NFCibv.jpg',
      area: "Front-end web development",
      projtitle: "(2022) Product Landing Page",
      description: "Second responsive web project I did in freecodecamp course. HTML and CSS",
    },
    {
      imgsrc: 'https://snipboard.io/NFCibv.jpg',
      area: "Front-end web development",
      projtitle: "(2022) Product Landing Page",
      description: "Second responsive web project I did in freecodecamp course. HTML and CSS",
    },
    {
      imgsrc: 'https://snipboard.io/V0KIl4.jpg',
      area: "",
      projtitle: "",
      description: "",
    },
    {
      imgsrc: 'https://snipboard.io/J6OQ3B.jpg',
      area: "",
      projtitle: "",
      description: "",
    },
    {
      imgsrc: 'https://snipboard.io/J6OQ3B.jpg',
      area: "",
      projtitle: "",
      description: "",
    },
  ];

  return (
    <div className='bg-site bg-cover bg-no-repeat h-screen overflow-y-auto'>
      <Header />
      <section className='section h-full overflow-y-auto' id='work' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        
        <div className='container mx-auto h-full'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />Work</h2>
              <p className='max-w-xm mb-16'>
                These are the works I made while learning under the program Computer Science and practicing Web Development.
              </p>
            </div>
          </motion.div>

          <div className='flex flex-col lg:flex-row gap-x-10 h-full '>
            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 '
            >
              {/* work list */}
              {details.map((detail, index) => {
                const { imgsrc, area, projtitle, description } = detail;
                return (
                  <div key={index} className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-80'>
                    {/* overlays */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    {/* img */}
                    <img src={imgsrc} alt="" className='w-full h-full object-cover group-hover:scale-125 transition-all duration-500 z-50' />
                    {/* subtitle */}
                    <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-40 group-hover:bottom-36 transition-all duration-500 z-50'>
                      <span className='text-accent font-bold'>{area}</span>
                    </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-700 z-50'>
                      <span className='text-3xl line-clamp-1'>{projtitle}</span>
                    </div>
                    <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-10 min-[768px]:group-hover:bottom-20 group-hover:bottom-5 transition-all duration-700 z-50 pr-4'>
                      <span className='text-xl line-clamp-3'>{description}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        
      </section>
    </div>
  );
}