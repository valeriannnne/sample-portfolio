import React from 'react';
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
// import links
import {Link} from 'react-scroll';

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
              Software QA Tester
            </h3>
            <p className='mb-6'>
            I am a graduating Computer Science student from Polytechnic University of the Philippines Manila. I have basic knowledge in Web Development. As a diligent and hardworking student, I believe that I can achieve the tasks that will be assigned to me.
            <br></br><br></br>
            I have experience in manual testing and am currently practicing my exploratory testing skills on uTest. During my last internship, I created test cases, bug reports, and conducted various types of manual testing.

            </p>
          </div>       
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={13} duration={3}/> : null} {/*  not showing*/}
                <CountUp start={0} end={23} duration={3}/>
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
            <Link  to="contact" smooth={true} spy={true} ><button className='btn btn-lg'>Contact Me</button></Link> 
            <a href='#/view-projects' className='text-gradient btn-link'>My Portfolio</a>
          </div>   
        </motion.div>

      </div>
    </div>
    </section>;
};

export default About;
