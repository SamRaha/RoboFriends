import React from 'react';
// a function that returns the card details (name & email). this is a pure component as it has props and it returns something
const Card = ({ name, email, id }) => {
	/* destructuring */
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			{/* tachyons */}
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			{/* robohash is the API plugin, the id increments from robot.js */}
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
