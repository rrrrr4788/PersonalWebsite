import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

// basic imports

import FB from '../img/FB.png';
import GH from '../img/GH.png';
import LI from '../img/LI.png';
import Footer from '../components/Footer';

// components and image assets

import emailjs from 'emailjs-com';
import userId from '../config/id';
// import { sendEmail } from '../actions/sendEmail';

// email parameters. suspending moving the email sending module to actions.
// FIXME: should find a way to make sure the redirection runs when the function is moved to actions.

const Contact = ({ email, subject, message, sending, event, sendEmail }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (sending) {
			sendEmail(event);
		}
	}, [sending, sendEmail, event]);

	return (
		<section className='contact'>
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
								<Link to='/about'>About</Link>
							</li>
							<li>
								<Link to='/projects'>Projects</Link>
							</li>
							<li>
								<Link to='/resume'>Resume</Link>
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
						<span className='text-primary'>Contact </span>Me
					</h1>
					<p>Please fill out the form below to contact me</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							// preventDefault is used to prevent the form from causing the entire page to re-render. it clears the default behaviors of the form element.
							e.persist();
							if (message && email && subject) {
								dispatch({ type: 'SEND_EMAIL', payload: e });
							} else {
								alert('All fields are required.');
							}
						}}
					>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								id='email'
								onChange={(e) => {
									e.persist();
									dispatch({
										type: 'CHANGE_STATE',
										payload: e,
									});
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
									e.persist();
									dispatch({
										type: 'CHANGE_STATE',
										payload: e,
									});
								}}
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='message'>Message</label>
							<textarea
								type='text'
								name='message'
								id='message'
								onChange={(e) => {
									e.persist();
									dispatch({
										type: 'CHANGE_STATE',
										payload: e,
									});
								}}
							></textarea>
						</div>

						<button type='submit' className='btn' id='submit-btn'>
							Submit
						</button>
					</form>
				</div>
			</section>

			<section id='contact-info'>
				<div className='container'>
					<div className='contactbox'>
						<i className='fas fa-phone fa-3x'></i>
						<h3>Email Address</h3>
						<p>zhz19980514@ufl.edu</p>
						<div style={{ flexDirection: 'row' }}>
							<a href='https://www.facebook.com/profile.php?id=100013402022270&ref=bookmarks'>
								<img src={FB} alt='FB'></img>
							</a>
							<a href='https://github.com/rrrrr4788'>
								<img src={GH} alt='GH'></img>
							</a>
							<a href='https://www.linkedin.com/in/haozhe-zhang/'>
								<img src={LI} alt='LI'></img>
							</a>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</section>
	);
};

const sendEmail = (e) => async (dispatch) => {
	e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
	emailjs
		.sendForm('gmail', 'personal_website', e.target, userId)
		.then(() => {
			// window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
			window.location.replace(
				'https://rrrrr4788.github.io/PersonalWebsite/'
			);
			dispatch({ type: 'EMAIL_SENT' });
		})
		.catch((error) => {
			dispatch({ type: 'EMAIL_FAILURE', payload: error.text });
			console.log(error);
			alert();
		});
};

Contact.propTypes = {
	sendEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	email: state.email.email,
	subject: state.email.subject,
	message: state.email.message,
	sending: state.email.sending,
	event: state.email.event,
});

export default connect(mapStateToProps, { sendEmail })(Contact);
