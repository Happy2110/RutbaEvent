import React from 'react'
import './Contact.css'
import Title from '../Title/Title'
function Contact() {
  function whatsapp(){
    let name= document.getElementById('name').value;
    let mobile= document.getElementById('mobile').value;
    let address= document.getElementById('address').value;
    let message= document.getElementById('message').value;
    let what= "https://wa.me/917408135801?text="+"Name:"+name +"%0a"
    +"Moblie :"+mobile+"%0a"+
    "Address:"+address +"%0a"+
    "message:"+message;
    window.open(what).focus();
    document.getElementById("reset").click();
  }
  return (
    <section id='contactus' className='contactus'>
      <Title min={"Keep in Touch..."} max={"Contact Us"}/>
      <div style={{display:'flex', gap:10, justifyContent:'space-evenly', alignItems:'center'}}>
      <div className="contactus-left-part">
        <div className="contact-address">
          <span>
            
          </span>
          plot 32-33 sharda university knollege park 
          </div>
        <div className="contact-email">abc.gmail.com</div>
        <div className="contact-phonenumber">+91-94949494949  </div>
      </div>
      <div className="contact-form">
        <input type="text" id='name' placeholder='Your Name' />
        <input type="text" id='address' placeholder='Address' />
        <input type='number' id='mobile' placeholder='contact Number'/>
        <textarea type="text" id='message' placeholder='write your message' />
        <input type='reset' id="reset" value='reset'/>
        <input type='submit' onClick={whatsapp} value='submit'/>
      </div>
      </div>
    </section>
  )
}

export default Contact
