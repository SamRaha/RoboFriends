import React from 'react';
// a function that with an event passed through onChange in the search box.
const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='search robots'
				onChange={
					searchChange
				} /* // every time the onchange event is triggered, call the searchChange function  */
			/>
		</div>
	);
};

export default SearchBox;
