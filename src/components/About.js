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
              Front-End Developer 
            </h3>
            <p className='mb-6'>
            I am a third year student from Polytechnic University of the Philippines Manila. I am currently enrolled in Bachelor of Science in Computer Science. I have basic knowledge in Web Development. As a diligent and hardworking student, I believe that I can achieve the tasks that will be assigned to me.
            <br></br><br></br>
            I am aware of the basics needed for Web Development such as using HTML, CSS, PHP, JavaScript, SQL, and other frameworks like ReactJS, NextJS, Bootstrap CSS, and Tailwind CSS. I also have background in using Android Studio, Figma, and  UIzard. 

            </p>
          </div>       
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={22} duration={3}/>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years <br/> Old
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={10} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={15} duration={3}/>+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Past <br/> Projects
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={1} duration={3}/>
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Year of <br/> Experience
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
