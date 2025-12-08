import React, { useState } from 'react';
import Title from '../Title/Title';
import emailjs from '@emailjs/browser';
import { theme } from '../../Constants/theme';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_gik7kq8',
        'template_lbrf8ar',
        e.target,
        'bk5cfGodh72W2QUdV'
      )
      .then(
        (result) => {
          console.log('Email Sent:', result.text);
          setSent(true);
          setLoading(false);
          setFormData({ name: '', mobile: '', address: '', message: '' });
        },
        (error) => {
          console.log('Email Error:', error.text);
          setLoading(false);
        }
      );
  }

  function whatsapp() {
    const { name, mobile, address, message } = formData;
    if (!name || !mobile || !address || !message) {
      alert('Please fill all fields before sending.');
      return;
    }
    let what = `https://wa.me/919355633993?text=Name: ${name}%0aMobile: ${mobile}%0aAddress: ${address}%0aMessage: ${message}`;
    window.open(what, '_blank');
  }

  return (
    <section id='contactus' className={`min-h-screen h-full w-full ${theme.colors.primaryBg} my-1 p-5 flex flex-col rounded-lg`}>
      <Title min={'Keep in Touch...'} max={'Contact Us'} />

      <div className='h-full w-full flex justify-evenly items-center flex-wrap gap-5'>

        {/* Left Section */}
        <div className='w-full flex flex-col gap-5 justify-center md:w-1/3'>
          <div className={`text-lg font-semibold ${theme.colors.accentGold}`}>
            <span className='block text-base font-semibold'>Address:</span>
            <span className='block text-sm font-thin '>24A/Block P/Vihar EX, Gurugram, Palam Vihar (Gurgaon), Palam Vihar, Gurgaon- 122017, Haryana</span>
          </div>
          <div className={`text-lg font-semibold ${theme.colors.accentGold}`}>
            <span className='block text-base font-semibold'>Email:</span>
            <span className='block text-sm font-thin '>rutbaeventpr@gmail.com</span>
          </div>
          <div className={`text-lg font-semibold ${theme.colors.accentGold}`}>
            <span className='block text-base font-semibold'>Phone:</span>
            <span className='block text-sm font-thin '> +91 9355633993</span>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={sendEmail} className='w-full md:w-2/5 bg-white shadow-lg rounded-lg p-6 flex flex-col space-y-4'>
          <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#653746a9]' />
          <input type='text' name='address' placeholder='Address' value={formData.address} onChange={handleChange} required className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#653746a9]' />
          <input type='number' name='mobile' placeholder='Contact Number' value={formData.mobile} onChange={handleChange} required className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#653746a9]' />
          <textarea name='message' placeholder='Write your message' value={formData.message} onChange={handleChange} required className='p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#653746a9] h-28' />

          {/* Buttons */}
          <div className='flex space-x-4'>
            <input type='reset' value='Reset' onClick={() => setFormData({ name: '', mobile: '', address: '', message: '' })} className='px-4 py-2 bg-gray-300 rounded-md cursor-pointer hover:bg-gray-400' />
            <button type='submit' className='px-4 py-2 bg-[#653746a9] text-white rounded-md cursor-pointer hover:bg-[#653746a9]'>
              {loading ? 'Sending...' : 'Send Email'}
            </button>
            <button type='button' onClick={whatsapp} className='px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700'>
              WhatsApp
            </button>
          </div>

          {/* Confirmation Message */}
          {sent && <p className='text-green-600 text-base mt-2'>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
