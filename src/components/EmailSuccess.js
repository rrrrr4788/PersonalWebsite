import React from 'react';
import { connect } from 'react-redux';

const EmailSuccess = () => {
	return (
		<div id='email-success'>
			<p>Thank you for your feedback!</p>
		</div>
	);
};

export default connect(null, null)(EmailSuccess);
