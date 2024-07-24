import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Projects from '../Projects';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';

const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className='flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>My Featured<br/>Projects</h2>
            <p className='max-w-xm mb-16 '>
            These are the works I made while learning under the program Computer Science and practicing Software Development. 
            </p>
            <Link to="/view-projects"><button className='btn btn-sm'>View all projects</button></Link>
            <Routes>
                <Route path="/view-projects" element={<Projects />} />
            </Routes>
            
          </div>
          {/* work1 */}
          <div className='lg:mt-8 group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlays */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src='https://snipboard.io/zhc8E9.jpg' alt="" className='group-hover:scale-125 transition-all duration-500 z-50' />
            {/* subtitle */}
            <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-40 group-hover:bottom-36 transition-all duration-500 z-50'>
              <span className='text-accent line-clamp-1 font-bold'>Algorithm Implementation and Front-end web development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-700 z-50'>
              <span className='text-3xl line-clamp-1 hover:underline'><a target='_blank' href='https://github.com/dprfran/baybayin-fe'>(2024) B/Y Baybayin Romanization Tool</a></span>
            </div>
            <div className='absolute -bottom-full left-12 min-[1200px]:group-hover:bottom-10 min-[960px]:group-hover:bottom-6 min-[768px]:group-hover:bottom-12 group-hover:bottom-5 transition-all duration-700 z-50 pr-4'>
              <span className='text-xl line-clamp-3'>Group thesis software for romanizing Baybayin characters from images into English. Used YOLOv8, Tesseract, and Flask</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-10'>
          {/* work2 */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlays */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src='https://snipboard.io/ojPSmD.jpg' alt="" className='group-hover:scale-125 transition-all duration-500 z-50' />
            {/* subtitle */}
            <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-40 group-hover:bottom-36 transition-all duration-500 z-50'>
              <span className='text-accent line-clamp-1 font-bold'>UI/UX Design and Front-end web development</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-700 z-50'>
              <span className='text-3xl line-clamp-1 hover:underline'><a target='_blank' href='https://github.com/QueencessMay/sentiment-analyzer'>(2023) Sentiment Analyzer</a></span>
            </div>
            <div className='absolute -bottom-full left-12 min-[1200px]:group-hover:bottom-10 min-[960px]:group-hover:bottom-6 min-[768px]:group-hover:bottom-12 group-hover:bottom-5 transition-all duration-700 z-50 pr-4'>
              <span className='text-xl line-clamp-3'>Created a mockup & interface to identify positive & negative comments for a group finals. Used Django and Figma</span>
            </div>
          </div>
          {/* work3 */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlays */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src='https://snipboard.io/Tncal8.jpg' alt="" className='group-hover:scale-125 transition-all duration-500 z-50' />
            {/* subtitle */}
            <div className='absolute -bottom-full left-12 min-[959px]:group-hover:bottom-40 group-hover:bottom-36 transition-all duration-500 z-50'>
              <span className='text-accent line-clamp-1 font-bold'>Mobile Application</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-28 transition-all duration-700 z-50'>
              <span className='text-3xl line-clamp-1 hover:underline'><a target='_blank' href='https://github.com/valeriannnne/Quattuor_Bilin_DSC'>(2022) Bilin</a></span>
            </div>
            <div className='absolute -bottom-full left-12 min-[1200px]:group-hover:bottom-10 min-[960px]:group-hover:bottom-6 min-[768px]:group-hover:bottom-12 group-hover:bottom-5 transition-all duration-700 z-50 pr-4'>
              <span className='text-xl line-clamp-3'>
                <span>Service app connecting Tagapaglingkod with Mamamayan for services. Used Java and Android Studio. </span>
                <a target="_blank" href='https://www.youtube.com/watch?v=jRDQDq1WtQE' className='underline'>See Demo</a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>    
  </section>;
};

export default Work;
