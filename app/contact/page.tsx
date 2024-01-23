import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen pt-24 flex justify-center items-center text-primary'>
      <div>
        <p>All the fields marked with * are required.</p>
        <form>
          <div className='flex flex-col mb-5 mt-3'>
          <label htmlFor="fname">First name*</label>
          <input className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2' type="text" id="fname" placeholder='Enter your first name' required/>
          </div>
          <div className='flex flex-col mb-5'>
          <label htmlFor="lname">Last name*</label>
          <input className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2' type="text" id="lname" placeholder='Enter your last name' required/>
          </div>
          <div className='flex flex-col mb-5'>
          <label htmlFor="subject">Subject*</label>
          <input className='lg:w-96 md:w-84 h-12 rounded-xl p-4 mt-2' type="text" id="subject" placeholder='Enter your subject name' required/>
          </div>
          <div className='flex flex-col mb-5'>
          <label htmlFor="messgae">Message*</label>
          <textarea className='lg:w-96 md:w-84 h-32 rounded-xl p-4 mt-2' id="message" placeholder='Enter your message'/>
          </div>
          <div className='flex justify-center items-center w-24 h-8 rounded-xl bg-primary text-accent'>
           <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact