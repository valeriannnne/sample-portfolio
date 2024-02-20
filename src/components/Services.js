import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';

//services
const services = [
  {
    name:"UI/UX Designer",
    description:"Used UIzard for creating wireframes and Figma for mockups while working as an intern at Wear Forward.",
    link: 'Learn More'
  },
  {
    name:"Front-End Developer",
    description:"Used React JS, NextJS, Bootstrap, and Tailwind in building websites. Has experienced in basic database management using MySQL, Strapi, XAMPP, and Firebase",
    link: 'Learn More'
  },
  {
    name:"QA Engineer",
    description:"Reported bugs and documented issues through Jira. Has experience in beta testing, integration testing, and regression testing",
    link: 'Learn More'
  },
]

const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text and image */}
        <motion.div 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 mb-16 max-w-[455px]'>
            I had two internships that strengthened my abilities and knowledge in coding, designing, and testing websites.
          </h3>
          <button className='btn btn-sm'>See my Work</button>
        </motion.div>
        {/* services */}
        <motion.div
        variants={fadeIn('right', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        >
          {/* services list */}
          <div className='flex-1'>
            {
              services.map((service, index) => {
                // destructure data
                const {name, description, link} = service
                return(
                  <div className='flex flex-row border-b border-white/20 h-[146px] mb-[38px]' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'> 
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight/></a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
