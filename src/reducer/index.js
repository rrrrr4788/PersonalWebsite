import emailjs from 'emailjs-com';
import userId from '../config/id';

const initState = {
	email: '',
	subject: '',
	message: '',
};

const sendEmail = (e) => {
	e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

	emailjs.sendForm('gmail', 'personal_website', e.target, userId).then(
		(result) => {
			// window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
			window.location.replace(
				'https://rrrrr4788.github.io/PersonalWebsite/'
			);
		},
		(error) => {
			console.log(error.text);
		}
	);
};

export default function emailReducer(state = initState, action) {
	switch (action.type) {
		case 'CHANGE_STATE':
			return {
				[action.payload.target.name]: action.payload.target.value,
			};
		case 'SEND_EMAIL':
			if (
				state.message !== '' &&
				state.email !== '' &&
				state.subject !== ''
			) {
				sendEmail(action.payload);
			} else {
				alert('All fields are required.');
			}
			break;
		default:
			return state;
	}
}
