import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
//images
import Image1 from '../assets/portfolio-img1.png'
import Image2 from '../assets/portfolio-img2.png'
import Image3 from '../assets/portfolio-img3.png'

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
            <h2 className='h2 leading-tight text-accent'>My Latest <br/>Work</h2>
            <p className='max-w-xm mb-16'>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div>
          {/* work1 */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlays */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src={Image1} alt="" className='group-hover:scale-125 transition-all duration-500 z-50'/>
            {/* subtitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-accent font-bold'>UX/UI Design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl'>Project Title</span>
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
            <img src={Image2} alt="" className='group-hover:scale-125 transition-all duration-500 z-50'/>
            {/* subtitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-accent font-bold'>UX/UI Design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl'>Project Title</span>
            </div>
          </div>
          {/* work3 */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlays */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img src={Image3} alt="" className='group-hover:scale-125 transition-all duration-500 z-50'/>
            {/* subtitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
              <span className='text-accent font-bold'>UX/UI Design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl'>Project Title</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
    
  </section>;
};

export default Work;
