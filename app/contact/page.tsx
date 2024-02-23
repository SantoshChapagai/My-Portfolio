"use client"
import React, { useState } from 'react';

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
      setFormData({
        fname: '',
        lname: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className='h-screen overflow-hidden flex justify-center items-center text-primary'>
      <div>
        <p>All the fields marked with * are required.</p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-5 mt-3'>
            <label htmlFor="fname">First name*</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2'
              type="text"
              id="fname"
              placeholder='Enter your first name'
              value={formData.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="lname">Last name*</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2'
              type="text"
              id="lname"
              placeholder='Enter your last name'
              value={formData.lname}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="subject">Subject*</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2'
              type="text"
              id="subject"
              placeholder='Enter your subject name'
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="message">Message*</label>
            <textarea
              className='lg:w-96 md:w-84 h-32 rounded-xl p-4 mt-2'
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
        {submit && (<p>Message Sent successfully!</p>)}
      </div>
    </div>
  );
};

export default Contact;
