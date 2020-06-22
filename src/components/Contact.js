import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className='contact'>
      <header>
        <nav id='navbar'>
          <div class='container'>
            <h1 class='logo'>
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
                <Link class='current' to='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id='contact-form' class='py-3'>
        <div class='container'>
          <h1 class='l-heading'>
            <span class='text-primary'>Contact </span>Us
          </h1>
          <p>Please fill out the form below to contact us</p>
          <form>
            <div class='form-group'>
              <label for='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div class='form-group'>
              <label for='email'>Email</label>
              <input type='email' name='email' id='email' />
            </div>
            <div class='form-group'>
              <label for='message'>message</label>
              <textarea type='text' name='message' id='message'></textarea>
            </div>

            <button type='submit' class='btn'>
              Submit
            </button>
          </form>
        </div>
      </section>

      <section id='contact-info'>
        <div class='container'>
          <div class='box'>
            <i class='fas fa-hotel fa-3x'></i>
            <h3>Location</h3>
            <p>1001 Sw 17th Ln, Gainesville FL</p>
          </div>

          <div class='box'>
            <i class='fas fa-phone fa-3x'></i>
            <h3>Phone Number</h3>
            <p>(617) 555-5555</p>
          </div>
          <div class='box'>
            <i class='fas fa-envelope fa-3x'></i>
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
