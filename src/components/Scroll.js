import React from 'react';

// a function that takes in props and puts them in a box that is scrollable
const Scroll = (props) => {
	return <div style={{ overflowY: 'scroll', border: '5px solid black', height: '700px' }}>{props.children}</div>;
};

export default Scroll;
