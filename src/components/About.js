import React from 'react';
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });
  console.log(inView)

  return <section className='section' id='about'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0'>
        {/* img */}
        <div>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount: 0.3}}
            className='bg-about bg-contain bg-no-repeat lg:w-[640px] h-[640px] mix-blend-lighten bg-top'>
          </motion.div>
        </div>
        {/* txt */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount: 0.3}}
        >
          <div className='flex-1'>
            <h2 className='h2 text-accent'>About Me</h2>
            <h3 className='h3 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            </h3>
            <p className='mb-6'>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>       
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={13} duration={3}/>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/> Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={15} duration={3}/>k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/> Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={13} duration={3}/>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br/> Experience
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact Me</button>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </div>   
        </motion.div>

      </div>
    </div>
    </section>;
};

export default About;
