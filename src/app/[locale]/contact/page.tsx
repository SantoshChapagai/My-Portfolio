"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const t = useTranslations("contact");
 
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
        <p>{t("info")}</p>
        <form onSubmit={handleSendEmail}>
          <div className='flex flex-col mb-5 mt-3'>
            <label htmlFor="name">{t("name")}</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2 text-black'
              type="text"
              id="name"
              placeholder= {t("name_placeholder")}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="email">{t("email")}</label>
            <input
              className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2 text-black'
              type="text"
              id="email"
              placeholder={t("email_placeholder")}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-col mb-5'>
            <label htmlFor="message">{t("message")}</label>
            <textarea
              className='lg:w-96 md:w-84 h-32 rounded-xl p-4 mt-2 text-black'
              id="message"
              placeholder= {t("message_placeholder")}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex justify-center items-center w-24 h-8 rounded-xl bg-primary text-primary-foreground'>
            <button type='submit'>{t("button")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
