import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Profile from '../img/profile_trimmed.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EmailSuccess from '../components/EmailSuccess';

// Basic imports

const Home = ({ send_success }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (send_success) {
			setTimeout(() => {
				dispatch({ type: 'SUCCESS_OVER' });
			}, 3000);
		}
	}, [send_success]);
	console.log(send_success);
	return (
		<section className='home'>
			<header>
				<Navbar target='Home' />
				<div id='showcase'>
					<div className='dark-overlay'>
						<div className='container'>
							{send_success ? <EmailSuccess /> : <div />}
							<div className='showcase-content'>
								<h1>
									<span className='text-primary'>
										Haozhe Zhang's
									</span>{' '}
									Personal Space
								</h1>
								<p className='lead'>
									An enthusiastic MSM and ex-CS student who is
									currently enrolled at the University of
									Florida.
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
				<div className='info-placeholder'></div>
				<div className='info-content'>
					<h2>
						A Brief
						<span className='text-primary'> Intro</span>
					</h2>
					<p>
						Hello, welcome to my personal website. This is Haozhe
						Zhang, a University of Florida student, currently
						pursuing Master of Science in Management at Warrington
						College of Business with a Bachelor's degree in Computer
						Science Engineering at Herbert Wertheim College of
						Engineering.
					</p>
					<Link to='/about' className='btn btn-light'>
						Read More
					</Link>
				</div>
				<div className='info-placeholder'></div>
				<div className='info-img'>
					<img src={Profile} alt='Profile Pic' />
				</div>
			</section>
			<section id='features'>
				<div className='flex-container'>
					<div className='box bg-light'>
						<i className='fas fa-hotel fa-3x'></i>
						<h3>Eagerness to Learn</h3>
						<p>
							Over the past three years, with great enthusiasm, I
							grew up to be a skillful and experienced programmer
							through committing countless hours to learning
							extra-curricular technologies as well as applying
							them in practice, even sometimes on the spot.
						</p>
					</div>

					<div className='box bg-primary'>
						<i className='fas fa-utensils fa-3x'></i>
						<h3>Leadership</h3>
						<p>
							In the senior year, UF Open Source appointed me as
							the External Relations Chair. Apart from mediating
							the relations between the club and other
							organizations, I also participated in the management
							of the club via coordinating club activities.
						</p>
					</div>
					<div className='box bg-light'>
						<i className='fas fa-dumbbell fa-3x'></i>
						<h3>Creativity</h3>
						<p>
							Creativity is another key that fosters me to excel
							as a programmer. With solid understanding of skills
							learned, whenever needed, I always come up with
							ideas that excite teammates.
						</p>
					</div>
				</div>
			</section>
			<div className='clr'></div>
			<Footer />
		</section>
	);
};

const mapStateToProps = (state) => ({
	send_success: state.email.send_success,
});

export default connect(mapStateToProps, null)(Home);
