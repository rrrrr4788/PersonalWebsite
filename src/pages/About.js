import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import profile from '../img/headshot2.png';
import codeicon from '../img/codeicon.png';
import java from '../img/Java.png';
import cpp from '../img/C++.png';
import python from '../img/Python.png';
import js from '../img/JS.png';
import web from '../img/web.png';
import matlab from '../img/matlab.png';
import node from '../img/node.png';
import express from '../img/express.png';
import css from '../img/css.png';
import html from '../img/html.png';
import database from '../img/database.png';
import firebase from '../img/firebase.png';
import mongo from '../img/mongo.png';
import react from '../img/react.png';
import unity from '../img/unity.png';
import sql from '../img/sql.png';
import android from '../img/android.png';
import kivy from '../img/kivy.png';

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
								<Link to='/projects'>Projects</Link>
							</li>
							<li>
								<Link to='/resume'>Resume</Link>
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
							<span className='text-primary'>About </span>Haozhe
							Zhang
						</h1>
						<p>
							<span style={{ fontWeight: 'bold' }}>
								Haozhe Zhang
							</span>{' '}
							(Pronounced{' '}
							<span style={{ fontWeight: 'bold' }}>
								How-ja Jahng
							</span>
							) was born in Huizhou, Guangdong, China, in 1998. In
							2016, he matriculated at the University of Florida
							in Chemical Engineering. One year later, he switched
							to Computer Information and Science Engineering at
							the Herbert Wertheim College of Engineering. Over
							three years, Haozhe has grown up to be a skillful
							programmer, with interests and experience in various
							fields of Computer Science, including website
							development, backend development, mobile
							development, and Virtual Reality development.
						</p>
					</div>
					<div className='info-right'>
						<img src={profile} alt='profile' />
					</div>

					<div className='info-below'>
						<p>
							A strong academic background and ability to always
							learn new technology have been catalysts for
							reaching higher goals. Since his Junior year, he
							frequently participated in extra-curricular
							activities to strengthen and expand programming
							capabilities. In 2019, UF Open Source Club appointed
							him as the External Relations Chair in light of the
							active and continuous contribution to Marston vs.
							West, one of its club projects. Additionally, Haozhe
							has participated in three Hackathons, during which
							he and his teammates built and demonstrated multiple
							eye-catching projects.
						</p>
					</div>
					<div className='info-below'>
						<p>
							In addition to excellence in Computer Science, his
							ambition drives him to pursue accomplishments in
							other fields. In order to seek opportunities to
							combine his skills in both programming and
							management, he enrolled in the Master of Science of
							Management program at UF's Warrington College of
							Business in 2019. This opportunity served as a start
							to gain knowledge beyond the scope of engineers and
							will further facilitate him to be a manager with a
							good sense in business.
						</p>
					</div>
					<div className='info-below'>
						<p>
							Currently, Haozhe is applying to a graduate school
							in order to continue his study in Computer Science.
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
						<div className='unit'>
							<img src={express} alt='Express'></img>
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
						<div className='unit'>
							<img src={kivy} alt='Kivy'></img>
						</div>
					</div>
				</div>
			</section>
			<div className='clr'></div>
			<Footer />
		</section>
	);
};

export default About;
