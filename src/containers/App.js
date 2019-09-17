import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//Smart components as it has state
class App extends Component {
	// setting up the state for robots and searchfield so we can display different robots when searched
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		};
	}
	// this method is called when an instance of a component is being created and inserted into the DOM
	// first it's constructor, then componentwillmount, then render and finally componentdidmount. render runs again at the end because we updated the state.
	// this function is run to fetch the users through JSONplaceholder API and changes the states of the robots to the users on the API
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	//use arrow function as normal function is not part of react. this makes sure 'this' is from the App.
	// a function that takes the event(just like dom manipulation) that passes the event.target.value to the searchfield state
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};
	render() {
		const { robots, searchfield } = this.state; //destructuring
		const filteredRobots = robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(
					searchfield.toLowerCase()
				); /* if the name fo the robots in lower case includes the string in the searchfield, return the robots true to this*/
		});
		// if the robot length is high, return loading until they load.
		return !robots.length ? ( //! means false
			<h1>Loading</h1>
		) : (
			<div className='tc'>
				<h1 className='f1'> RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}
export default App;
