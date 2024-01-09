import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen pt-24 flex justify-center items-center'>
      <div>
        <form>
          <div className='flex flex-col mb-5'>
          <label className='mb-2' htmlFor="fname">First name</label>
          <input className='w-96 h-12 rounded-xl p-4' type="text" id="fname" placeholder='Enter your first name' required/>
          </div>
          <div className='flex flex-col mb-5'>
          <label htmlFor="lname">Last name</label>
          <input className='w-96 h-12 rounded-xl p-4' type="text" id="lname" placeholder='Enter your last name' required/>
          </div>
          <div className='flex flex-col mb-5'>
          <label htmlFor="subject">Subject</label>
          <input className='w-96 h-12 rounded-xl p-4' type="text" id="subject" placeholder='Enter your subject name' required/>
          </div>
          <div className='flex flex-col mb-5'>
          <label htmlFor="messgae">Message</label>
          <textarea className='w-96 h-32 rounded-xl p-4' id="message" placeholder='Enter your message'/>
          </div>
          <div className='flex justify-center items-center w-24 h-8 rounded-xl'>
           <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact