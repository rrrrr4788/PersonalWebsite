import emailjs from 'emailjs-com';
import userId from '../config/id';

export const sendEmail = (e) => async (dispatch) => {
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
