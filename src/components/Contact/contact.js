// Contact Me, Zeinelabdin Salih, ID:301446462, 02/02/2024  */


import React, {useRef} from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vx8vep9', 'template_nwciwcp', form.current, 'C9q7Ibwoj6B7PsD8AeiFj')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Kindly complete the form below to explore potential work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail} >
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className="msg" name='Massage' rows="5" placeholder='Your Message' ></textarea>
                    <button type='submit' value='send' className='submitBtn'>Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;