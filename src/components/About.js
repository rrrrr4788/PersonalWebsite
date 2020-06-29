import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../img/headshot.png';
import codeicon from '../img/codeicon.png';
import java from '../img/Java.png';
import cpp from '../img/C++.png';
import python from '../img/Python.png';
import js from '../img/JS.png';
import web from '../img/web.png';
import matlab from '../img/matlab.png';
import node from '../img/node.png';
import css from '../img/css.png';
import html from '../img/html.png';
import database from '../img/database.png';
import firebase from '../img/firebase.png';
import mongo from '../img/mongo.png';
import react from '../img/react.png';
import unity from '../img/unity.png';
import sql from '../img/sql.png';
import android from '../img/android.png';
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
              <span className='text-primary'>About </span>Haozhe Zhang
            </h1>
            <p>
              <span style={{ fontWeight: 'bold' }}>Haozhe Zhang</span>{' '}
              (Pronounced{' '}
              <span style={{ fontWeight: 'bold' }}>How-ja Jahng</span>) was born
              in Huizhou, Guangdong, China, in the year of 1998. In 2016, he
              matriculated at University of Florida as a Chemical Engineering
              student. One year later, he switched to Computer Information and
              Science Engineering at Herbert Wertheim College of Engineering.
              Over three years, Haozhe has grown up to be a skillful programmer,
              with interests and experience in various fields of Computer
              Science, including website development, backend developement,
              mobile development, Virtual Realtity development, etc.
            </p>
          </div>
          <div className='info-right'>
            <img src={profile} alt='profile' />
          </div>

          <div className='info-below'>
            <p>
              A strong academice background and ability to always learn new
              technology have been a catalyst for reaching higher goals. Since
              the Junior year, he frequently participated in extra-curricular
              activities to strengthen and expand programming capabilities. In
              2019, UF Open Source Club appointed him as the External Relations
              Chair in light of the active and continuous contribution to
              Marston vs. West, one of its club projects. Additionally, Haozhe
              has participated in three Hackathons, during which he and his
              teammates built and demoed multiple eye-catching projects.
            </p>
            <p>
              Despite having an excellence in Computer Science, his ambition
              drives him to chase accomplishments in different fields. In order
              to seek chances to combine his skills in both programming and
              management, he was enrolled in the Master of Science of Management
              program at UF Warrington College of Business in 2019. This
              opportunity served as a start to gain knowledge out of the scope
              of engineers and will further facilitate him to be a manager with
              a good sense in business.
            </p>
            <p>
              Currently, Haozhe is looking to apply for a graduate school to
              continue the study in Computer Science.
            </p>
          </div>
        </div>
      </section>

      <div className='clr'></div>

      <section id='Skillset' className='py-3'>
        <div className='container'>
          <h2 className='l-heading'>Skillset</h2>
          <div className='Skillset bg-primary'>
            <img src={codeicon} alt='Programming Language Icon' />
            {/* <p>Python, C++, Java, JavaScript</p> */}
            <div className='unit'>
              <img src={python} alt='Python'></img>
            </div>
            <div className='unit'>
              <img src={js} alt='JavaScript'></img>
            </div>
            <div className='unit'>
              <img src={cpp} alt='C++'></img>
            </div>
            <div className='unit'>
              <img src={java} alt='Java'></img>
            </div>
            <div className='unit'>
              <img src={matlab} alt='Matlab'></img>
            </div>
            <div className='unit'>
              <img src={unity} alt='Unity'></img>
            </div>
          </div>
          <div className='Skillset bg-primary'>
            <img src={web} alt='Web Dev' />
            <div className='unit'>
              <img src={html} alt='HTML'></img>
            </div>
            <div className='unit'>
              <img src={css} alt='CSS'></img>
            </div>
            <div className='unit'>
              <img src={react} alt='React'></img>
            </div>
            <div className='unit'>
              <img src={node} alt='Node'></img>
            </div>
          </div>
        </div>
      </section>
      <br></br>
      <section id='Skillset-2' className='py-3'>
        <div className='container'>
          <div className='Skillset bg-primary'>
            <img src={database} alt='Database' />
            <div className='unit'>
              <img src={firebase} alt='Firebase'></img>
            </div>
            <div className='unit'>
              <img src={mongo} alt='MongoDB'></img>
            </div>
            <div className='unit'>
              <img src={sql} alt='SQL'></img>
            </div>
          </div>
          <div className='Skillset bg-primary'>
            <img src={android} alt='Android' />
            <div className='unit'>
              <img src={react} alt='React Native'></img>
            </div>
          </div>
        </div>
      </section>
      <div className='clr'></div>
      <br></br>
      <section id='experiences' className='py-3'>
        <div className='container'>
          <h2 className='l-heading'>Experiences</h2>
          <div className='experiences bg-primary'>
            <img src={person1} alt='Samantha' />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus necessitatibus corporis, ipsam veritatis itaque quae ab
              adipisci veniam quo nihil consectetur. Consectetur, eius!
              Accusantium deleniti sapiente eveniet earum ex iste rem eum, hic,
              optio laudantium cupiditate alias fuga impedit maxime!
            </p>
          </div>
          <div className='experiences bg-primary'>
            <img src={person2} alt='Jane' />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus necessitatibus corporis, ipsam veritatis itaque quae ab
              adipisci veniam quo nihil consectetur. Consectetur, eius!
              Accusantium deleniti sapiente eveniet earum ex iste rem eum, hic,
              optio laudantium cupiditate alias fuga impedimaxime!
            </p>
          </div>
        </div>
      </section>
      <br></br>
      <footer id='main-footer'>
        <p>Haozhe Zhang &copy; 2020, All Rights Reserved</p>
      </footer>
    </section>
  );
};

export default About;
