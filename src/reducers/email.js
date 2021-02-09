const initState = {
	email: '',
	subject: '',
	message: '',
	sending: false,
	event: {},
	failure: false,
	err: '',
	send_success: false,
};

export default function email(state = initState, action) {
	switch (action.type) {
		case 'CHANGE_STATE':
			return {
				...state,
				[action.payload.target.name]: action.payload.target.value,
			};
		case 'SEND_EMAIL':
			return { ...state, sending: true, event: action.payload };
		case 'EMAIL_SENT':
			return {
				...state,
				sending: false,
				send_success: true,
			};
		case 'SUCCESS_OVER':
			return {
				...state,
				send_success: false,
			};
		case 'EMAIL_FAILURE':
			return {
				...state,
				failure: true,
				err: action.payload,
			};
		default:
			return state;
	}
}
