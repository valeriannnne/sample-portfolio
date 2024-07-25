import React from 'react';
import Image from '../assets/avatar.png';
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
// import links
import {Link} from 'react-scroll';

const Home = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='text-[42px] font-bold leading-[0.8] lg:text-[72px]'>
            Lianne <span>Serafica</span>
          </motion.h1>
          <motion.div 
          variants={fadeIn('up',0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='mr-4 text-white'>An aspiring </span>
            <TypeAnimation sequence={
              [
              'Software QA Tester', 2000,
              'Web Developer', 2000,
              'UI/UX Designer', 2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
          </motion.div>
          <motion.p 
          variants={fadeIn('up',0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
            I am a graduating student from Polytechnic University of the Philippines. I am currently taking up Bachelor of Science in Computer Science.
          </motion.p>
          <motion.div 
          variants={fadeIn('up',0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link  to="contact" smooth={true} spy={true} ><button className='btn btn-lg'>Contact Me</button></Link> 
            <a href='#/view-projects' className='text-gradient btn-link'>My Portfolio</a>
          </motion.div>
          {/* Socials */}
          <motion.div 
          variants={fadeIn('up',0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='https://www.facebook.com/valeriannnne' target='_blank'><FaFacebook/></a>
            <a href='https://github.com/valeriannnne' target='_blank'><FaGithub/></a>
            <a href='https://www.linkedin.com/in/lvls/' target='_blank'><FaLinkedin/></a>
          </motion.div>
        </div>
      
        {/* My Picture */}
        <motion.div 
        variants={fadeIn('down',0.5)}
        initial='hidden'
        whileInView={'show'}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-[482px] w-96'>
          <img src={Image}/>
        </motion.div>
      </div>

    </div>
  </section>;
};

export default Home;
