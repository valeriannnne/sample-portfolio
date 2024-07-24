import React, { useRef, useState } from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8j6230k', 'template_0ue34vl', form.current, {
        publicKey: 'CombelowSDiQtBNKF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMsg({ success: true, msg: "Message sent successfully!" })
        },
        (error) => {
          console.log('FAILED...', error.text);
          setMsg({ success: false, msg: error.text })
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
          <input required name="from_name" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your Name'/>
          <input required name="from_email" className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' placeholder='Your Email'/>
          <textarea required name="message" className='lg:mb-10 mb-8 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none' id='' cols={30} rows={6} placeholder='Your Message'/>
           {/* Message after hitting send button */}
            {msg && (
              <div className="text-left font-bold -py3 -mt-8 mb-8">
                  {msg?.success ? (
                      <motion.span 
                      variants={fadeIn('up', 0.3)}
                      initial='hidden'
                      whileInView={msg?.success}
                      viewport={{once:false, amount: 0.3}}
                      className="text-gradient my-auto transition ease-in-out delay-150 duration-300 -translate-y-1 scale-110">{msg?.msg}</motion.span>
                  ) : (
                      <motion.span 
                      variants={fadeIn('up', 0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{once:false, amount: 0.3}}
                      className="text-gradient my-auto">{msg?.msg}</motion.span>
                  )}
              </div>
            )}                 
         <input type="submit" value="Send Message" className="btn btn-lg hover:cursor-pointer" />
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
