"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
 
 
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

const handleSendEmail = (e:any)=>{
  e.preventDefault();

  const params = {
    from_name: formData.name,
    from_email: formData.email,
    to_name: "santosh",
    message: formData.message
  }

  const serviceId= process.env.NEXT_PUBLIC_SERVICEID;
  const templateId= process.env.NEXT_PUBLIC_TEMPLATEID
  const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY

  if (!serviceId || !templateId || !publicKey) {
    return;
  }

  emailjs.send(serviceId, templateId, params, publicKey)
  .then(()=>{
    alert("Thanks for reaching out, will get back to you very soon")
    setFormData({
      name:"",
      email:"",
      message:""
    })
  })
  .catch(()=>{
   alert("There is problem sending your email, try sending email at santoshchapagai100@gmail.com")
  })
}

  return (
    <div className='min-h-screen pt-32 overflow-hidden flex justify-center items-center text-primary'>
      <div>
        <p>All the fields marked with * are required.</p>
        <form onSubmit={handleSendEmail}>
          <div className='flex flex-col mb-5 mt-3'>
            <label htmlFor="name">Full Name*</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2 text-black'
              type="text"
              id="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="email">Email*</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2 text-black'
              type="text"
              id="email"
              placeholder='Enter your emmail address'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="message">Message*</label>
            <textarea
              className='lg:w-96 md:w-84 h-32 rounded-xl p-4 mt-2 text-black'
              id="message"
              placeholder='Enter your message'
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex justify-center items-center w-24 h-8 rounded-xl bg-primary text-primary-foreground'>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
