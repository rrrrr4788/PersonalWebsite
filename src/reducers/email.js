const initState = {
	email: '',
	subject: '',
	message: '',
	sending: false,
	event: {},
	failure: false,
	err: '',
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
