import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import '../styles/contactUs.scss'; // Import the regular SCSS file
import SocialIcons from '../pages/SocialIcons';

const ContactForm = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});

  // validate form submission
  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);

    if (!formData.get('user_name')) {
      errors.user_name = 'Name is required';
    }
    if (!formData.get('user_email')) {
      errors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.get('user_email'))) {
      errors.user_email = 'Email is invalid';
    }
    if (!formData.get('subject')) {
      errors.subject = 'Subject is required';
    }
    if (!formData.get('message')) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // send mail handler
  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all fields correctly.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className='contact'>
      <SocialIcons />

      <h2 className='contactFormTitle'>Contact Us</h2>
      <div className='contactFormContainer' data-aos='fade-up'>
        <form ref={form} onSubmit={sendEmail}>
          <div className='formGroup'>
            <label htmlFor='user_name'>Name</label>
            <input type='text' name='user_name' id='user_name' required />
            {formErrors.user_name && (
              <span className='error visible'>{formErrors.user_name}</span>
            )}
          </div>
          <div className='formGroup'>
            <label htmlFor='user_email'>Email</label>
            <input type='email' name='user_email' id='user_email' required />
            {formErrors.user_email && (
              <span className='error visible'>{formErrors.user_email}</span>
            )}
          </div>
          <div className='formGroup'>
            <label htmlFor='subject'>Subject</label>
            <input type='text' name='subject' id='subject' required />
            {formErrors.subject && (
              <span className='error visible'>{formErrors.subject}</span>
            )}
          </div>
          <div className='formGroup'>
            <label htmlFor='message'>Message</label>
            <textarea name='message' id='message' required></textarea>
            {formErrors.message && (
              <span className='error visible'>{formErrors.message}</span>
            )}
          </div>
          <button type='submit' className='submitButton'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
