import emailjs from 'emailjs-com';
import userId from '../config/id';

export const sendEmail = (e) => async (dispatch) => {
	e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
	emailjs
		.sendForm('gmail', 'personal_website', e.target, userId)
		.then(() => {
			dispatch({ type: 'EMAIL_SENT' });
		})
		.catch((error) => {
			dispatch({ type: 'EMAIL_FAILURE', payload: error.text });
			console.log(error);
			alert();
		});
};
