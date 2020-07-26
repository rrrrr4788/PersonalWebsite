import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

const Home = () => {
  return (
    <section className='home'>
      <MobileView>
        <div className='mobile-header'>
          <p>
            Oops! Looks like accessing this site from mobile is unsupported!
          </p>
        </div>
      </MobileView>
      <BrowserView>
        <header>
          <nav id='navbar'>
            <div className='container'>
              <h1 className='logo'>
                <Link to='/'>Haozhe Zhang</Link>
              </h1>
              <ul>
                <li>
                  <Link className='current' to='/'>
                    Home
                  </Link>
                </li>

                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/projects'>Projects</Link>
                </li>
                <li>
                  <Link to='/resume'>Resume</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div id='showcase'>
            <div className='dark-overlay'>
              <div className='container'>
                <div className='showcase-content'>
                  <h1>
                    <span className='text-primary'>Haozhe Zhang's</span>{' '}
                    Personal Space
                  </h1>
                  <p className='lead'>
                    An enthusiastic CISE & MSM student who is currently enrolled
                    at the University of Florida.
                  </p>
                  <Link className='btn' to='/about'>
                    About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id='home-info' className='bg-dark'>
          <div className='info-img'></div>
          <div className='info-placeholder'></div>
          <div className='info-content'>
            <h2>
              A Brief
              <span className='text-primary'> Intro</span>
            </h2>
            <p>
              Hello, welcome to my personal website. This is Haozhe Zhang, a
              University of Florida student, currently majoring in Computer
              Science Engineering at Herbert Wertheim College of Engineering,
              minoring in Chemistry, and pursuing Master of Science in
              Management at Warrington College of Business.
            </p>
            <Link to='/about' className='btn btn-light'>
              Read More
            </Link>
          </div>
        </section>

        <section id='features'>
          <div className='box bg-light'>
            <i className='fas fa-hotel fa-3x'></i>
            <h3>Eagerness to Learn</h3>
            <p>
              Over the past three years, with great enthusiasm, I grew up to be
              a skillful and experienced programmer through committing countless
              hours to learning extra-curricular technologies as well as
              applying them in practice, even sometimes on the spot.
            </p>
          </div>

          <div className='box bg-primary'>
            <i className='fas fa-utensils fa-3x'></i>
            <h3>Leadership</h3>
            <p>
              In the senior year, UF Open Source appointed me as the External
              Relations Chair. Apart from mediating the relations between the
              club and other organizations, I also participated in the
              management of the club via coordinating club activities.
            </p>
          </div>
          <div className='box bg-light'>
            <i className='fas fa-dumbbell fa-3x'></i>
            <h3>Creativity</h3>
            <p>
              Creativity is another key that fosters me to excel as a
              programmer. With solid understanding of skills learned, whenever
              needed, I always come up with ideas that excite teammates.
            </p>
            <br></br>
          </div>
        </section>

        <div className='clr'></div>

        <footer id='main-footer'>
          <p>Haozhe Zhang &copy; 2020, All Rights Reserved</p>
        </footer>
      </BrowserView>
    </section>
  );
};

export default Home;
