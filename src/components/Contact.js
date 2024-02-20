import React, { useRef } from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8j6230k', 'template_0ue34vl', form.current, {
        publicKey: 'CombelowSDiQtBNKF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return   <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text  */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work<br/>together</h2>
          </div>
        </motion.div>
        {/* form  */}
        <motion.form 
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount: 0.3}}
        ref={form} onSubmit={sendEmail}
        className='flex-1 border rounded-2xl p-6 pb-16 lg:pb-20 gap-y-6 flex flex-col items-start'>
          <input name="from_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Name'/>
          <input name="from_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Your Email'/>
          <textarea name="message" className='lg:mb-10 mb-8 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none' 
           id='' cols={30} rows={6} placeholder='Your Message'/>
          <input type="submit" value="Send Message" className="btn btn-lg hover:cursor-pointer" />
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
