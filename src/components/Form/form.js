import React, { useRef } from 'react';
import './form.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import Twitter from '../../assets/twitter.png';
import Instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Form = () => {
    // const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', Form.current, 'YOUR_PUBLIC_KEY')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return (<section id= "fork">
        <h1 className="contactpagetitle">Contact Us!</h1>
        <span className="contactdesc">Please fill out the from below.</span>
 
<form className='contactform' ref={Form}  onSubmit={sendEmail}  >
    <input type ="text" className="name" placeholder='Your Name' />
    <input type ="email" className="email" placeholder="Your Email" />
    <textarea name ="message" rows="5"  className="msg" placeholder="Your Message" /></form>
    <button type='submit' value='Send' className="submitbtn">Submit</button>
    <div className="links">
        <a href="https://www.facebook.com/TEDxEvents/"><img src={FacebookIcon} alt="" className="link" /></a>
        <a href="https://www.instagram.com/tedxiitroorkee/"><img src={Instagram}alt="" className="link" /></a>
        <a href="https://twitter.com/TEDx?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img src={Twitter} alt="" className="link" /></a></div>
    </section>
        );
}
export default Form;