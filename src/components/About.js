import React from 'react';
import { Link } from 'react-router-dom';
import hotel from '../img/photo-2.jpg';
import person1 from '../img/person-1.jpg';
import person2 from '../img/person-2.jpg';

const About = () => {
  return (
    <section className='about'>
      <header>
        <nav id='navbar'>
          <div className='container'>
            <h1 className='logo'>
              <Link to='/'>Haozhe Zhang</Link>
            </h1>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link className='current' to='/about'>
                  About
                </Link>
              </li>
              <li>
                <Link to='contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section id='about-info' className='bg-light py-3'>
        <div className='container'>
          <div className='info-left'>
            <h1 className='l-heading'>
              <span className='text-primary'>About </span>Hotel BT
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto necessitatibus, mollitia quam voluptate ab fuga dolores
              sunt quae? Debitis eveniet voluptates architecto quisquam hic
              adipisci aperiam cum temporibus doloremque deserunt!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              dignissimos ipsam quod suscipit nesciunt possimus sunt, ipsum
              nostrum veritatis maiores.
            </p>
          </div>
          <div className='info-right'>
            <img src={hotel} alt='hotel' />
          </div>
        </div>
      </section>

      <div className='clr'></div>

      <section id='testimonials' className='py-3'>
        <div className='container'>
          <h2 className='l-heading'>What Our Guests Say</h2>
          <div className='testimonial bg-primary'>
            <img src={person1} alt='Samantha' />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus necessitatibus corporis, ipsam veritatis itaque quae ab
              adipisci veniam quo nihil consectetur. Consectetur, eius!
              Accusantium deleniti sapiente eveniet earum ex iste rem eum, hic,
              optio laudantium cupiditate alias fuga impedit maxime!
            </p>
          </div>
          <div className='testimonial bg-primary'>
            <img src={person2} alt='Jane' />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus necessitatibus corporis, ipsam veritatis itaque quae ab
              adipisci veniam quo nihil consectetur. Consectetur, eius!
              Accusantium deleniti sapiente eveniet earum ex iste rem eum, hic,
              optio laudantium cupiditate alias fuga impedit maxime!
            </p>
          </div>
        </div>
      </section>

      <footer id='main-footer'>
        <p>Hotel BT &copy; 2019, All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default About;
