import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className='home'>
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
                  <span className='text-primary'>Enjoy</span> your Stay
                </h1>
                <p className='lead'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aspernatur porro deserunt, laudantium consequatur omnis
                  reprehenderit.
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
        <div className='info-content'>
          <h2>
            <span className='text-primary'>The History</span> of Our Hotel
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quisquam
            doloremque quidem nesciunt, cupiditate deleniti eveniet temporibus
            dolorum porro, necessitatibus sit consectetur, repellendus nisi
            consequatur. In, repudiandae saepe, necessitatibus enim distinctio
            quod tenetur aliquid illo rem molestias provident, voluptatem
            veniam!
          </p>
          <Link to='/about' className='btn btn-light'>
            Read More
          </Link>
        </div>
      </section>

      <section id='features'>
        <div className='box bg-light'>
          <i className='fas fa-hotel fa-3x'></i>
          <h3>Great Location</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            consectetur?
          </p>
        </div>

        <div className='box bg-primary'>
          <i className='fas fa-utensils fa-3x'></i>
          <h3>Free Meals</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            consectetur?
          </p>
        </div>
        <div className='box bg-light'>
          <i className='fas fa-dumbbell fa-3x'></i>
          <h3>Fitness Room</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            consectetur?
          </p>
        </div>
      </section>

      <div className='clr'></div>

      <footer id='main-footer'>
        <p>Hotel BT &copy; 2019, All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default Home;
