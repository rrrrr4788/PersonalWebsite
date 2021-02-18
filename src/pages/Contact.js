import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

// basic imports

import FB from '../img/FB.png';
import GH from '../img/GH.png';
import LI from '../img/LI.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// components and image assets

import { sendEmail } from '../actions/sendEmail';

// import the email sending function

const Contact = ({
	email,
	subject,
	message,
	sending,
	event,
	sendEmail,
	send_success,
}) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (sending) {
			sendEmail(event);
		} else if (send_success) {
			window.location = 'https://haozhe-zhang.herokuapp.com/';
		}
	}, [sending, sendEmail, event, send_success]);

	return (
		<section className='contact'>
			<header>
				<Navbar target='Contact' />
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
							// preventDefault is used to prevent the form from causing the entire page to re-render.
							// it clears the default behaviors of the form element.
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

Contact.propTypes = {
	sendEmail: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	email: state.email.email,
	subject: state.email.subject,
	message: state.email.message,
	sending: state.email.sending,
	event: state.email.event,
	send_success: state.email.send_success,
});

export default connect(mapStateToProps, { sendEmail })(Contact);
