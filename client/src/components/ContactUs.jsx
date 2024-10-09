import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

import '../styles/contactUs.scss'; // Import the regular SCSS file
import SocialIcons from '../pages/SocialIcons';
import { FaEnvelope, FaHeading, FaPaperPlane, FaUser } from 'react-icons/fa6';
import { FaCommentAlt } from 'react-icons/fa';

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
      <div className='contact__content'>
        <div className='contact__info'>
          <h2>Get in Touch</h2>
          <p>
            We'd love to hear from you! Whether you have a question about our
            services, want to partner with us, or just want to say hello, don't
            hesitate to reach out.
          </p>
          <p>
            Our team is always ready to assist you and provide the information
            you need.
          </p>
        </div>
        <div className='contact__form-container' data-aos='fade-up'>
          <h2 className='contact__form-title'>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form__row'>
              <div className='form__group'>
                <label htmlFor='user_name'>
                  <FaUser />
                  Name
                </label>
                <input type='text' name='user_name' id='user_name' required />
                {formErrors.user_name && (
                  <span className='error visible'>{formErrors.user_name}</span>
                )}
              </div>
              <div className='form__group'>
                <label htmlFor='user_email'>
                  <FaEnvelope />
                  Email
                </label>
                <input
                  type='email'
                  name='user_email'
                  id='user_email'
                  required
                />
                {formErrors.user_email && (
                  <span className='error visible'>{formErrors.user_email}</span>
                )}
              </div>
            </div>
            <div className='form__group'>
              <label htmlFor='subject'>
                <FaHeading />
                Subject
              </label>
              <input type='text' name='subject' id='subject' required />
              {formErrors.subject && (
                <span className='error visible'>{formErrors.subject}</span>
              )}
            </div>
            <div className='form__group'>
              <label htmlFor='message'>
                <FaCommentAlt />
                Message
              </label>
              <textarea name='message' id='message' required></textarea>
              {formErrors.message && (
                <span className='error visible'>{formErrors.message}</span>
              )}
            </div>
            <button type='submit' className='submit-button'>
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
