import React from 'react';
import Card from './Card';

// creating a function that accesses the robots list, then maps the robots and increments them one by one with props (id, name and email) to the Card function.
const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((user, i) => {
				return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />;
			})}
		</div>
	);
};
export default CardList;
