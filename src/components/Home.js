import React from 'react';
import Image from '../assets/avatar.png';
import {FaGithub, FaYoutube, FaDribble} from 'react-icons/fa';
import {TypeAnimation, motion} from 'react-type-animation';
import {fadeIn} from '../variants';

const Home = () => {
  return <div className='section' id='home'>
    <div className='container mx-auto'>
      {/* text */}
      <div>
        <h1>
          Lianne <span>Serafica</span>
        </h1>
        <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
          <span className='mr-4 text-white'>Hi! I am an aspiring </span>
          <TypeAnimation sequence={
            ['Web Developer', 2000,
            'UI/UX Designer', 2000,]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
        </div>
        <p>
          I am a Third Year student from Polytechnic University of the Philippines. I am currently taking up Bachelor of Science in Computer Science.
        </p>
        <div>
          <button className='btn btn-lg'>Contact Me</button>
          <a href="#" className='text-gradient btn-link'>My Portfolio</a>
        </div>
      </div>
      {/* image */}
      <div>
        <img src={Image}/>
      </div>

    </div>
  </div>;
};

export default Home;
