import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [state, setstate] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        'gmail',
        'personal_website',
        e.target,
        'user_nynB33zq4ey93dG3z7jge'
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const onSubmit = (e) => {
    if (state.message !== '' && state.email !== '' && state.subject !== '') {
      sendEmail(e);
    } else {
      alert('All fields are required.');
    }
  };

  const onChange = (e) =>
    setstate({ ...state, [e.target.name]: e.target.value });
  return (
    <section className='contact'>
      <header>
        <nav id='navbar'>
          <div className='container'>
            <h1 className='logo'>
              <Link to='/'>HBT</Link>
            </h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link className='current' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id='contact-form' className='py-3'>
        <div className='container'>
          <h1 className='l-heading'>
            <span className='text-primary'>Contact </span>Us
          </h1>
          <p>Please fill out the form below to contact us</p>
          <form onSubmit={onSubmit}>
            {/* <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                id='name'
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div> */}
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                name='subject'
                id='subject'
                onChange={(e) => {
                  onChange(e);
                }}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>message</label>
              <textarea
                type='text'
                name='message'
                id='message'
                onChange={(e) => {
                  onChange(e);
                }}
              ></textarea>
            </div>

            <button
              type='submit'
              className='btn'
              //   onClick={() => console.log(state)}
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id='contact-info'>
        <div className='container'>
          <div className='box'>
            <i className='fas fa-hotel fa-3x'></i>
            <h3>Location</h3>
            <p>1001 Sw 17th Ln, Gainesville FL</p>
          </div>

          <div className='box'>
            <i className='fas fa-phone fa-3x'></i>
            <h3>Phone Number</h3>
            <p>(617) 555-5555</p>
          </div>
          <div className='box'>
            <i className='fas fa-envelope fa-3x'></i>
            <h3>Email Address</h3>
            <p>frontdesk@hotelbt.co</p>
          </div>
        </div>
      </section>

      <footer id='main-footer'>
        <p>Hotel BT &copy; 2019, All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Contact;
