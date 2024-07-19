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
      imgsrc: 'https://snipboard.io/k8aU5W.jpg',
      area: "UI/UX Design and Full-stack web development",
      link: 'https://www.figma.com/proto/nouPmYzOsboWtA6N2SFX4t/soft-eng%3A-mindcheck?page-id=0%3A1&node-id=1-2&starting-point-node-id=9%3A39&scaling=min-zoom&content-scaling=fixed&t=C0QPwjeN5q2jN9VJ-1',
      projtitle: "(2023) MindCheck",
      description:  ( 
        <> 
          <span> DSM-5-TR Self-Assessment Website for a group final project. Used Firebase, ReactJS, and Tailwind. </span>
          <a target="_blank" href='https://github.com/kabi02/softeng-mindcheck' className='underline'>See Code</a>
        </>
      ),
    },
    {
      imgsrc: 'https://snipboard.io/zywBVM.jpg',
      area: "Full-stack web development",
      link: 'https://webdev-proj-bc572.web.app/',
      projtitle: "(2023) TravelMates",
      description:  ( 
        <> 
          <span>This responsive blog site allows commenting for a midterm project. Used Firebase, HTML, and CSS. </span>
          <a target="_blank" href='https://webdev-proj-bc572.web.app/' className='underline'>See Live Site</a>
        </>
      ),
    },
    {
      imgsrc: 'https://snipboard.io/HWCzb3.jpg',
      area: "UI/UX Design",
      link: 'https://www.figma.com/proto/BBUsnxqN61oy5efQi0aMfo/midterm-prototype?page-id=0%3A1&node-id=267-5&viewport=-5150%2C528%2C0.31&t=oQmz3nlP3a3TiZ33-1&scaling=min-zoom&content-scaling=fixed',
      projtitle: "(2023) Laptop Landing Page",
      description: "Designed a mockup for a sample landing page for a laboratory exercise. Used Figma",
    },
    {
      imgsrc: 'https://snipboard.io/xgjVSz.jpg',
      area: "Front-end web development",
      link: 'https://github.com/valeriannnne/Laboratory-Activity-2---Final',
      projtitle: "(2023) Dark and Light Theme",
      description: "Developed a simple website that can have a dark and light theme in a laboratory activity. Used HTML and CSS.",
    },    
    {
      imgsrc: 'https://snipboard.io/JWk9NP.jpg',
      area: "Front-end web development",
      link: 'https://github.com/valeriannnne/Lab-2-Sample-Jollibee-Menu',
      projtitle: "(2023) Sample Jollibee Menu",
      description: "Developed a redesigned Jollibee menu layout website in a group lab exercise. Used HTML, and CSS.",
    },
    {
      imgsrc: 'https://snipboard.io/swd0Q7.jpg',
      area: "UI/UX Design and Front-end web development",
      link: 'https://www.figma.com/proto/Y1WTp9qqx07jITtRc3dOc9/WebDev-LA1-Prototype?page-id=0%3A1&node-id=10-3&t=EJQq2stIeJju0qiK-1',
      projtitle: "(2023) Anime Character Details Page",
      description:  ( 
        <> 
          <span>Created a static mockup website in a group lab exercise. Used Figma, HTML, and CSS. </span>
          <a target="_blank" href='https://github.com/valeriannnne/Lab-1' className='underline'>See Code</a>
        </>
      ),
    },
    {
      imgsrc: 'https://snipboard.io/6GhCxF.jpg',
      area: "UI/UX Design and Front-end web development",
      link: 'https://www.figma.com/proto/r94SnnMHtedGMxXMXKsd0K/DPWH?page-id=0%3A1&node-id=4-17&starting-point-node-id=1%3A8&scaling=min-zoom&content-scaling=fixed&t=EYQoOw0KCzlRuKl9-1',
      projtitle: "(2023) DPWH Homepage",
      description: "Developed a mockup and prototype redesign of the DPWH homepage as a final group project in my 3rd year. Used Figma",
    },
    {
      imgsrc: 'https://snipboard.io/6gO78N.jpg',
      area: "UI/UX Design",
      link: 'https://www.figma.com/proto/OJbXYPXh2v7pM5Ex40ItPM/APPDEV-GRP4-team-library?page-id=0%3A1&node-id=469-83&starting-point-node-id=469%3A83&t=9RheUlDQ4QWy24oz-1',
      projtitle: "(2023) Wander Pets",
      description:  ( 
        <> 
          <span>Designed a website with mockup and prototype to aid stray pets. Used Figma, HTML, and CSS. </span>
          <a target="_blank" href='https://github.com/valeriannnne/WanderPets-demo' className='underline'>See Code</a>
        </>
      ),
    },
    {
      imgsrc: 'https://snipboard.io/J6OQ3B.jpg',
      area: "Front-end web development",
      link: 'https://www.freecodecamp.org/certification/fcc68ae198b-b124-4103-978b-4fac11d0bbf1/responsive-web-design',
      projtitle: "(2022) Personal Portfolio",
      description: "Final web project I did in freecodecamp course. HTML and CSS",
    },
    {
      imgsrc: 'https://snipboard.io/V0KIl4.jpg',
      area: "Front-end web development",
      link: 'https://www.freecodecamp.org/certification/fcc68ae198b-b124-4103-978b-4fac11d0bbf1/responsive-web-design',
      projtitle: "(2022) Product Landing Page",
      description: "Second responsive web project I did in freecodecamp course. HTML and CSS",
    },
    {
      imgsrc: 'https://snipboard.io/NFCibv.jpg',
      area: "Front-end web development",
      link: 'https://www.freecodecamp.org/certification/fcc68ae198b-b124-4103-978b-4fac11d0bbf1/responsive-web-design',
      projtitle: "(2022) Survey Form",
      description: "First web project I did in completing freecodecamp course. HTML and CSS",
    },
    {
      imgsrc: 'https://snipboard.io/Tncal8.jpg',
      area: "Mobile Application",
      link: 'https://github.com/valeriannnne/Quattuor_Bilin_DSC',
      projtitle: "2022 Bilin",
      description: ( 
        <> 
          <span>Service app connecting Tagapaglingkod with Mamamayan for services. Used Java and Android Studio. </span>
          <a target="_blank" href='https://www.youtube.com/watch?v=jRDQDq1WtQE' className='underline'>See Demo</a>
        </>
      ),
    },
    {
      imgsrc: 'https://snipboard.io/26hI0D.jpg',
      area: "Object Oriented Programming",
      link: 'https://drive.google.com/drive/folders/1NbVIjbhxlWdD1ZnW9rzgYQWx__8YtgrO?usp=sharing',
      projtitle: "(2021-2022) Java Programming",
      description: "Developed simple Java applications with and without GUI, connected some to a PHPAdmin database using XAMPP.",
    },
    {
      imgsrc: 'https://snipboard.io/rv8Cu4.jpg',
      area: "Algorithm Implementation",
      link: 'https://drive.google.com/drive/folders/1x0KVyDPSywg_bTV3EpYISnL4gee4Qk_C?usp=sharing',
      projtitle: "(2020-2021) C Programming",
      description: "Activities and Final Projects for C Programming, Including Individual and Group Projects",
    },
    {
      imgsrc: 'https://snipboard.io/J6OQ3B.jpg',
      area: "",
      link: '',
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
            <div
              className='flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 '
            >
              {/* work list */}
              {details.map((detail, index) => {
                const { imgsrc, area, link, projtitle, description } = detail;
                return (
                  <motion.div
                  variants={fadeIn('left', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.3 }} key={index} className='group relative overflow-hidden border-2 border-white/50 rounded-xl min-[1200px]:h-80'>
                    {/* overlays */}
                    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                    {/* img */}
                    <img src={imgsrc} alt="" className='group-hover:scale-125 transition-all duration-500 z-50' />
                    {/* subtitle */}
                    <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-40 group-hover:bottom-36 transition-all duration-500 z-50'>
                      <span className='text-accent font-bold'>{area}</span>
                    </div>
                    {/* title */}
                    <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-700 z-50'>
                      <span className='text-3xl line-clamp-1'><a target='_blank' href={link}>{projtitle}</a></span>
                    </div>
                    <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-10 min-[768px]:group-hover:bottom-20 group-hover:bottom-5 transition-all duration-700 z-50 pr-4'>
                      <span className='text-xl line-clamp-3'>{description}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}