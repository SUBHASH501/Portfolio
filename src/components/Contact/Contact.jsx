import React from 'react'
import './Contact.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ContactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png'
import linked from './../../assets/li.png'
import instagram from './../../assets/in.png'


function Contact() {
  return (
    <div className='section-container'>
    <Header heading="Get in Touch" details="Interested to collaborate? Feel free to drop me an email"></Header>

    
    
    {/*Form Section*/}
    <div className="contact-form-container">
    <form action="https://formspree.io/f/xaygnyvy"  method="POST" className="contact-form">
    {/*Email id Input*/}
      <input type="email" placeholder='Your email ID' name='email' className='input-box email-input'/>
       {/*Email body*/}
       <textarea type="text" placeholder='Your message' name="message" className='input-box body-input'  cols="30" rows="10"></textarea>
        {/*Submit button*/}
        <button type='submit' className='contact-btn'>Send Email</button>
    </form>
    </div>


   {/*Social Icons */}
   <div className="social-icons-container">
    <a href="https://github.com/subhash501" className="social-icon">
    <img src={github} alt="social" />
    </a>
    <a href="https://github.com/subhash501" className="social-icon">
    <img src={linked} alt="social" />
    </a>
    <a href="https://github.com/subhash501" className="social-icon">
    <img src={instagram} alt="social" />
    </a>
   </div>

    <div className="vector-frame">
    <img src={ContactVector} alt="contact" srcset="" />
    </div>
    
    <Footer phrase="Read more " link="about me" toaddress="/about"></Footer>
    </div>

    

    
  )
}

export default Contact